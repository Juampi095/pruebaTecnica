import nodemailer from 'nodemailer';

export const sendActivationEmail = async (email: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: "Registration confirmation",
            html: `<p>Thank you for registering! Please, confirm your registration by clicking on this <a href="aquí va tu link">link</a></p>`,
        };

        await transporter.sendMail(mailOptions);
        return "Email sent successfully!";
    } catch (error) {
        if (error instanceof Error) {
            return "Error sending the confirmation email: " + error.message;
        } else {
            return "Unknown error occurred while sending the confirmation email.";
        }
    }

};
