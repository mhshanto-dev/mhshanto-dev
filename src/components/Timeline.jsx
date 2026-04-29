"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      gsap.from(".timeline-item", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      period: "2021 — Present",
      role: "Senior Engineer",
      company: "Tech Giants Inc.",
      description: "Leading frontend architecture and mentoring junior developers in a distributed team environment, focusing on scale and performance.",
      color: "bg-primary",
      glow: "glow-primary"
    },
    {
      period: "2018 — 2021",
      role: "Full Stack Lead",
      company: "Startup Lab",
      description: "Built and scaled a SaaS platform from MVP to 50k active users, managing the entire technical stack and roadmap.",
      color: "bg-secondary",
      glow: "shadow-[0_0_20px_rgba(221,184,255,0.4)]"
    },
    {
      period: "2014 — 2018",
      role: "BSc Computer Science",
      company: "University of Engineering",
      description: "Specialized in Distributed Systems and Human-Computer Interaction. Graduated with honors.",
      color: "bg-primary",
      glow: "glow-primary"
    }
  ];

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 py-[140px]" id="timeline">
      <div className="text-center mb-24">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Evolution
        </span>
        <h2 className="font-h2 text-4xl mt-2">Journey & Milestones</h2>
      </div>

      <div className="relative max-w-4xl mx-auto timeline-container">
        {/* Animated Line */}
        <div 
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent opacity-40"
        ></div>

        <div className="space-y-24">
          {milestones.map((m, i) => (
            <div key={i} className="timeline-item relative grid md:grid-cols-2 gap-16 items-center">
              <div className={`${i % 2 === 0 ? "text-right md:pr-12" : "md:pr-12 md:order-1 order-2 md:text-right"}`}>
                <div className={`${i % 2 === 0 ? "text-primary" : "text-secondary"} font-bold text-xl mb-1`}>
                  {m.period}
                </div>
                <h4 className="text-2xl font-bold mb-2">{m.role}</h4>
                <p className="text-slate-500 font-medium">{m.company}</p>
              </div>

              {/* Point */}
              <div className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${m.color} ${m.glow} border-[5px] border-background z-10 hidden md:block`}></div>

              <div className={`${i % 2 === 0 ? "md:pl-12" : "md:pl-12 md:order-2 order-1"}`}>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
