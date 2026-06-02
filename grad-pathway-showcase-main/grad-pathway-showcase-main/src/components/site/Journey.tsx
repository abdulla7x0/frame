import { motion } from "framer-motion";
import { Code2, Layers, Server, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Learning the craft",
    desc: "Started from the fundamentals — HTML, CSS, and JavaScript — and built a deep understanding of how the web really works.",
  },
  {
    icon: Layers,
    title: "Real-world projects",
    desc: "Shipped multiple full stack apps from concept to deployment, focusing on UX, performance, and clean architecture.",
  },
  {
    icon: Server,
    title: "Frontend & backend",
    desc: "Built modern interfaces with React and Next.js, and powered them with Node.js, Express, and scalable databases.",
  },
  {
    icon: TrendingUp,
    title: "Always improving",
    desc: "Continuous self-learning — new tools, patterns, and best practices land in my workflow every week.",
  },
];

export function Journey() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">My Journey</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            From curiosity to <span className="text-gradient">craft</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            How I went from writing my first line of HTML to shipping production-ready full stack apps.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-elegant"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}