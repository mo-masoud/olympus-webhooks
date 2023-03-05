import { Test, TestingModule } from '@nestjs/testing';
import { MerakiService } from './meraki.service';

describe('MerakiService', () => {
  let service: MerakiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerakiService],
    }).compile();

    service = module.get<MerakiService>(MerakiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
