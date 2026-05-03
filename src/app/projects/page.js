"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import projPortfolioImg from "@/assets/proj_portfolio.png";
import projTilesImg from "@/assets/proj_tiles.png";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full-Stack", "Frontend", "UI/UX", "Open Source"];

  const projects = [
    {
      title: "Personal Portfolio V2",
      category: "Frontend",
      description: "High-performance developer portfolio with cinematic animations.",
      tags: ["Next.js", "Framer Motion", "GSAP"],
      image: projPortfolioImg,
      liveLink: "https://mhshanto-dev.vercel.app/",
      repoLink: "https://github.com/mhshanto-dev/mhshanto"
    },
    {
      title: "Tiles Gallery Ecommerce",
      category: "Full-Stack",
      description: "A premium tile ecommerce platform with full ordering system.",
      tags: ["React", "Node.js", "MongoDB"],
      image: projTilesImg,
      liveLink: "https://tiles-gallery-ecommerce.vercel.app/",
      repoLink: "https://github.com/mhshanto-dev"
    },
    {
      title: "KeenKeeper Social",
      category: "Full-Stack",
      description: "Relationship management app to browse and nurture friendships.",
      tags: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://courageous-fox-f6c3ed.netlify.app/",
      repoLink: "https://github.com/mhshanto-dev"
    },
    {
      title: "Modern Digitools",
      category: "Frontend",
      description: "Digital tools & productivity software platform for creators.",
      tags: ["React", "JavaScript", "Netlify"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=675",
      liveLink: "https://whimsical-entremet-c5c4f5.netlify.app/",
      repoLink: "https://github.com/mhshanto-dev/DigitalToolsPlatform"
    },
    {
        title: "EduFlow LMS",
        category: "Full-Stack",
        description: "Learning management system with course tracking and assessments.",
        tags: ["Next.js", "Prisma", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200&h=675",
        liveLink: "#",
        repoLink: "#"
      },
      {
        title: "CryptoDash",
        category: "UI/UX",
        description: "Real-time cryptocurrency tracking dashboard with dark mode.",
        tags: ["React", "Chart.js", "API"],
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200&h=675",
        liveLink: "#",
        repoLink: "#"
      }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-[140px] pb-20 max-w-[1400px] mx-auto px-6">
        <header className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform">
            <span className="material-symbols-outlined text-sm">west</span>
            Back to Home
          </Link>
          <h1 className="text-h1 mb-6">Archive & <span className="text-primary">Masterpieces</span></h1>
          <p className="text-on-surface-variant/70 max-w-2xl text-lg leading-relaxed">
            An extensive collection of my digital explorations, client projects, and open-source contributions. 
            Each piece represents a unique challenge solved with clean code and thoughtful design.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="group bg-surface-container-low border border-outline-variant/10 rounded-[32px] overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized={typeof project.image === 'string'}
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-primary">#{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-6 flex gap-4 border-t border-outline-variant/5">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                        Live Demo <span className="material-symbols-outlined text-sm">arrow_outward</span>
                      </a>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                        Source <span className="material-symbols-outlined text-sm">code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectsPage;
