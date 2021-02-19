import jsonwebtoken from 'jsonwebtoken';

const signingAlgorithm = process.env.SIGNING_ALGORITHM || 'HS256';

export const session = async (sess, token) => {
  const encodedToken = jsonwebtoken.sign(token, process.env.SECRET, {
    algorithm: signingAlgorithm
  });

  return Promise.resolve({ ...sess, id: token.id, token: encodedToken });
};

export const jwt = async (token, user /* , account, profile, isNewUser */) => {
  const isUserSignedIn = !!user;
  // make a http call to our graphql api
  // store this in postgres

  return Promise.resolve({
    ...token,
    id: isUserSignedIn ? user.id.toString() : undefined
  });
};

export default { session, jwt };
