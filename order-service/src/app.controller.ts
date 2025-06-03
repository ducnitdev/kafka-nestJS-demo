import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('KAFKA_CLIENT') private client: ClientKafka) {}

  @Get('order')
  async sendOrder() {
    this.client.emit('order_created', {
      orderId: Math.floor(Math.random() * 1000),
      email: 'customer@example.com',
      user: 'john.doe',
    });
    return { status: 'Order sent to Kafka' };
  }

  onModuleInit() {
    this.client.subscribeToResponseOf('order_created');
  }
}

