import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import JWT from 'src/utils/token';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new HttpException('Token must be provided', HttpStatus.BAD_REQUEST);
    }

    if (!JWT.tokenValidation(token)) {
      throw new HttpException(
        'Token must be a valid token',
        HttpStatus.UNAUTHORIZED,
      );
    }

    next();
  }
}
