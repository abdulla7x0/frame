import { Github, Linkedin, Mail, Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">A</span>
              <span className="text-lg font-semibold">Abdulla</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Full Stack Developer. Building thoughtful, fast, and useful web products.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Connect</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground" href="abdullax080@gmail.com"><Mail className="h-4 w-4" /> abdullax080@gmail.com</a></li>
              <li><a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground" href="https://github.com/abdulla7x0" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> github.com/abdulla</a></li>
              <li><a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground" href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> linkedin.com/in/abdulla</a></li>
              <li><a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground" href="#" target="_blank" rel="noreferrer"><Globe className="h-4 w-4" /> abdulla</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Notice</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              This website is a personal achievement and portfolio page created by the student.
              Sheriyans Coding School provided the educational program and certificate displayed on this page.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Abd . All rights reserved.</p>
          <p>Crafted with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}