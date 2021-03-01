import { NextApiRequest, NextApiResponse } from 'next';

import jwt, { Algorithm } from 'jsonwebtoken';

import { flattenFirst } from '@/lib/array-utils';
import {
  StrippedNextAuthUserFragment,
  decodeCTAClaims,
  encodeHasuraClaims
} from '@/lib/hasura';
import { CTOAPolicy, CTOA_NAMESPACE, Role } from '@/lib/roles';

import { getToken } from '../../lib/jwt';

const signingAlgorithm = (process.env.SIGNING_ALGORITHM ||
  'HS256') as Algorithm;

const HASURA_GRAPHQL_JWT_SECRET =
  '/mBHfNju3ZP0lth6lbzIztFG8+fyUnfZgr+wUjG9fdo6UJG2N3UUS1KIFjMYo+6IZKuN+Gta1E6r+aDzU9BxJ1DfrKl1UfbPwxdrVJGa3T4sI8r/2sWcTjlzA89LeCrwQ14Wf96HF/TuMzi1VijluAfR52jPof8nAELRUKQXWsTKsxj+N5ot3Q1EZNKci4jnlJjlN+UUAj9TqHAKGSTJnGnKXT3upR/bBPySrg==';
const JWT_EXPIRE_TIME = '180m';

function generateJWT({ allowedRoles, defaultRole, otherClaims }) {
  const payload = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': allowedRoles,
      'x-hasura-default-role': defaultRole,
      ...otherClaims
    }
  };
  return jwt.sign(payload, HASURA_GRAPHQL_JWT_SECRET, {
    algorithm: 'HS512',
    expiresIn: JWT_EXPIRE_TIME
  });
}

export const pickFirst = (
  value: string | string[] | undefined
): string | undefined => (Array.isArray(value) ? value[0] : value);
/**
 * A proxy that lets you communicate with Hasura using the session cookie
 * that is assigned to you from the browser/Auth0
 *
 * - https://jwt.io/#debugger-io
 * - https://hasura.io/docs/1.0/graphql/manual/guides/integrations/auth0-jwt.html#guides-auth0-jwt
 * - https://api.example.test/console/api-explorer
 */

const gqlURL = process.env.HASURA_GRAPHQL_URL;
const secret = process.env.SECRET;
const hasuraSecret = process.env.HASURA_SECRET;

// const logHeaders = process.env.HASURA_LOG_HEADERS || 'false';
// 'next-auth.session-token
export default async function graphql(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (gqlURL == null) throw new Error('HASURA_GRAPHQL_URL is missing');
    if (req.method !== 'POST') {
      res.status(404);
      return;
    }

    const ctoaToken = await getToken({ req, secret });

    const ctoaPolicy: CTOAPolicy = ctoaToken[CTOA_NAMESPACE];
    let allHasuraClaims;
    let user: StrippedNextAuthUserFragment;
    if (ctoaPolicy) {
      user = decodeCTAClaims(ctoaPolicy);
      allHasuraClaims = encodeHasuraClaims({
        user,
        organisationId: flattenFirst(req.headers.organisationid),
        role: flattenFirst(req.headers.role) as Role
      });
      console.log(
        '🚀 ~ file: graphql.ts ~ line 72 ~ allHasuraClaims',
        allHasuraClaims
      );
    }

    const hasuraToken = { ...ctoaToken, ...allHasuraClaims };
    // encode token again, but with correct signature
    const bearer = jwt.sign(hasuraToken, hasuraSecret, {
      algorithm: signingAlgorithm
    });

    // const verified = jwt.verify(bearer, hasuraSecret, {
    //   algorithms: [signingAlgorithm]
    // });
    console.log('hasuraToken', hasuraToken);
    // console.log('🚀 ~ file: graphql.ts ~ line 59 ~ bearer', bearer, secret);
    const headers: Record<string, string> = {
      'content-type': 'application/json; charset=utf-8',
      accept: 'application/json',
      'accept-encoding': 'gzip, deflate',
      ...(bearer != null
        ? {
            Authorization: `Bearer ${bearer}`
          }
        : {})
    };
    // console.log(JSON.stringify(headers, null, 4));
    const gqlResponse = await fetch(gqlURL, {
      method: 'POST',
      // todo: #9 Fix Type error
      headers,
      body: JSON.stringify(req.body)
    });

    const data = await gqlResponse.text();

    // if (logHeaders === 'true')
    //   console.info('/api/graphql, using headers', headers);

    const ct = gqlResponse.headers.get('content-type');
    if (ct != null) res.setHeader('content-type', ct);
    res.status(gqlResponse.status).send(data);
  } catch (error) {
    console.error(error);
    if (res.writable) {
      res.status(error.status || 500).json({
        error: true,
        message: 'Internal server error',
        code: 500
      });
    }
  }
}
