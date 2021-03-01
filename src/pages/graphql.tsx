/* eslint-disable react/button-has-type */
import React, { useRef, useState } from 'react';

import { NextPage } from 'next';

import { GraphQLClient } from 'graphql-request';
import { getSession } from 'next-auth/client';
import useDeepCompareEffect from 'use-deep-compare-effect';

import AccessDenied from '@/components/AccessDenied';
import Layout from '@/components/Layout';
import { useXXXRoles } from '@/lib/useRoles';

const GraphQLPage: NextPage = () => {
  const { current: graphQLClient } = useRef(
    new GraphQLClient(
      '/api/graphql'
      // process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL
    )
  );

  // const [
  //   {
  //     harry,
  //     role,
  //     isLoading,
  //     token,
  //     setHarry,
  //     hasuraUser,
  //     setOrganisation,
  //     setOrganisationAndRole
  //   },
  //   loading
  // ] = useRoles();
  const [data, setData] = useState({});
  const [session, isLoading, accessPolicy, setRole] = useXXXRoles();
  const role = accessPolicy?.role;
  const roles = accessPolicy?.roles;
  const token = session?.token;
  const organisationsMap = accessPolicy?.organisationsMap || {};

  useDeepCompareEffect(() => {
    const headers = accessPolicy?.headers || {};
    if (headers && session?.token) {
      console.log('XXX');
      graphQLClient
        .request(
          `{
          users {
            id
            name
          }
        }
      `,
          {},
          {
            ...headers
          }
        )
        .then(newData => {
          setData(newData);
        })
        .catch(e => {
          console.warn(e);
        });
    }
  }, [accessPolicy?.headers, graphQLClient, session?.token]);

  if (!token && !isLoading) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  return (
    <Layout>
      <button
        onClick={() => {
          setRole({ organisationId: '123123123123' });
        }}>
        org
      </button>
      <h1>Hasura GraphQL</h1>
      <div>current role: {role}</div>
      {roles?.global?.map(globalRole => {
        return (
          <button
            key={globalRole}
            onClick={() => {
              setRole({ role: globalRole });
            }}>
            {globalRole}
          </button>
        );
      })}
      {Object.keys(organisationsMap || {}).map(organisationId => {
        const org = organisationsMap[organisationId];
        const { name } = org;
        const { roles } = org;
        return (
          <div key={organisationId}>
            {roles?.map(role => {
              return (
                <button
                  key={`${organisationId}-${role}`}
                  onClick={() => {
                    setRole({ organisationId, role });
                  }}>
                  {/* {harry.hasRole(role, organisationId) ? 'yes' : 'no'} */}
                  {name} {role}
                </button>
              );
            })}
          </div>
        );
      })}

      {/* <pre>
        {JSON.stringify(
          {
            harry,
            hasuraUser
          },
          null,
          4
        )}
      </pre> */}
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  );
};
export default GraphQLPage;

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context)
    }
  };
}
