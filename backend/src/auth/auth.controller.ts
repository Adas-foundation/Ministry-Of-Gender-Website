import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogiDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LogiDto) {
    return this.authService.login(loginDto);
  }
}
