const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
const catchAsyncError = require('../middlewares/catchAsyncError');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


router.get('/models', catchAsyncError(async (req, res) => {
  try {
    const response = await openai.models.list();
    res.status(200).json({
      success: true,
      models: response.data,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
}));

module.exports = router;
