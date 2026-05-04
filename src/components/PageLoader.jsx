"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative">
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-[12rem] font-black text-on-background/5 select-none leading-none"
            >
                {progress}%
            </motion.div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mb-8 text-center"
                >
                  <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-on-background to-primary bg-[length:200%_auto] animate-shimmer">
                    MH SHANTO
                  </h1>
                </motion.div>
                
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-on-surface-variant/60">
                          System Initializing
                      </p>
                    </div>
                    <div className="w-64 h-[2px] bg-surface-container-high rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-primary shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
          </div>

          <div className="absolute bottom-12 text-center">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40">
              Crafting Digital Excellence
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
