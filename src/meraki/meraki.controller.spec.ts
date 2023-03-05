import { Test, TestingModule } from '@nestjs/testing';
import { MerakiController } from './meraki.controller';

describe('MerakiController', () => {
  let controller: MerakiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerakiController],
    }).compile();

    controller = module.get<MerakiController>(MerakiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
