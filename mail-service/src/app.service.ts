import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  async sendEmail(to: string, name: string, orderId: number) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',        // 👉 nhập email của bạn
        pass: 'your-app-password',          // 👉 nhập app password (not real password)
      },
    });

    const mailOptions = {
      from: 'youremail@gmail.com',
      to,
      subject: 'Order Confirmation',
      text: `Hi ${name}, your order #${orderId} has been received.`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Sent email to ${to} for order #${orderId}`);
  }
}

