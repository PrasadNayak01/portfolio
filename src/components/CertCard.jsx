import { useState } from "react";
import { FiMaximize2 } from "react-icons/fi";

export default function CertCard({ cert, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={() => onOpen(cert)}
      className="card group block h-full w-full overflow-hidden p-0 text-left hover:-translate-y-2 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div
        className={`relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800 ${
          loaded ? "" : "animate-pulse"
        }`}
      >
        <img
          ref={(el) => el?.complete && setLoaded(true)}
          src={cert.image}
          alt={cert.title}
          width="800"
          height="600"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white opacity-0 transition group-hover:opacity-100">
          <FiMaximize2 />
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {cert.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
      </div>
    </button>
  );
}
