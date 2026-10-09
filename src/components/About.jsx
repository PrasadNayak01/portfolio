import Section from "./Section";
import Reveal from "./Reveal";
import { profile, stats } from "../data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed">{profile.summary}</p>
          <p className="mt-4 text-sm text-slate-500">📍 {profile.location}</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="card text-center hover:-translate-y-1">
                <div className="text-3xl font-extrabold text-indigo-500">
                  {s.value}
                </div>
                <div className="mt-1 text-xs">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
