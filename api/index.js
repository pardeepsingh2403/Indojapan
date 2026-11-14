import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contentRoutes from '../server/routes/content.js';
import enquiriesRoutes from '../server/routes/enquiries.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

// API Routes
app.use('/api/content', contentRoutes);
app.use('/api/enquiries', enquiriesRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Operational',
    service: 'Indo Japan Language School Backend API (Vercel Serverless)',
    timestamp: new Date().toISOString()
  });
});

// Root API welcome
app.get('/api', (req, res) => {
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

export default app;
