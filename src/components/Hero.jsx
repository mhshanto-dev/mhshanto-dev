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
  const [isGlitching, setIsGlitching] = useState(false);
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Mern Stack Developer",
  ];
  
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const sequence = ["Hey,", "this is", "Mehedi Hasan Shanto"];

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

    // Sequence rotation timer (Hey, this is, Name)
    const seqInterval = setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % sequence.length);
    }, 2500);

    // Role rotation timer with glitch effect
    const roleInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsGlitching(false);
      }, 300);
    }, 3200);

    return () => {
      clearInterval(seqInterval);
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-[100px] sm:pt-[130px] lg:pt-[140px] pb-[60px] sm:pb-[100px] min-h-screen grid lg:grid-cols-2 items-center gap-10 lg:gap-24 relative overflow-visible"
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

        <div className="space-y-4 sm:space-y-6">
          <div className="h-[90px] sm:h-[120px] md:h-[160px] flex items-center overflow-visible">
            <AnimatePresence mode="wait">
              <motion.h1
                key={sequenceIndex}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`text-[2.4rem] sm:text-[3.5rem] md:text-h1 leading-tight tracking-tighter ${
                  sequenceIndex === 2
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-black"
                    : "text-on-background opacity-80"
                }`}
              >
                {sequence[sequenceIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="block text-sm sm:text-lg md:text-xl opacity-60 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              Full-Stack Developer from Bangladesh
            </span>

            {/* Animated Role Rotator */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xl sm:text-2xl md:text-3xl font-heading font-bold text-on-surface-variant">
              <span className="shrink-0">I&apos;m a</span>
              <div
                className="relative h-10 sm:h-12 overflow-hidden"
                style={{ minWidth: "clamp(160px, 50vw, 380px)" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      filter: isGlitching ? "blur(4px)" : "blur(0px)",
                      x: isGlitching
                        ? [0, -4, 4, -2, 2, 0]
                        : 0,
                      color: isGlitching
                        ? ["var(--primary)", "#ff4ecd", "var(--primary)"]
                        : "var(--primary)",
                    }}
                    exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      x: { duration: 0.3, repeat: isGlitching ? 1 : 0 },
                      color: { duration: 0.3 },
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-primary font-black whitespace-nowrap"
                    style={{ textShadow: "0 0 20px var(--primary-container)" }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>

                {/* Underline accent bar */}
                <motion.div
                  key={`bar-${roleIndex}`}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-primary via-secondary to-transparent"
                />
              </div>
            </div>

            {/* Role Dots Indicator */}
            <div className="flex gap-2 pt-1">
              {roles.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === roleIndex ? 24 : 6,
                    opacity: i === roleIndex ? 1 : 0.3,
                    backgroundColor:
                      i === roleIndex ? "var(--primary)" : "var(--outline)",
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1.5 rounded-full cursor-pointer"
                  onClick={() => setRoleIndex(i)}
                />
              ))}
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
          className="parallax-layer-fg flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
        >
          <Magnetic strength={0.2}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-primary text-white px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-500 text-sm sm:text-base"
            >
              Start a Project
            </motion.button>
          </Magnetic>

          <Magnetic strength={0.2}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border border-outline-variant/20 bg-surface-container-high/40 backdrop-blur-xl text-on-surface px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold hover:bg-surface-container-high transition-all duration-500 text-sm sm:text-base"
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

          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full p-1.5 border border-white/10 bg-surface-container-lowest relative overflow-hidden shadow-2xl">
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

        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] opacity-60">mhshanto-dev</p>
        </div>

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-2 sm:-left-4 lg:-left-16 top-1/4 glass-card p-3 sm:p-5 rounded-2xl shadow-2xl flex flex-col items-center backdrop-blur-3xl border-white/10"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">2+</span>
          <span className="text-[7px] sm:text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
            Years Exp
          </span>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-2 sm:-right-4 lg:-right-16 bottom-1/4 glass-card p-3 sm:p-5 rounded-2xl shadow-2xl flex flex-col items-center backdrop-blur-3xl border-white/10"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">30+</span>
          <span className="text-[7px] sm:text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
            Projects
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
