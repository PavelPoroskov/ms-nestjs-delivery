import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';

// TODO get mongo_connection_string from env
//      'mongodb://frybender:lila27zolberg37uncle@127.0.0.1:27017/logs_db',
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://frybender:lila27zolberg37uncle@127.0.0.1:27017/logs_db',
    ),
  ],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
