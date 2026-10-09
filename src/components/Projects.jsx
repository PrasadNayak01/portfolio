import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className="h-full">
            <article className="card flex h-full flex-col hover:-translate-y-2 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10">
              <span className="text-xs font-medium text-indigo-500">
                {p.date}
              </span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-sm text-slate-500">{p.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm font-medium">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-500"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-500"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
