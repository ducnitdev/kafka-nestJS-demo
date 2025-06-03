import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @EventPattern('order_created')
  async handleOrder(@Payload() message: any) {
    console.log('Received order_created event:');
    console.log(message);
    const { email, name, orderId } = message;
    await this.service.sendEmail(email, name, orderId);
  }
}
