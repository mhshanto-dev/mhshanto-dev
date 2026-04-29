"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".project-card-wrap", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Insight Analytics Hub",
      description: "AI-powered enterprise data visualization platform providing real-time insights.",
      tags: ["Next.js", "Tailwind"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4WQN58Z2LcFG8TzrYB27goase-iGADIn8z7JcMqvk6rBIR1C0ISFyOIdt-LbRi_XVHtkcG1aZsLfSROVslaVguzRm1sYd_n73vVL6_9Wy8Z0Y0KsXWCl7SyB4TSEjQkCBgyYZaAeweNkQj1P0kPGFjlcC9b9lP2SGPPh5xNGo1wQ8CJyftk7kv2p972TnZivHneFsbpWVa472gFUR1NoqE9VNPPAi7R2pXUmCRwa1F7LnepMvIsagfT01PfJx-u4HtQDQwVAdZblg",
      isLarge: true,
    },
    {
      title: "Pulse Crypto Wallet",
      description: "Secure, high-speed cryptocurrency management system.",
      tags: ["React Native"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI_zkm1JhLXQKlW8ykiLix7qsYvoR2bN0RQLSaQKkMkn9pvDL9PGJxPJxKCXPtqaJzmZ5F6NUybftwYr0bW05y-aqq8ODAku37k2EfKhyt_4ZjyTQOrEEldAFoOyJL6QxlMK55nsx1rVAFYYNSzHGIzQWH_KAkt81c0YIJgqq0p2OTDeXRVinJjBofUvfQyH6Z99k68rNNKkup8pa1gjNoCaWJLnfZos_96uoYcK-RM0tjbDe-9ldRtMyJEDX8-wJHkmcUp5deQhlx",
    },
    {
      title: "Luxe Commerce Engine",
      description: "Headless e-commerce platform for high-end brands.",
      tags: ["Shopify"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZvx5ltOM45jPGnySaRCwLz29oZw3RNgiKDmAnCfysHZB1XfYxctwoxyFu46McoZYB5lKZfL7WmaSRQ-tmvEJ-zlR7-n0q-rVn8kBZGUxz_dVnUDrfl_Y2vcQ2nu1t1e-5OO3aPc36ybU1YMMslKdWto2DzT9QtIBtz_2YxT_lyzhISzvzK38OkVEIa3-MBvIqJBxFk4nthIYFtSFLpSURFjdK9KdYME2sMWdoC7D4Z19-LjTAQ2_6iOt7jdBppZeGTBRsDjIdTC7F",
    },
  ];

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 py-[140px]" id="projects">
      <div className="flex justify-between items-end mb-20 projects-title">
        <div>
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
            Selected Works
          </span>
          <h2 className="text-h2 mt-3">Portfolio</h2>
        </div>
        <Magnetic strength={0.3}>
          <button className="px-6 py-3 rounded-full border border-outline-variant/20 hover:bg-surface-container-high transition-colors font-bold text-sm flex items-center gap-3">
            All Projects 
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </Magnetic>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card-wrap ${project.isLarge ? "md:col-span-2" : ""}`}>
            <TiltCard className="h-full">
              <motion.div
                className={`${
                  project.isLarge ? "h-[560px]" : "h-[480px]"
                } relative rounded-[48px] overflow-hidden group cursor-pointer shadow-2xl border border-outline-variant/10`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                    fill
                    sizes="(max-width: 1200px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-10 transition-opacity duration-700 group-hover:opacity-60"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16 z-20">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    <div className="flex gap-3 mb-6">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="px-5 py-1.5 bg-white/10 backdrop-blur-xl rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-h2 text-3xl md:text-4xl text-white tracking-tight mb-4">
                      {project.title}
                    </h4>
                    <p className="text-white/70 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="mt-8 flex items-center gap-3 text-white font-bold text-sm"
                    >
                      Explore Case Study 
                      <span className="material-symbols-outlined text-lg">arrow_outward</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
