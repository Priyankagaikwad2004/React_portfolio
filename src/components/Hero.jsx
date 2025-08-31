import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-inter">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            Priyanka Gaikwad
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'experience', 'skills', 'certificates', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${activeSection === item ? 'text-purple-400 font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-800 mt-4 py-4 px-6 rounded-lg"
          >
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'projects', 'experience', 'skills', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${activeSection === item ? 'text-purple-400 font-medium' : 'text-gray-300 hover:text-white'} text-left`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Priyanka <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Gaikwad</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Full Stack Developer | Building Scalable & Interactive Web Apps
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30">
                Hire Me
              </button>
              <button className="px-8 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-850">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full absolute -z-10 top-4 left-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Priyanka Gaikwad" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-gray-800"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3"
            >
              <h3 className="text-2xl font-semibold mb-4">Final Year Computer Engineering Student</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer with a CGPA of 9.31 from Pune, specializing in creating impactful web applications. 
                My expertise includes Django, React, Vite, Tailwind CSS, PHP, MySQL, C++, and Java.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Django', 'React', 'Vite', 'Tailwind', 'PHP', 'MySQL', 'C++', 'Java'].map((skill) => (
                  <div key={skill} className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-850">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Experience & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Internships</span>
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-6 border-l-4 border-purple-500"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Keystone School of Engineering</h3>
                <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">Internship</span>
              </div>
              <p className="text-gray-400 mb-2">Certificate Generation System</p>
              <p className="text-gray-300">
                Developed a comprehensive certificate generation system to automate the process of creating and distributing
                digital certificates for students and events. Implemented secure verification features and responsive design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skillCategory, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-850">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Certificates & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${cert.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-2/5"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out for collaboration or just to say hello! I'm always open to discussing new projects and opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p>priyanka@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Pune, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex mt-8 space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br from-purple-600 to-blue-600 transition-colors"
                  >
                    <i className={`fab ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Priyanka Gaikwad. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-700 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

// Data
const projects = [
  {
    id: 1,
    title: "AskIt Travel Platform",
    description: "A comprehensive Q&A platform for travelers to get advice and share experiences.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 2,
    title: "Farmer's E-Commerce Website",
    description: "An online marketplace connecting farmers directly with consumers.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    technologies: ["Django", "PostgreSQL", "HTML/CSS", "JavaScript"]
  },
  {
    id: 3,
    title: "Patient Management System",
    description: "A system for healthcare providers to manage patient records and appointments.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"]
  }
];

const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", percentage: 85 },
      { name: "HTML/CSS", percentage: 90 },
      { name: "JavaScript", percentage: 80 },
      { name: "Tailwind CSS", percentage: 75 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Django", percentage: 80 },
      { name: "PHP", percentage: 70 },
      { name: "Node.js", percentage: 75 },
      { name: "Java", percentage: 65 }
    ]
  },
  {
    category: "Database Management",
    skills: [
      { name: "MySQL", percentage: 85 },
      { name: "MongoDB", percentage: 70 },
      { name: "PostgreSQL", percentage: 75 }
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", percentage: 80 },
      { name: "Java", percentage: 75 },
      { name: "Python", percentage: 85 },
      { name: "JavaScript", percentage: 80 }
    ]
  }
];

const certificates = [
  {
    id: 1,
    title: "Java Programming",
    issuer: "Oracle",
    icon: "fa-code"
  },
  {
    id: 2,
    title: "DBMS Fundamentals",
    issuer: "Coursera",
    icon: "fa-database"
  },
  {
    id: 3,
    title: "Prompt Engineering",
    issuer: "DeepLearning.AI",
    icon: "fa-brain"
  },
  {
    id: 4,
    title: "Java Full Stack",
    issuer: "Udemy",
    icon: "fa-layer-group"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "fa-linkedin-in"
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "fa-github"
  },
  {
    name: "Email",
    url: "mailto:priyanka@example.com",
    icon: "fa-envelope"
  }
];

export default Portfolio;