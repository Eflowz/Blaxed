import rateLimit from 'express-rate-limit';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import sendOrderConfirmation from './api/sendOrderConfirmationPail.js';
import { protect } from './middlewares/authMiddleware.js'; 

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());


const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: {
    message: 'Too many login attempts. Please try again after 15 minutes.',
  },
  standardHeaders: true, 
  legacyHeaders: false,  
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.post('/api/sendOrderConfirmationPail', sendOrderConfirmation);

// Generate JWT Token ✅
const generateToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '2h' });
};

// Admin Login ✅
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

// Protected Dashboard ✅
app.get('/admin/dashboard', protect, (req, res) => {
  res.json({ message: `Welcome to the Admin Dashboard, ${req.admin.username} 🚀` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
