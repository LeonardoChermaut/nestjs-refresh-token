import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UseGlobalHttpFxceptionFilter } from '@src/domain/http/exception/use.global.exception';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: UseGlobalHttpFxceptionFilter,
    },
  ],
})
export class HttpExceptionModule {}
