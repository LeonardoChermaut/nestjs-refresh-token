import { Module } from '@nestjs/common';
import { AppService } from '@src/domain/views/app/app.service';
import { EnvModule } from '@src/helpers/env';
import { AppController } from '@src/domain/views/app/app.controller';

@Module({
  imports: [EnvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
