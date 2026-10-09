import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* animated background blobs */}
      <motion.div
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-10 bottom-20 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 font-medium text-indigo-500"
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent md:text-4xl"
        >
          {profile.role}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={profile.resume} download className="btn-primary">
            <FiDownload /> Download Resume
          </a>
          <a href="#contact" className="btn-outline">
            <FiMail /> Contact Me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 text-2xl transition hover:scale-110 hover:text-indigo-500"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-2xl transition hover:scale-110 hover:text-indigo-500"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
