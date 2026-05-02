"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const snippets = [
    {
      title: "Optimized Auth",
      language: "javascript",
      code: `// NextAuth Configuration
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};`,
      description: "Secure, scalable authentication setup using NextAuth for modern web apps."
    },
    {
      title: "GSAP Animation",
      language: "javascript",
      code: `// Cinematic Scroll Trigger
gsap.from(".hero-text", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
});`,
      description: "Creating high-end cinematic animations with scroll-based interactions."
    },
    {
      title: "Mongoose Schema",
      language: "javascript",
      code: `// Scalable Product Model
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  stock: { type: Number, default: 0 },
  metadata: { type: Map, of: String }
}, { timestamps: true });`,
      description: "Well-structured database schemas for complex ecommerce platforms."
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="codeshowcase">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Technical Depth
        </span>
        <h2 className="text-h2 text-on-background mt-3">
          Behind the Scenes
        </h2>
        <p className="text-on-surface-variant/60 mt-4 max-w-lg mx-auto text-sm">
          A glimpse into the clean, optimized code I write to power high-performance applications.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {snippets.map((snippet, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`p-6 rounded-2xl text-left transition-all duration-500 border ${
                activeTab === i 
                ? "bg-primary/10 border-primary/30 shadow-xl" 
                : "bg-surface-container-high/40 border-white/5 hover:bg-surface-container-high hover:border-white/10"
              }`}
            >
              <h3 className={`font-bold mb-2 ${activeTab === i ? "text-primary" : "text-on-background"}`}>
                {snippet.title}
              </h3>
              <p className="text-xs text-on-surface-variant/60 leading-relaxed">
                {snippet.description}
              </p>
            </button>
          ))}
        </div>

        {/* Code Preview */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-[32px] border-white/5 overflow-hidden shadow-2xl bg-[#0d1117]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                {snippets[activeTab].language}.js
              </span>
            </div>
            <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto text-white/80">
              <pre>
                <code>{snippets[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
