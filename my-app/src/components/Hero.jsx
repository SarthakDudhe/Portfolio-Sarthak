import "./Hero.css"
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import 'animate.css';
import UnicornScene from "unicornstudio-react";

// Import integrated UI components
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { AnimatedText } from "./ui/animated-shiny-text";

function Hero()
{
  return (
    <div className="front-page relative overflow-hidden" id="home">
      {/* Background Unicorn Scene */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <UnicornScene
          projectId="fNLVDSG4a2v3BFJraMiI"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.5/dist/unicornStudio.umd.js"
        />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="hero-container">
        <div className="hero-left z-10">
          <h1><AnimatedText 
            text="SARTHAK" 
            className="inline-flex py-0 my-0 align-baseline" 
            textClassName="text-[inherit] font-bold inline-block leading-none"
            hoverEffect={true}
          /></h1>
        </div>
        
        <div className="hero-center relative z-10">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full spline-scene-3d"
          />
        </div>

        <div className="hero-right z-10">
          <h1><AnimatedText 
            text="DUDHE" 
            className="inline-flex py-0 my-0 align-baseline" 
            textClassName="text-[inherit] font-bold inline-block leading-none"
            hoverEffect={true}
          /></h1>
        </div>
      </div>
    </div>
  );
}

export default Hero
