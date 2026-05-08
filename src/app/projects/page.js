import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Projects & Masterpieces | Mehedi Hasan Shanto",
  description: "Explore the portfolio of Mehedi Hasan Shanto (MH Shanto), featuring high-performance web applications, full-stack projects, and innovative digital solutions built with Next.js, React, and Node.js.",
  keywords: [
    "MH Shanto projects", "Mehedi Hasan Shanto portfolio", "web development projects",
    "Next.js projects", "React projects", "full stack projects Bangladesh",
    "software engineering portfolio", "full stack developer projects",
    "frontend developer portfolio", "backend developer projects",
    "hiring full stack developer portfolio", "frond end developer showcase"
  ],
  openGraph: {
    title: "Projects & Masterpieces | Mehedi Hasan Shanto",
    description: "A showcase of innovative web solutions and full-stack projects by MH Shanto.",
    url: "https://mhshanto-dev.vercel.app/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://mhshanto-dev.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
