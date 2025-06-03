# Kafka NestJS Demo

A demo of microservices using Kafka as the message broker.

## Services

- `order-service`: Sends a message when a new order is created.
- `notification-service`: Receives the message and displays a notification.

## Start Kafka

```bash
docker-compose up -d
