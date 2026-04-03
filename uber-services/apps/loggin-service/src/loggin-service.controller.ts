import { Controller, Get } from '@nestjs/common';
import { LogginServiceService } from './loggin-service.service';

@Controller()
export class LogginServiceController {
  constructor(private readonly logginServiceService: LogginServiceService) {}

  @Get()
  getHello(): string {
    return this.logginServiceService.getHello();
  }
}
