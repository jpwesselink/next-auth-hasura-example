import jsonwebtoken from 'jsonwebtoken';

const signingAlgorithm = process.env.SIGNING_ALGORITHM || 'HS256';

export const session = async (session, token) => {
    const encodedToken = jsonwebtoken.sign(token, process.env.SECRET, { algorithm: signingAlgorithm });
    session.id = token.id;
    session.token = encodedToken;
    return Promise.resolve(session);
};

export const jwt = async (token, user, account, profile, isNewUser) => {
    const isUserSignedIn = user ? true : false;
    // make a http call to our graphql api
    // store this in postgres
    if (isUserSignedIn) {
        token.id = user.id.toString();
    }
    return Promise.resolve(token);
}
    

export default { session, jwt };
