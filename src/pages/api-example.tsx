import React from 'react';

import { NextPage } from 'next';

import Layout from '@/components/Layout';

const ApiExamplePage: NextPage = () => {
  return (
    <Layout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src="/api/examples/session" title="session" />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src="/api/examples/jwt" title="jwt" />
    </Layout>
  );
};
export default ApiExamplePage;
