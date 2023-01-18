import { Role } from '../../user/entities/user.entity';

export class UserFromJwt {
  id: number;
  email: string;
  name: string;
  role: Role;
}
