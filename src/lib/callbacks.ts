import { GraphQLClient } from 'graphql-request';
import jsonwebtoken, { Algorithm } from 'jsonwebtoken';

import {
  GetAnyUserByEmailDocument,
  GetAnyUserByEmailQuery,
  GetAnyUserByEmailQueryVariables
} from './graphql/generated/auth';
import { encodeCTAClaims } from './hasura';
import log from './logger';
import { CTOA_NAMESPACE } from './roles';

const signingAlgorithm: Algorithm = (process.env.SIGNING_ALGORITHM ||
  'HS256') as Algorithm;

const client = new GraphQLClient(process.env.HASURA_GRAPHQL_URL, {
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
  }
});

export const signIn = async (user, account, profile) => {
  // console.log('-- callbacks.signIn', user, account, profile);
  log.deep('callbacks.signIn', { user, account, profile });
  const data = await client.request<
    GetAnyUserByEmailQuery,
    GetAnyUserByEmailQueryVariables
  >(GetAnyUserByEmailDocument, {
    email: user.email
  });

  const foundUser = data?.users?.length ? data.users[0] : null;
  if (foundUser) {
    console.log('FOUND ONE');
  }
  return !!foundUser;
};
export const session = async (sess, token) => {
  // console.log('-- callbacks.session', token);
  log('callbacks.session', { sess, token });
  const encodedToken = jsonwebtoken.sign(token, process.env.SECRET, {
    algorithm: signingAlgorithm
  });

  // console.log('token', token, decodeClaims(token));
  return Promise.resolve({
    admin: token.admin,
    [CTOA_NAMESPACE]: token[CTOA_NAMESPACE],
    ...sess,
    user: {
      ...sess?.user,
      ...token?.user,
      image: token.image
      // [hasuraNamespace]: token[hasuraNamespace]
    },
    id: token.id,
    token: encodedToken
  });
};

export const jwt = async (token, user, account, profile, isNewUser) => {
  // console.log('-- callbacks.jwt', { token, user });
  log('callbacks.jwt', { token, user, account, profile, isNewUser });
  const isUserSignedIn = !!user;
  // make a http call to our graphql api
  // store this in postgres

  const cta = user ? encodeCTAClaims(user) : token[CTOA_NAMESPACE];

  return Promise.resolve({
    admin: user?.admin || token?.admin,
    [CTOA_NAMESPACE]: cta,
    ...token,
    image: token?.image || user?.image,

    // [hasuraNamespace]: token[hasuraNamespace] || user[hasuraNamespace],
    id: isUserSignedIn ? user.id.toString() : undefined
  });
};

export default { session, jwt };
