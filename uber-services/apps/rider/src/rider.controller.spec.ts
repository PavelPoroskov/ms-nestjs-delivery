import { Test, TestingModule } from '@nestjs/testing';
import { RiderController } from './rider.controller.js';
import { RiderService } from './rider.service.js';

describe('RiderController', () => {
  let riderController: RiderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RiderController],
      providers: [RiderService],
    }).compile();

    riderController = app.get<RiderController>(RiderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(riderController.getHello()).toBe('Hello World!');
    });
  });
});
