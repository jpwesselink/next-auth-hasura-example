import jwt from 'jsonwebtoken'

const signingAlgorithm = process.env.SIGNING_ALGORITHM || 'HS256';
export const encode = async ({ secret, token, maxAge }) => {
    const jwtClaims = {
        "sub": token.sub.toString(),
        "name": token.name,
        "email": token.email,
        "iat": Date.now() / 1000,
        "exp": Math.floor(Date.now() / 1000) + (24 * 60 * 60),
        "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-default-role": "user",
            "x-hasura-role": "user",
            "x-hasura-user-id": token.id,
        }
    };
    const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: signingAlgorithm });
    return encodedToken;
}

export const decode = async ({ secret, token, maxAge }) => {
    if (token){
        const decodedToken = jwt.verify(token, secret, { algorithms: [signingAlgorithm] });
        return decodedToken;
    }

    return {}
}

export const getToken = async (params) => {
    const {
        req,
        // Use secure prefix for cookie name, unless URL is NEXTAUTH_URL is http://
        // or not set (e.g. development or test instance) case use unprefixed name
        secureCookie = !(!process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL.startsWith('http://')),
        cookieName = (secureCookie) ? '__Secure-next-auth.session-token' : 'next-auth.session-token', 
        raw = false
    } = params
    if (!req) throw new Error('Must pass `req` to JWT getToken()')

    // Try to get token from cookie
    let token = req.cookies[cookieName]

    // If cookie not found in cookie look for bearer token in authorization header.
    // This allows clients that pass through tokens in headers rather than as
    // cookies to use this helper function.
    if (!token && req.headers.authorization?.split(' ')[0] === 'Bearer') {
        const urlEncodedToken = req.headers.authorization.split(' ')[1]
        token = decodeURIComponent(urlEncodedToken)
    }

    if (raw) {
        return token
    }

    try {
        return decode({ token, ...params })
    } catch {
        return null
    }
}

export default { 
    encode, decode
}
