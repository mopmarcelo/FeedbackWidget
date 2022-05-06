import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d756855957b13a",
        pass: "8385a9b3ca4d7a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@fedget.com>",
            to: "Marcelo Pereira <mop.marcelo@gmail.com>",
            subject,
            html: body
        });
    };
}