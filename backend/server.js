const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
async function run() {
  const prompt = "how are you ?"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
