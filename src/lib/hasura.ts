import {
  CTAMissingClaimError,
  CTAMissingDataError,
  CTAHttpError,
  CTAWrongClaimError,
  CTAError
} from './errors';
import { NextAuthUserFragment } from './graphql/generated/auth';
import {
  ADMIN,
  allRoles,
  bitToRole,
  CTOAOrganisationsBitmaps,
  CTOAPolicy,
  CTOA_ORGANISATIONS_POLICIES,
  CTOA_ORGANISATION_NAME,
  CTOA_ORGANISATION_ROLES_TUPLE,
  CTOA_ROLES_TUPLE,
  CTOA_USER_UUID,
  decodeBitmap,
  encodeBitmap,
  globalRoles,
  organisationRoles,
  ORGANISATION_ADMIN,
  ORGANISATION_USER,
  OTIS_ADMIN,
  OTIS_USER,
  QOLLABOR_ADMIN,
  QOLLABOR_USER,
  QUESTIONNAIRE_ADMIN,
  QUESTIONNAIRE_USER,
  Role,
  roleToBit,
  USER
} from './roles';

export const HASURA_ALLOWED_ROLES_CLAIM = 'x-hasura-allowed-roles';
export const HASURA_ROLE_CLAIM = 'x-hasura-role';
export const HASURA_DEFAULT_ROLE_CLAIM = 'x-hasura-default-role';
export const HASURA_USER_ID_CLAIM = 'x-hasura-user-id';
export const HASURA_ORGANISATION_ID_CLAIM = 'x-hasura-organisation-id';

let _hasuraNamespace = 'https://hasura.io/jwt/claims';

export const getHasuraNamespace = () => _hasuraNamespace;
export type StrippedNextAuthUserFragment = Omit<
  NextAuthUserFragment,
  'name' | '__typename' | 'email' | 'image'
>;

export const setHasuraNamespace = (hasuraNamespace: string) => {
  if (hasuraNamespace) {
    _hasuraNamespace = hasuraNamespace;
  }
};

export type HasuraStandardClaims = {
  allowedRoles: Array<string>;
  defaultRole: string;
  role?: string;
  userId?: string;
} & Record<string, unknown>;

export type HasuraTokenClaims = {
  [HASURA_ALLOWED_ROLES_CLAIM]: Array<string>;
  [HASURA_DEFAULT_ROLE_CLAIM]: string;
  [HASURA_ROLE_CLAIM]?: string;
  [HASURA_USER_ID_CLAIM]?: string;
} & Record<string, unknown>;

export const decodeClaims = (
  token: Record<string, unknown>
): HasuraStandardClaims => {
  const claims = token[_hasuraNamespace] as HasuraTokenClaims;
  if (!claims) {
    throw new Error(
      `Expected a Hasura namespace (${_hasuraNamespace}), but found none`
    );
  }
  const {
    [HASURA_ALLOWED_ROLES_CLAIM]: allowedRoles,
    [HASURA_DEFAULT_ROLE_CLAIM]: defaultRole,
    [HASURA_ROLE_CLAIM]: role,
    [HASURA_USER_ID_CLAIM]: userId
  } = claims;

  //   const allowedRoles = claims[HASURA_ALLOWED_ROLES_CLAIM];

  const missingClaims = [];

  if (!defaultRole) {
    missingClaims.push(HASURA_DEFAULT_ROLE_CLAIM);
  }
  if (!allowedRoles) {
    missingClaims.push(HASURA_ALLOWED_ROLES_CLAIM);
  }
  if (missingClaims.length > 0) {
    throw new Error(`Missing claim: ${missingClaims.join(', ')}`);
  }

  return {
    allowedRoles,
    defaultRole,
    role,
    userId
  };
};

export const encodeClaims = ({
  allowedRoles,
  defaultRole,
  role,
  userId,
  ...other
}: Partial<HasuraStandardClaims>): Record<string, HasuraTokenClaims> => {
  return {
    [_hasuraNamespace]: {
      [HASURA_ALLOWED_ROLES_CLAIM]: allowedRoles,
      [HASURA_DEFAULT_ROLE_CLAIM]: defaultRole,
      [HASURA_ROLE_CLAIM]: role,
      [HASURA_USER_ID_CLAIM]: userId,
      ...other
    }
  };
};

export const encodeGlobalHasuraClaims = ({
  user,
  organisationId,
  role
}: {
  user: StrippedNextAuthUserFragment;
  organisationId?: string;
  role?: Role;
}): Record<string, HasuraTokenClaims> => {
  const { admin, id: userId } = user;

  const allowedRoles = [USER];
  let defaultRole = USER;
  let other = {};

  if (admin) {
    allowedRoles.push(ADMIN);

    if (role && !allowedRoles.includes(role)) {
      throw new CTAWrongClaimError(role);
    }

    defaultRole = role || ADMIN;

    if (organisationId) {
      other = { ...other, [HASURA_ORGANISATION_ID_CLAIM]: organisationId };
    }
  }

  return encodeClaims({ allowedRoles, defaultRole, role, userId, ...other });
};
export const encodeOrganisationalHasuraClaims = ({
  user,
  organisationId,
  role
}: {
  user: StrippedNextAuthUserFragment;
  organisationId?: string;
  role?: Role;
}): Record<string, HasuraTokenClaims> => {
  const { organisations: userOrganisations, id: userId } = user;

  const allowedRoles: Array<Role> = [USER];
  if (user.admin) {
    allowedRoles.push(ADMIN);
  }
  let defaultRole = ORGANISATION_USER;
  let other = {};

  if (!organisationId) {
    throw new CTAError(`Expected organisationId`);
  }
  other = { ...other, [HASURA_ORGANISATION_ID_CLAIM]: organisationId };
  const userOrganisation = userOrganisations.find(
    someUserOrganisation =>
      someUserOrganisation?.organisation?.id === organisationId
  );
  if (!userOrganisation) {
    throw new CTAMissingDataError(`organisationId ${organisationId} not found`);
  }

  allRoles.forEach(ctoaRole => {
    if (userOrganisation[ctoaRole]) {
      allowedRoles.push(ctoaRole);
    }
  });

  if (role) {
    if (!allowedRoles.includes(role)) {
      throw new CTAError(
        `Role ${role} is not in allowed roles ${allowedRoles.join(',')}`
      );
    }
    defaultRole = role;
  }

  return encodeClaims({ allowedRoles, defaultRole, role, userId, ...other });
};

export const encodeHasuraClaims = ({
  user,
  organisationId,
  role
}: {
  user: StrippedNextAuthUserFragment;
  organisationId?: string;
  role?: Role;
}): Record<string, HasuraTokenClaims> => {
  const { admin } = user;
  console.log('encodeHasuraClaims', {
    allRoles,
    globalRoles,
    organisationRoles,
    organisationId,
    role,
    admin,
    userId: user?.id
  });
  if (!role) {
    return encodeGlobalHasuraClaims({ user, role: admin ? ADMIN : USER });
  }
  if (globalRoles.includes(role)) {
    return encodeGlobalHasuraClaims({ user, role });
  }
  if (organisationRoles.includes(role)) {
    return encodeOrganisationalHasuraClaims({ user, role, organisationId });
  }
};

export const encodeCTAClaims = (user: StrippedNextAuthUserFragment) => {
  const baseRoles: Array<Role> = [USER];
  const { admin, organisations: userOrganisations = [] } = user;
  if (admin) {
    baseRoles.push(ADMIN);
  }
  const organisationsBitmaps = userOrganisations.reduce<CTOAOrganisationsBitmaps>(
    (orgBitmaps, userOrganisation) => {
      const {
        organisationAdmin,
        otisUser,
        otisAdmin,
        questionnaireAdmin,
        questionnaireUser,
        qollaborAdmin,
        qollaborUser,
        organisation: { id: organisationId, name: organisationName }
      } = userOrganisation;
      const organisationBitmap: Array<Role> = [ORGANISATION_USER];
      organisationBitmap.push(ORGANISATION_USER);
      if (organisationAdmin) {
        organisationBitmap.push(ORGANISATION_ADMIN);
      }

      if (otisAdmin) {
        organisationBitmap.push(OTIS_ADMIN);
      }
      if (otisUser) {
        organisationBitmap.push(OTIS_USER);
      }
      if (questionnaireAdmin) {
        organisationBitmap.push(QUESTIONNAIRE_ADMIN);
      }
      if (questionnaireUser) {
        organisationBitmap.push(QUESTIONNAIRE_USER);
      }
      if (qollaborAdmin) {
        organisationBitmap.push(QOLLABOR_ADMIN);
      }
      if (qollaborUser) {
        organisationBitmap.push(QOLLABOR_USER);
      }
      let defaultRole: Role = ORGANISATION_USER;
      if (organisationBitmap.indexOf(ORGANISATION_ADMIN) !== -1) {
        defaultRole = ORGANISATION_ADMIN;
      }

      return {
        ...orgBitmaps,
        [organisationId]: {
          n: organisationName,
          r: [roleToBit(defaultRole), encodeBitmap(...organisationBitmap)]
        }
      };
    },
    {}
  );

  const defaultRole = baseRoles.indexOf(ADMIN) !== -1 ? ADMIN : USER;
  const cta: CTOAPolicy = {
    r: [roleToBit(defaultRole), encodeBitmap(...baseRoles)],
    u: user.id,
    cu: user.id,
    o: organisationsBitmaps
  };
  return cta;
};

export const decodeCTAClaims = (
  ctoaPolicy: CTOAPolicy,
  ctoaRole?: Role
): StrippedNextAuthUserFragment => {
  const rolesTuple = ctoaPolicy[CTOA_ROLES_TUPLE];
  const userId = ctoaPolicy[CTOA_USER_UUID];
  if (!rolesTuple) {
    throw new CTAMissingClaimError(CTOA_ROLES_TUPLE);
  }
  const [defaultBit, rolesBitmap] = rolesTuple;

  if (!defaultBit) {
    throw new CTAMissingDataError(`defaultBit in ${CTOA_ROLES_TUPLE}[0]`);
  }
  if (!rolesBitmap) {
    throw new CTAMissingDataError(`rolesBitmap in ${CTOA_ROLES_TUPLE}[1]`);
  }

  const defaultRole = bitToRole(defaultBit);

  if (!defaultRole) {
    throw new CTAMissingDataError(`defaultRole is not defined`);
  }
  const allowedRoles = decodeBitmap(rolesBitmap);
  if (!allowedRoles) {
    throw new CTAMissingDataError(`allowedRoles is not defined`);
  }

  // if the role header is not set, we take the default one
  const applicationRole = ctoaRole || defaultRole;
  if (!applicationRole) {
    throw new CTAHttpError('No valid role found', 400);
  }

  const organisationsBitmaps = ctoaPolicy[CTOA_ORGANISATIONS_POLICIES];

  // once again, no policies, no service, in this case we expect it to be here, so we throw
  // a missing claim error
  if (!organisationsBitmaps) {
    throw new CTAMissingClaimError(CTOA_ORGANISATIONS_POLICIES);
  }

  const fff = Object.keys(organisationsBitmaps).reduce(
    (organisations, organisationId) => {
      const organisationBitmaps = organisationsBitmaps[organisationId];
      const organisationName = organisationBitmaps[CTOA_ORGANISATION_NAME];
      const organisationRolesTuple =
        organisationBitmaps[CTOA_ORGANISATION_ROLES_TUPLE];
      if (!organisationRolesTuple) {
        throw new CTAMissingClaimError(CTOA_ORGANISATION_ROLES_TUPLE);
      }

      const [
        organisationDefaultBit,
        organisationRolesBitmap
      ] = organisationRolesTuple;

      const organisationDefaultRole = bitToRole(organisationDefaultBit);
      const organisationAllowedRoles = decodeBitmap(organisationRolesBitmap);

      if (!organisationDefaultRole) {
        throw new CTAMissingDataError(
          `organisationDefaultRole in ${CTOA_ORGANISATION_ROLES_TUPLE}[0]`
        );
      }
      if (!organisationAllowedRoles) {
        throw new CTAMissingDataError(
          `organisationAllowedRoles in ${CTOA_ORGANISATION_ROLES_TUPLE}[1]`
        );
      }

      const organisationAllowedRolesObject = organisationAllowedRoles.reduce(
        (rolesObject, allowedRole) => {
          return { ...rolesObject, [allowedRole]: true };
        },
        {}
      );
      return [
        ...organisations,

        {
          ...organisationAllowedRolesObject,
          organisation: { id: organisationId, name: organisationName }
        }
      ];
    },
    []
  );

  return {
    id: userId,
    admin: allowedRoles.includes(ADMIN),
    organisations: fff
  };
};
