import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiAxios,
  SiHtml5,
  SiBootstrap,
  SiEjs,
  SiMysql,
  SiStripe,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { projects } from "../data/portfolio";

const techIcons = {
  "React.js": SiReact,
  JavaScript: SiJavascript,
  Redux: SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  Axios: SiAxios,
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  Bootstrap: SiBootstrap,
  EJS: SiEjs,
  MySQL: SiMysql,
  Stripe: SiStripe,
};

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Projects I've built.
            </h2>
          </div>

          <a
            href="https://github.com/PrasadNayak01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
          >
            View GitHub <FiArrowUpRight />
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition duration-300 hover:border-neutral-600 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Preview */}
              <div
                className={`flex items-center justify-center border-b border-neutral-800 bg-neutral-900/60 ${
                  index === 0 ? "min-h-56" : "min-h-44"
                }`}
              >
                <div className="px-6 py-10 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-2 text-xs text-neutral-600">
                    {project.date}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex shrink-0 gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                        title="View Source Code"
                        className="text-neutral-500 transition hover:text-white"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        title="View Live Project"
                        className="text-neutral-500 transition hover:text-white"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mt-6 border-t border-neutral-800 pt-5">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                    Built With
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.tech.map((tech) => {
                      const Icon = techIcons[tech];

                      return (
                        <div
                          key={`${project.title}-${tech}`}
                          className="group/tech relative"
                        >
                          <div
                            aria-label={tech}
                            className="flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/70 text-neutral-400 transition-all duration-200 group-hover/tech:-translate-y-1 group-hover/tech:border-neutral-500 group-hover/tech:bg-neutral-800 group-hover/tech:text-white"
                          >
                            {Icon ? (
                              <Icon size={21} />
                            ) : (
                              <span className="text-[10px]">{tech}</span>
                            )}
                          </div>

                          {/* Technology Tooltip */}
                          <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tech:opacity-100">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
