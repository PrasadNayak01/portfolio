import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="min-h-screen overflow-hidden bg-white text-neutral-900 transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
