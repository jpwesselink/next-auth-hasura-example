// This is an example of how to read a JSON Web Token from an API route
import { NextApiHandler } from 'next';
import jwt from 'next-auth/jwt'
import { getToken } from '../../../lib/jwt';

const secret = process.env.SECRET

const jwtHandler:NextApiHandler = async (req, res) => {
  const token = await getToken({ req, secret })
  res.send(JSON.stringify(token, null, 2))
}

export default jwtHandler
