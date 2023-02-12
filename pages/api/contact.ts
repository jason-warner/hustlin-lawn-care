import nodemailer from "nodemailer";
import { google } from 'googleapis';

const contactAPI = async (req: {
    body: {
        firstName: string;
        lastName: string,
        email: string;
        message: string;
    };
}, res: any) => {
    const { firstName, lastName, email, message } = req.body;

    console.info('1:', process.env.CLIENT_ID, '\n2:', process.env.CLIENT_SECRET)

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });
    const createTransporter = async () => {
        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN
        });


        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject(`Failed to create access token :(\n${err}`);
                }
                resolve(token);
            });
        });

        const transporter = nodemailer.createTransport({ //@ts-ignore
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        try {
            return transporter;
        } catch (error) {
            console.log('error: ', error);
        }
    };

    const sendEmail = async (emailOptions: any) => {
        try {
            let emailTransporter = await createTransporter(); // @ts-ignore
            const response = await emailTransporter
            .sendMail(emailOptions)
            .then((data) => console.log('data: ', data))
            .catch((err) => console.log('error1: '));

            return response
        } catch (error) {
            console.log('error2: ', error)
        }
    };

    try {
        await sendEmail({
            from: email,
            to: "jasonwarner.dev@gmail.com",
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









// import SMTPTransport from "nodemailer/lib/smtp-transport";

    // const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASSWORD
    //     }
    // });

    // try {
    //     await transporter.sendMail({
    //         from: email,
    //         to: "example@gmail.com",
    //         subject: `Contact form submission from ${lastName}, ${firstName}`,
    //         html: `<p>You have a contact form submission</p><br>
    //     <p><strong>Email: </strong> ${email}</p><br>
    //     <p><strong>Message: </strong> ${message}</p><br>
    //   `
    //     });
    // } catch (error: any) {
    //     return res.status(500).json({ error: error.message || error.toString() });
    // }
