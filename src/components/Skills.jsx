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
        stagger: 0.2,
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

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 py-[120px]" id="skills">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="skill-card-wrap">
          <TiltCard className="h-full">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-[48px] h-full transition-colors hover:bg-surface-container-high/60 group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-5 bg-primary/10 rounded-[24px] group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    web
                  </span>
                </div>
                <span className="text-outline-variant text-[10px] font-black tracking-[0.3em] uppercase py-1 border-b border-primary/20">
                  Expertise
                </span>
              </div>
              <h3 className="font-h2 text-3xl mb-8 tracking-tight">Frontend Engineering</h3>
              <ul className="space-y-6">
                {[
                  "Architecting complex SPAs with React & Next.js",
                  "Design System implementation with Tailwind CSS",
                  "Performance profiling & Core Web Vitals optimization"
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-5 text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </TiltCard>
        </div>

        <div className="skill-card-wrap">
          <TiltCard className="h-full">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-[48px] h-full transition-colors hover:bg-surface-container-high/60 group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-5 bg-secondary/10 rounded-[24px] group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    database
                  </span>
                </div>
                <span className="text-outline-variant text-[10px] font-black tracking-[0.3em] uppercase py-1 border-b border-secondary/20">
                  Infrastructure
                </span>
              </div>
              <h3 className="font-h2 text-3xl mb-8 tracking-tight">Backend Architecture</h3>
              <ul className="space-y-6">
                {[
                  "Microservices with Node.js & Go",
                  "Database design (PostgreSQL, MongoDB, Redis)",
                  "Cloud integration (AWS, Docker, Kubernetes)"
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-5 text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-secondary text-xl">
                      check_circle
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
