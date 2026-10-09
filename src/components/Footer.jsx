import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-xl">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
