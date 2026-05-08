import ResumeContent from "./ResumeContent";

export const metadata = {
  title: "Professional Resume | Mehedi Hasan Shanto",
  description: "View the professional resume of Mehedi Hasan Shanto (MH Shanto). Full-Stack Developer with expertise in React, Next.js, Node.js, and modern software engineering practices. GPA 5.00 achiever and project-driven developer.",
  keywords: [
    "Mehedi Hasan Shanto resume", "MH Shanto CV", "full stack developer resume",
    "software engineer CV Bangladesh", "developer portfolio resume"
  ],
  openGraph: {
    title: "Professional Resume | Mehedi Hasan Shanto",
    description: "Detailed professional background, technical skills, and experience of MH Shanto.",
    url: "https://mhshanto-dev.vercel.app/resume",
    type: "website",
  },
  alternates: {
    canonical: "https://mhshanto-dev.vercel.app/resume",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
