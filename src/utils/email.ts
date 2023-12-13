import * as nodemailer from 'nodemailer';

export const sendActivationEmail = async (email: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "azarjpm15@gmail.com",
                pass: "akgy zdzp rvel ycuo"
            },
        });

        const mailOptions = {
            from: "azarjpm15@gmail",
            to: email,
            subject: "Registration confirmation",
            text: "Thank you for registering! please confirm your registration by clicking on this link",
        };

        await transporter.sendMail(mailOptions);
        return "Email sent successfully!";
    } catch (error) {
        return "Error sending the confirmation email:" + error;
    }
}