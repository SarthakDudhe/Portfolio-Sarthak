import "./Hero.css"
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import backgroundVideo from "../assets/background.mp4";
import { Spotlight } from "./ui/spotlight";

const MotionDiv = motion.div;

function Hero() {
  const words = ["SARTHAK DUDHE", "FULLSTACK DEVELOPER"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        setTypingSpeed(100 + Math.random() * 40); // Natural variance
      }, typingSpeed);

      if (displayedText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(40); // Deleting is faster
        }, 2500); // Pause on full word
      }
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, typingSpeed);

      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingSpeed(150); // Pause before next word starts typing
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="front-page relative overflow-hidden" id="home">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="hero-container">
        <MotionDiv 
          className="hero-title-wrapper z-10"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-typing-title">
            {displayedText}
            <span className="typing-cursor">|</span>
          </h1>
        </MotionDiv>
      </div>
    </div>
  );
}

export default Hero;
