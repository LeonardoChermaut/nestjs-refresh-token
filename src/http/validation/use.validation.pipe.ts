import { ValidationPipe, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { HandleHttpException } from '@src/domain/http/exception';

export class UseGlobalValidationPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) =>
          Object.values(error.constraints),
        );
        const message = messages
          .reduce((acc, curr) => acc.concat(curr))
          .join(' ');
        return new HandleHttpException(message, HttpStatus.BAD_REQUEST);
      },
    });
  }
}
