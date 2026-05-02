import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser"; // Run: npm install @emailjs/browser

const styles = {
  section_contact: `py-24 md:py-32 px-6 md:px-10 bg-slate-50 dark:bg-[#03030B] relative transition-colors duration-500`,
  section_title: `text-4xl md:text-6xl font-black font-medium text-slate-900 dark:text-white tracking-tighter mb-16 text-center`,
  container: `max-w-4xl mx-auto`,
  card: `glass-card rounded-[40px] p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-2xl relative overflow-hidden`,
  input_group: `relative mb-6`,
  label: `text-xs font-black uppercase tracking-widest text-[#4880C9] mb-2 block ml-2`,
  input: `w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-6 text-slate-900 dark:text-white focus:outline-none focus:border-[#4880C9] transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600`,
  icon: `absolute left-4 top-[42px] text-slate-400 dark:text-gray-500`,
  submit_btn: `w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#4880C9] text-white rounded-2xl font-black uppercase tracking-widest hover:shadow-[0_0_25px_rgba(72,128,201,0.5)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`,
};

const ContactMe = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS IDs
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        setStatus("Message sent successfully! ✨");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send. Please try again. ❌");
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section id="contact" className={styles.section_contact}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#4880C9]/5 blur-[120px] rounded-full -z-0 pointer-events-none" />

      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.section_title}
        >
          email me.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.card}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.input_group}>
              <label className={styles.label}>Name</label>
              <User size={18} className={styles.icon} />
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.input_group}>
              <label className={styles.label}>Email Address</label>
              <Mail size={18} className={styles.icon} />
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.input_group}>
              <label className={styles.label}>Message</label>
              <MessageSquare size={18} className={styles.icon} />
              <textarea
                name="message"
                placeholder="How can I help you?"
                className={`${styles.input} h-40 resize-none pt-4`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={styles.submit_btn}
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

            {status && (
              <p className="mt-6 text-center text-sm font-bold uppercase tracking-widest text-[#4880C9] animate-pulse">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
