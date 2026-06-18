import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import cbs from "../assets/CBSJAVA.png";
import prepgenie from "../assets/Prepgenie.png";
import chat from "../assets/Quickchat.png";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Cab Booking System",
    description:
      "A Java-based cab booking system that allows users to book cabs, track rides, and manage bookings efficiently.",
    image: cbs,
    tags: ["Core Java", "Java Swing", "MySQL"],
    liveLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    githubLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    gradient: "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
  },
  {
    id: 2,
    title: "Prepgenie",
    description:
      "PrepGenie is a user-friendly platform that helps you prepare for interviews step by step. You can create your own practice sessions, choose different topics like algorithms or system design, and get questions in a clean and easy-to-use interface.",
    image: prepgenie,
    tags: ["React", "MongoDB", "Tailwindcss", "Express", "Node", "GeminiApi"],
    liveLink: "https://prep-genie-k3cd.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/PrepGenie",
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  },
  {
    id: 3,
    title: "QuickChat - Chat Application",
    description:
      "Built a secure, real-time chat platform using Socket.IO with authentication and instant messaging. Developed RESTful APIs with Node.js/Express.js and integrated MongoDB for persistent message storage.",
    image: chat,
    tags: ["React", "MongoDB", "Tailwindcss", "Express", "Node"],
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth * 0.75;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="projects-subtitle">
          Explore some of my recent works showcasing diverse technologies and designs.
        </p>
      </div>

      <div className="carousel-wrapper relative w-full flex items-center mx-auto">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 md:left-10 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md hidden sm:block"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="projects-scroll-container flex overflow-x-auto gap-12 py-10 w-full snap-x snap-mandatory scroll-smooth no-scrollbar px-[10vw] md:px-[15vw]"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="snap-center flex-shrink-0 overflow-visible py-4"
            >
              <CardContainer containerClassName="py-0 px-2 sm:px-4">
                <CardBody
                  className="project-card relative group/card border-white/10 w-[82vw] sm:w-[28rem] md:w-[30rem] h-auto rounded-[30px] p-6 border shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between text-left overflow-visible"
                  style={{
                    '--project-gradient': project.gradient,
                  }}
                >
                  {/* LAYER 1 — MULTICOLOR GLOW (behind card content, tilting in 3D) */}
                  <div
                    className="project-glow opacity-30 group-hover/card:opacity-60 transition-opacity duration-300 absolute inset-0 scale-[1.05] blur-[40px] pointer-events-none rounded-[30px]"
                    style={{
                      background: project.gradient,
                      zIndex: -1,
                    }}
                  />

                  <div>
                    {/* Top Section: Title & Description */}
                    <CardItem
                      translateZ="50"
                      className="text-white font-bold text-lg md:text-xl mb-1 tracking-tight"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 font-normal"
                    >
                      {project.description}
                    </CardItem>

                    {/* Middle Section: Image */}
                    <CardItem
                      translateZ="100"
                      rotateX={10}
                      rotateZ={-2}
                      className="w-full mb-5 overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover/card:scale-[1.05] transition-transform duration-500"
                      />
                    </CardItem>

                    {/* Tech Tags */}
                    <CardItem
                      translateZ="40"
                      className="flex flex-wrap gap-1.5 mb-6"
                    >
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[9px] md:text-[11px] font-normal"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>
                  </div>

                  {/* Bottom Section: Buttons */}
                  <div className="flex justify-between items-center mt-2 w-full">
                    <CardItem
                      translateZ={30}
                      translateX={-15}
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-medium text-white flex items-center gap-1.5 border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <Github size={14} className="md:size-4" />
                      <span>GitHub</span>
                    </CardItem>

                    <CardItem
                      translateZ={30}
                      translateX={15}
                      as="a"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-blue-500 transition-colors cursor-pointer shadow-[0_4px_20px_rgba(59,130,246,0.3)]"
                    >
                      <ExternalLink size={14} className="md:size-4" />
                      <span>Live Demo</span>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-6 md:right-10 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md hidden sm:block"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Project;
