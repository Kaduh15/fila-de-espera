export class User {
  id?: number;
  email: string;
  password: string;
  name: string;
  role: Role;
}

export type Role = 'ADMIN' | 'USER';
