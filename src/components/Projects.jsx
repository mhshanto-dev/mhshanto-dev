"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";
import projPortfolioImg from "@/assets/proj_portfolio.png";
import projTilesImg from "@/assets/proj_tiles.png";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = [
    {
      title: "Joventra — Modern Job Hunting & Recruitment Platform",
      description: "• Problem: Job seekers struggle with fragmented application tracking, while recruiters lack streamlined ATS and candidate management.\n• Solution: Built a modern full-stack recruitment portal bridging talent and employers with real-time tracking.\n• Key Features: Smart job discovery, one-click application tracking, recruiter ATS dashboard, Stripe subscription billing, and Recharts analytics.\n• Tech Stack: React 18, TypeScript, Node.js, Express, MongoDB, Stripe, Zustand, TanStack Query, Tailwind CSS.\n• Deployment: Frontend on Vercel, Backend on Render.",
      tags: ["React 18", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://joventra-beige.vercel.app/",
      repoLink: "https://github.com/mhshanto-dev/Joventra",
      clientLink: "https://github.com/mhshanto-dev/Joventra",
      serverLink: "https://github.com/mhshanto-dev/Joventra-Server"
    },
    {
      title: "MediCare Connect — Premium Healthcare Platform",
      description: "• Problem: Booking appointments with top healthcare professionals is often tedious and inefficient.\n• Solution: Built a premium platform connecting patients with top doctors seamlessly.\n• Key Features: Advanced doctor search by specialty, instant appointment booking, and patient reviews.\n• Tech Stack: Next.js, React, Node.js, Express, MongoDB, Tailwind CSS.\n• Deployment: Frontend on Vercel, Backend on Render.",
      tags: ["Next.js", "React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://frontend-orpin-eight-50.vercel.app",
      repoLink: "https://github.com/mhshanto-dev/MedicareConnect",
      clientLink: "https://github.com/mhshanto-dev/MedicareConnect",
      serverLink: "https://github.com/mhshanto-dev/MedicareConnect-Server"
    },
    {
      title: "TripZen — Travel Booking Platform",
      description: "• Problem: Travelers need a unified platform to discover and book destinations easily.\n• Solution: Developed a full-stack travel booking platform with intuitive user experience.\n• Key Features: Destination search, interactive booking system, and user dashboard.\n• Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS.\n• Deployment: Frontend on Vercel, Backend deployed.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://tripzen-umber.vercel.app/",
      repoLink: "https://github.com/mhshanto-dev/TripZen"
    },
    {
      title: "Focusora — AI-Powered Focus Management Platform",
      description: "• Problem: Maintaining deep work and focus is challenging in a distraction‑rich environment.\n• Solution: Built an AI‑driven focus management web app that tracks work sessions, provides Pomodoro timers, and offers analytics.\n• Key Features: Real‑time focus timer, AI‑suggested breaks, session history, and productivity insights.\n• Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS.\n• Deployment: Frontend on Vercel, Backend on Render.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://focusora-bice.vercel.app/",
      repoLink: "https://github.com/mhshanto-dev/Focusora"
    },
    {
      title: "ResumePilot — Professional Resume Builder Platform",
      description: "• Problem: Users struggle to create and format professional resumes easily.\n• Solution: Developed a full-stack platform for dynamic resume generation with customizable templates.\n• Key Features: Real-time preview, multiple templates, secure user authentication, and PDF export.\n• Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS.\n• Deployment: Frontend on Vercel, Backend on Render.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://resumepilot-eight.vercel.app/",
      repoLink: "https://github.com/mhshanto-dev/AI-Resume-Builder-complete"
    },

    {
      title: "AuraTiles — High-Performance B2B E-Commerce Platform",
      description: "• Problem: Home decor retailers struggle with slow catalog renderings, complex filtering, and unsafe checkouts.\n• Solution: Developed a full MERN stack e-commerce catalog with optimized database queries and secure API endpoints.\n• Key Features: Reactive product categories, real-time client-side queries, custom state, and encrypted user auth.\n• Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS.\n• Deployment: API on Render, Client on Vercel, database on MongoDB Atlas.",
      tags: ["React", "Node.js", "MongoDB", "Vercel"],
      image: projTilesImg,
      liveLink: "https://tiles-gallery-ecommerce.vercel.app/",
      repoLink: "https://github.com/mhshanto-dev"
    },
    {
      title: "KeenKeeper — Personal Relationship CRM & Social Hub",
      description: "• Problem: Algorithm-heavy social networks distract professionals from nurturing critical human and business connections.\n• Solution: Created a secure personal relationship CRM offering a clean environment to track and maintain connections.\n• Key Features: Firebase real-time data sync, secure authentication dashboard, contact categories, and reminders.\n• Tech Stack: React, Firebase, Netlify, Tailwind CSS.\n• Deployment: Powered by Firebase Realtime DB, frontend hosted on Netlify.",
      tags: ["React", "Firebase", "Netlify"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://courageous-fox-f6c3ed.netlify.app/",
      repoLink: "https://github.com/mhshanto-dev"
    },
    {
      title: "Digitools Hub — Developer Utilities & SaaS Store",
      description: "• Problem: Developers and content creators waste time searching for vetted, safe utilities and code assets.\n• Solution: Engineered a streamlined assets directory allowing rapid exploring, filtering, and secure downloads.\n• Key Features: Fast client-side catalog search, local storage cart persistence, and secure download schemas.\n• Tech Stack: React, ES6+ JavaScript, Netlify, Tailwind CSS.\n• Deployment: Hosted on Netlify, highly optimized for speed and responsiveness.",
      tags: ["React", "JavaScript", "Netlify"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://whimsical-entremet-c5c4f5.netlify.app/",
      repoLink: "https://github.com/mhshanto-dev/DigitalToolsPlatform"
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
    <section ref={sectionRef} className="max-w-[1400px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[120px] lg:py-[140px]" id="projects">
      <div className="text-center mb-20 projects-title">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
          Selected Works
        </span>
        <h2 className="text-h2 mt-3">Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 projects-grid">
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
                  <div className="h-[460px] relative rounded-[32px] overflow-hidden group cursor-default shadow-2xl border border-outline-variant/10 bg-surface-container-low">
                    {/* Project number badge */}
                    <div className="absolute top-5 left-5 z-30 w-9 h-9 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                      <span className="text-[10px] font-black text-white/70">{String(index + 1 + (currentPage - 1) * PROJECTS_PER_PAGE).padStart(2, '0')}</span>
                    </div>
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized={typeof project.image === 'string'}
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
                        <p className="text-white/80 text-[11px] leading-relaxed mb-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-pre-line text-left line-clamp-3 md:line-clamp-none">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 mt-4 md:mt-0">
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2"
                          >
                            Live Demo
                            <span className="material-symbols-outlined text-sm">arrow_outward</span>
                          </a>
                          {project.clientLink && project.serverLink ? (
                            <>
                              <a 
                                href={project.clientLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-1.5"
                              >
                                Client
                                <span className="material-symbols-outlined text-sm">code</span>
                              </a>
                              <a 
                                href={project.serverLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-1.5"
                              >
                                Server
                                <span className="material-symbols-outlined text-sm">dns</span>
                              </a>
                            </>
                          ) : (
                            <a 
                              href={project.repoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-2"
                            >
                              GitHub
                              <span className="material-symbols-outlined text-sm">code</span>
                            </a>
                          )}
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

      <div className="mt-16 text-center">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-4 px-8 py-4 bg-surface-container-high border border-outline-variant/10 rounded-2xl font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group"
        >
          View More Archive Projects
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
