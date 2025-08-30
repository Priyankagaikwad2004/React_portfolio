import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';

const Hero = ({ isMobile }) => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullName = "Priyanka Gaikwad";
  const roles = [
    "Full Stack Developer",
    "Engineering Student",
    "Full Stack Developer",
    "Engineering Student"
  ];

  // Function to handle resume download
  const downloadResume = () => {
    // Using the Fetch API to get the resume file
    fetch('/src/assets/resume.pdf')
      .then(response => response.blob())
      .then(blob => {
        // Create a blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Priyanka_Gaikwad_Resume.pdf');
        
        // Append to html link element page
        document.body.appendChild(link);
        
        // Start download
        link.click();
        
        // Clean up and remove the link
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading resume:', error);
        // Fallback: Open in new tab if download fails
        window.open('/src/assets/resume.pdf', '_blank');
      });
  };

  useEffect(() => {
    // Typewriter effect for name
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setTypedText(fullName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Blinking cursor effect
        setInterval(() => setShowCursor(prev => !prev), 500);
      }
    }, isMobile ? 100 : 150);

    return () => clearInterval(typingInterval);
  }, [isMobile]);

  useEffect(() => {
    // Role rotation effect
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-cyan-400 mb-4 font-light"
          >
            Hello, I'm
          </motion.p>

          {/* Name with typewriter effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
            {typedText}
            {!isMobile && (
              <span className={`inline-block w-1 h-16 align-middle bg-cyan-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
            )}
          </h1>
          
          {/* Animated role text */}
          <motion.div
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto h-10"
          >
            {roles[currentRoleIndex]}
          </motion.div>
          
          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isMobile ? 1.2 : 2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <button
              onClick={downloadResume}
              className="px-6 py-3 bg-gray-800 text-gray-100 font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="h-5 w-5" />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isMobile ? 1.6 : 2.5, duration: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a 
              href="https://github.com/Priyankagaikwad2004" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl p-3 bg-gray-800/50 rounded-lg hover:bg-cyan-400/10"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/gaikwad-priyanka/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl p-3 bg-gray-800/50 rounded-lg hover:bg-cyan-400/10"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a 
              href="https://x.com/PriyankaGa95614" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl p-3 bg-gray-800/50 rounded-lg hover:bg-cyan-400/10"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
            <a 
              href="mailto:priya937027@gmail.com" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl p-3 bg-gray-800/50 rounded-lg hover:bg-cyan-400/10"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center text-cyan-400/70">
                <span className="text-sm mb-2">Scroll down</span>
                <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating profile image - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden lg:block absolute right-20 bottom-20"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse blur-xl opacity-30" />
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-cyan-400/20">
              <img
                src="/src/assets/img3.jpg"
                alt="Priyanka Gaikwad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;