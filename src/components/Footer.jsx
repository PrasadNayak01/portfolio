import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a
              href="#home"
              className="text-xl font-semibold tracking-tight text-white"
            >
              Prasad<span className="text-neutral-500">.</span>
            </a>
            <p className="mt-2 text-sm text-neutral-500">
              Building ideas into web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-neutral-500 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-neutral-500 transition hover:text-white"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500 transition hover:text-white"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition hover:border-neutral-500 hover:text-white"
            >
              <FiArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
