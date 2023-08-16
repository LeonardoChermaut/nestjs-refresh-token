import { Module } from '@nestjs/common';
import { AppService } from '@src/domain/views/app/app.service';
import { EnvModule } from '@src/helpers/env';
import { AppController } from '@src/domain/views/app/app.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@src/auth/auth.module';
import { PrismaModule } from '@src/prisma/prisma.module';

@Module({
  imports: [
    EnvModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
