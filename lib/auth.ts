import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";

export function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export function createToken(payload: object, expiresIn: string | number = "30d"): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: expiresIn as any });
}
