"use client";

import { motion } from "framer-motion";

const AIExperience = () => {
  const pillars = [
    {
      title: "OpenAI API Integration",
      desc: "Developing Next.js and Node.js backend routes that interact with OpenAI API endpoints (like GPT-4o). Orchestrating server-side inference for dynamic context parsing, text processing, and AI assistants.",
      icon: "smart_toy",
      color: "text-rose-400",
      bg: "bg-rose-400/10 group-hover:bg-rose-400/20"
    },
    {
      title: "RAG System Awareness",
      desc: "Clear structural understanding of Retrieval-Augmented Generation (RAG). Extracting static content, semantic chunking, generating vector embeddings, and retrieving context to ground model inferences.",
      icon: "schema",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10 group-hover:bg-cyan-400/20"
    },
    {
      title: "Prompt & Schema Tuning",
      desc: "Designing precise system instructions, user context wrappers, few-shot prompting templates, and managing hyper-parameters (temperature, top_p) to guarantee strictly schema-compliant JSON outputs.",
      icon: "tune",
      color: "text-amber-400",
      bg: "bg-amber-400/10 group-hover:bg-amber-400/20"
    },
    {
      title: "Native AI Assistant",
      desc: "Implemented this knowledge directly in this portfolio! Engineered the stateful, client-side conversational assistant below to provide visitors and recruiters with instant details of my tech stack.",
      icon: "chat",
      color: "text-purple-400",
      bg: "bg-purple-400/10 group-hover:bg-purple-400/20"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px] relative overflow-hidden" id="ai-experience">
      {/* Background Graphic Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[140px] -z-10 animate-pulse" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual Interactive Architecture Diagram */}
        <div className="order-2 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-card p-8 md:p-10 relative overflow-hidden bg-[#0d0a0f]/80 border-rose-500/10 shadow-3xl rounded-[32px]"
          >
             {/* Dynamic neon blur behind diagram */}
             <div className="absolute -top-10 -right-10 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

             <div className="space-y-6 relative z-10">
                <h3 className="font-bold text-lg text-white tracking-wide border-b border-white/5 pb-4 flex items-center gap-3 font-heading">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                  Cognitive System Architecture
                </h3>

                {/* Input Layer */}
                <div className="p-4 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase text-on-surface-variant tracking-wider block">Input Interface</span>
                    <p className="text-xs text-white font-medium">User: &quot;What are Shanto&apos;s Next.js skills?&quot;</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">arrow_downward</span>
                </div>

                {/* Orchestrator Nodes */}
                <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-rose-400 text-xl">psychology</span>
                    <span className="text-xs font-black uppercase text-rose-300 tracking-wider">Contextualizer Node</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-on-surface-variant font-medium">
                    <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      RAG Context Injection
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      Structured System Prompt
                    </div>
                  </div>
                </div>

                {/* Inference Gateway */}
                <div className="p-4 rounded-xl bg-[#201015]/40 border border-rose-500/20 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase text-rose-400 tracking-wider block">AI Inference Core</span>
                    <p className="text-xs text-white font-bold">OpenAI GPT-4o Gateway</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-rose-500/20 text-rose-400 text-[9px] font-black uppercase tracking-widest">Active</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Right Side: Description and Structured Pillars */}
        <div className="order-1 lg:order-2 space-y-10">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] block">
              Cognitive Engineering
            </span>
            <h2 className="text-h2 text-on-background mt-3 mb-6 font-heading">
              AI Integration <br /> Experience
            </h2>
            <p className="text-on-surface-variant/70 text-lg leading-relaxed max-w-lg">
              I build web applications that don&apos;t just store information, but process it intelligently. By integrating Large Language Models and prompt environments, I bridge the gap between traditional full-stack systems and cognitive capabilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="space-y-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${p.bg}`}>
                    <span className={`material-symbols-outlined ${p.color} text-xl group-hover:scale-110 transition-transform duration-500`}>
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-on-background text-base font-heading">{p.title}</h3>
                </div>
                <p className="text-xs text-on-surface-variant/60 leading-relaxed pl-13">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExperience;
