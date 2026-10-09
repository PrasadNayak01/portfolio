import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Section from "./Section";
import CertCard from "./CertCard";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="certificates" title="Certificates">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <CertCard key={c.title} cert={c} onOpen={setSelected} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute -right-2 -top-2 rounded-full bg-white p-2 text-slate-900 shadow-lg transition hover:bg-indigo-500 hover:text-white"
              >
                <FiX />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[85vh] rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-white">
                {selected.title} · {selected.issuer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
