import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class EnvConfiguration {
  private readonly parsedValue: dotenv.DotenvParseOutput;

  constructor() {
    const { error, parsed } = dotenv.config();
    if (error) throw new Error(error.message);

    this.parsedValue = parsed as dotenv.DotenvParseOutput;
  }

  getValue(key: string): string | undefined {
    return this.parsedValue[key];
  }
}
