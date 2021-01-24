import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IcecreamsController } from './icecreams/icecreams.controller';

@Module({
  imports: [],
  controllers: [AppController, IcecreamsController],
  providers: [AppService],
})
export class AppModule {}
