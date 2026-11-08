import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="career" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Academic Background
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Education & journey.
          </h2>
        </div>

        {/* MCA and BSc */}
        <div className="grid gap-4 md:grid-cols-2">
          {education.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition duration-300 hover:border-neutral-600"
            >
              <div className="mb-6 flex items-center justify-between">
                <FiBookOpen size={22} className="text-neutral-400" />
                <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {item.place}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-neutral-800 pt-5 text-sm text-neutral-300">
                <FiAward size={17} className="text-neutral-500" />
                {item.score}
              </div>
            </motion.div>
          ))}
        </div>

        {/* HSC and SSC */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {education.slice(2).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between gap-4 rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-5 transition hover:border-neutral-600"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <FiBookOpen size={16} className="shrink-0 text-neutral-500" />
                  <h3 className="text-sm font-medium text-neutral-200">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  {item.place}
                </p>

                <p className="mt-1 text-xs text-neutral-600">{item.period}</p>
              </div>

              <span className="shrink-0 text-sm font-medium text-neutral-300">
                {item.score}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
