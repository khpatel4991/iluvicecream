import { Module } from '@nestjs/common';
import { IcecreamsController } from './icecreams.controller';
import { IcecreamsService } from './icecreams.service';

@Module({
  controllers: [IcecreamsController],
  providers: [IcecreamsService],
})
export class IcecreamsModule {}
