"use client";

import { motion } from "framer-motion";

const WorkingProcess = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "Deep diving into your goals, audience, and technical requirements to define the roadmap.",
      icon: "search",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Design",
      desc: "Creating high-fidelity mockups and interactive prototypes that prioritize user experience.",
      icon: "architecture",
      color: "bg-cyan-500/10 text-cyan-500"
    },
    {
      title: "Development",
      desc: "Writing clean, scalable code using modern technologies like React, Next.js, and Node.js.",
      icon: "code",
      color: "bg-indigo-500/10 text-indigo-500"
    },
    {
      title: "Launch",
      desc: "Rigorous testing and optimization followed by a smooth deployment to the production environment.",
      icon: "auto_awesome",
      color: "bg-emerald-500/10 text-emerald-500"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="process">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
            Methodology
          </span>
          <h2 className="text-h2 text-on-background mt-3">
            How I Bring Ideas <br className="hidden md:block" /> to Life
          </h2>
        </div>
        <p className="text-on-surface-variant/60 max-w-sm text-sm leading-relaxed mb-2">
          A structured approach ensures that every project I undertake is delivered with precision and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line for Desktop */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent z-0"></div>

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative z-10 group"
          >
            <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
              <span className="material-symbols-outlined text-3xl">{step.icon}</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-primary/40 font-heading">0{i + 1}</span>
                <h3 className="text-xl font-bold text-on-background font-heading">{step.title}</h3>
              </div>
              <p className="text-on-surface-variant/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
