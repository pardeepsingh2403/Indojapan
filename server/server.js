import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contentRoutes from './routes/content.js';
import enquiriesRoutes from './routes/enquiries.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.use('/api/content', contentRoutes);
app.use('/api/enquiries', enquiriesRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Operational',
    service: 'Indo Japan Language School Backend API',
    timestamp: new Date().toISOString()
  });
});

// Root API welcome
app.get('/', (req, res) => {
  res.json({
    name: 'Indo Japan Language School API',
    version: '1.0.0',
    endpoints: {
      content: '/api/content',
      jlpt: '/api/content/jlpt',
      intakes: '/api/content/intakes',
      contact: '/api/content/contact',
      enquiries: '/api/enquiries',
      health: '/api/health'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`⛩️  INDO JAPAN LANGUAGE SCHOOL - BACKEND API ONLINE`);
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
  console.log(`📡 Endpoints: http://localhost:${PORT}/api/content`);
  console.log(`=======================================================`);
});
