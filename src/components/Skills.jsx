import { motion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.1}>
            <div className="card h-full">
              <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="cursor-default rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
