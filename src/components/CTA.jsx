"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const CTA = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]">
      <div className="glass-card rounded-[48px] py-[100px] px-8 md:px-[64px] text-center relative overflow-hidden border-primary/20">
        {/* Ambient Glows */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 md:text-h1 text-on-background"
          >
            Your vision, my expertise
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-on-surface-variant leading-relaxed opacity-80 max-w-2xl mx-auto"
          >
            Let's collaborate to build something that pushes the boundaries of
            what's possible on the web.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <Magnetic strength={0.3}>
              <a 
                href="/hire"
                className="bg-primary text-white px-12 py-6 rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all text-xl md:text-2xl flex items-center gap-4 group"
              >
                Hire Me Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">rocket_launch</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
