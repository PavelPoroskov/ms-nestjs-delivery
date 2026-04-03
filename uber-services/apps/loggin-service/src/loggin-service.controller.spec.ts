import { Test, TestingModule } from '@nestjs/testing';
import { LogginServiceController } from './loggin-service.controller';
import { LogginServiceService } from './loggin-service.service';

describe('LogginServiceController', () => {
  let logginServiceController: LogginServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LogginServiceController],
      providers: [LogginServiceService],
    }).compile();

    logginServiceController = app.get<LogginServiceController>(LogginServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(logginServiceController.getHello()).toBe('Hello World!');
    });
  });
});
