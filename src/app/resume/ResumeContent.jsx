"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ResumeContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  if (!isMounted) return null;

  const data = {
    name: "Mehedi Hasan Shanto",
    title: "Junior Full-Stack Developer",
    contact: {
      phone: "+880 1871758989",
      email: "mhshanto.8989.t@gmail.com",
      location: "Sirajganj, Rajshahi, Bangladesh",
      portfolio: "mhshanto-dev.vercel.app",
      linkedin: "linkedin.com/in/mh-shanto",
      github: "github.com/mhshanto-dev",
    },
    summary: "Passionate and self-driven Junior Full-Stack Developer with hands-on experience building responsive and scalable web applications using the MERN stack and Next.js. Built 7+ practical projects focused on modern UI, authentication systems, REST APIs, and user-centered experiences. Continuously learning new technologies and eager to contribute to real-world products while growing as a software engineer.",
    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Redux", "GSAP", "Framer Motion"],
      backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "JWT", "REST API"],
      tools: ["Git/GitHub", "VS Code", "Figma", "Docker (Learning)", "Redis (Learning)", "TypeScript (Learning)"],
      interpersonal: ["Problem Solving", "Quick Learning", "Team Collaboration", "Attention to Detail", "Time Management", "Communication"]
    },
    projects: [
      {
        title: "StudyNook — Study Management Platform",
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        description: "Developed a modern study management platform designed to help students organize study resources, improve productivity, and manage learning activities through a clean and user-friendly experience.",
        features: [
          "Secure authentication and protected routes",
          "Create, update, and manage study resources",
          "RESTful API integration with MongoDB",
          "Responsive design optimized for desktop and mobile devices"
        ],
        links: { live: "#", client: "#", server: "#" }
      },
      {
        title: "TaskMate — Task Management Application",
        technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
        description: "Built a task management application designed to organize and track daily tasks efficiently.",
        features: [
          "Drag-and-drop task organization",
          "Authentication and secure access",
          "Real-time task updates",
          "Responsive UI optimized for all devices"
        ],
        links: { live: "#", client: "#" }
      }
    ],
    experience: [
      {
        role: "Self-Learning Full Stack Development Journey",
        company: "Self-Taught",
        period: "2025 – Present",
        description: "• Built 7+ practical projects using modern web technologies\n• Developed responsive web applications and REST APIs\n• Practiced clean code principles and reusable component architecture\n• Continuously improving problem-solving and development skills",
        tags: ["React", "Node.js", "MongoDB", "Next.js", "Tailwind"]
      }
    ],
    education: [
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Islamia Government College",
        board: "Rajshahi Board",
        period: "2019 — 2020",
        result: "GPA: 5.00 / 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Dhangora Model High School",
        board: "Rajshahi Board",
        period: "2017 — 2018",
        result: "GPA: 5.00 / 5.00",
      }
    ],
    languages: ["Bengali — Native", "English — Intermediate", "Hindi — Intermediate"]
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-background p-4 sm:p-8 md:p-12 font-body-md">
      <div className="max-w-[900px] mx-auto bg-surface-container-low shadow-2xl rounded-3xl overflow-hidden border border-outline-variant/10 print:shadow-none print:border-none print:rounded-none print:bg-white print:text-black print:max-w-full">
        
        {/* Header */}
        <header className="bg-primary p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 print:bg-white print:text-black print:border-b print:border-gray-200 print:p-6">
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-black tracking-tighter"
            >
              {data.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl font-bold opacity-90 mt-2 text-secondary print:text-gray-800"
            >
              {data.title}
            </motion.p>
          </div>
          <div className="flex flex-col gap-2 text-sm sm:text-base opacity-80 font-medium print:opacity-100 print:text-gray-700">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm print:hidden">phone</span>
              {data.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm print:hidden">mail</span>
              {data.contact.email}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm print:hidden">location_on</span>
              {data.contact.location}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm print:hidden">public</span>
              {data.contact.portfolio}
            </span>
            <div className="flex gap-4 mt-2 print:hidden">
              <a href={`https://${data.contact.github}`} className="hover:text-secondary transition-colors">GitHub</a>
              <a href={`https://${data.contact.linkedin}`} className="hover:text-secondary transition-colors">LinkedIn</a>
            </div>
          </div>
        </header>

        <div className="p-8 sm:p-12 space-y-10 print:p-6 print:space-y-6">
          {/* Summary */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4 border-b border-primary/20 pb-2 print:text-black print:text-lg">
              Professional Summary
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-base print:text-black print:text-sm">
              {data.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
              Technical & Interpersonal Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 print:gap-4">
              <div>
                <h3 className="font-bold mb-3 text-secondary uppercase tracking-wider text-sm print:text-black">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.frontend.map(s => (
                    <span key={s} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-lg text-xs font-bold print:border-gray-200 print:px-2 print:py-0.5">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-secondary uppercase tracking-wider text-sm print:text-black">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.backend.map(s => (
                    <span key={s} className="px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-lg text-xs font-bold print:border-gray-200 print:px-2 print:py-0.5">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-secondary uppercase tracking-wider text-sm print:text-black">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.tools.map(s => (
                    <span key={s} className="px-3 py-1 bg-surface-container-highest border border-outline-variant/10 rounded-lg text-xs font-bold print:border-gray-200 print:px-2 print:py-0.5">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-secondary uppercase tracking-wider text-sm print:text-black">Interpersonal</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.interpersonal.map(s => (
                    <span key={s} className="px-3 py-1 bg-tertiary/5 border border-tertiary/10 rounded-lg text-xs font-bold print:border-gray-200 print:px-2 print:py-0.5">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
              Projects
            </h2>
            <div className="space-y-6 print:space-y-4">
              {data.projects.map((proj, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/20 print:border-gray-200 print:pl-4">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary print:bg-black print:-left-[9px] print:w-3 print:h-3 print:mt-1" />
                  <h3 className="text-lg font-bold text-on-background print:text-black print:text-base">{proj.title}</h3>
                  <div className="flex flex-wrap gap-2 my-2 print:my-1">
                    {proj.technologies.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-secondary/80 print:text-gray-600">{t}</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-2 print:text-black">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant/90 space-y-1 print:text-black">
                    {proj.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
              Experience
            </h2>
            <div className="space-y-6 print:space-y-4">
              {data.experience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/20 print:border-gray-200 print:pl-4">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary print:bg-black print:-left-[9px] print:w-3 print:h-3 print:mt-1" />
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-1">
                    <h3 className="text-lg font-bold text-on-background print:text-black print:text-base">{exp.role}</h3>
                    <span className="text-xs font-bold text-primary opacity-80 print:text-black">{exp.period}</span>
                  </div>
                  <p className="text-sm font-black text-secondary mb-2 print:text-gray-800">{exp.company}</p>
                  <div className="text-on-surface-variant text-sm leading-relaxed mb-3 print:text-black whitespace-pre-line">
                    {exp.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 print:hidden">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Languages */}
          <section className="grid sm:grid-cols-2 gap-8 print:gap-4">
            <div>
              <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
                Education
              </h2>
              <div className="space-y-6 print:space-y-4">
                {data.education.map((edu, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="text-base font-bold text-on-background print:text-black">{edu.degree}</h3>
                    <p className="text-xs font-bold text-secondary print:text-gray-800">{edu.institution}</p>
                    <p className="text-xs text-on-surface-variant font-medium print:text-black">{edu.board} • {edu.period}</p>
                    <p className="text-xs font-black text-primary mt-1 print:text-black">{edu.result}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
                Languages
              </h2>
              <ul className="space-y-2">
                {data.languages.map((lang, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant font-medium print:text-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary print:bg-black" />
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Footer actions */}
        <div className="p-8 bg-surface-container-highest border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-6 print:hidden">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Portfolio
          </Link>
          <button 
            onClick={handlePrint}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">download</span>
            Download PDF
          </button>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-on-surface-variant/40 print:hidden">
        Designed & Built by MH Shanto
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .print\:hidden {
            display: none !important;
          }
          header {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};


