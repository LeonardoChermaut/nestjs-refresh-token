import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '@src/auth/types';

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const { sub: id } = request.user as JwtPayload;
    return id;
  },
);
