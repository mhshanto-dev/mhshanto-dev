"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card-wrap", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Engineering",
      subtitle: "UI & Presentation",
      icon: "web",
      color: "text-primary",
      bg: "bg-primary/10",
      borderHover: "hover:border-primary/30",
      skills: [
        "Architecting robust SPAs using React & Next.js",
        "Modern responsive layouts with Tailwind CSS",
        "Micro-interactions using GSAP & Framer Motion",
        "Performance optimization (Core Web Vitals & SEO)"
      ]
    },
    {
      title: "Backend Architecture",
      subtitle: "APIs & Security",
      icon: "dns",
      color: "text-secondary",
      bg: "bg-secondary/10",
      borderHover: "hover:border-secondary/30",
      skills: [
        "REST API design using Node.js & Express",
        "Secure auth schemas (JWT & HTTP-only cookies)",
        "System integration, request handling, & endpoints",
        "Error handling patterns & modular clean routing"
      ]
    },
    {
      title: "Database Systems",
      subtitle: "Data & Storage",
      icon: "database",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      borderHover: "hover:border-amber-500/30",
      skills: [
        "NoSQL Database design with MongoDB Atlas",
        "Writing aggregation pipelines & data models",
        "Relational structure basics (SQL & PostgreSQL)",
        "Query profiling & indexing for performance"
      ]
    },
    {
      title: "Developer Tools",
      subtitle: "Workflows & Cloud",
      icon: "construction",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      borderHover: "hover:border-emerald-500/30",
      skills: [
        "Version control with Git & GitHub workflows",
        "API testing & debugging using Postman",
        "Automated CI/CD deployments on Vercel & Netlify",
        "Package managers (NPM, Yarn) & node environments"
      ]
    },
    {
      title: "AI Integration (New)",
      subtitle: "Cognitive Capabilities",
      icon: "psychology",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      borderHover: "hover:border-rose-500/30",
      skills: [
        "Connecting endpoints with OpenAI API models (GPT-4o)",
        "Context and prompt engineering for dynamic tasks",
        "Concept awareness of RAG (Retrieval-Augmented Generation)",
        "Embedding chatbots and intelligent agents in portals"
      ],
      isNew: true
    }
  ];

  return (
    <section ref={sectionRef} className="max-w-[1400px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[120px]" id="skills">
      <div className="mb-16 text-center">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Structured Capabilities
        </span>
        <h2 className="text-h2 text-on-background mt-3 font-heading">
          Technical Skills &amp; Specialties
        </h2>
        <p className="text-on-surface-variant/60 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
          Reorganized into target specialties to highlight professional stack preparedness, server security, and AI integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
        {skillCategories.map((cat, i) => (
          <div key={i} className={`skill-card-wrap ${cat.isNew ? "md:col-span-2 lg:col-span-1" : ""}`}>
            <TiltCard className="h-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`glass-card p-8 h-full transition-colors hover:bg-surface-container-high/60 group relative overflow-hidden border border-white/5 ${cat.borderHover}`}
              >
                {/* Visual Glow behind AI card */}
                {cat.isNew && (
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-rose-500/10 rounded-full blur-xl pointer-events-none" />
                )}

                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-[20px] ${cat.bg} group-hover:scale-110 transition-transform duration-500`}>
                    <span className={`material-symbols-outlined ${cat.color} text-3xl`}>
                      {cat.icon}
                    </span>
                  </div>
                  <span className="text-outline-variant text-[9px] font-black tracking-[0.25em] uppercase py-1 border-b border-white/10">
                    {cat.subtitle}
                  </span>
                </div>

                <h3 className="font-h2 text-2xl mb-6 tracking-tight flex items-center gap-2 text-on-background font-heading font-bold">
                  {cat.title}
                  {cat.isNew && (
                    <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[8px] font-bold uppercase tracking-wider animate-pulse">
                      Hot
                    </span>
                  )}
                </h3>

                <ul className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <li key={si} className="flex items-start gap-4 text-on-surface-variant font-medium text-sm leading-relaxed">
                      <span className={`material-symbols-outlined ${cat.color} text-lg shrink-0 mt-0.5`}>
                        check_circle
                      </span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
