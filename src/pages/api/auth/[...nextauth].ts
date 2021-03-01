import { NextApiHandler } from 'next';

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import hasuraAdapter from '@/lib/hasura-adapter';

import { jwt, session, signIn } from '../../../lib/callbacks';
import { decode, encode } from '../../../lib/jwt';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const nextAuthHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    // https://next-auth.js.org/configuration/providers
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
      Providers.Spotify({
        clientId: process.env.SPOTIFY_ID,
        clientSecret: process.env.SPOTIFY_SECRET
      })
    ],
    adapter: hasuraAdapter.Adapter(
      { hasuraGraphQLUrl: process.env.HASURA_GRAPHQL_URL },
      {}
    ),
    // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
    // https://next-auth.js.org/configuration/databases
    //
    // Notes:
    // * You must to install an appropriate node_module for your database
    // * The Email provider requires a database (OAuth providers do not)
    // database: process.env.DATABASE_URL,

    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a separate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,

    session: {
      // Use JSON Web Tokens for session instead of database sessions.
      // This option can be used with or without a database for users/accounts.
      // Note: `jwt` is automatically set to `true` if no database is specified.
      jwt: true

      // Seconds - How long until an idle session expires and is no longer valid.
      // maxAge: 30 * 24 * 60 * 60, // 30 days

      // Seconds - Throttle how frequently to write to database to extend a session.
      // Use it to limit write operations. Set to 0 to always update the database.
      // Note: This option is ignored if using JSON Web Tokens
      // updateAge: 24 * 60 * 60, // 24 hours
    },

    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
      // A secret to use for key generation (you should set this explicitly)
      secret: process.env.SECRET,
      // Set to true to use encryption (default: false)
      // encryption: true,
      // You can define your own encode/decode functions for signing and encryption
      // if you want to override the default behaviour.
      encode,
      decode
    },

    // You can define custom pages to override the built-in pages.
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
      // signIn: '/api/auth/signin',  // Displays signin buttons
      // signOut: '/api/auth/signout', // Displays form with sign out button
      // error: '/api/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/api/auth/verify-request', // Used for check email page
      // newUser: null // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
      // async signIn(user, account, profile) { return true },
      // async redirect(url, baseUrl) { return baseUrl },
      signIn,
      session,
      jwt
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},

    // Enable debug messages in the console if you are having problems
    debug: true
  });

export default nextAuthHandler;
