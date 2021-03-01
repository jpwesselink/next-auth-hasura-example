# NextAuth.js + Hasura example


## About this project

This is an example of how to use [NextAuth.js](https://next-auth.js.org) library to add authentication to a [Next.js](https://nextjs.org) application together with Hasura.

## About NextAuth.js

NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library designed for [Next.js](https://nextjs.org) and [Serverless](https://now.sh).

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

*NextAuth.js is not associated with Vercel or Next.js.*

## Getting started

### 1. Clone the repository and install dependancies

```
git clone https://github.com/nextauthjs/next-auth-example.git
cd next-auth-example
npm i
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).



## Get those secrets right

> Do not commit these secrets to git.

### HS256

Go to [https://generate-secret.now.sh/32](https://generate-secret.now.sh/32) and generate a random secret. 
Put this secret in *two* places: 

- Create `.env.local` for Next.js

It should look something like this:

```
SECRET=<insert your secret here>
```

- Create `hasura-graphql-jwt-secret.json` for Docker compose

```
{
    "type": "HS256",
    "key": "<insert your secret here>"
}
```

### RS256

- Generate private key

```
openssl genrsa -out private.pem 2048
```
- Generate public key

```
openssl rsa -in private.pem -pubout -out public.pem
```

- Transform private key to a single line, and copy to clipboard on Macos

```
awk -v ORS='\\n' '1' private.pem | pbcopy
```

- Create `.env.local` for Next.js

It should look something like this:

> In double quotes, otherwise the `\n` will be escaped, resulting in a PEM routines error

```
SIGNING_ALGORITHM=RS256
SECRET="<paste your secret here>"
```

- Transform public key to single line, and copy to clipboard on Macos.

```
awk -v ORS='\\n' '1' public.pem | pbcopy
```

- Create `hasura-graphql-jwt-secret.json` for Docker compose

```
{
    "type": "RS256",
    "key": "<paste your secret here>"
}
```

## Running Hasura with docker compose

Remember the json file we created? We're going to put it to good use here.

> Why though? Docker compose does not really like setting environment variables as json, for me this is - as of writing - the most convenient 
> way to set `HASURA_GRAPHQL_JWT_SECRET` is the docker compose file.

```
HASURA_GRAPHQL_JWT_SECRET=$(cat hasura-graphql-jwt-secret.json) docker-compose up -d
```


