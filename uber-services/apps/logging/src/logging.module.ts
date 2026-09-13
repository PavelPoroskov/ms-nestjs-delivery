import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller.js';
import { LoggingService } from './logging.service.js';

@Module({
  imports: [],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
