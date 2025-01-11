const express = require('express');
const { GenerativeAIController } = require('../services/geminiapi');
const router = express.Router();


const controller = new GenerativeAIController();

async function getGeneratedContent(req, res) {
  const prompt = req.body.prompt;
  if (!prompt) {
    res.status(400).send("Please provide a prompt");
    return;
  }

  try {
    const response = await controller.generateContent(prompt);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

router.route('/generate').post(getGeneratedContent);

exports.exports = router;