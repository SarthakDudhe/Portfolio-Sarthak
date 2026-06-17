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
        <div className="my-intro z-10">
          <h1>Hi,</h1>
          <h1>I'm <AnimatedText 
            text="Sarthak Dudhe" 
            className="inline-flex py-0 my-0 align-baseline" 
            textClassName="text-[inherit] font-bold inline-block leading-none"
            hoverEffect={true}
          /></h1>
          <div className="wrapper">
            <div className="typing-demo">
              <h1>Student</h1>
            </div>
          </div>

          <div className="quote">
            <p>
              Computer Engineer by degree,tech enthusiast by passion.<br />
              Currently exploring the realms of MERN Stack and Java development.<br />
              Let's connect and create something amazing!
            </p>
          </div>
          
          <div className="contactme">
            <a href="#contact"><button type="button"><h2>Contact</h2></button></a>
            <a href="https://drive.google.com/file/d/1GfO7jEMM66D4dz8eMH3HZ3SzqEWl5NJK/view?usp=drive_link">
              <button type="button" id="cv"><h2>Download CV</h2></button>
            </a>
          </div>
        </div>
        
        <div className="my-pic relative z-10">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full spline-scene-3d"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero
