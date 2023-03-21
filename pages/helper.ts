import jwt from 'jsonwebtoken'

interface TokenPayload {
  id: string
}

export function getToken(authHeader: string): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  return token;
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded;
  } catch (error) {
    return null
  }
}

export const getAuthentication = (authHeader: string): TokenPayload | null => {

  const token = getToken(authHeader);
  if (!token) {
    return null;
  }

  const decoded = verifyToken(token)

  if (!decoded) {
    return null;
  }

  return decoded;
}