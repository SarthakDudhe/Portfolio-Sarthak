import "./Hero.css"
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import 'animate.css';

// Import integrated UI components
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { RevealText } from "./ui/reveal-text";
import { InteractiveQuantumCore } from "./ui/InteractiveQuantumCore";

function Hero()
{
  return (
    <div className="front-page relative overflow-hidden" id="home">
      {/* Interactive Background Canvas */}
      <InteractiveQuantumCore />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="hero-container">
        <div className="hero-title-wrapper z-10">
          <RevealText 
            text="SARTHAK"
            textColor="text-white"
            overlayColor="text-red-500"
            fontSize="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px]"
            letterDelay={0.08}
            overlayDelay={0.05}
            overlayDuration={0.4}
            springDuration={600}
          />
          <RevealText 
            text="DUDHE"
            textColor="text-white"
            overlayColor="text-red-500"
            fontSize="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px]"
            letterDelay={0.08}
            overlayDelay={0.05}
            overlayDuration={0.4}
            springDuration={600}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero
