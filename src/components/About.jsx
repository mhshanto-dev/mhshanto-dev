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

      // Animated code lines in background
      gsap.to(".code-line", {
        x: 50,
        opacity: 0.3,
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true
        },
        duration: 2,
        ease: "sine.inOut"
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

        {/* Right Side: Typing Visual (No "Image" Card) */}
        <div className="lg:col-span-6 relative flex flex-col justify-center">
          <div className="relative group w-full">
            <div className="glass-card p-5 sm:p-8 rounded-[32px] border-white/5 backdrop-blur-3xl overflow-hidden min-h-[320px] sm:min-h-[400px] flex flex-col">
              {/* Terminal Header */}
              <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>

              {/* Typing Animation Area */}
              <div className="font-mono text-sm md:text-base space-y-3 opacity-80">
                <div className="flex gap-3 code-line">
                  <span className="text-secondary">const</span>
                  <span className="text-primary">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="flex gap-3 pl-6 code-line">
                  <span className="text-on-surface-variant">name:</span>
                  <span className="text-secondary">'Md. Mehedi Hasan Shanto'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6 code-line">
                  <span className="text-on-surface-variant">role:</span>
                  <span className="text-secondary">'Software Developer'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6 code-line">
                  <span className="text-on-surface-variant">passion:</span>
                  <span className="text-secondary">'Elegant Code'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6 code-line">
                  <span className="text-on-surface-variant">motto:</span>
                  <span className="text-secondary">'Innovate & Scale'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6 code-line">
                  <span className="text-on-surface-variant">email:</span>
                  <span className="text-secondary">'mhshanto.8989.t@gmail.com'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6 code-line">
                  <span className="text-on-surface-variant">linkedin:</span>
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">'mhshanto'</a>
                </div>
                <div className="flex gap-3 code-line">
                  <span className="text-white">{"}"}</span>
                  <span className="text-white">;</span>
                </div>
                <div className="pt-4 text-primary animate-pulse">
                  &gt; _
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
