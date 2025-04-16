import "./Navbar.css"
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Hero from "./Hero";
import About from './About'
import Card from './Card'
import Achieve from './Achieve'
import Project from './Project'
import Contact from './Contact'
import { Menu, X } from 'lucide-react';
import 'animate.css';
import { useState } from "react";

function Navbar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="brand">Portfolio</div>
        <button className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  <Hero/>
  <About/>
  <Card/>
<Achieve/>
<Project/>
<Contact/>
    </div>
  )
}

export default Navbar