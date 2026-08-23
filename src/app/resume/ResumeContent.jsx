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
    name: "MD. Mehedi Hasan Shanto",
    title: "Full Stack Developer (MERN Stack) | React.js | Next.js | TypeScript | AI-Assisted Development",
    contact: {
      phone: "+880 1871758989",
      email: "mhshanto.8989.t@gmail.com",
      location: "Sirajganj, Bangladesh",
      portfolio: "mhshanto-dev.vercel.app",
      linkedin: "linkedin.com/in/mh-shanto",
      github: "github.com/mhshanto-dev",
    },
    summary: "Dynamic Full Stack Developer with hands-on MERN stack experience building responsive React/Next.js web applications, scalable Node.js/Express.js REST APIs, database-driven systems, secure authentication flows, payment integrations, and dynamic dashboards. Seeking a Full Stack / MERN Developer role where I can build end-to-end solutions, optimize application performance, solve real-world problems, and use AI tools responsibly for efficient development, debugging, testing, and feature delivery.",
    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "React.js", "Next.js", "React Router", "Context API", "TanStack Query", "Tailwind CSS", "Framer Motion", "GSAP", "Responsive Design", "SEO Basics"],
      backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Better Auth", "Firebase Auth", "Server-Side Validation", "Stripe", "OpenAI API", "Groq API"],
      tools: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code", "Figma-to-Code", "ESLint", "Prettier", "Chrome DevTools", "npm"],
      ai: ["ChatGPT", "Gemini", "GitHub Copilot", "Cursor", "Antigravity", "Prompt Engineering", "AI-Assisted Debugging", "Test-Case Generation", "Technical Documentation"],
    },
    projects: [
      {
        emoji: "🏥",
        title: "MediCare Connect — Healthcare Appointment Platform",
        technologies: ["Next.js 15", "Node.js", "Express.js", "MongoDB", "Better Auth", "Stripe"],
        features: [
          "Built a full-stack healthcare appointment platform with dedicated patient, doctor, and admin dashboards.",
          "Implemented JWT & Google authentication, appointment booking, Stripe payment integration, and digital prescription management.",
        ],
        links: {
          live: "https://frontend-orpin-eight-50.vercel.app",
          client: "https://github.com/mhshanto-dev/MedicareConnect",
          server: "https://github.com/mhshanto-dev/MedicareConnect-Server"
        }
      },
      {
        emoji: "📚",
        title: "StudyNook — Study Room Booking Platform",
        technologies: ["Next.js 16", "React 19", "Node.js", "Express.js", "MongoDB", "Better Auth", "HeroUI"],
        features: [
          "Built a study room booking platform with room management, booking workflows, and a fully responsive user interface.",
          "Implemented Better Auth with Google Sign-In and developed a responsive interface using HeroUI.",
        ],
        links: {
          live: "https://studynook-client-bice.vercel.app",
          client: "https://github.com/mhshanto-dev/assignment-9",
          server: "https://github.com/mhshanto-dev/assingment-9-server"
        }
      },
      {
        emoji: "📄",
        title: "ResumePilot — AI Resume & Portfolio Builder",
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Clerk Auth", "Google Gemini AI"],
        features: [
          "Built an AI-powered resume and portfolio builder that extracts skills and experience from uploaded PDF resumes.",
          "Integrated Google Gemini AI to generate professional summaries and created shareable portfolio pages from resume data.",
        ],
        links: {
          live: "https://resumepilot-eight.vercel.app/",
          client: "https://github.com/mhshanto-dev/AI-Resume-Builder-complete"
        }
      }
    ],
    certifications: [
      { title: "Complete Web Development with MERN Stack", issuer: "Programming Hero", year: "2025" },
      { title: "Responsive Web Design / JavaScript / React Practice", issuer: "freeCodeCamp", year: "" },
      { title: "CSE Phitron", issuer: "Phitron", year: "" },
    ],
    education: [
      {
        degree: "Higher Secondary Certificate (HSC) — Science",
        institution: "Islamia Government College",
        board: "Rajshahi Education Board",
        period: "Completed 2020",
        result: "GPA: 5.00 / 5.00",
      }
    ],
    languages: [
      { lang: "Bangla", level: "Native" },
      { lang: "English", level: "Intermediate — comfortable with technical documentation, professional communication, and interview discussions." },
    ],
    softSkills: ["Problem Solving", "Self-Learning", "Technical Documentation", "Team Communication", "Feedback Handling", "Deadline Ownership"],
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-background p-4 sm:p-8 md:p-12 font-body-md">
      <div className="max-w-[900px] mx-auto bg-surface-container-low shadow-2xl rounded-3xl overflow-hidden border border-outline-variant/10 print:shadow-none print:border-none print:rounded-none print:bg-white print:text-black print:max-w-full">

        {/* Header */}
        <header className="bg-primary p-8 sm:p-12 text-white print:bg-white print:text-black print:border-b print:border-gray-200 print:p-6">
          <div className="mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl font-black tracking-tighter"
            >
              {data.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base font-semibold opacity-90 mt-2 text-secondary print:text-gray-800 leading-relaxed"
            >
              {data.title}
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-80 font-medium print:opacity-100 print:text-gray-700">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm print:hidden">phone</span>
              {data.contact.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm print:hidden">mail</span>
              {data.contact.email}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm print:hidden">location_on</span>
              {data.contact.location}
            </span>
            <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-sm print:hidden">link</span>
              LinkedIn
            </a>
            <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-sm print:hidden">code</span>
              GitHub
            </a>
            <a href={`https://${data.contact.portfolio}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-sm print:hidden">public</span>
              Portfolio
            </a>
          </div>
        </header>

        <div className="p-8 sm:p-12 space-y-10 print:p-6 print:space-y-6">

          {/* Career Objective */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4 border-b border-primary/20 pb-2 print:text-black print:text-lg">
              Career Objective
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm print:text-black">
              {data.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
              Technical Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2 text-secondary uppercase tracking-wider text-xs print:text-black">Frontend & UI</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.frontend.map(s => (
                    <span key={s} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-lg text-xs font-bold print:border-gray-200 print:px-2 print:py-0.5">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-secondary uppercase tracking-wider text-xs print:text-black">Backend & Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.backend.map(s => (
                    <span key={s} className="px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-lg text-xs font-bold print:border-gray-200 print:px-2 print:py-0.5">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-secondary uppercase tracking-wider text-xs print:text-black">Tools & Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.tools.map(s => (
                    <span key={s} className="px-3 py-1 bg-surface-container-highest border border-outline-variant/10 rounded-lg text-xs font-bold print:border-gray-200 print:px-2 print:py-0.5">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-secondary uppercase tracking-wider text-xs print:text-black">AI Workflow</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.ai.map(s => (
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
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-on-background print:text-black">{proj.emoji} {proj.title}</h3>
                    <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-wider text-primary/70 print:text-gray-500">
                      {proj.links.live && <a href={proj.links.live} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors print:text-gray-500">Live Demo ↗</a>}
                      {proj.links.client && <a href={proj.links.client} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors print:text-gray-500">Client ↗</a>}
                      {proj.links.server && <a href={proj.links.server} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors print:text-gray-500">Server ↗</a>}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.technologies.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-secondary/80 print:text-gray-600">{t}</span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant/90 space-y-1 print:text-black">
                    {proj.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="grid sm:grid-cols-2 gap-8 print:gap-4">
            <div>
              <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="text-sm font-bold text-on-background print:text-black">{edu.degree}</h3>
                    <p className="text-xs font-bold text-secondary print:text-gray-800">{edu.institution}</p>
                    <p className="text-xs text-on-surface-variant font-medium print:text-black">{edu.board} • {edu.period}</p>
                    <p className="text-xs font-black text-primary mt-1 print:text-black">{edu.result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 print:text-black print:text-lg print:mb-4">
                Certifications
              </h2>
              <div className="space-y-3">
                {data.certifications.map((cert, i) => (
                  <div key={i} className="space-y-0.5">
                    <p className="text-sm font-bold text-on-background print:text-black">{cert.title}</p>
                    <p className="text-xs text-secondary font-semibold print:text-gray-800">{cert.issuer}{cert.year ? ` — ${cert.year}` : ""}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Languages & Soft Skills */}
          <section className="grid sm:grid-cols-2 gap-8 print:gap-4">
            <div>
              <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4 border-b border-primary/20 pb-2 print:text-black print:text-lg">
                Languages
              </h2>
              <ul className="space-y-2">
                {data.languages.map((l, i) => (
                  <li key={i} className="text-sm text-on-surface-variant font-medium print:text-black">
                    <span className="font-bold text-on-background print:text-black">{l.lang}:</span> {l.level}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4 border-b border-primary/20 pb-2 print:text-black print:text-lg">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.softSkills.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-surface-container-highest border border-outline-variant/10 rounded-lg text-xs font-bold print:border-gray-200">{s}</span>
                ))}
              </div>
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
