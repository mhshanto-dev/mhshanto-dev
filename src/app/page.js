import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-16">
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Timeline />
        <FAQ />
        <Contact />
        <AIChat />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
