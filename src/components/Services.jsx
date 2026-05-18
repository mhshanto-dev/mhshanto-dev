"use client";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Interactive SaaS & Next.js Systems",
      description: "Developing robust, server-rendered full-stack systems from the ground up using React, Next.js, and the MERN stack with modern component architectures.",
      icon: "layers",
      color: "from-blue-500/20 to-blue-500/5",
      size: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Secure Web APIs & Session Control",
      description: "Building production-ready, secure REST APIs with Express and Node.js. Implementing secure JWT handling and HTTP-only cookie validation.",
      icon: "security",
      color: "from-emerald-500/20 to-emerald-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Database Modeling & Aggregation",
      description: "Designing optimized MongoDB and relational data schemas, indexes, and aggregate pipelines for clean, fast query resolution.",
      icon: "database",
      color: "from-amber-500/20 to-amber-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Cinematic Customs UI (GSAP/Framer)",
      description: "Crafting highly customized, fluid interfaces with micro-interactions, responsive design systems, and rich organic scroll timelines.",
      icon: "palette",
      color: "from-purple-500/20 to-purple-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "SEO Audits & Crawl Compliance",
      description: "Ensuring web assets have structured JSON-LD schemas, proper heading hierarchy, dynamic sitemaps, and strict Core Web Vitals success.",
      icon: "search_check",
      color: "from-cyan-500/20 to-cyan-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
            Capabilities Framework
          </span>
          <h2 className="text-h2 text-on-background mt-3 font-heading font-bold">
            What I Can Build <br className="hidden md:block" /> For Your Team
          </h2>
        </div>
        <p className="text-on-surface-variant/80 max-w-sm text-sm leading-relaxed mb-2">
          I engineer robust, end-to-end full-stack architectures and intelligent features focused on security, speed, and real-world impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`glass-card p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 ${service.size}`}
          >
            {/* Background Gradient Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-3 font-heading">
                {service.title}
              </h3>
              <p className="text-on-surface-variant/80 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  Explore More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Subtle light beam */}
            <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none group-hover:top-[100%] group-hover:left-[100%] transition-all duration-[1.5s] ease-in-out" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
