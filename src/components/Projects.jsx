"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";
import portfolioImg from "@/assets/portfolio.png";
import socialImg from "@/assets/social.png";
import smartImg from "@/assets/smart.png";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_PER_PAGE = 3;

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = [
    {
      title: "Personal Portfolio v4",
      description: "My high-performance developer portfolio built with Next.js 14, Framer Motion, and GSAP.",
      tags: ["Next.js", "GSAP", "Tailwind"],
      image: portfolioImg,
      liveLink: "https://mhshanto-dev.netlify.app",
      repoLink: "https://github.com/mhshanto-dev/mhshanto"
    },
    {
      title: "Social Keen-keeper",
      description: "A modern social management and productivity platform designed for high-performance engagement.",
      tags: ["React", "Firebase", "Tailwind"],
      image: socialImg,
      liveLink: "https://my-app-keen-keeper-ptpfk83ps-mhshanto-devs-projects.vercel.app",
      repoLink: "https://github.com/mhshanto-dev/my-app-keen-keeper"
    },
    {
      title: "Smart Tools Platform",
      description: "A comprehensive digital utility suite offering powerful productivity tools for developers and creators.",
      tags: ["JavaScript", "React", "Netlify"],
      image: smartImg,
      liveLink: "https://whimsical-entremet-c5c4f5.netlify.app/",
      repoLink: "https://github.com/mhshanto-dev/DigitalToolsPlatform"
    },
    {
      title: "Insight Analytics Hub",
      description: "AI-powered enterprise data visualization platform providing real-time insights.",
      tags: ["Next.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1551288049-bbda0231f67d?auto=format&fit=crop&q=80&w=2426",
      liveLink: "#",
      repoLink: "#"
    },
    {
      title: "Pulse Crypto Wallet",
      description: "Secure, high-speed cryptocurrency management system.",
      tags: ["React Native"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2426",
      liveLink: "#",
      repoLink: "#"
    },
    {
      title: "FoodieHub: Food App",
      description: "Complete food ordering & delivery platform with real-time tracking.",
      tags: ["React.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2426",
      liveLink: "#",
      repoLink: "#"
    }
  ];

  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = allProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll to top of section when page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="max-w-[1400px] mx-auto px-6 py-[140px]" id="projects">
      <div className="text-center mb-20 projects-title">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
          Selected Works
        </span>
        <h2 className="text-h2 mt-3">Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="contents"
          >
            {displayedProjects.map((project, index) => (
              <div key={project.title} className="project-card-wrap">
                <TiltCard className="h-full">
                  <div className="h-[520px] relative rounded-[32px] overflow-hidden group cursor-default shadow-2xl border border-outline-variant/10 bg-surface-container-low">
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                        fill
                        sizes="(max-width: 1200px) 100vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 z-10 transition-opacity duration-700 group-hover:opacity-85" />
                    <div className="absolute inset-0 bg-black/10 z-[5]" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-20">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h4 className="font-h2 text-2xl md:text-3xl text-white tracking-tight mb-3 drop-shadow-xl">
                          {project.title}
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2"
                          >
                            Live Demo
                            <span className="material-symbols-outlined text-sm">arrow_outward</span>
                          </a>
                          <a 
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-2"
                          >
                            GitHub
                            <span className="material-symbols-outlined text-sm">code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination UI */}
      <div className="mt-20 flex justify-center items-center gap-4 md:gap-8">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
            currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-lg">west</span>
          Prev
        </button>

        <div className="flex items-center gap-2 md:gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => handlePageChange(num)}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                currentPage === num
                  ? "bg-white text-black shadow-2xl scale-110"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
            currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:text-primary"
          }`}
        >
          Next
          <span className="material-symbols-outlined text-lg">east</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
