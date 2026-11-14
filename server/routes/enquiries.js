import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ENQUIRIES_FILE = path.join(__dirname, '..', 'data', 'enquiries.json');

const router = express.Router();

// Helper to read enquiries
const readEnquiries = () => {
  if (!fs.existsSync(ENQUIRIES_FILE)) {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
    return [];
  }
  try {
    const data = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading enquiries:', err);
    return [];
  }
};

// Helper to write enquiries
const writeEnquiries = (list) => {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing enquiries:', err);
    return false;
  }
};

// POST new student inquiry / callback request
router.post('/', (req, res) => {
  const { name, phone, email, message, interest } = req.body;

  if (!name || (!phone && !email)) {
    return res.status(400).json({
      success: false,
      message: 'Name and at least one contact channel (phone or email) are required.'
    });
  }

  const newEnquiry = {
    id: `enq_${Date.now()}`,
    name,
    phone: phone || '',
    email: email || '',
    interest: interest || 'General Inquiry',
    message: message || '',
    receivedAt: new Date().toISOString()
  };

  const list = readEnquiries();
  list.unshift(newEnquiry);
  writeEnquiries(list);

  res.status(201).json({
    success: true,
    message: 'Inquiry received successfully. Our admissions team will contact you.',
    data: newEnquiry
  });
});

// GET all inquiries (internal read)
router.get('/', (req, res) => {
  const list = readEnquiries();
  res.json({
    success: true,
    count: list.length,
    data: list
  });
});

export default router;
