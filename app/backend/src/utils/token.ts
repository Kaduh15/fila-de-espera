import { sign, Secret, verify, JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import ApiError from './ApiError';

const secret: Secret = process.env.JWT_SECRET || 'secret';

export default class JWT {
  static tokenGenerator(payload: JwtPayload): Secret {
    return sign(payload, secret);
  }

  static tokenValidation(token: string): JwtPayload {
    try {
      const payload = verify(token, secret) as JwtPayload;
      return payload;
    } catch (e) {
      throw new ApiError('Token must be a valid token', 401);
    }
  }
}