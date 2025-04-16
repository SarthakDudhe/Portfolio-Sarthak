import "./Hero.css"
import newpic from "../assets/bluepic.png"

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from "react";
import { Link } from "react-router-dom";
import mypic from "../assets/bluepic.png"
import Contact from "./Contact";
import 'animate.css';

function Hero()
{

return<div className="front-page" id="home">
 <div   className="hero-container">
<div className="my-intro">
<h1>Hi,</h1>
<h1>I'am <span className="my">Sarthak Dudhe</span></h1>
<div className="wrapper">
    <div className="typing-demo">
        <h1>Student</h1>
    </div>
</div>

<div className="quote">
    <p>Computer Engineer by degree,tech enthusiast by passion.<br />Currently exploring the realms of MERN Stack and Java development.<br />Let's connect and create something amazing!</p>
</div>
<div className="contactme">
 <a href="#contact"><button type="button"><h2>Contact</h2> </button></a>
 <a href="#"><button type="button" id="cv"><h2>Download CV</h2>  </button></a>

</div>   
</div>
<div className="my-pic">
  
      <DotLottieReact
          src="https://lottie.host/78799510-cdf5-40df-9532-ab59725a117b/YxLII7W4EP.lottie"
          loop
          autoplay id="hello"
        />


</div>


    </div>




</div>

    
}

export default Hero



{/* <Link to="/contact"><button type="button" id="contact-btn"> Contact </button></Link> */}