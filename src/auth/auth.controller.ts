import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('api/v1/auth/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signup')
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Post('/local/signin')
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  // @Post('/logout')
  // logout(@Body() dto: AuthDto) {
  //   return this.authService.logout();
  // }

  // @Post('/refresh')
  // refreshToken(@Body() dto: AuthDto) {
  //   return this.authService.refreshToken();
  // }
}
