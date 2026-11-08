import { motion } from "framer-motion";
import { FiMapPin, FiCode, FiTerminal, FiUser } from "react-icons/fi";
import { profile } from "../data/portfolio";

const cards = [
  {
    icon: FiUser,
    title: "About Me",
    value: profile.summary,
    className: "md:col-span-2",
  },
  { icon: FiMapPin, title: "Location", value: profile.location },
  { icon: FiCode, title: "Role", value: profile.role },
  {
    icon: FiTerminal,
    title: "Currently",
    value: "Building projects and improving my full-stack development skills",
    className: "md:col-span-2",
  },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Get to know me
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            A little about myself.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600 ${card.className || ""}`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="text-neutral-400" size={19} />
                  <h3 className="text-sm font-medium text-neutral-300">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-neutral-500">
                  {card.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
