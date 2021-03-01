import { createHash } from 'crypto';

import { GraphQLClient } from 'graphql-request';
import { AppOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';

import {
  CreateUserDocument,
  CreateAccountDocument,
  GetUserProviderByAccountIdDocument,
  GetUserByEmailDocument
} from './graphql/generated/auth';
import log from './logger';

type HasuraUser = {
  name: string;
  email: string;
};
const hasuraAdapter = (
  config: { hasuraGraphQLUrl: string },
  _options = {}
): Adapter<HasuraUser> => {
  // log('hasura-adapter.hasuraAdapter', { config, options });
  const { hasuraGraphQLUrl } = config;
  const client = new GraphQLClient(hasuraGraphQLUrl, {
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
    }
  });

  async function getAdapter(_appOptions: AppOptions) {
    // log('hasura-adapter.getAdapter', { _appOptions });
    async function createUser(profile): Promise<HasuraUser> {
      log('hasura-adapter.createUser', { profile });

      const { name, email, image } = profile;
      const data = await client.request(CreateUserDocument, {
        name,
        email,
        image
      });

      const user = data?.insert_users_one || null;
      if (user) {
        return {
          ...user,
          fromCreateUser: true
        };
      }
      return null;
    }

    async function getUser(id: string): Promise<HasuraUser> {
      log('hasura-adapter.getUser', { id });
      return null;
    }

    async function getUserByEmail(email: string): Promise<HasuraUser> {
      const data = await client.request(GetUserByEmailDocument, { email });

      const user = data?.users?.length ? data.users[0] : null;
      log('hasura-adapter.getUserByEmail', { user, email });
      if (user) {
        return {
          ...user,
          fromGetUserByEmail: true
        };
      }
      return null;
    }

    async function getUserByProviderAccountId(
      providerId: string,
      providerAccountId: string
    ) {
      const data = await client.request(GetUserProviderByAccountIdDocument, {
        providerId,
        providerAccountId
      });

      const user = data?.users?.length ? data.users[0] : null;
      log('hasura-adapter.getUserByProviderAccountId', {
        providerId,
        providerAccountId,
        user
      });

      if (user) {
        return {
          ...user,
          fromGetUserByProviderAccountId: true
        };
      }

      return null;
    }

    async function getUserByCredentials(credentials) {
      log('hasura-adapter.getUserByCredentials', { credentials });

      return null;
    }

    async function updateUser(user) {
      log('hasura-adapter.updateUser', { user });

      return null;
    }

    async function deleteUser(userId) {
      log('hasura-adapter.deleteUser', { userId });
      return null;
    }

    async function linkAccount(
      userId,
      providerId,
      providerType,
      providerAccountId,
      refreshToken,
      accessToken,
      accessTokenExpires
    ) {
      log('hasura-adapter.linkAccount', {
        userId,
        providerId,
        providerType,
        providerAccountId,
        refreshToken,
        accessToken,
        accessTokenExpires
      });
      const compoundId = createHash('sha256')
        .update(`${providerId}:${providerAccountId}`)
        .digest('hex');

      const data = await client.request(CreateAccountDocument, {
        userId,
        providerId,
        providerType,
        providerAccountId,
        refreshToken,
        accessToken,
        accessTokenExpires,
        compoundId
      });
      const account = data?.insert_accounts_one || null;
      return account;
    }

    async function unlinkAccount(userId, providerId, providerAccountId) {
      log('hasura-adapter.unlinkAccount', {
        userId,
        providerId,
        providerAccountId
      });
      return null;
    }

    async function createSession(user) {
      log('hasura-adapter.createSession', {
        user
      });
      return null;
    }

    async function getSession(sessionToken) {
      log('hasura-adapter.getSession', {
        sessionToken
      });
      return null;
    }

    async function updateSession(session, force) {
      log('hasura-adapter.updateSession', {
        session,
        force
      });
      return null;
    }

    async function deleteSession(sessionToken) {
      log('hasura-adapter.deleteSession', {
        sessionToken
      });
      return null;
    }

    async function createVerificationRequest(
      identifier,
      url,
      token,
      secret,
      provider
    ) {
      log('hasura-adapter.createVerificationRequest', {
        identifier,
        url,
        token,
        secret,
        provider
      });
      return null;
    }

    async function getVerificationRequest(identifier, token, secret, provider) {
      log('hasura-adapter.getVerificationRequest', {
        identifier,
        token,
        secret,
        provider
      });
      return null;
    }

    async function deleteVerificationRequest(
      identifier,
      token,
      secret,
      provider
    ) {
      log('hasura-adapter.deleteVerificationRequest', {
        identifier,
        token,
        secret,
        provider
      });
      return null;
    }

    return {
      createUser,
      getUser,
      getUserByEmail,
      getUserByProviderAccountId,
      getUserByCredentials,
      updateUser,
      deleteUser,
      linkAccount,
      unlinkAccount,
      createSession,
      getSession,
      updateSession,
      deleteSession,
      createVerificationRequest,
      getVerificationRequest,
      deleteVerificationRequest
    };
  }

  return {
    getAdapter
  };
};

export default {
  Adapter: hasuraAdapter
};
