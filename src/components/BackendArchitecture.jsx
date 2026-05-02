"use client";

import { motion } from "framer-motion";

const BackendArchitecture = () => {
  const features = [
    {
      title: "Scalable APIs",
      desc: "Architecting RESTful and GraphQL APIs designed for high traffic and low latency.",
      icon: "api",
      color: "text-blue-500"
    },
    {
      title: "Secure Auth",
      desc: "Implementing JWT, OAuth2, and multi-factor authentication systems for data security.",
      icon: "security",
      color: "text-emerald-500"
    },
    {
      title: "Data Modeling",
      desc: "Optimizing database schemas in MongoDB and PostgreSQL for complex relational data.",
      icon: "database",
      color: "text-amber-500"
    },
    {
      title: "Performance",
      desc: "Caching strategies with Redis and server-side optimizations for blazing fast response.",
      icon: "speed",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px] relative overflow-hidden" id="backend">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
            Server-Side Mastery
          </span>
          <h2 className="text-h2 text-on-background mt-3 mb-6">
            Building the <br /> Engine Room
          </h2>
          <p className="text-on-surface-variant/70 text-lg leading-relaxed mb-10 max-w-lg">
            I don't just build websites; I engineer high-performance backends. From complex database architectures to secure authentication layers, I ensure your application is as powerful on the inside as it is beautiful on the outside.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${feature.color}`}>
                    {feature.icon}
                  </span>
                  <h3 className="font-bold text-on-background">{feature.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Diagram Representation */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 relative overflow-hidden bg-[#0a0b0d]/80 border-primary/10 shadow-3xl"
          >
             {/* Simple Abstract Architecture Diagram */}
             <div className="space-y-8 relative z-10">
                {/* Client Layer */}
                <div className="flex justify-center">
                   <div className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-bold text-xs uppercase tracking-widest">
                      Frontend Client (React/Next.js)
                   </div>
                </div>

                <div className="flex justify-center py-2">
                   <div className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-transparent" />
                </div>

                {/* API Gateway */}
                <div className="flex justify-center">
                   <div className="px-8 py-4 rounded-2xl bg-surface-container-highest border border-white/10 text-white font-bold text-sm shadow-xl flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-400">api</span>
                      REST / GraphQL API Gateway
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                   <div className="h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                   <div className="h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                   <div className="h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Microservices / Handlers */}
                <div className="grid grid-cols-3 gap-4">
                   <div className="p-3 rounded-lg bg-surface-container-high border border-white/5 text-[10px] text-center text-on-surface-variant font-medium">Auth Service</div>
                   <div className="p-3 rounded-lg bg-surface-container-high border border-white/5 text-[10px] text-center text-on-surface-variant font-medium">Data Logic</div>
                   <div className="p-3 rounded-lg bg-surface-container-high border border-white/5 text-[10px] text-center text-on-surface-variant font-medium">File Storage</div>
                </div>

                <div className="flex justify-center py-2">
                   <div className="w-0.5 h-8 bg-gradient-to-t from-secondary/40 to-transparent" />
                </div>

                {/* Database Layer */}
                <div className="flex justify-center">
                   <div className="px-8 py-4 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-black text-sm flex items-center gap-3">
                      <span className="material-symbols-outlined">database</span>
                      MongoDB / PostgreSQL
                   </div>
                </div>
             </div>

             {/* Animated Pulsing Orbs */}
             <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackendArchitecture;
