import { Module } from '@nestjs/common';
import { LogginServiceController } from './loggin-service.controller';
import { LogginServiceService } from './loggin-service.service';

@Module({
  imports: [],
  controllers: [LogginServiceController],
  providers: [LogginServiceService],
})
export class LogginServiceModule {}
