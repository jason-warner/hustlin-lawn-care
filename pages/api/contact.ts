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
        }).catch((err) => console.log('Access Token Error: ', err));

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
            console.log('Create Transport Error: ', error);
        }
    };

    const sendEmail = async (emailOptions: any) => {
        try {
            let emailTransporter = await createTransporter(); // @ts-ignore
            const response = await emailTransporter
                .sendMail(emailOptions)
                .catch((err) => console.log('Email Transport Err: ', err));

            return response;
        } catch (error) {
            console.log('Email Transport Error: ', error)
        }
    };

    try {
        const response = await sendEmail({
            from: email,
            to: "skatetrippy@yahoo.com",
            subject: `Contact form submission from ${lastName}, ${firstName}`,
            html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
        })
            .then(() => res.status(200).json({ status: 200 }))
            .catch((err) => console.log('Send Email Err', err));
        return response;
    } catch (error: any) {
        console.log('Send Email Error: ', error)
        return res.status(500).json({ error: error.message || error.toString() });
    }
};


export default contactAPI;