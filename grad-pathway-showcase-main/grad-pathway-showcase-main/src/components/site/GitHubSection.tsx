import { motion } from "framer-motion";
import { Github, Star, GitFork, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const repos = [
  { name: "nova-commerce", desc: "Full stack e-commerce built with Next.js + MongoDB.", stars: 24, forks: 6, lang: "TypeScript" },
  { name: "pulse-social", desc: "Realtime social feed with Supabase auth & subscriptions.", stars: 18, forks: 3, lang: "JavaScript" },
  { name: "flowboard", desc: "Kanban-style team task manager with DnD and roles.", stars: 12, forks: 2, lang: "TypeScript" },
  { name: "dev-notes", desc: "Markdown-powered developer journal and snippet manager.", stars: 9, forks: 1, lang: "TypeScript" },
];

export function GitHubSection() {
  return (
    <section id="github" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Open Source</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              On <span className="text-gradient">GitHub</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://github.com/abdulla7x0" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Follow @abd
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {repos.map((r, i) => (
            <motion.a
              key={r.name}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="font-semibold group-hover:text-primary">{r.name}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-gradient-primary" />
                  {r.lang}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" />
                  {r.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" />
                  {r.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}