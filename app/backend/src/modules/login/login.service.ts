import { Injectable } from '@nestjs/common';
import ApiError from '../../utils/ApiError';
import { PrismaService } from '../../database/PrismaService';
import { Login } from './entities/login.entity';
import { compareSync } from 'bcrypt';
import JWT from 'src/utils/token';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async login({ password }: Login, ip: string) {
    const isAdmin = await this.prisma.admin.findUnique({
      where: {
        id: 1,
      },
    });

    if (!isAdmin || !compareSync(password, isAdmin.password)) {
      throw new ApiError(`Password is incorrect`, 400);
    }

    return JWT.tokenGenerator({ id: isAdmin.id, ip });
  }
}
