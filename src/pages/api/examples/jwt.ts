// This is an example of how to read a JSON Web Token from an API route
import { NextApiHandler } from 'next';

import {
  decodeCTAClaims,
  encodeHasuraClaims,
  StrippedNextAuthUserFragment
} from '@/lib/hasura';
import { CTOAPolicy, CTOA_NAMESPACE } from '@/lib/roles';

import { getToken } from '../../../lib/jwt';

const secret = process.env.SECRET;

const jwtHandler: NextApiHandler = async (req, res) => {
  const token = await getToken({ req, secret });
  const ctoaPolicy: CTOAPolicy = token[CTOA_NAMESPACE];
  let allHasuraClaims;
  let user: StrippedNextAuthUserFragment;
  if (ctoaPolicy) {
    user = decodeCTAClaims(ctoaPolicy);
    allHasuraClaims = encodeHasuraClaims({
      user,
      organisationId: 'ddba56ef-4500-45e3-9698-69da97014500'
    });
  }

  res.send(JSON.stringify({ user, ...allHasuraClaims, token }, null, 2));
};

export default jwtHandler;
