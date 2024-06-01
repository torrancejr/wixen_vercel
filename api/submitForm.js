import sendgrid from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sendgrid.setApiKey(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);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, budget, website, message } = req.body;

        const emailMessage = {
            to: 'ryan@wixenco.com', // Your receiving email
            from: 'ryan@wixenco.com', // Your verified SendGrid email
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




