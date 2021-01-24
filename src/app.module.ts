import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IcecreamsModule } from './icecreams/icecreams.module';

@Module({
  imports: [IcecreamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
