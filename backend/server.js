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
import { Server } from 'socket.io';
import http from 'http';
import LimitedOffer from './models/LimitedOffer.js'

dotenv.config();
const app = express();
const server = http.createServer(app); 
const io = new Server(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {})
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

app.post('/admin/addTimer', protect, async (req, res) => {
  const { endDate } = req.body;

  try {
    // Save to DB (overwrite or upsert — for single timer logic)
    await LimitedOffer.deleteMany(); // Optional: ensure only one exists
    const newOffer = await LimitedOffer.create({ endDate });

    emitLimitedOfferUpdate(endDate); // Emit to all clients via WebSocket

    res.status(200).json({ message: 'Timer added successfully.', offer: newOffer });
  } catch (error) {
    console.error('Error saving timer:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/currentOffer', async (req, res) => {
  try {
    const offer = await LimitedOffer.findOne();
    if (!offer) {
      return res.status(404).json({ message: 'No active offer.' });
    }
    res.status(200).json({ endDate: offer.endDate });
  } catch (error) {
    console.error('Error fetching current offer:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.use('/admin', uploadRoute);

app.get('/admin/dashboard', protect, (req, res) => {
  res.json({ message: `Welcome to the Admin Dashboard, ${req.admin.username} 🚀` });
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

export const emitLimitedOfferUpdate = (endDate) => {
  io.emit('limitedOfferUpdated', { endDate });
};

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
