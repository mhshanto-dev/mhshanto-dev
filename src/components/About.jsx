"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/assets/about_cartoon.png";

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
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 py-[140px] relative overflow-hidden" id="about">
      {/* Background Cartoon Layer (The "Image na dia" feel - integrated into background) */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none select-none">
        <Image
          src={aboutImg}
          alt="Background Visual"
          className="w-full h-full object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-background" />
      </div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Side: About Info */}
        <div className="lg:col-span-6 space-y-10">
          <div className="about-heading space-y-4">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
              The Architect
            </span>
            <h2 className="text-h2 text-on-background">
              About Me
            </h2>
          </div>

          <div className="space-y-8">
            <div className="about-content-item">
              <p className="text-xl font-medium text-on-background leading-relaxed">
                I'm Mehedi Hasan Shanto (MH Shanto), a Full-Stack Developer based in Bangladesh (Dhaka, Sirajganj, Rajshahi) with a deep-seated passion for high-performance digital experiences.
              </p>
            </div>
            
            <div className="about-content-item">
              <p className="text-on-surface-variant leading-relaxed text-lg">
                I specialize in Frontend and Backend development, bridging the gap between complex logic and intuitive interfaces. Whether it's building scalable architectures or crafting pixel-perfect interactive frontends, I focus on delivering code that is as clean as it is impactful.
              </p>
            </div>

            <div className="about-content-item grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-3xl font-black text-primary">30+</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant opacity-60 mt-1">Projects Finished</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-secondary">1+</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant opacity-60 mt-1">Year Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Typing Visual (No "Image" Card) */}
        <div className="lg:col-span-6">
          <div className="relative group">
            <div className="glass-card p-8 rounded-[32px] border-white/5 backdrop-blur-3xl overflow-hidden min-h-[400px] flex flex-col">
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

              {/* Cartoon image integrated subtly in the background of the card */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <Image
                  src={aboutImg}
                  alt="Cartoon Subtle"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
