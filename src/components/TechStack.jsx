"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
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

  const techs = [
    {
      name: "JavaScript",
      icon: "javascript",
      color: "text-yellow-400",
      skills: ["ES6+ Modern Syntax", "DOM Manipulation / API Handling"]
    },
    {
      name: "TypeScript",
      icon: "code_blocks",
      color: "text-blue-500",
      skills: ["Type Safety System", "Scalable Code Structure"]
    },
    {
      name: "React",
      icon: "deployed_code",
      color: "text-cyan-400",
      skills: ["Component-Based Architecture", "State Management (Hooks)"]
    },
    {
      name: "Node.js",
      icon: "terminal",
      color: "text-green-500",
      skills: ["Backend API Development", "Server-Side Logic"]
    },
    {
      name: "Deployment",
      icon: "cloud_upload",
      color: "text-purple-400",
      skills: ["Vercel / Netlify Deployment", "Production Build Optimization"]
    },
    {
      name: "Terminal",
      icon: "keyboard",
      color: "text-slate-400",
      skills: ["Git & CLI Commands", "Project Automation Workflow"]
    }
  ];

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 py-[120px]" id="skills">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Technical Expertise
        </span>
        <h2 className="text-h2 text-on-background mt-3">
          My Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techs.map((tech, i) => (
          <Magnetic key={i} strength={0.1}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="tech-card glass-card p-8 group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:border-primary/20 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center transition-colors group-hover:bg-primary/10`}>
                  <span className={`material-symbols-outlined ${tech.color} text-3xl group-hover:scale-110 transition-transform duration-500`}>
                    {tech.icon}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-outline-variant/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="material-symbols-outlined text-sm text-primary">north_east</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-on-background mb-4 font-heading">
                {tech.name}
              </h3>
              
              <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 h-0 group-hover:h-auto overflow-hidden">
                {tech.skills.map((skill, si) => (
                  <li key={si} className="flex items-center gap-3 text-sm text-on-surface-variant/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
