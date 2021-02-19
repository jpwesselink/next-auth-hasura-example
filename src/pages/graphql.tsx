import React from 'react';

import { NextPage } from 'next';

import { GraphQLClient } from 'graphql-request';
import { useSession } from 'next-auth/client';
import useSWR from 'swr';

import AccessDenied from '@/components/AccessDenied';
import Layout from '@/components/Layout';

const GraphQLPage: NextPage = () => {
  const graphQLClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL
  );

  const [session, loading] = useSession();
  const fetcher = query =>
    graphQLClient.request(
      query,
      {},
      { authorization: `Bearer ${session?.token}` }
    );

  const { data } = useSWR(
    session?.token
      ? `{
          users {
            id
            name
          }
        }
      `
      : null,
    fetcher
  );
  if (!session && !loading) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  return (
    <Layout>
      <h1>Hasura GraphQL</h1>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  );
};
export default GraphQLPage;
