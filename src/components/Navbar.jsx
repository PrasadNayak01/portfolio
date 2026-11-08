import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "About", href: "#about" },
  { name: "Career", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-5 whitespace-nowrap rounded-full border border-neutral-700 bg-black/85 px-5 py-3 text-xs text-neutral-300 shadow-lg backdrop-blur-xl sm:gap-7 sm:px-6">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="transition hover:text-white"
        >
          {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden transition hover:text-white"
        >
          {open ? <FiX size={17} /> : <FiMenu size={17} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="fixed left-1/2 top-19 z-50 w-52 -translate-x-1/2 rounded-xl border border-neutral-800 bg-neutral-950 p-2 text-sm text-neutral-300 shadow-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 transition hover:bg-neutral-800 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
