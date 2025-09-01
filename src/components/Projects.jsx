import { motion } from 'framer-motion';
import { ExternalLink, Github, MapPin, ShoppingCart, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AskIt – Discover Incredible India",
      description: "An interactive travel platform where users can search cities and famous places in India, view detailed information (history, best time to visit, fun facts, tips), and add new locations.",
      icon: MapPin,
      technologies: ["React", "Django", "Tailwind CSS", "Vite"],
      features: ["City Search", "Place Discovery", "Travel Information", "User Contributions"],
      gradient: "from-purple-500 to-blue-500",
      github: "https://github.com/Priyankagaikwad2004/Askit",
      live: "https://askit-nine.vercel.app/"
    },
    {
      title: "Patient Management System",
      description: "Lightweight hospital management system to manage patient records, doctor assignments, and visit logs.",
      icon: Users,
      technologies: ["PHP", "MySQL", "jQuery"],
      features: ["Patient Records", "Doctor Management", "Appointment System", "Visit Logs"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Priyankagaikwad2004/patient-management",
      live: "https://patientmanagement.free.nf/"
    },
    {
      title: "Farmer's Market Web App",
      description: "A dynamic PHP-based platform where farmers can register, upload produce, and manage listings. Buyers can browse categories and place order requests.",
      icon: ShoppingCart,
      technologies: ["PHP", "MySQL", "JavaScript"],
      features: ["Farmer Registration", "Product Listings", "Order System", "Admin Dashboard"],
      gradient: "from-blue-500 to-green-500",
      github: "https://github.com/Priyankagaikwad2004/farmers-market",
      live: "#"
    },
    {
      title: "Bonafide Certificate System",
      description: "Automated system for generating bonafide and leaving certificates with multi-role login and integrated clearance process.",
      icon: MapPin,
      technologies: ["PHP", "MySQL", "Bootstrap"],
      features: ["Certificate Generation", "Multi-role Login", "Clearance Process", "Document Management"],
      gradient: "from-blue-500 to-purple-500",
      github: "https://github.com/Priyankagaikwad2004/bonafide-system",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my passion for building impactful solutions</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-500 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} p-3 mb-6 flex items-center justify-center`}>
                <project.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-gray-600 transition-colors flex-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm hover:from-purple-700 hover:to-blue-700 transition-colors flex-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;