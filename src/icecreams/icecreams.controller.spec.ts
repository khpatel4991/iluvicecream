import { Test, TestingModule } from '@nestjs/testing';
import { IcecreamsController } from './icecreams.controller';

describe('IcecreamsController', () => {
  let controller: IcecreamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IcecreamsController],
    }).compile();

    controller = module.get<IcecreamsController>(IcecreamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
