import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/10 py-16 transition-colors duration-700">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <Link href="/#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
              <Image
                src="/logo.jpeg"
                alt="MH Shanto Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-black tracking-tight text-on-background group-hover:text-primary transition-colors">
              MH Shanto
            </span>
          </Link>
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">
            © 2026 MH Shanto. Full-Stack Developer from Bangladesh. Designing High-Performance Solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 font-heading text-[10px] font-black uppercase tracking-[0.2em]">
          <a 
            className="text-on-surface-variant/40 hover:text-primary transition-colors" 
            href="https://github.com/mhshanto-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            className="text-on-surface-variant/40 hover:text-primary transition-colors" 
            href="https://www.linkedin.com/in/mehedi-hasan-shanto-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="text-on-surface-variant/40 hover:text-primary transition-colors" 
            href="/hire"
          >
            Hire Me
          </a>
          <a 
            className="text-on-surface-variant/40 hover:text-primary transition-colors" 
            href="mailto:mhshanto.8989.t@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
