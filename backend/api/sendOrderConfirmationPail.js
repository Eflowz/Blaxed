import { sendOrderConfirmationEmail } from '../utils/mailer.js';
import cors from 'cors';

const handler = async (req, res) => {
  try {
    const corsMiddleware = cors();
    await corsMiddleware(req, res);

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { deliveryInfo, paymentMethod, orderDetails } = req.body;

    const emailResponse = await sendOrderConfirmationEmail(deliveryInfo, paymentMethod, orderDetails);

    res.status(200).json(emailResponse);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send order confirmation email' });
  }
};

export default handler;


