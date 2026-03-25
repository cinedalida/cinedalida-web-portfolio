import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message, history } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  const instructions = process.env.AI_INSTRUCTIONS;

  if (!apiKey) return res.status(500).json({ error: "API Key missing." });

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: {
        role: "system",
        parts: [{ text: instructions?.replace(/\\n/g, "\n") || "" }],
      },
    }, { apiVersion: "v1" }); 

    const sanitizedHistory = (history || [])
      .map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }))
      .filter((msg, index) => {
      
        return !(index === 0 && msg.role === "model");
      });

    const chat = model.startChat({ history: sanitizedHistory });
    const result = await chat.sendMessage(message);
    const response = await result.response;

    return res.status(200).json({ text: response.text() });
  } catch (error) {
    console.error("Gemini Error:", error);
    return res.status(500).json({ error: "Connection error to neural net." });
  }
}