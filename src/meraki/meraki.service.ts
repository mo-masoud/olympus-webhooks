import { Injectable } from '@nestjs/common';

@Injectable()
export class MerakiService {
    handleWebhook(body: any) {
        console.log(body)
    }
}
