import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'apps/logging/.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      // eslint-disable-next-line @typescript-eslint/require-await
      useFactory: async (configService: ConfigService) => {
        // console.log('useFactory', 'MONGODB_USERNAME');
        // console.log(
        //   '***',
        //   configService.get<string>('MONGODB_USERNAME'),
        //   '***',
        // );
        return {
          uri: 'mongodb://127.0.0.1:27017',
          user: configService.get<string>('MONGODB_USERNAME'),
          pass: configService.get<string>('MONGODB_PASSWORD'),
          dbName: 'logs_db',
        };
      },
      inject: [ConfigService],
    }),
    RiderCoordinatesModule,
  ],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
