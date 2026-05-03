"use client";

import { motion } from "framer-motion";

const AssignmentShowcase = () => {
  const assignments = [
    { id: 1, title: "Assignment 01", marks: 60, total: 60, status: "Perfect" },
    { id: 2, title: "Assignment 02", marks: 60, total: 60, status: "Perfect" },
    { id: 3, title: "Assignment 03", marks: 60, total: 60, status: "Perfect" },
    { id: 4, title: "Assignment 04", marks: 60, total: 60, status: "Perfect" },
    { id: 5, title: "Assignment 05", marks: 60, total: 60, status: "Perfect" },
    { id: 6, title: "Assignment 06", marks: 60, total: 60, status: "Perfect" },
    { id: 7, title: "Assignment 07", marks: 59, total: 60, status: "Excellent" },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="assignments">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Academic Excellence
        </span>
        <h2 className="text-h2 text-on-background mt-3">
          Consistency is Key
        </h2>
        <p className="text-on-surface-variant/60 mt-4 max-w-lg mx-auto text-sm">
          A showcase of my dedication and performance during my specialized training at Programming Hero.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {assignments.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center relative group hover:border-primary/40 transition-all duration-500 w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1rem)] xl:w-[calc(14.28%-1rem)] min-w-[140px]"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-2 block">
                {item.title}
              </span>
              <div className="text-3xl font-black text-on-background mb-1">
                {item.marks}
                <span className="text-xs text-on-surface-variant/40 font-normal">/{item.total}</span>
              </div>
              <div className={`text-[9px] font-bold px-2 py-0.5 rounded-full inline-block ${
                item.marks === 60 ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"
              }`}>
                {item.status}
              </div>
            </div>

            {/* Background Icon */}
            <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-primary/5 text-6xl pointer-events-none group-hover:text-primary/10 transition-colors">
              verified
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 glass-card p-8 md:p-12 border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-4xl">emoji_events</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-on-background mb-3 font-heading">Programming Hero Journey</h3>
            <p className="text-on-surface-variant/70 leading-relaxed max-w-3xl">
              Throughout my journey at Programming Hero, I maintained a near-perfect track record in all conceptual assignments. 
              This consistency reflects my commitment to mastering every technology I touch, from core JavaScript to complex Full-Stack architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentShowcase;
