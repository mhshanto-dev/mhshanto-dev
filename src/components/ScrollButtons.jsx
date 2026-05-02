"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollButtons = () => {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  const sections = ["home", "achievements", "about", "services", "backend", "process", "skills", "projects", "codeshowcase", "assignments", "timeline", "faq", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowUp(scrollY > 300);
      const bottom = document.documentElement.scrollHeight - window.innerHeight - 100;
      setShowDown(scrollY < bottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const scrollY = window.scrollY;
    let nextSection = null;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop > scrollY + 150) {
        nextSection = el;
        break;
      }
    }

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[9999] pointer-events-none">
      <AnimatePresence>
        {showUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center text-on-background shadow-2xl border border-outline-variant/20 hover:bg-primary-container hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm sm:text-base">north</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDown && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToNext}
            className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center text-on-background shadow-2xl border border-outline-variant/20 hover:bg-primary-container hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm sm:text-base">south</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollButtons;
