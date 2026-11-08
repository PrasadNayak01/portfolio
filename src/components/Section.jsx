import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <div className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Portfolio / {id}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            {title}
          </h2>

          <div className="mt-4 h-px w-12 bg-neutral-900 dark:bg-neutral-300" />
        </div>
      </Reveal>

      {children}
    </section>
  );
}
