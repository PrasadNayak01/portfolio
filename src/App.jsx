import { useEffect } from "react";
import { certificates } from "./data/portfolio";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    certificates.forEach((c) => {
      const img = new Image();
      img.src = c.image;
    });
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
