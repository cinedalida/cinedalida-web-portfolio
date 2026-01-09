// TODO: Fix api call

import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  const instructions = process.env.AI_INSTRUCTIONS;

  try {
    const ai = new GoogleGenAI({
      apiKey,
    });

    const models = await ai.models.list();
    console.log(
      "AVAILABLE MODELS:",
      models.models.map((m) => m.name)
    );

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      systemInstruction: instructions?.replace(/\\n/g, "\n"),
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const text = response.text;

    return res.status(200).json({ text });
  } catch (error) {
    console.error("AI Error:", error);
    return res.status(500).json({ error: "Failed to connect to AI" });
  }
}
