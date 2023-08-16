import { HttpException, HttpStatus } from '@nestjs/common';

export class HandleHttpException extends HttpException {
  constructor(type: string, status: HttpStatus) {
    super(type, status);
  }
}
