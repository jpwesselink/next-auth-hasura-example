// This is an example of how to access a session from an API route
import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/client'

const sessionHandler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  res.send(JSON.stringify(session, null, 2))
}
export default sessionHandler;
