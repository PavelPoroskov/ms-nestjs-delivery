import { NestFactory } from '@nestjs/core';
import { LogginServiceModule } from './loggin-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LogginServiceModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
