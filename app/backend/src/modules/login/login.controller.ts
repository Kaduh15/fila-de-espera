import { hashSync } from 'bcrypt';
import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { RealIP } from 'nestjs-real-ip';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() createLoginDto: CreateLoginDto, @RealIP() ip: string) {
    const ipHash = hashSync(ip.split(':')[ip.split(':').length - 1], 10);
    const token = await this.loginService.login(createLoginDto, ipHash);

    return { token };
  }
}
