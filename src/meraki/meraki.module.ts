import { Module } from '@nestjs/common';
import { MerakiController } from './meraki.controller';
import { MerakiService } from './meraki.service';

@Module({
  controllers: [MerakiController],
  providers: [MerakiService]
})
export class MerakiModule {}
