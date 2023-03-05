import { Body, Controller, Get, Post } from '@nestjs/common';
import { MerakiService } from './meraki.service';

@Controller('meraki')
export class MerakiController {
    constructor(private readonly service: MerakiService) { }

    @Get('/webhook')
    @Post('webhook')
    handleWebhook(@Body() body: any) {
        return this.service.handleWebhook(body);
    }
}
