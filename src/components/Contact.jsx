import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const field =
  "w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // catches a missing/unread .env before calling EmailJS
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS env variables:", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
      });
      setErrorMsg(
        ".env values not found. Check the file name, location, VITE_ prefix, and restart npm run dev.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    // fills {{time}} in the EmailJS template
    form.current.elements.time.value = new Date().toLocaleString("en-IN");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(err?.text || err?.message || "Unknown error");
      setStatus("error");
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-lg">
            Have an opportunity or a project in mind? Send me a message and I'll
            get back to you.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FiMail className="text-indigo-500" /> {profile.email}
            </p>
            <p className="flex items-center gap-3">
              <FiMapPin className="text-indigo-500" /> {profile.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <input
              name="from_name"
              required
              placeholder="Your name"
              className={field}
            />
            <input
              name="reply_to"
              type="email"
              required
              placeholder="Your email"
              className={field}
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your message"
              className={field}
            />
            <input type="hidden" name="time" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary disabled:opacity-60"
            >
              <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-600">
                Message sent! I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <div className="text-sm text-red-500">
                <p>Something went wrong. Please email me directly.</p>
                {errorMsg && (
                  <p className="mt-1 text-xs opacity-80">Reason: {errorMsg}</p>
                )}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
