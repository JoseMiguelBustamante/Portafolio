import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Achievements from "./sections/Achievements.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="mx-auto max-w-3xl px-6 py-10 text-sm text-slate-600">
        © {new Date().getFullYear()} Jose Miguel Bustamante
      </footer>
    </>
  );
}
