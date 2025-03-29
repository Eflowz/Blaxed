import { sendOrderConfirmationEmail } from '../utils/mailer.js';

const handler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { deliveryInfo, paymentMethod, orderDetails } = req.body;

    const emailResponse = await sendOrderConfirmationEmail(deliveryInfo, paymentMethod, orderDetails);

    return res.status(200).json(emailResponse);
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send order confirmation email' });
  }
};

export default handler;
