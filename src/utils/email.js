import nodemailer from "nodemailer";

const sendEmail = async ({ from = process.env.EMAIL, to, bcc, subject, text, html, attachments = [] } = {}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"Root Academy" <${from}>`, // sender address
        to, // list of receivers
        bcc,
        subject,
        text,
        html, // html body
        attachments
    });
}

export default sendEmail