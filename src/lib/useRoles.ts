/* eslint-disable max-classes-per-file */
import { useCallback, useEffect, useState } from 'react';

import { Session, useSession } from 'next-auth/client';

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

export class RolesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class RolesException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
export type UIOrganisation = {
  id: string;
  name: string;
  roles: Array<Role>;
};
export type UIOrganisationsMap = Record<string, UIOrganisation>;

type AccessPolicy = {
  role: Role;
  roles: { global: Array<Role>; organisational: Array<Role>; all: Array<Role> };
  organisationId?: string;
  organisation?: UIOrganisation;
  headers: Record<string, string>;
  organisationsMap: UIOrganisationsMap;
};

const createOrganisationsMap = (
  user: StrippedNextAuthUserFragment
): UIOrganisationsMap => {
  return user.organisations?.reduce<UIOrganisationsMap>(
    (newOrganisations, userOrganisation) => {
      const organisationId = userOrganisation.organisation?.id;
      const organisationName = userOrganisation.organisation?.name;
      const allowedOrganisationalRoles = allRoles.filter(
        anyRole => userOrganisation[anyRole]
      );
      if (organisationId) {
        return {
          ...newOrganisations,
          [organisationId]: {
            id: organisationId,
            name: organisationName ?? organisationId,
            roles: allowedOrganisationalRoles
          }
        };
      }
      return newOrganisations;
    },
    {}
  );
};
// eslint-disable-next-line import/prefer-default-export
export const useXXXRoles = (): [
  Session | null | undefined,
  boolean,

  AccessPolicy,
  (_mekker: Partial<AccessPolicy>) => void
  // Dispatch<SetStateAction<Mekker>>
] => {
  // const [userId, setUserId] = useState<string | undefined>();
  const [accessPolicy, setRole] = useState<AccessPolicy>();
  const sessionResult = useSession();
  const [session, isLoading] = sessionResult;
  const ctoaPolicy: CTOAPolicy = session?.[CTOA_NAMESPACE];
  let newOrganisationsMap: UIOrganisationsMap;

  let initialRole: Role;
  let user: StrippedNextAuthUserFragment;
  if (ctoaPolicy) {
    user = decodeCTAClaims(ctoaPolicy);
    if (user) {
      if (!accessPolicy?.role) {
        initialRole = user?.admin ? ADMIN : USER;
      }

      newOrganisationsMap = createOrganisationsMap(user);

      // do we haven an organisationId ?
    } else {
      console.warn('Missing user');
    }
  }

  const setRoleExternal = useCallback(
    (newMekker: Partial<AccessPolicy>) => {
      const { role, organisationId } = newMekker;
      try {
        const allowedGlobalRoles: Array<Role> = [];
        let allowedOrganisationalRoles: Array<Role> = [];
        if (!role) {
          throw new RolesException(
            `Expected 'role' know in global roles (${globalRoles.join(
              ', '
            )}) or in organisation roles (${organisationRoles.join(
              ', '
            )}), but got none.`
          );
        }
        let newRole: Role;
        let newOrganisationId: string;
        // if role is a global role, unset organisationId if set
        // if role is an organisational role
        // - make sure organisationId is set
        // - make sure role exists on organisations
        // const newRole = mekker?.role;
        if (!allRoles.includes(role)) {
          throw new RolesException(
            `Got role (${role}), but this role is not know to global roles (${globalRoles.join(
              ', '
            )}) or organisation roles (${organisationRoles.join(', ')})`
          );
        } else {
          allowedGlobalRoles.push(USER);
          if (user?.admin) {
            allowedGlobalRoles.push(ADMIN);
          }
        }
        if (globalRoles.includes(role)) {
          if (!allowedGlobalRoles.includes(role)) {
            throw new RolesException(
              `Got role '${role}', but this role is not know to the allowed user roles (${allowedGlobalRoles.join(
                ', '
              )})`
            );
          }

          newRole = role;

          // check allowed roles
          // if not, send a warning, and fall back
        } else if (organisationRoles.includes(role)) {
          // now we can expect an organisationId
          if (!organisationId) {
            throw new RolesException(
              `Got role ${role}, and expected 'organisationId', but got none.`
            );
          }
          // find organisation
          const someOrganisation = newOrganisationsMap[organisationId];
          if (!someOrganisation) {
            throw new RolesException(
              `Get organisationId (${organisationId}), but it can not be found among user organisation ids (${Object.keys(
                newOrganisationsMap
              ).join(', ')})`
            );
          }
          allowedOrganisationalRoles = [...(someOrganisation?.roles || [])];
          newOrganisationId = organisationId;
          newRole = role;
        }
        setRole({
          ...accessPolicy,
          headers: {
            ...accessPolicy?.headers,
            [CTOA_ORGANISATION_ID_CLAIM]: newOrganisationId,
            [CTOA_ROLE_CLAIM]: newRole,
            [CTOA_USER_ID_CLAIM]: user?.id
          },
          organisationId: newOrganisationId,
          organisationsMap: newOrganisationsMap,
          role: newRole,
          roles: {
            all: [...allowedGlobalRoles, ...allowedOrganisationalRoles],
            global: allowedGlobalRoles,
            organisational: allowedOrganisationalRoles
          }
        });
      } catch (e) {
        if (e instanceof RolesException) {
          console.warn(e.message);
        } else {
          throw e;
        }
      }
    },
    [accessPolicy, newOrganisationsMap, user?.admin, user?.id]
  );

  useEffect(() => {
    if (initialRole) {
      setRoleExternal({ role: initialRole });
    }
  }, [initialRole, setRoleExternal]);
  return [session, isLoading, accessPolicy, setRoleExternal];
};

/*
import { useState } from 'react';

import { Session, useSession } from 'next-auth/client';

import { Role } from './roles';

type Mekker = {
  role: Role;
  organisationId?: string;
};
// eslint-disable-next-line import/prefer-default-export
export const useXXXRoles = (): [
  Session | null | undefined,
  boolean,
  string | undefined,
  (_newString: string) => void,
  Mekker,
  (_mekker: Partial<Mekker>) => void
] => {
  // const [userId, setUserId] = useState<string | undefined>();
  const [role, setRole] = useState<string>();
  const [organisationId, setOrganisationId] = useState<string>();
  const sessionResult = useSession();
  const [session, isLoading] = sessionResult;

  const setMekkerInternal = (newMekker: Partial<Mekker>) => {
    const { role: newRole, organisationId: newOrganisationId } = newMekker;
    if (newRole) {
      setRole(newRole);
    }
    if (newOrganisationId) {
      setOrganisationId(newOrganisationId);
    }
  };
  return [
    session,
    isLoading,
    role,
    setRole,
    { organisationId, role: role as Role },
    setMekkerInternal
  ];
};


*/
