import sendgrid from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, budget, website, message } = req.body;

        const emailMessage = {
            to: process.env.EMAIL_TO, // Your receiving email
            from: process.env.EMAIL_FROM, // Your verified SendGrid email
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission from ${firstName} ${lastName}.\n\nBudget: ${budget}\nWebsite: ${website}\nMessage: ${message}`,
        };

        try {
            await sendgrid.send(emailMessage);
            return res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}




