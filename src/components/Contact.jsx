import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiSend,
} from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Let's connect.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400">
            Have an opportunity, project idea or just want to connect? Feel free
            to send me a message.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:col-span-2"
          >
            <h3 className="text-lg font-semibold text-white">
              Contact details
            </h3>

            <a
              href={`mailto:${profile.email}`}
              className="mt-7 flex items-center gap-4 text-neutral-400 transition hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                <FiMail size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-neutral-500">Email</span>
                <span className="mt-1 block break-all text-sm">
                  {profile.email}
                </span>
              </span>
              <FiArrowUpRight className="ml-auto shrink-0" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center gap-4 text-neutral-400 transition hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                <FiGithub size={19} />
              </span>
              <span>
                <span className="block text-xs text-neutral-500">GitHub</span>
                <span className="mt-1 block text-sm">PrasadNayak01</span>
              </span>
              <FiArrowUpRight className="ml-auto" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center gap-4 text-neutral-400 transition hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                <FiLinkedin size={19} />
              </span>
              <span>
                <span className="block text-xs text-neutral-500">LinkedIn</span>
                <span className="mt-1 block text-sm">Connect with me</span>
              </span>
              <FiArrowUpRight className="ml-auto" />
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:col-span-3"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">
              Send me a message
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs text-neutral-400"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs text-neutral-400"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs text-neutral-400"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-300"
            >
              Send Message <FiSend size={15} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
