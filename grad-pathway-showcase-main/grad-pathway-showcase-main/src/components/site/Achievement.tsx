import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar } from "lucide-react";

export function Achievement() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-12"
        >
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[color:var(--accent-gold)] opacity-10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gradient-gold">
                <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--accent-gold)]" />
                Achievement Unlocked
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Successfully completed the Full Stack Development Bootcamp at{" "}
                <span className="text-gradient-gold">Sheriyans Coding School</span>.
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Completed june 03, 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Award className="h-4 w-4 text-[color:var(--accent-gold)]" />
                  Certificate ID: SCSD-158
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-30 blur-2xl" />
              <div className="relative grid h-32 w-32 place-items-center rounded-full bg-gradient-gold text-background shadow-elegant md:h-40 md:w-40">
                <Award className="h-12 w-12 md:h-16 md:w-16" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}