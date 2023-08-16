import { Module } from '@nestjs/common';
import { EnvConfiguration } from '@src/helpers/env/env.config';
import { EnvService } from '@src/helpers/env/env.service';

@Module({
  providers: [EnvConfiguration, EnvService],
  exports: [EnvConfiguration, EnvService],
})
export class EnvModule {}
