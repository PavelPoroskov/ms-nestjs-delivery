import { Injectable } from '@nestjs/common';

@Injectable()
export class LogginServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
