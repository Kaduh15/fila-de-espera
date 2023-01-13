import { hashSync } from 'bcrypt';
export class Login {
  readonly id?: string | number;
  readonly password: string;

  constructor({ id, password }: Partial<Login>) {
    this.id = id;
    this.password = hashSync(password, 10);
  }
}
