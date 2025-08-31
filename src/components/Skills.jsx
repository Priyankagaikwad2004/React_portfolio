import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
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
      { name: "Java", percentage: 65 }
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
  },
  {
      title: "Mobile & Responsive",
      skills: [
        { name: "Responsive Design", percentage: 92 },
        { name: "Mobile-First Approach", percentage: 88 },
        { name: "Progressive Web Apps", percentage: 75 },
        { name: "Cross-Browser Testing", percentage: 80 }
      ],
    },
    {
    category: "Database Management",
    skills: [
      { name: "MySQL", percentage: 85 },
      { name: "PostgreSQL", percentage: 75 }
    ]
  },
  {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & Version Control", percentage: 85 },
        { name: "VS Code & IDEs", percentage: 90 },
      ],
      gradient: "from-secondary to-primary"
    }
];


  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-gray-900/50 z-0" />
      
      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skillCategory, index) => (
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
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: skillIndex % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-white">{skill.icon}</span>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;