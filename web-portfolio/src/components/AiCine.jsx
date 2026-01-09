// External Libraries
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Sparkles } from "lucide-react";

// Local Components/Constants
import { STARTER_QUESTIONS } from "../constants";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const handleSend = async (e, directMessage = null) => {
    e?.preventDefault();
    const messageToSend = directMessage || input;
    if (!messageToSend.trim() || isTyping) return;

    const userMessage = messageToSend.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    try {
      // CALL SERVERLESS FUNCTION
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) throw new Error("Failed to reach neural net");

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "cine", content: data.text }]);
    } catch (err) {
      console.error("Connection Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "cine", content: "error connecting to my neural net." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section
      id="ai-cine"
      className="py-20 px-4 relative bg-slate-50 dark:bg-[#03030B] transition-colors duration-500"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={messageVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
            ai cine.
          </h2>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">
            Simulate a conversation
          </p>
        </motion.div>

        <motion.div
          variants={messageVariants}
          className="glass-card rounded-[40px] border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl relative"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4880C9] to-indigo-600 flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-black text-slate-900 dark:text-white text-lg">
                  cine.ai
                </h3>
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
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
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
                          : "bg-slate-200 dark:bg-white/10 text-[#4880C9]"
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
                          ? "bg-[#4880C9] text-white rounded-tr-none shadow-md"
                          : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-200 border border-slate-200 dark:border-white/5 rounded-tl-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-1.5 px-4 py-3 bg-slate-100 dark:bg-white/5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <motion.div
            variants={messageVariants}
            className="px-6 py-4 flex flex-wrap gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]"
          >
            {STARTER_QUESTIONS.map((q) => (
              <button
                key={q.label}
                onClick={() => handleSend(null, q.label)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest hover:border-[#4880C9] hover:text-[#4880C9] transition-all whitespace-nowrap active:scale-95"
              >
                <span>{q.icon}</span>
                {q.label}
              </button>
            ))}
          </motion.div>
          <motion.form
            variants={messageVariants}
            onSubmit={handleSend}
            className="p-6 bg-slate-50/50 dark:bg-white/5"
          >
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask me about my projects..."
                className="w-full bg-white dark:bg-[#03030B] border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-6 pr-14 text-slate-900 dark:text-white focus:outline-none focus:border-[#4880C9] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-2 w-11 h-11 bg-[#4880C9] text-white rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all disabled:opacity-30 shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.form>
        </motion.div>

        <motion.p
          variants={messageVariants}
          className="text-center mt-6 text-slate-500 dark:text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]"
        >
          Powered by Gemini 1.5 Flash
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AiCine;
