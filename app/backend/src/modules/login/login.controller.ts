import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() createLoginDto: CreateLoginDto) {
    const token = await this.loginService.login(createLoginDto);

    return { token };
  }
}
