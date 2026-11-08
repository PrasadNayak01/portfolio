import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Achievements
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Licenses & certifications.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition duration-300 hover:border-neutral-600"
            >
              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${certificate.title} certificate`}
                className="relative block aspect-4/3 overflow-hidden bg-neutral-900"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-900 px-4 py-2 text-xs text-white">
                    View Certificate <FiExternalLink />
                  </span>
                </div>
              </a>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-neutral-500">
                  <FiAward size={17} />
                  <span className="text-xs uppercase tracking-wider">
                    Certificate
                  </span>
                </div>

                <h3 className="text-sm font-semibold leading-6 text-neutral-200">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-xs text-neutral-500">
                  {certificate.issuer}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
