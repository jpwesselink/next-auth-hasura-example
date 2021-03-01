import { useEffect, useState } from 'react';

import { Session, useSession } from 'next-auth/client';

import { arrayFirst } from './array-utils';
import { StrippedNextAuthUserFragment, decodeCTAClaims } from './hasura';
import {
  ADMIN,
  allRoles,
  CTOAPolicy,
  CTOA_NAMESPACE,
  CTOA_ORGANISATION_ID_CLAIM,
  CTOA_ROLE_CLAIM,
  CTOA_USER_ID_CLAIM,
  globalRoles,
  organisationRoles,
  Role,
  USER
} from './roles';

export type UIOrganisation = {
  name: string;
  roles: Array<Role>;
};
export type UIOrganisationsMap = Record<string, UIOrganisation>;
export type Harry = {
  admin: boolean;
  globalRoles: Array<Role>;
  roles: Array<Role>;
  firstOrganisationId?: string;
  organisationId?: string;
  userId: string;
  role: Role;
  organisationsMap: UIOrganisationsMap;
  hasRole: (role: Role, organisationId?: string) => boolean;
  headers: Record<string, string | Array<string>>;
};
// eslint-disable-next-line import/prefer-default-export
export const useRoles = (): [Session | null | undefined, boolean] => {
  // const [userId, setUserId] = useState<string | undefined>();

  const sessionResult = useSession();
  const [session, isLoading] = sessionResult;
  const ctoaPolicy: CTOAPolicy = session?.[CTOA_NAMESPACE];

  const [harry, setHarry] = useState<Harry>({
    admin: false,
    globalRoles: [],
    hasRole: (_role: Role, _organisationId?: string) => false,
    headers: {},
    organisationsMap: {},
    role: undefined,
    roles: [],
    userId: undefined
  });

  useEffect(() => {
    if (ctoaPolicy) {
      console.log('AND AGAIN');
      const user: StrippedNextAuthUserFragment = decodeCTAClaims(ctoaPolicy);
      // do we have a user Id
      const newUserId = harry?.userId || user.id;
      const admin = user?.admin;
      let role: Role = harry?.role || USER;
      const organisationIds = user.organisations.map(
        userOrganisation => userOrganisation.organisation.id
      );
      let newOrganisationId;
      const globalRoles: Array<Role> = [USER];
      if (admin) {
        globalRoles.push(ADMIN);
      }

      if (!role) {
        if (admin) {
          role = ADMIN;
        } else {
          role = USER;
        }
      }

      if (globalRoles.includes(role)) {
        // set organisationId to undefined
        newOrganisationId = undefined;
        // role = roles[roles.length - 1];
      } else {
        newOrganisationId = harry?.organisationId;
      }
      const newOrganisationsMap: UIOrganisationsMap = user.organisations.reduce<UIOrganisationsMap>(
        (newOrganisations, userOrganisation) => {
          const organisationId = userOrganisation.organisation?.id;
          const organisationName = userOrganisation.organisation?.name;
          const organisationRoles = allRoles.filter(
            anyRole => userOrganisation[anyRole]
          );
          if (organisationId) {
            return {
              ...newOrganisations,
              [organisationId]: {
                name: organisationName ?? organisationId,
                roles: organisationRoles
              }
            };
          }
          return newOrganisations;
        },
        {}
      );

      const firstOrganisationId = arrayFirst(organisationIds);
      const roles = [
        ...globalRoles,
        ...(newOrganisationsMap?.[newOrganisationId]?.roles || [])
      ];

      const hasRole = (role, organisationId) => {
        if (organisationId) {
          return newOrganisationsMap?.[organisationId]?.roles?.includes(role);
        }
        return globalRoles?.includes(role);
      };

      setHarry({
        admin,
        firstOrganisationId,
        globalRoles,
        hasRole,
        headers: {
          [CTOA_ORGANISATION_ID_CLAIM]: newOrganisationId,
          [CTOA_ROLE_CLAIM]: role,
          [CTOA_USER_ID_CLAIM]: newUserId
        },
        organisationId: newOrganisationId,
        organisationsMap: newOrganisationsMap,
        role,
        roles,
        userId: newUserId
      });
    }
  }, [ctoaPolicy, harry?.organisationId, harry?.role, harry?.userId]);

  const setHarryExternal = (newHarry: {
    organisationId?: string;
    role?: Role;
  }) => {
    const role = newHarry?.role;
    const organisationId = newHarry?.organisationId;
    let newRole: Role = role;
    if (role && globalRoles.includes(role)) {
      // if (harry.admin) {
      newRole = role;
      // }
    } else if (role && organisationRoles.includes(role)) {
      const newOrganisationId =
        organisationId ?? harry.organisationId ?? harry.firstOrganisationId;

      if (newOrganisationId) {
        const organisation = harry.organisationsMap[newOrganisationId];
        const { roles } = organisation;
        if (roles && !roles.includes(role)) {
          newRole = arrayFirst(roles);
        } else if (!roles) {
          // brrr, this is broken
          newRole = USER;
        }
      }
    }
    setHarry({ ...harry, ...newHarry, role: newRole });
  };

  return [
    {
      harry,
      setHarry: setHarryExternal,
      // setOrganisationAndRole,
      ...session
      // setRole: setRoleExternal
      // setOrganisation: setOrganisationExternal,
    },
    isLoading
  ];
};
