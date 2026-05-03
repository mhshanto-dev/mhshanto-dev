"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        opacity: 0,
        x: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".about-content-item", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".bento-item", {
        opacity: 0,
        scale: 0.8,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[120px] lg:py-[140px] relative overflow-hidden" id="about">

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-center relative z-10">
        <div className="lg:col-span-6 space-y-10">
          <div className="about-heading space-y-4">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
              The Architect
            </span>
            <h2 className="text-h2 text-on-background">
              About Me
            </h2>
          </div>

          <div className="space-y-6">
            <div className="about-content-item">
              <p className="text-base sm:text-lg lg:text-xl font-medium text-on-background leading-relaxed">
                I'm Mehedi Hasan Shanto (MH Shanto), a Full-Stack Developer based in Bangladesh with a passion for high-performance digital experiences.
              </p>
            </div>
            
            <div className="about-content-item">
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base lg:text-lg">
                I specialize in Frontend and Backend development, bridging the gap between complex logic and intuitive interfaces. Whether it's building scalable architectures or crafting pixel-perfect interactive frontends, I focus on delivering code that is as clean as it is impactful.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Bento Grid */}
        <div className="lg:col-span-6 relative flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            {/* Box 1: Problem Solver */}
            <div className="bento-item col-span-2 glass-card p-8 rounded-[32px] border border-white/5 hover:border-primary/30 transition-all duration-500 flex items-center justify-between group overflow-hidden relative min-h-[160px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h4 className="text-2xl sm:text-3xl font-black text-on-background mb-2">Problem Solver</h4>
                <p className="text-on-surface-variant">Turning complex ideas into elegant, scalable solutions.</p>
              </div>
              <span className="material-symbols-outlined text-6xl sm:text-7xl text-on-surface-variant/10 group-hover:text-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 relative z-10">
                extension
              </span>
            </div>

            {/* Box 2: Clean Code */}
            <div className="bento-item col-span-2 sm:col-span-1 glass-card p-6 rounded-[32px] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[180px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl text-blue-400">code_blocks</span>
              </div>
              <h4 className="text-xl font-bold text-on-background">Clean Code</h4>
              <p className="text-xs text-on-surface-variant mt-2 tracking-widest uppercase font-bold">Architecture</p>
            </div>

            {/* Box 3: Fast Performance */}
            <div className="bento-item col-span-2 sm:col-span-1 glass-card p-6 rounded-[32px] border border-white/5 hover:border-[#FFD700]/30 transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[180px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl text-[#FFD700]">rocket_launch</span>
              </div>
              <h4 className="text-xl font-bold text-on-background">Lightning Fast</h4>
              <p className="text-xs text-on-surface-variant mt-2 tracking-widest uppercase font-bold">Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
