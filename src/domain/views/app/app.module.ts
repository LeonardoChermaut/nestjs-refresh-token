import { Module } from '@nestjs/common';
import { EnvModule } from '@src/helpers/env';
import { AppController } from '@src/domain/views/app/app.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@src/auth/auth.module';
import { PrismaModule } from '@src/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from '@src/common/guards';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
