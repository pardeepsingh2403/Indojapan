import express from 'express';
import { instituteContent } from '../data/contentData.js';

const router = express.Router();

// GET all site content
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: instituteContent
  });
});

// GET JLPT levels
router.get('/jlpt', (req, res) => {
  res.json({
    success: true,
    data: instituteContent.jlptLevels
  });
});

// GET intakes
router.get('/intakes', (req, res) => {
  res.json({
    success: true,
    data: instituteContent.intakes
  });
});

// GET contact details
router.get('/contact', (req, res) => {
  res.json({
    success: true,
    data: instituteContent.institute
  });
});

export default router;
