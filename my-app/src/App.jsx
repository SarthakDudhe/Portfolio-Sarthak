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
import './App.css'

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
          <About />
          <Card />
          <Achieve />
          <Project />
          <Contact />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
