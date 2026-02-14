import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message, history } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: process.env.AI_INSTRUCTIONS?.replace(/\\n/g, "\n"),
  });

  try {
    const chat = model.startChat({
      history: history ? history.map(m => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })) : [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    res.status(200).json({ text: response.text() });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Failed to connect to AI" });
  }
}