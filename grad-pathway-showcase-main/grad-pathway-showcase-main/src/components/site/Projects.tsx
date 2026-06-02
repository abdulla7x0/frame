import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: p1,
    title: "Nova Commerce",
    desc: "A full stack e-commerce platform with cart, checkout, and admin dashboard.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    image: p2,
    title: "Pulse Social",
    desc: "A real-time social feed app with auth, likes, and instant updates.",
    stack: ["React", "Express", "Supabase", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    image: p3,
    title: "Flowboard",
    desc: "A modern kanban-style task manager with drag-and-drop and team workspaces.",
    stack: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Selected Work</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Things I&apos;ve <span className="text-gradient">shipped</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={832}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2 pt-0">
                  <Button asChild size="sm" className="rounded-full bg-gradient-primary text-primary-foreground">
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}