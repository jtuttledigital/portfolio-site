// app/page.jsx
"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <header className="space-y-5">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">John Tuttle</h1>
        <p className="prose max-w-2xl">
          Product Designer & Creative Technologist in Seattle. I build AI-driven tools,
          brand systems, and end-to-end web experiences.
        </p>
        <div className="flex gap-3 text-sm">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white"
          >
            <Mail size={16} /> Contact
          </a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourname"
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </header>

      {/* TAGS */}
      <section className="flex flex-wrap gap-2">
        {["AI/LLM", "Next.js", "Design Systems", "Motion", "After Effects", "Branding", "Automation"].map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-black/5 border border-black/5">
            {t}
          </span>
        ))}
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Selected Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="prose">
        <h2>About</h2>
        <p>
          I’ve shipped products and campaigns across startups and Fortune 500s. Recently I built
          a moving brand from scratch (Alto Moving), owning web, identity, ads, and ops. Now I’m
          focused on creative AI and product design roles in Seattle.
        </p>
      </section>
    </div>
  );
}
