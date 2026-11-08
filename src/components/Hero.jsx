import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { HiChevronDoubleDown } from "react-icons/hi";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-24 text-center"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 text-lg font-medium text-neutral-400 sm:text-2xl"
        >
          {profile.role}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base"
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-5"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 transition hover:text-white"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 transition hover:text-white"
          >
            <FaLinkedinIn size={22} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-300"
          >
            <FiDownload size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-400"
          >
            Let's Connect <FiArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 transition hover:text-white"
      >
        <HiChevronDoubleDown size={25} />
      </a>
    </section>
  );
}
