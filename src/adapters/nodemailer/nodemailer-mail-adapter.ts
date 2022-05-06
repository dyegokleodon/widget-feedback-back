import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "40cd99ffc5961b",
    pass: "7c66bc892e0225"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({subject, body}:SendMailData){
    await transport.sendMail({
      from: 'Equipe FeedBack <oi@feedback.com>',
      to: 'Dyego Kleodon <dyego.kleodon@gmail.com>',
      subject,
      html: body,
    });
  }
}