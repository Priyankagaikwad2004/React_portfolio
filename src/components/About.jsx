import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4 font-orbitron">Who am I?</h3>
            <p className="text-light-200 mb-6">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              Currently pursuing my engineering degree, I love building digital solutions that 
              solve real-world problems.
            </p>
            <p className="text-light-200 mb-6">
              My journey in web development started with simple HTML pages and has evolved 
              into building complex applications. I'm constantly learning and exploring new 
              technologies to improve my skills.
            </p>
            <p className="text-light-200">
              When I'm not coding, you can find me contributing to open-source projects, 
              solving algorithmic challenges, or exploring new technologies in the 
              ever-evolving web ecosystem.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 font-orbitron">What I Do</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-dark-200/50 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Web Development</h4>
                <p className="text-sm text-light-200">
                  Building responsive, accessible, and performant websites and applications.
                </p>
              </div>
              
              <div className="p-4 bg-dark-200/50 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">UI/UX Design</h4>
                <p className="text-sm text-light-200">
                  Creating intuitive and beautiful user interfaces with great experiences.
                </p>
              </div>
              
              <div className="p-4 bg-dark-200/50 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Problem Solving</h4>
                <p className="text-sm text-light-200">
                  Solving complex problems with efficient algorithms and data structures.
                </p>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;