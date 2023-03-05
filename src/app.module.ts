import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerakiModule } from './meraki/meraki.module';

@Module({
  imports: [MerakiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
