import { motion } from "framer-motion";

const steps = [
  // { date: "Jan 2024", title: "Joined Sheriyans Coding School", desc: "Started the Full Stack Development Bootcamp." },
  // { date: "Feb 2024", title: "HTML & CSS Foundations", desc: "Built responsive layouts and learned modern CSS." },
  // { date: "Feb 2024", title: "JavaScript Deep Dive", desc: "ES6+, async, DOM, and the language fundamentals." },
  // { date: "Mar 2024", title: "React & Component Thinking", desc: "Hooks, state, routing, and building real UIs." },
  // { date: "Apr 2024", title: "Backend Development", desc: "Node.js, Express, REST APIs and authentication." },
  // { date: "Apr 2024", title: "Databases & Full Stack Apps", desc: "MongoDB, Supabase, and end-to-end project work." },
  // { date: "May 2024", title: "Completed the Bootcamp", desc: "Earned the certificate and shipped final projects." },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Learning Timeline</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            The <span className="text-gradient">path</span> here
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gradient">
                    {s.date}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 top-1.5 -translate-x-1/2 md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}