import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from '@src/auth/types';
import { EnvConfiguration } from '@src/helpers/env';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(env: EnvConfiguration) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: env.getValue('JWT_AT_SECRET'),
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}
