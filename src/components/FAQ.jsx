"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: "What technologies do you use for development?",
      a: "I primarily use TypeScript with React or Next.js for the frontend, and Node.js with PostgreSQL or MongoDB for the backend. I'm also proficient in Docker, AWS, and modern CI/CD practices."
    },
    {
      q: "Do you take on freelance or contract work?",
      a: "Yes, I'm currently open to selective high-impact projects. Whether you need a full platform build or a performance overhaul of an existing app, I'm happy to discuss your needs."
    },
    {
      q: "What is your typical project timeline?",
      a: "Timelines vary based on complexity. A standard MVP typically takes 4-8 weeks, while enterprise-grade applications may take 3-6 months. I prioritize quality and performance in every sprint."
    }
  ];

  return (
    <section ref={sectionRef} className="max-w-[1000px] mx-auto px-6 py-[120px]" id="faq">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          F.A.Q
        </span>
        <h2 className="text-h2 text-on-background mt-3">Common Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            className="faq-item glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
          >
            <details className="group p-8" open={i === 0}>
              <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-xl">
                {faq.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="mt-6 text-on-surface-variant leading-relaxed text-lg max-w-2xl">
                {faq.a}
              </div>
            </details>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
