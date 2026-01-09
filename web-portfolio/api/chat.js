import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  const instructions = process.env.AI_INSTRUCTIONS;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: instructions.replace(/\\n/g, "\n"),
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error("AI Error:", error);
    return res.status(500).json({ error: "Failed to connect to AI" });
  }
}
