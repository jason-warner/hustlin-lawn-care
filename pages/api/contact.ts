import nodemailer from "nodemailer";

const contactAPI = async (req: {
    body: {
        firstName: string;
        lastName: string,
        email: string;
        message: string;
    };
}, res: any) => {
    const { firstName, lastName, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: "example@gmail.com",
            subject: `Contact form submission from ${lastName}, ${firstName}`,
            html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
        });
    } catch (error: any) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });
};


export default contactAPI;