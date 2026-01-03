import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Sparkles } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { STARTER_QUESTIONS } from "../constants";

// TODO: Fix AI Cine, possibly come up with a witty name!
// TODO: Organize Imports

const AiCine = () => {
  const [messages, setMessages] = useState([
    {
      role: "cine",
      content:
        "hi! i'm the digital version of cine. ask me anything about my projects, my life as a cs student, or just say hello! ✨",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e, directMessage = null) => {
    e?.preventDefault();

    // Use the button text if provided, otherwise use the input state
    const messageToSend = directMessage || input;

    if (!messageToSend.trim() || isTyping) return;

    const userMessage = messageToSend.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: `You are AICine, the digital persona of Francine Dalida (Cine). 
You are a 3rd-year Computer Science student at DLSU-D specializing in Intelligent Systems.

CORE PHILOSOPHY:
Your work follows the principle of "Hiraya Manawari" — reaching full potential by bridging design and technology. You value both Form and Function equally.

KNOWLEDGE BASE:
- Projects: 
  1. La Spot: A DLSU-D Parking System with User/Admin sides (CRUD).
  2. Hollow Knight Gallery: A themed game gallery built to practice routing.
  3. Product Landing Page: A Logitech-inspired responsive site.
  4. Prototypes: Lauviah (mental well-being), Apo Kalinga (medication management), and Cha-Ching (retail).
- Skills: Full-Stack Dev, Data Analytics, UI/UX Design, Project Management.
- Tech Stack: React, Node.js, MySQL, Python, Figma, and Adobe Photoshop.
- Personal Interests: Creating digital/traditional art, film editing, and avid reading.

PERSONALITY & TONE:
- Friendly, curious, and intellectually humble.
- Use a "chill but professional" vibe. 
- You may use lowercase for casual greetings (e.g., "hi there!") but maintain proper grammar for technical explanations.
- If asked about something you don't know, respond like a student: "i'm still learning that, but here's what i know about..."
- Keep responses concise (under 3 sentences unless explaining a project).`,
      });

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      setMessages((prev) => [
        ...prev,
        { role: "cine", content: response.text() },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "cine", content: "error connecting to my neural net." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="ai-cine" className="py-20 px-4 relative bg-[#03030B]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            ai cine.
          </h2>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">
            Simulate a conversation
          </p>
        </div>

        <div className="glass-card rounded-[40px] border border-white/5 overflow-hidden shadow-2xl relative">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4880C9] to-indigo-600 flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-black text-white text-lg">cine.ai</h3>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] uppercase font-bold text-emerald-500 tracking-widest">
                    Active Connection
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Window */}
          <div
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 space-y-6 no-scrollbar"
          >
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-[#4880C9] text-white"
                        : "bg-white/10 text-[#4880C9]"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={14} />
                    ) : (
                      <Sparkles size={14} />
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white text-black rounded-tr-none"
                        : "bg-white/5 text-gray-200 border border-white/5 rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-1.5 px-4 py-3 bg-white/5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="px-6 py-4 flex flex-wrap gap-2 overflow-x-auto no-scrollbar border-b border-white/5 bg-white/[0.02]">
            {STARTER_QUESTIONS.map((q) => (
              <button
                key={q.label}
                onClick={() => handleSend(null, q.label)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:border-[#4880C9] hover:text-[#4880C9] transition-all whitespace-nowrap active:scale-95"
              >
                <span>{q.icon}</span>
                {q.label}
              </button>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-6 bg-white/5">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask me about my projects..."
                className="w-full bg-[#03030B] border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white focus:outline-none focus:border-[#4880C9] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-2 w-11 h-11 bg-white text-black rounded-xl flex items-center justify-center hover:bg-[#4880C9] hover:text-white transition-all disabled:opacity-30 shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
        <p className="text-center mt-6 text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
          Powered by Gemini 1.5 Flash
        </p>
      </div>
    </section>
  );
};

export default AiCine;
