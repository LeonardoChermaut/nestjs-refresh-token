import { Injectable } from '@nestjs/common/decorators/core';

@Injectable()
export class AppService {
  constructor() {}

  getHello(): string {
    return `Hello World!`;
  }
}
