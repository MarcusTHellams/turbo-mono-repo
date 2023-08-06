import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      errorFormat: 'pretty',
      log:
        process.env.NODE_ENV === 'production'
          ? undefined
          : ['error', 'info', 'query', 'warn'],
    });
  }
}
