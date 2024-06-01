// src/api/submitForm.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, budget, website, message } = req.body;

        // Create a transporter object using Outlook's SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com', // Outlook SMTP server
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Set up email data with unicode symbols
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'your-receiving-email@example.com', // Change this to your email address
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission from ${firstName} ${lastName}.\n\nBudget: ${budget}\nWebsite: ${website}\nMessage: ${message}`,
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            console.log('Email sent:', info.response);
            return res.status(200).json({ message: 'Form submitted successfully' });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

