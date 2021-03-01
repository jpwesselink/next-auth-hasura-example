/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';

import { NextPage } from 'next';

import Layout from '@/components/Layout';
import {
  ADMIN,
  ORGANISATION_ADMIN,
  ORGANISATION_USER,
  USER
} from '@/lib/roles';
import { useXXXRoles } from '@/lib/useRoles';

const ClientPage: NextPage = () => {
  console.log('BEEP');
  // const [s, setS] = useState<number>(0);
  const [session, isLoading, mekker, setMekker] = useXXXRoles();

  useEffect(() => {
    if (!isLoading && mekker?.role) {
      // setS(s => s + 1);
      console.log(
        JSON.stringify(
          {
            isLoading,
            organisationId: mekker?.organisationId,
            role: mekker?.role
          },
          null,
          4
        )
      );
    }
  }, [isLoading, mekker?.organisationId, mekker?.role]);
  return (
    <Layout>
      <h1>Client Side Rendering</h1>
      <pre>{JSON.stringify(mekker?.allowedRoles || [], null, 4)}</pre>
      <button
        onClick={() => {
          setMekker({ ...mekker, role: USER });
        }}>
        be a USER
      </button>
      <button
        onClick={() => {
          setMekker({ ...mekker, role: ADMIN });
        }}>
        be an ADMIN
      </button>
      <button
        onClick={() => {
          setMekker({
            organisationId: '90e7339a-8c79-48f5-8821-e01c8fc0a87c',
            role: ORGANISATION_ADMIN
          });
        }}>
        be an ADMIN AT ORGANISATION 90e7339a-8c79-48f5-8821-e01c8fc0a87c
      </button>
      <button
        onClick={() => {
          setMekker({
            organisationId: 'ddba56ef-4500-45e3-9698-69da97014500',
            role: ORGANISATION_ADMIN
          });
        }}>
        be an ADMIN AT ORGANISATION ddba56ef-4500-45e3-9698-69da97014500
      </button>
      <button
        onClick={() => {
          setMekker({
            organisationId: '000000',
            role: ORGANISATION_USER
          });
        }}>
        be an ADMIN AT ORGANISATION 000000
      </button>
      <button
        onClick={() => {
          setMekker({
            role: ORGANISATION_USER
          });
        }}>
        be an ORGANISATION_USER
      </button>
      <button
        onClick={() => {
          setMekker({
            role: 'piepo'
          });
        }}>
        be a piepo
      </button>
      <pre>{JSON.stringify({ mekker, session }, null, 4)}</pre>
      <p>
        This page uses the <strong>useSession()</strong> React Hook in the{' '}
        <strong>&lt;/Header&gt;</strong> component.
      </p>
      <p>
        The <strong>useSession()</strong> React Hook easy to use and allows
        pages to render very quickly.
      </p>
      <p>
        The advantage of this approach is that session state is shared between
        pages by using the <strong>Provider</strong> in <strong>_app.js</strong>{' '}
        so that navigation between pages using <strong>useSession()</strong> is
        very fast.
      </p>
      <p>
        The disadvantage of <strong>useSession()</strong> is that it requires
        client side JavaScript.
      </p>
    </Layout>
  );
};
export default ClientPage;
