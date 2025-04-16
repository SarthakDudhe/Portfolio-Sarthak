import React from 'react';
import "./Project.css"
import cbs from "../assets/CBSJAVA.png"
import amazon from "../assets/amazonclone.png"
import game from "../assets/game.png"
const projects = [
  {
    id: 1,
    title: "Cab Booking System",
    description: "A cab booking system built with java allowing users to book cabs track rides and manage bookings",
    image: cbs,
    tags: ["Core Java", "Java Swing", "MySQL"]
  },
  {
    id: 2,
    title: "Amazon Clone",
    description: "A frontend clone of Amazon E-commerce Website Build using HTML and Css",
    image: amazon,
    tags: ["HTML", "CSS" ]
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description: "A web based Tic Tac Toe game buld with HTML,CSS and Javascript.The game allows two players to take turns marking spaces on a 3x3 grid",
    image: game,
    tags: ["Javascript", "HTML", "CSS"]
  }//,
//   {
//     id: 4,
//     title: "Smart Home App",
//     description: "IoT-based home automation system with voice control and energy monitoring.",
//     image: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&q=80&w=1000",
//     tags: ["IoT", "React Native", "Node.js"]
//   }
];

function Project() {
  return (
    <div className="container" id='projects'>
     <div className="text"><h1 >Projects</h1></div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;