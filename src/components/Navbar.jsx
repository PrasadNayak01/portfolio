import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";

const links = [
  "About",
  "Skills",
  "Projects",
  "Education",
  "Certificates",
  "Contact",
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/70">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-lg font-bold text-slate-900 dark:text-white"
        >
          Prasad<span className="text-indigo-500">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium transition hover:text-indigo-500"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 sm:inline-flex"
          >
            <FiDownload /> Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-slate-300 p-2 transition hover:border-indigo-500 dark:border-slate-700"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-4 border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block font-medium"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              download
              className="font-medium text-indigo-500"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
