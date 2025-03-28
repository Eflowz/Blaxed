import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOrderConfirmationEmail = async (deliveryInfo, paymentMethod, orderDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,  
    to: process.env.ADMIN_EMAIL,   
    subject: `New Order Placed - #${orderDetails.orderId}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">New Order Placed!</h2>
        <p><strong>Customer Name:</strong> ${deliveryInfo.firstName} ${deliveryInfo.lastName}</p>
        <p><strong>Email:</strong> ${deliveryInfo.email}</p>
        <p><strong>Order Number:</strong> ${orderDetails.orderId}</p>
        <p><strong>Order Date:</strong> ${new Date(orderDetails.createdAt).toLocaleDateString()} ${new Date(orderDetails.createdAt).toLocaleTimeString()}</p>
        <p><strong>Total Amount:</strong>${orderDetails.currency || '$'}${orderDetails.totalAmount} </p>

        <h3 style="margin-top: 20px; color: #4CAF50;">Order Items:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f2f2f2;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Product Name</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Quantity</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${orderDetails.items.map(item => `
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.quantity}</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${orderDetails.currency || '$'}${item.price}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <h3 style="margin-top: 20px; color: #4CAF50;">Delivery Information:</h3>
        <p>${deliveryInfo.firstName} ${deliveryInfo.lastName}</p>
        <p>${deliveryInfo.streetAddress}</p>
        <p>${deliveryInfo.city}, ${deliveryInfo.state}, ${deliveryInfo.zipCode}</p>
        <p>${deliveryInfo.phone}</p>

        <h3 style="margin-top: 20px; color: #4CAF50;">Payment Method:</h3>
        <p>${paymentMethod}</p>

        <p style="margin-top: 20px;">Start processing the order !!.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return { message: 'Order confirmation email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send order confirmation email');
  }
};
