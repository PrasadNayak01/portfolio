import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          {title}
          <span className="mt-3 block h-1 w-16 rounded bg-indigo-500" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
