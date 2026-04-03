import { Module } from '@nestjs/common';
import { LogginServiceController } from './loggin-service.controller';
import { LogginServiceService } from './loggin-service.service';
import { MongooseModule } from '@nestjs/mongoose';

// TODO get mongo_connection_string from env
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://frybender:lila27zolberg37uncle@127.0.0.1:27017/logs_db',
    ),
  ],
  controllers: [LogginServiceController],
  providers: [LogginServiceService],
})
export class LogginServiceModule {}
