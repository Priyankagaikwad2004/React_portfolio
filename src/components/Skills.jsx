import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaDatabase, FaCode, FaGithub } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: 'from-orange-500 to-orange-400' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: 'from-blue-500 to-blue-400' },
  { name: 'JavaScript', icon: <FaJs />, level: 80, color: 'from-yellow-500 to-yellow-400' },
  { name: 'PHP', icon: <FaPhp />, level: 75, color: 'from-purple-500 to-purple-400' },
  { name: 'Java', icon: <FaJava />, level: 70, color: 'from-red-500 to-red-400' },
  { name: 'MySQL', icon: <FaDatabase />, level: 80, color: 'from-cyan-500 to-cyan-400' },
  { name: 'DSA', icon: <FaCode />, level: 85, color: 'from-green-500 to-green-400' },
  { name: 'GitHub', icon: <FaGithub />, level: 75, color: 'from-gray-500 to-gray-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-gray-900/50 z-0" />
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl text-white">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="ml-auto text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;