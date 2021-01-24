import { Test, TestingModule } from '@nestjs/testing';
import { IcecreamsService } from './icecreams.service';

describe('IcecreamsService', () => {
  let service: IcecreamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IcecreamsService],
    }).compile();

    service = module.get<IcecreamsService>(IcecreamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
