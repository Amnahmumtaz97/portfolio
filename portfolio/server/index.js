const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Replace this:
app.use(cors());

// With this:
app.use(cors({
  origin: 'https://portfolio-chi-lac-76.vercel.app',
  methods: ['GET', 'POST'],
}));app.use(express.json());

// MongoDB Contact Message Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// Routes
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'Server running' }));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.get('/api/projects', (req, res) => {
  res.json({ success: true, projects: [] }); // Extend as needed
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
