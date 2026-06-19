import "./Hero.css"
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import 'animate.css';
import backgroundVideo from "../assets/background.mp4";

// Import integrated UI components
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { RevealText } from "./ui/reveal-text";

function Hero()
{
  return (
    <div className="front-page relative overflow-hidden" id="home">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
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
        <div className="hero-left z-10">
          <RevealText 
            text="SARTHAK"
            textColor="text-white"
            overlayColor="text-red-500"
            fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px]"
            letterDelay={0.08}
            overlayDelay={0.05}
            overlayDuration={0.4}
            springDuration={600}
          />
        </div>

        <div className="hero-right z-10">
          <RevealText 
            text="DUDHE"
            textColor="text-white"
            overlayColor="text-red-500"
            fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px]"
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
