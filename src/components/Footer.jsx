import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/10 py-16 transition-colors duration-700">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <Link href="/#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500 bg-black border border-outline-variant/20 dark:border-white/10">
              <Image
                src="/logo.jpeg"
                alt="MH Shanto Logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-on-background transition-colors">
              M<span className="text-[#FFD700] -ml-[0.35em]">H</span>
            </span>
          </Link>
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/80">
            © 2026 MH Shanto. Full-Stack Developer from Bangladesh. Designing High-Performance Solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 font-heading text-[10px] font-black uppercase tracking-[0.2em]">
          <a 
            className="px-5 py-2.5 rounded-full border border-outline-variant/20 text-on-surface-variant/70 hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20" 
            href="https://github.com/mhshanto-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            className="px-5 py-2.5 rounded-full border border-outline-variant/20 text-on-surface-variant/70 hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20" 
            href="https://www.linkedin.com/in/mh-shanto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="px-5 py-2.5 rounded-full border border-outline-variant/20 text-on-surface-variant/70 hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20" 
            href="https://www.facebook.com/mehedi.hasan.shanto.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a 
            className="px-5 py-2.5 rounded-full border border-outline-variant/20 text-on-surface-variant/70 hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20" 
            href="https://x.com/mhshanto8989"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
