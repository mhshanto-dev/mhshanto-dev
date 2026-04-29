"use client";

import { useState, useEffect, useRef } from "react";

const CONTEXT = `You are the AI assistant embedded in Mehedi Hasan Shanto's developer portfolio website.
About Shanto:
- Software Developer / Full Stack Engineer with 1+ year experience
- Skills: React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Tailwind CSS, GSAP
- Email: mhshanto.8989.t@gmail.com
- LinkedIn: mehedi-hasan-shanto-dev
- Completed 30+ projects focused on performance and modern UI/UX
- Open to high-impact freelance / contract work
Answer visitor questions concisely (2-4 sentences) and in a friendly, professional tone.
If unsure, invite them to email: mhshanto.8989.t@gmail.com`;

const QUICK_PROMPTS = [
  "What are your skills?",
  "Tell me about your projects",
  "Available for freelance?",
  "How to contact you?",
];

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Greeting
    const timer = setTimeout(() => {
      addMessage("ai", "Hi! 👋 I'm Shanto's AI assistant. Ask me about his skills, projects, or how to work together!");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const addMessage = (role, text) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  const sendMsg = async (text) => {
    if (!text.trim() || isTyping) return;

    setInput("");
    setIsTyping(true);
    addMessage("user", text);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate thinking
      
      let reply = "";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("skill")) {
        reply = "Shanto is highly proficient in React, Next.js, TypeScript, and Node.js. He also specializes in modern styling with Tailwind CSS and advanced animations using GSAP and Framer Motion.";
      } else if (lowerText.includes("project")) {
        reply = "He has successfully completed over 30 projects, ranging from scalable web applications to high-performance interactive portfolios. He focuses on pushing the boundaries of what's possible on the web.";
      } else if (lowerText.includes("freelance") || lowerText.includes("work")) {
        reply = "Absolutely! Shanto is currently open to selective high-impact freelance projects. You can reach out directly via the contact section or by clicking the WhatsApp button.";
      } else if (lowerText.includes("contact") || lowerText.includes("email")) {
        reply = "You can contact him directly at mhshanto.8989.t@gmail.com or connect on LinkedIn at 'mehedi-hasan-shanto-dev'.";
      } else {
        reply = "That's a great question! Mehedi Hasan Shanto is a Software Developer focused on building modern, high-performance digital solutions. For more specific details, feel free to email him at mhshanto.8989.t@gmail.com.";
      }

      setIsTyping(false);
      addMessage("ai", reply);
      
    } catch (error) {
      setIsTyping(false);
      addMessage("ai", "Oops! I encountered a connection issue. Feel free to email Shanto at mhshanto.8989.t@gmail.com 📧");
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="ai-chat">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          AI ASSISTANT
        </span>
        <h2 className="text-h2 text-on-background mt-3">
          Chat With My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            AI
          </span>
        </h2>
        <p className="text-on-surface-variant mt-4 text-lg">
          Ask anything about my skills, projects, or experience
        </p>
      </div>

      <div className="max-w-[760px] mx-auto">
        <div className="ai-gradient-border">
          <div className="ai-chat-inner">
            <div
              className="flex items-center gap-3 px-6 py-4 border-b border-white/5"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,var(--color-primary),var(--color-secondary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
              <div>
                <p className="text-sm font-bold text-white font-heading">
                  Shanto's AI Assistant
                </p>
                <p className="text-xs text-green-400">
                  <span className="ai-status-dot"></span>Online — ready to chat
                </p>
              </div>
            </div>

            <div className="ai-messages-area" ref={containerRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`msg ${msg.role}`}>
                  <div className="msg-avatar">
                    {msg.role === "ai" ? "🤖" : "👤"}
                  </div>
                  <div className="msg-bubble">{msg.text}</div>
                </div>
              ))}
              {isTyping && (
                <div className="msg ai">
                  <div className="msg-avatar">🤖</div>
                  <div className="msg-bubble">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {QUICK_PROMPTS.map((q, i) => (
                <button
                  key={i}
                  className="quick-btn"
                  onClick={() => sendMsg(q)}
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="flex gap-3 items-center px-5 py-4 border-t border-white/5">
              <input
                className="ai-input"
                type="text"
                placeholder="Ask me anything about Shanto..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMsg(input)}
                disabled={isTyping}
              />
              <button
                className="ai-send-btn"
                onClick={() => sendMsg(input)}
                disabled={isTyping}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;

// Adding necessary styles for the AI Chat component
const styles = `
  .ai-gradient-border {
    padding: 1px;
    border-radius: 32px;
    background: linear-gradient(135deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2));
    backdrop-filter: blur(20px);
  }
  .ai-chat-inner {
    background: var(--glass-bg);
    border-radius: 31px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .ai-messages-area {
    height: 400px;
    overflow-y: auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    scroll-behavior: smooth;
  }
  .msg {
    display: flex;
    gap: 12px;
    max-width: 85%;
  }
  .msg.user {
    align-self: flex-end;
    flex-direction: row-reverse;
  }
  .msg.ai {
    align-self: flex-start;
  }
  .msg-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--surface-container-high);
    display: flex;
    items-center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
  }
  .msg-bubble {
    padding: 12px 18px;
    border-radius: 20px;
    font-size: 14px;
    line-height: 1.5;
  }
  .user .msg-bubble {
    background: var(--color-primary);
    color: white;
    border-bottom-right-radius: 4px;
  }
  .ai .msg-bubble {
    background: var(--surface-container-highest);
    color: var(--on-background);
    border-bottom-left-radius: 4px;
  }
  .ai-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--on-background);
    font-size: 14px;
  }
  .ai-send-btn {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--surface-container-high);
    display: flex;
    items-center;
    justify-content: center;
    transition: all 0.3s;
  }
  .ai-send-btn:hover:not(:disabled) {
    background: var(--color-primary);
    color: white;
  }
  .typing-dot {
    display: inline-block;
    width: 4px;
    height: 4px;
    background: var(--on-surface-variant);
    border-radius: 50%;
    margin-right: 3px;
    animation: typing 1.4s infinite;
  }
  .typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes typing {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-4px); }
  }
  .ai-status-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    margin-right: 6px;
  }
`;

if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}
