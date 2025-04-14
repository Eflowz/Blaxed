import rateLimit from 'express-rate-limit';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import sendOrderConfirmation from './api/sendOrderConfirmationPail.js';
import { protect } from './middlewares/authMiddleware.js'; 

import uploadRoute from './Routes/uploadRoute.js'; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: {
    message: 'Too many login attempts. Please try again after 15 minutes.',
  },
  standardHeaders: true, 
  legacyHeaders: false,  
});

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.post('/api/sendOrderConfirmationPail', sendOrderConfirmation);

const generateToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '2h' });
};

app.post('/admin/login', loginLimiter, (req, res) => {
  const { username, password } = req.body;

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    const token = generateToken(username);

    res.json({
      message: 'Login successful',
      isAuthenticated: true,
      token,
    });
  } else {
    res.status(401).json({
      message: 'Invalid username or password',
      isAuthenticated: false,
    });
  }
});

  app.use('/admin', uploadRoute);

app.get('/admin/dashboard', protect, (req, res) => {
  res.json({ message: `Welcome to the Admin Dashboard, ${req.admin.username} 🚀` });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
