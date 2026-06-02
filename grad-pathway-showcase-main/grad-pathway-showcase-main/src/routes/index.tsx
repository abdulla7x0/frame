import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/hooks/use-theme";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Achievement } from "@/components/site/Achievement";
import { Journey } from "@/components/site/Journey";
import { Skills } from "@/components/site/Skills";
import { Certificate } from "@/components/site/Certificate";
import { Projects } from "@/components/site/Projects";
import { Timeline } from "@/components/site/Timeline";
import { GitHubSection } from "@/components/site/GitHubSection";
import { QRSection } from "@/components/site/QRSection";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aryan Sharma — Full Stack Developer | Sheriyans Bootcamp Certified" },
      { name: "description", content: "Personal achievement page of Aryan Sharma — Full Stack Developer certified by Sheriyans Coding School. View portfolio, projects, certificate, and skills." },
      { property: "og:title", content: "Aryan Sharma — Full Stack Developer" },
      { property: "og:description", content: "Certified Full Stack Developer. Portfolio, projects, and the official Sheriyans Coding School certificate." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Achievement />
          <Journey />
          <Skills />
          <Certificate />
          <Projects />
          <Timeline />
          <GitHubSection />
          <QRSection />
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
