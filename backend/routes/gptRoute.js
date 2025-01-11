const express = require('express');
const router = express.Router();
const { getCompletion } = require('../services/openaiService');

router.post('/gpt', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await getCompletion(prompt);
    res.status(200).json({
      success: true,
      response: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
//sachin
module.exports = router;
