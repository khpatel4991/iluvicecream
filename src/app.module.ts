import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IcecreamsController } from './icecreams/icecreams.controller';
import { IcecreamsService } from './icecreams/icecreams.service';

@Module({
  imports: [],
  controllers: [AppController, IcecreamsController],
  providers: [AppService, IcecreamsService],
})
export class AppModule {}
