// generativeAIController.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

class GenerativeAIController {
  constructor() {
    this.genAI = new GoogleGenerativeAI("AIzaSyAGHRC1sbzUo6pH87Z7y4c5dCtJW6HlzNQ");
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  }

  async generateContent(prompt) {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
}

exports.GenerativeAIController = GenerativeAIController;