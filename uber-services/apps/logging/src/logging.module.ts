import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller.js';
import { LoggingService } from './logging.service.js';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [RiderCoordinatesModule],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
