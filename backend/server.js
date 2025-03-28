import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sendOrderConfirmation from './api/sendOrderConfirmationPail.js'; 


dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.post('/api/send-order-confirmation', sendOrderConfirmation);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
