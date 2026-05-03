"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function HireMePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
              Available for New Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-on-background mt-6 mb-8 leading-[1.1]">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-on-surface-variant/90 max-w-2xl mx-auto text-lg leading-relaxed">
              I help startups and businesses transform their ideas into high-performance digital products. 
              Whether you need a full-scale web application or a pixel-perfect landing page, I've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Magnetic strength={0.2}>
                <a 
                  href="#contact-form"
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
                >
                  Start a Project
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a 
                  href="https://wa.me/8801871758989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-surface-container-high transition-all active:scale-95"
                >
                  <span className="text-xl">💬</span>
                  WhatsApp Me
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Specialized Benefits Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Response",
                desc: "I usually reply within 2-4 hours during business days.",
                icon: "timer"
              },
              {
                title: "Weekly Updates",
                desc: "You'll get a detailed progress report and demo every week.",
                icon: "update"
              },
              {
                title: "Post-Launch Support",
                desc: "30 days of free maintenance after project completion.",
                icon: "support_agent"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 border-primary/5 group hover:border-primary/20 transition-all"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <h3 className="text-xl font-bold text-on-background mb-2">{item.title}</h3>
                <p className="text-on-surface-variant/90 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Booking & Contact Section */}
        <div id="contact-form">
          <Contact />
        </div>

        {/* Optional: Book Call Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-20 text-center">
          <div className="glass-card p-12 md:p-20 relative overflow-hidden">
             {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -ml-32 -mb-32" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-on-background mb-6">
                Prefer a face-to-face chat?
              </h2>
              <p className="text-on-surface-variant/90 max-w-xl mx-auto mb-10 text-lg">
                Schedule a discovery call to discuss your project requirements, goals, and timeline.
              </p>
              <Magnetic strength={0.2}>
                <a 
                  href="https://calendly.com/your-username" // User should replace this
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-on-background text-background px-12 py-6 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl hover:opacity-90 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  Book a Free Discovery Call
                </a>
              </Magnetic>
              <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/60 mt-8">
                30-min Video Consultation • Completely Free
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
