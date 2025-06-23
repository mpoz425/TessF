import type { NextApiRequest, NextApiResponse } from 'next';

type ContactData = {
  email: string;
  message: string;
};

type ResponseData = {
  status: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      status: 'error',
      message: `Method ${req.method} Not Allowed`
    });
  }

  try {
    const { email, message } = req.body as ContactData;

    // Validate input
    if (!email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Email and message are required'
      });
    }

    // Here you would typically integrate with your email service
    // For example, using SendGrid, Mailgun, etc.
    console.log('Received contact form submission:', { email, message });

    // For now, we'll just simulate a successful submission
    return res.status(200).json({
      status: 'success',
      message: 'Message received successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Failed to process contact form submission'
    });
  }
}
