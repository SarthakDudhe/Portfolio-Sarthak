import { BrowserRouter } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Card from "./components/Card";
import Achieve from "./components/Achieve";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const MotionDiv = motion.div;

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <BrowserRouter>
      <Navbar />
      <MotionDiv className="scroll-progress" style={{ scaleX }} />

      <main className="app-shell">
        <Hero />
        <About />
        <Card />
        <Achieve />
        <Project />
        <Contact />
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
