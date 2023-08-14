import { Injectable } from '@nestjs/common';
import { IEnv } from '@src/helpers/env/env.interface';
import { EnvConfiguration } from '@src/helpers/env';

@Injectable()
export class EnvService implements IEnv {
  constructor(private envConfig: EnvConfiguration) {}

  getJwtSecret(): string {
    return this.envConfig.getValue('JWT_SECRET');
  }

  getJwtExpirationTime(): string {
    return this.envConfig.getValue('JWT_EXPIRES_IN');
  }

  getAppPort(): any {
    return this.envConfig.getValue('APP_PORT');
  }
}
