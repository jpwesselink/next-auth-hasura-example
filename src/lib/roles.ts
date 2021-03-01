/* eslint-disable no-bitwise */

export const USER = 'user';
export const ADMIN = 'admin';
export const ORGANISATION_ADMIN = 'organisationAdmin';
export const ORGANISATION_USER = 'organisationUser';
export const OTIS_ADMIN = 'otisAdmin';
export const OTIS_USER = 'otisUser';
export const QUESTIONNAIRE_ADMIN = 'questionnaireAdmin';
export const QUESTIONNAIRE_USER = 'questionnaireUser';
export const QOLLABOR_ADMIN = 'qollaborAdmin';
export const QOLLABOR_USER = 'qollaborUser';
export const CTOA_NAMESPACE = 'http://cta.nl/claims';

export const CTOA_ROLES_TUPLE = 'r';
export const CTOA_ORGANISATION_NAME = 'n';
export const CTOA_USER_ID = 'u' as const;
export const CTOA_USER_UUID = 'cu' as const;
export const CTOA_ORGANISATIONS_POLICIES = 'o' as const;
export const CTOA_ORGANISATION_ROLES_TUPLE = 'r' as const;

export const CTOA_USER_ID_CLAIM = 'userId';
export const CTOA_ORGANISATION_ID_CLAIM = 'organisationId';
export const CTOA_ROLE_CLAIM = 'role';
// Whatever you do, do not change the order of this array
// If you want to add a role, add it at the end
export const roleDescriptions = {
  [ADMIN]: 'Administrator',
  [USER]: 'User',
  [ORGANISATION_ADMIN]: 'Organisation administrator',
  [ORGANISATION_USER]: 'Organisation user',
  [OTIS_ADMIN]: 'OTIS administrator',
  [OTIS_USER]: 'OTIS user',
  [QUESTIONNAIRE_ADMIN]: 'Questionnaire administrator',
  [QUESTIONNAIRE_USER]: 'Questionnaire user',
  [QOLLABOR_ADMIN]: 'Qollabor administrator',
  [QOLLABOR_USER]: 'Qollabor user'
} as const;

export type Role = keyof typeof roleDescriptions;

export const allRoles: Array<Role> = Object.keys(
  roleDescriptions
) as Array<Role>;

export const globalRoles: Array<Role> = [USER, ADMIN];

export const organisationRoles: Array<Role> = allRoles.filter(
  anyRole => !globalRoles.includes(anyRole)
);

export const getRoleDescription = (role: Role): string => {
  return roleDescriptions[role] || role;
};

export type DecodedToken = {
  sub: string;
  [CTOA_NAMESPACE]: CTOAPolicy;
};
export type CTOAOrganisationsBitmaps = {
  [key: string]: {
    [CTOA_ORGANISATION_NAME]: string;
    [CTOA_ORGANISATION_ROLES_TUPLE]: [number, number];
  };
};

export type CTOAPolicy = {
  [CTOA_ROLES_TUPLE]: [number, number];
  [CTOA_USER_ID]: string;
  [CTOA_USER_UUID]: string;
  [CTOA_ORGANISATIONS_POLICIES]: CTOAOrganisationsBitmaps;
};

export const encodeBitmap = (...args: Array<Role>) => {
  return args.reduce((bits, role) => {
    const index = allRoles.indexOf(role);
    if (index !== -1) {
      const add = 2 ** index;
      return bits + add;
    }
    return bits;
  }, 0);
};

export const decodeBitmap = (mask: number): Array<Role> => {
  return allRoles.reduce((roles, role, index) => {
    const bit = 2 ** index;
    if ((mask & bit) === bit) {
      return [...roles, role];
    }
    return roles;
  }, [] as Array<Role>);
};

export const roleToBit = (role: Role): number => {
  const index = allRoles.indexOf(role);
  if (index !== -1) {
    return 2 ** index;
  }
  return 0;
};

export const bitToRole = (bit: number): Role | undefined => {
  const index = Math.log2(bit);
  if (allRoles.length > index) {
    return allRoles[index];
  }
  return undefined;
};
