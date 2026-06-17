import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

      <div className="carousel-wrapper relative w-full max-w-[1200px] flex items-center mx-auto px-4 md:px-10">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md hidden sm:block"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="projects-scroll-container flex overflow-x-auto gap-8 py-6 w-full snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-row-card snap-center flex-shrink-0 w-[80vw] md:w-[70vw] min-w-[280px] max-w-[850px] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 bg-[#121214]/65 backdrop-blur-md flex flex-col md:flex-row group"
            >
              {/* Left Side: Image */}
              <div className="project-card-image-wrapper w-full md:w-1/2 h-[180px] xs:h-[220px] md:h-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Side: Content */}
              <div className="project-card-content w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-white font-semibold text-xl md:text-2xl mb-3 md:mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-5 line-clamp-4 md:line-clamp-none font-normal">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400 text-[10px] md:text-xs font-normal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons at bottom */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs md:text-sm font-medium transition-all shadow-lg shadow-blue-600/15 cursor-pointer"
                  >
                    🔗 Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#1C1C1E] border border-white/10 hover:bg-[#2C2C2E] text-white rounded-xl text-xs md:text-sm font-medium transition-all cursor-pointer"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md hidden sm:block"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Project;
