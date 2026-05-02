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
      period: "2017 — 2018",
      icon: "🏫",
      role: "Secondary School Certificate (SSC)",
      company: "Dhangora Model High School",
      board: "Board of Intermediate & Secondary Education, Rajshahi",
      gpa: "GPA 5.00",
      tags: ["Science", "Math Olympiad", "Science Fair"],
      description:
        "Completed SSC in Science with the highest distinction — GPA 5.00. Focused on Physics, Chemistry, Biology & Mathematics. Actively participated in Science Fairs, Math Olympiad training, and school debates. These experiences strengthened problem‑solving ability, analytical thinking, and teamwork.",
      color: "bg-primary",
      accent: "text-primary",
      glow: "shadow-[0_0_20px_rgba(37,99,235,0.4)]",
    },
    {
      period: "2019 — 2020",
      icon: "🎓",
      role: "Higher Secondary Certificate (HSC)",
      company: "Islamia Government College",
      board: "Board of Intermediate & Secondary Education, Rajshahi",
      gpa: "GPA 5.00",
      tags: ["Science", "Hackathons", "Coding Contests", "Debate"],
      description:
        "Completed HSC in Science with GPA 5.00. Focused on advanced Physics, Chemistry, Biology, and Mathematics. Actively engaged in hackathons, coding contests, and science fairs. Contributed to debate team and peer tutoring — built strong foundations for Computer Science.",
      color: "bg-secondary",
      accent: "text-secondary",
      glow: "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    },
    {
      period: "2025 — Present",
      icon: "💻",
      role: "Full Stack Developer Journey",
      company: "Self-Taught · Freelance Projects",
      board: "MERN Stack · Next.js · Problem Solving",
      gpa: "30+ Projects",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
      description:
        "Started my programming journey with a deep focus on the MERN stack. Built 30+ real-world projects including ecommerce platforms, social media apps, and developer tools. Constantly leveling up through open-source contributions, UI/UX exploration, and full-stack problem solving.",
      color: "bg-primary",
      accent: "text-primary",
      glow: "shadow-[0_0_20px_rgba(37,99,235,0.4)]",
    },
    {
      period: "2026 — Future",
      icon: "🚀",
      role: "Growing as a Software Engineer",
      company: "Open to Opportunities · Remote & Onsite",
      board: "Next.js · TypeScript · System Design",
      gpa: "Available Now",
      tags: ["TypeScript", "System Design", "Open Source", "SaaS"],
      description:
        "Currently expanding into TypeScript, system design, and scalable SaaS architecture. Actively seeking full-time or freelance roles where I can contribute to impactful products and grow as a professional software engineer.",
      color: "bg-secondary",
      accent: "text-secondary",
      glow: "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    },
  ];

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 py-[140px]" id="timeline">
      <div className="text-center mb-24">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Evolution
        </span>
        <h2 className="font-h2 text-4xl mt-2">Journey &amp; Milestones</h2>
        <p className="text-on-surface-variant/60 mt-4 text-sm max-w-md mx-auto leading-relaxed">
          From science classrooms to full-stack codebases — a continuous journey of learning and building.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto timeline-container">
        {/* Animated vertical line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-secondary to-transparent opacity-30 hidden md:block"
        />

        <div className="space-y-16">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="timeline-item relative grid md:grid-cols-2 gap-8 md:gap-16 items-start"
            >
              {/* ---- LEFT SIDE ---- */}
              <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                {i % 2 === 0 ? (
                  /* Even → info card on left */
                  <div className="text-right md:pr-12">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${m.accent} opacity-70`}>
                      {m.period}
                    </span>
                    <h4 className="text-xl font-black text-on-background mt-1 leading-snug">
                      {m.icon} {m.role}
                    </h4>
                    <p className="text-sm font-semibold text-on-surface-variant mt-1">{m.company}</p>
                    <p className="text-[11px] text-on-surface-variant/50 mt-0.5">{m.board}</p>
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${m.accent} bg-primary/10 border border-primary/20`}>
                      ★ {m.gpa}
                    </span>
                  </div>
                ) : (
                  /* Odd → description card on left */
                  <TimelineCard m={m} align="left" />
                )}
              </div>

              {/* Center dot (desktop only) */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${m.color} ${m.glow} border-[4px] border-background z-10 hidden md:block top-1`}
              />

              {/* ---- RIGHT SIDE ---- */}
              <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                {i % 2 === 0 ? (
                  /* Even → description card on right */
                  <TimelineCard m={m} align="left" />
                ) : (
                  /* Odd → info card on right */
                  <div className="md:pl-12">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${m.accent} opacity-70`}>
                      {m.period}
                    </span>
                    <h4 className="text-xl font-black text-on-background mt-1 leading-snug">
                      {m.icon} {m.role}
                    </h4>
                    <p className="text-sm font-semibold text-on-surface-variant mt-1">{m.company}</p>
                    <p className="text-[11px] text-on-surface-variant/50 mt-0.5">{m.board}</p>
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${m.accent} bg-secondary/10 border border-secondary/20`}>
                      ★ {m.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ m, align = "left" }) => (
  <div
    className={`glass-card p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all duration-500 group`}
  >
    <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-4">
      {m.description}
    </p>
    <div className={`flex flex-wrap gap-2 ${align === "right" ? "justify-end" : ""}`}>
      {m.tags.map((tag, ti) => (
        <span
          key={ti}
          className="px-2.5 py-1 bg-surface-container-high rounded-lg text-[9px] font-bold uppercase tracking-wider text-on-surface-variant/60 border border-outline-variant/10 group-hover:border-primary/20 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Timeline;
