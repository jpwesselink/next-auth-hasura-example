import Layout from '@/components/Layout'
import { NextPage } from "next"
import React from "react"

const IndexPage:NextPage = () => {
  return <Layout>
    <h1>NextAuth.js Example</h1>
    <p>
      This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
  </Layout>
}
export default IndexPage
