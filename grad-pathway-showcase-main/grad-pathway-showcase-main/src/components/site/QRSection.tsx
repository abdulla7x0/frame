import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { ScanLine } from "lucide-react";

import wImage from "@/assets/s.jpg";

export function QRSection() {
  const url = typeof window !== "undefined" ? window.location.href : "https://abdport.vercel.app/";
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12"
        >
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <ScanLine className="h-3.5 w-3.5" />
                Scan to share
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                This is the QR code on the certificate.
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Scanning the QR printed on the back of the certificate brings you right here —
                to the live, verified achievement page.
              </p>
            </div>
            
            <div className="mx-auto rounded-2xl border border-border bg-background p-5 shadow-elegant">
              <img
  src={wImage}
  alt="Certificate QR"
  className="h-[120px] w-[120px] object-contain"
/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}