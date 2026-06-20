import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Card from './components/Card'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Achieve from './components/Achieve'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { InteractiveQuantumCore } from "./components/ui/InteractiveQuantumCore"
import { motion } from "framer-motion"
import './App.css'

const revealVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function App() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fade in the canvas after scrolling past 80% of Hero viewport height
      if (window.scrollY > window.innerHeight * 0.75) {
        setShowCanvas(true);
      } else {
        setShowCanvas(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />    
        <main className="relative">
          {/* Shared Interactive Particle Nodes Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none transition-opacity duration-700"
            style={{ 
              opacity: showCanvas ? 1 : 0, 
              zIndex: 0,
              background: "radial-gradient(circle at center, rgba(74, 158, 255, 0.06) 0%, rgba(155, 81, 224, 0.02) 50%, transparent 80%)"
            }}
          >
            <InteractiveQuantumCore />
          </div>
          <Hero />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={revealVariants}
          >
            <About />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={revealVariants}
          >
            <Card />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={revealVariants}
          >
            <Achieve />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={revealVariants}
          >
            <Project />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={revealVariants}
          >
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
