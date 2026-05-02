"use client";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Building robust, scalable applications from ground up using MERN stack and modern architectures.",
      icon: "layers",
      color: "from-blue-500/20 to-blue-500/5",
      size: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Clean Code",
      description: "Writing maintainable, well-documented code that stays scalable.",
      icon: "code",
      color: "from-emerald-500/20 to-emerald-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Fast Delivery",
      description: "Optimized workflow ensuring quick turnaround times without quality loss.",
      icon: "bolt",
      color: "from-amber-500/20 to-amber-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Modern UI/UX",
      description: "Creating pixel-perfect, interactive interfaces with smooth animations.",
      icon: "palette",
      color: "from-purple-500/20 to-purple-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "SEO Optimized",
      description: "Ensuring your application ranks high and performs well on search engines.",
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
            Value Proposition
          </span>
          <h2 className="text-h2 text-on-background mt-3">
            Premium Services <br className="hidden md:block" /> For Your Business
          </h2>
        </div>
        <p className="text-on-surface-variant/60 max-w-sm text-sm leading-relaxed mb-2">
          I provide end-to-end digital solutions that focus on performance, accessibility, and high-impact results.
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
              <p className="text-on-surface-variant/70 text-sm leading-relaxed">
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
