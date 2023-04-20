import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function sendGmail(
  to: string,
  from: string,
  subject: string,
  html: string
): Promise<SMTPTransport.SentMessageInfo> {
  const _transporter = transporter;

  return await _transporter.sendMail({
    to,
    from,
    subject,
    text: 'hello',
    html
  });
}
