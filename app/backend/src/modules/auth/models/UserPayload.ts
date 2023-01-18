import { Role } from '../../user/entities/user.entity';

export interface UserPayload {
  sub: number;
  email: string;
  name: string;
  role: Role;
  ip: string;
  iat?: number;
  exp?: number;
}
