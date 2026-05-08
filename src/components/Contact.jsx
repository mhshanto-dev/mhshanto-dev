"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });

  const handleSend = async () => {
    if (!formData.name || !formData.email || !formData.msg) {
      setStatus("⚠️ Please complete all fields to proceed.");
      return;
    }
    
    setLoading(true);
    setStatus("⚡ Sending message...");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          msg: formData.msg,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Message successfully sent! I'll reach out within 24 hours.");
        setFormData({ name: "", email: "", msg: "" });
      } else {
        setStatus(`❌ ${data.message || "Failed to send message. Please try again."}`);
      }
    } catch (error) {
      setStatus("❌ An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 6000);
    }
  };

  const contactMethods = [
    {
      icon: "✉️",
      title: "EMAIL",
      value: "mhshanto.8989.t@gmail.com",
      link: "mailto:mhshanto.8989.t@gmail.com",
      color: "bg-red-500/10"
    },
    {
      icon: "💬",
      title: "WHATSAPP",
      value: "+8801871758989",
      link: "https://wa.me/8801871758989",
      color: "bg-green-500/10"
    },
    {
      icon: "in",
      title: "LINKEDIN",
      value: "mh-shanto",
      link: "https://www.linkedin.com/in/mh-shanto/",
      color: "bg-blue-500/10",
      isTextIcon: true
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="contact">
      {/* Header */}
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Contact Me
        </span>
        <h2 className="text-h2 text-on-background mt-3">
          Get in Touch
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT — Talk to me cards */}
        <div className="space-y-8">
          <p className="text-sm font-bold text-on-surface-variant uppercase tracking-[0.2em] text-center md:text-left">
            Talk to me
          </p>
          <div className="grid gap-6">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center flex flex-col items-center group hover:bg-surface-container-high/60 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-2xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {method.isTextIcon ? (
                    <span className="font-black text-xl text-primary">{method.icon}</span>
                  ) : (
                    <span className="text-xl">{method.icon}</span>
                  )}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-background mb-1">
                  {method.title}
                </p>
                <p className="text-sm text-on-surface-variant mb-6 truncate max-w-full px-2">
                  {method.value}
                </p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Write me
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="space-y-8">
          <p className="text-sm font-bold text-on-surface-variant uppercase tracking-[0.2em] text-center md:text-left">
            Write me your project
          </p>
          <div className="glass-card p-10 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/80 ml-1">
                Name
              </label>
              <input
                className="w-full bg-surface-container-high/40 border border-outline-variant/10 rounded-2xl px-6 py-4 text-on-background focus:outline-none focus:border-primary/40 transition-colors"
                type="text"
                placeholder="Insert your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/80 ml-1">
                Email
              </label>
              <input
                className="w-full bg-surface-container-high/40 border border-outline-variant/10 rounded-2xl px-6 py-4 text-on-background focus:outline-none focus:border-primary/40 transition-colors"
                type="email"
                placeholder="Insert your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/80 ml-1">
                Project
              </label>
              <textarea
                className="w-full bg-surface-container-high/40 border border-outline-variant/10 rounded-2xl px-6 py-4 text-on-background focus:outline-none focus:border-primary/40 transition-colors resize-none"
                rows="5"
                placeholder="Write your project"
                value={formData.msg}
                onChange={(e) =>
                  setFormData({ ...formData, msg: e.target.value })
                }
              ></textarea>
            </div>
            <button
              onClick={handleSend}
              disabled={loading}
              className={`w-full py-5 rounded-2xl text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] ${
                loading ? "bg-surface-container-high cursor-wait" : "bg-primary shadow-primary/20 hover:opacity-90"
              }`}
            >
              {loading ? "Sending Inquiry..." : "Send Message"}
              <span className={`material-symbols-outlined text-lg ${loading ? "animate-spin" : ""}`}>
                {loading ? "sync" : "send"}
              </span>
            </button>
            {status && (
              <p
                className={`text-center text-xs font-bold uppercase tracking-wider ${
                  status.startsWith("⚠️")
                    ? "text-yellow-500"
                    : "text-primary"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
