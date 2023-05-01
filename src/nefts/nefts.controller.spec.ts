import { Test, TestingModule } from '@nestjs/testing';
import { NeftsController } from './nefts.controller';
import { NeftsService } from './nefts.service';

describe('NeftsController', () => {
  let controller: NeftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeftsController],
      providers: [NeftsService],
    }).compile();

    controller = module.get<NeftsController>(NeftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
