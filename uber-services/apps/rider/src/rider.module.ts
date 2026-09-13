import { Module } from '@nestjs/common';
import { RiderController } from './rider.controller.js';
import { RiderService } from './rider.service.js';

@Module({
  imports: [],
  controllers: [RiderController],
  providers: [RiderService],
})
export class RiderModule {}
