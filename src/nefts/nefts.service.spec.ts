import { Test, TestingModule } from '@nestjs/testing';
import { NeftsService } from './nefts.service';

describe('NeftsService', () => {
  let service: NeftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeftsService],
    }).compile();

    service = module.get<NeftsService>(NeftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
