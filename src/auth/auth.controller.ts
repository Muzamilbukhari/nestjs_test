import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

export class UserCreds {
  username: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: UserCreds) {
    return this.authService.login(body.username, body.password);
  }
}
