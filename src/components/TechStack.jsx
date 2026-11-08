import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiHoppscotch,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    name: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Redux", icon: SiRedux },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    name: "Backend & Database",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Visual Studio Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Hoppscotch", icon: SiHoppscotch },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            My Toolkit
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Technologies I work with.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
            >
              <h3 className="mb-6 text-sm font-medium text-neutral-300">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      title={item.name}
                      className="group flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-3 text-xs text-neutral-400 transition hover:border-neutral-500 hover:bg-neutral-900 hover:text-white"
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
