import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import askItImg from '../assets/askit_project.png';
import farmersImg from '../assets/farmers_website.png';
import bonafideImg from '../assets/bonafide_system.png';
import patientImg from '../assets/patient_m.png';

const projects = [
  {
    title: "AskIt – Discover Incredible India",
    description: "An interactive travel platform where users can search cities and famous places in India, view detailed information (history, best time to visit, fun facts, tips), and add new locations.",
    tags: ["React", "Django", "Tailwind CSS", "Vite"],
    image: askItImg,
    github: "https://github.com/your-username/askit", // Update with your actual GitHub URL
    live: "https://askit-nine.vercel.app/"
  },
  {
    title: "Farmer's Market Web App",
    description: "A dynamic PHP-based platform where farmers can register, upload produce, and manage listings. Buyers can browse categories and place order requests.",
    tags: ["PHP", "MySQL", "JavaScript"],
    image: farmersImg,
    github: "https://github.com/Priyankagaikwad2004/farmers-market",
    live: "#"
  },
  {
    title: "Bonafide Certificate System",
    description: "Automated system for generating bonafide and leaving certificates with multi-role login and integrated clearance process.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    image: bonafideImg,
    github: "https://github.com/Priyankagaikwad2004/bonafide-system",
    live: "#"
  },
  {
    title: "Patient Management System",
    description: "Lightweight hospital management system to manage patient records, doctor assignments, and visit logs.",
    tags: ["PHP", "MySQL", "jQuery"],
    image: patientImg,
    github: "https://github.com/Priyankagaikwad2004/patient-management",
    live: "#"
  },
];

const Projects = ({ isMobile }) => {
  return (
    <section id="projects" className="py-16 px-6 relative">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!isMobile ? { y: -10 } : {}}
              className="group"
            >
              <div className={`relative h-full transition-all duration-500 ${!isMobile ? 'perspective-1000 transform-style-preserve-3d group-hover:rotate-x-15 group-hover:rotate-y-15' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl shadow-lg border border-white/10 ${!isMobile ? 'group-hover:border-cyan-400/50' : ''} transition-all duration-500 ${!isMobile ? 'backface-hidden' : ''}`} />
                
                <div className={`relative h-full bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 ${!isMobile ? 'group-hover:border-cyan-400/30' : ''} transition-all duration-500 ${!isMobile ? 'transform-style-preserve-3d' : ''}`}>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs md:px-3 md:py-1 bg-cyan-400/10 text-cyan-400 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-sm md:px-4 md:py-2 md:text-base bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300"
                      >
                        <FiGithub className="text-sm md:text-base" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-sm md:px-4 md:py-2 md:text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full transition-all duration-300"
                      >
                        <FiExternalLink className="text-sm md:text-base" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;