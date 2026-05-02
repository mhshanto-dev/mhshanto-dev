"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = ["home", "achievements", "about", "services", "backend", "process", "skills", "projects", "codeshowcase", "assignments", "timeline", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        if (section === "home") {
          if (scrollPosition < 500) setActiveSection("home");
          continue;
        }
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Code", href: "#codeshowcase", id: "codeshowcase" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#") || href === "/#home") {
      e.preventDefault();
      const targetId = href.replace("/#", "").replace("#", "");
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (href === "/#home") window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -20, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-center pointer-events-none"
    >
      <div 
        className="glass-card flex justify-between items-center w-full max-w-[1200px] h-16 px-6 pointer-events-auto shadow-2xl shadow-black/5"
      >
        <Magnetic strength={0.3}>
          <Link 
            href="/#home" 
            onClick={(e) => handleLinkClick(e, "/#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
              <span className="text-white font-black text-xl tracking-tighter">M</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-xl font-black tracking-tighter text-on-background leading-none">H</span>
              <div className="w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-heading text-[13px] font-bold tracking-wider">
          {navLinks.map((link) => (
            <Magnetic key={link.id} strength={0.2}>
              <Link
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative group py-2 text-on-surface-variant hover:text-on-background transition-colors"
              >
                <span className={activeSection === link.id ? "text-primary" : ""}>
                  {link.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] bg-primary w-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === link.id ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="theme-toggle-wrapper w-14 h-8 flex items-center justify-center">
            {mounted ? (
              <label className="theme-toggle" title="Toggle theme">
                <input
                  type="checkbox"
                  checked={theme === "light"}
                  onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
                <div className="toggle-track">
                  <div className="toggle-thumb">
                    {theme === "dark" ? "🌙" : "☀️"}
                  </div>
                </div>
              </label>
            ) : (
              <div className="w-10 h-5 bg-surface-container-high rounded-full animate-pulse" />
            )}
          </div>

          <Magnetic strength={0.3}>
            <motion.a 
              href="https://wa.me/8801871758989"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex bg-on-background text-background px-6 py-2.5 rounded-2xl font-bold text-xs hover:opacity-90 transition-opacity shadow-lg items-center justify-center cursor-pointer"
            >
              Hire Me
            </motion.a>
          </Magnetic>

          <button 
            className="md:hidden text-on-background p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 left-6 right-6 glass-card p-8 md:hidden z-[-1] flex flex-col gap-4 pointer-events-auto"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block py-3 text-lg font-bold border-b border-outline-variant/10 last:border-0 ${
                    activeSection === link.id ? "text-primary" : "text-on-background"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
