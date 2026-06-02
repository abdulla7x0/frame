import { motion } from "framer-motion";
import { Download, Award } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Button } from "@/components/ui/button";
import cert from "@/assets/certificate.jpg";

export function Certificate() {
  return (
    <section id="certificate" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Verified</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            The <span className="text-gradient-gold">Certificate</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tap or click to zoom into the official certificate of completion.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-30 blur-3xl" />
            <div className="relative rounded-3xl border border-[color:var(--accent-gold)]/40 bg-card p-3 shadow-elegant md:p-5">
              <Zoom>
                <img
                  src={cert}
                  alt="Certificate of Completion — Sheriyans Coding School Full Stack Development Bootcamp"
                  className="w-full rounded-2xl"
                  width={1280}
                  height={896}
                  loading="lazy"
                />
              </Zoom>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-gold text-background hover:opacity-95">
              <a href={cert} download="Aryan-Sharma-Certificate.jpg">
                <Download className="mr-2 h-4 w-4" />
                Download Certificate
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#" className="inline-flex items-center">
                <Award className="mr-2 h-4 w-4" />
                Verify Authenticity
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}