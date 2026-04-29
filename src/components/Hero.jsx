"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";
import profileImg from "@/assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Software Developer", "Full Stack Developer", "Problem Solver"];

  // Cinematic Parallax
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const imageY = useTransform(scrollY, [0, 800], [0, -150]);

  useEffect(() => {
    // Initial entry animations
    gsap.from(".hero-badge", {
      opacity: 0,
      scale: 0.8,
      y: -20,
      duration: 1.5,
      ease: "expo.out",
      delay: 0.2
    });

    // Role rotation timer
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="max-w-[1200px] mx-auto px-6 pt-[140px] pb-[100px] min-h-[90vh] grid lg:grid-cols-2 items-center gap-24 relative overflow-visible"
    >
      {/* Background Cinematic Layer */}
      <motion.div style={{ y: bgY }} className="parallax-layer-bg">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px]"></div>
      </motion.div>
      
      {/* Mid Content Layer */}
      <motion.div style={{ y: textY }} className="parallax-layer-mid space-y-10 max-w-2xl">
        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Available for new projects
          </span>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-h1 text-on-background leading-tight"
          >
            Hey, <br />
            <span className="text-h2 md:text-h1 block opacity-40 font-medium tracking-tight">this is</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Mehedi Hasan Shanto
            </span>
            <span className="block text-lg md:text-xl opacity-60 font-bold uppercase tracking-[0.2em] mt-4">
              Full-Stack Developer from Bangladesh
            </span>
          </motion.div>
          
          <div className="flex items-center gap-3 text-2xl md:text-3xl font-heading font-bold text-on-surface-variant">
            <span>I'm a</span>
            <div className="relative h-10 overflow-hidden min-w-[300px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 text-primary"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg font-body-lg text-on-surface-variant max-w-lg leading-relaxed opacity-70"
          >
            I build high-performance, scalable web applications with a focus on
            modern architectures and seamless user experiences.
          </motion.p>
        </div>

        {/* Foreground UI Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="parallax-layer-fg flex flex-wrap gap-6 pt-4"
        >
          <Magnetic strength={0.2}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-500"
            >
              Start a Project
            </motion.button>
          </Magnetic>
          
          <Magnetic strength={0.2}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-outline-variant/20 bg-surface-container-high/40 backdrop-blur-xl text-on-surface px-10 py-5 rounded-2xl font-bold hover:bg-surface-container-high transition-all duration-500"
            >
              View Projects
            </motion.button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="relative lg:justify-self-end flex flex-col items-center"
      >
        <div className="relative group">
          {/* Organic Glow behind image */}
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-full p-1.5 border border-white/10 bg-surface-container-lowest relative overflow-hidden shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/40 relative">
              <Image
                src={profileImg}
                alt="Mehedi Hasan Shanto (MH Shanto) - Full-Stack Developer"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Cinematic Vignette / Edge Blending Mask */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,var(--background)_80%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
            </div>
          </div>
        </div>

        {/* Handle Underneath */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] opacity-60">mhshanto-dev</p>
        </div>

        {/* Floating Data Cards - RESPONSIVE */}
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-4 md:-left-2 lg:-left-16 top-1/4 glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center backdrop-blur-3xl border-white/10 scale-90 md:scale-100"
        >
          <span className="text-2xl md:text-3xl font-bold text-primary">1+</span>
          <span className="text-[8px] md:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
            Years Exp
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-4 md:-right-2 lg:-right-16 bottom-1/4 glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center backdrop-blur-3xl border-white/10 scale-90 md:scale-100"
        >
          <span className="text-2xl md:text-3xl font-bold text-secondary">30+</span>
          <span className="text-[8px] md:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
            Projects
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
