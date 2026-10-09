import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-2xl space-y-8 border-l-2 border-indigo-500/40 pl-6">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="relative">
              <span className="absolute -left-8.25 top-1.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-950" />
              <p className="text-xs font-medium text-indigo-500">{e.period}</p>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {e.title}
              </h3>
              <p className="text-sm">{e.place}</p>
              <p className="text-sm font-medium">{e.score}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
