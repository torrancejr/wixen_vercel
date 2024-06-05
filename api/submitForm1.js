const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, budget, website, message } = req.body;

        const smsMessage = `New Contact Form Submission: ${firstName} ${lastName}. 
      Budget: ${budget}, Website: ${website}, Message: ${message}`;

        try {
            await client.messages.create({
                body: smsMessage,
                to: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
                from: process.env.TWILIO_FROM_NUMBER, // Your Twilio sending number
            });
            return res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error sending SMS:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}