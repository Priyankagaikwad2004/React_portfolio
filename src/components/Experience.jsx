import { Building2, Calendar, MapPin, Award, Rocket, Code2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Keystone School of Engineering",
      location: "Pune, Maharashtra",
      duration: "June 2024 - August 2024",
      type: "Internship",
      description:
        "Developed and implemented a comprehensive Certificate Generation System that automated the creation and distribution of digital certificates for students and professionals.",
      achievements: [
        "Designed and implemented a full-stack certificate generation system",
        "Automated PDF creation with dynamic data and reusable templates",
        "Developed an intuitive admin dashboard for managing certificates and batches",
        "Reduced manual certificate processing time by 85%, improving accuracy and consistency",
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained a CGPA of 9.31 throughout Computer Engineering program",
      icon: Award,
      color: "text-yellow-400",
    },
    {
      title: "Project Leadership",
      description: "Led and developed full-stack projects including AskIt (travel platform), Farmer’s E-Commerce Website, and Patient Management System",
      icon: Building2,
      color: "text-cyan-400",
    },
    {
      title: "Technical Skills",
      description: "Proficient in Django, React, Vite, Tailwind CSS, PHP, MySQL, C++, and Java with multiple certifications in Java, DBMS, Prompt Engineering, and Full Stack Development",
      icon: Code2,
      color: "text-purple-400",
    },
    {
      title: "Deployment & Hosting",
      description: "Successfully deployed projects using platforms like Render, Vercel, and GitHub Pages with focus on scalability and user experience",
      icon: Rocket,
      color: "text-pink-400",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and accomplishments
          </p>
        </div>

        {/* Main Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-accent-text">
            Professional Experience
          </h3>

          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-8 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.gradient} p-4 glow-primary`}
                  >
                    <Building2 className="w-full h-full text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <h5 className="text-lg font-semibold gradient-accent-text mb-2">
                        {exp.company}
                      </h5>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h6 className="font-semibold text-accent mb-3">
                        Key Achievements
                      </h6>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h6 className="font-semibold text-accent mb-3">
                        Technologies Used
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-card/50 text-muted-foreground text-xs rounded-full border border-card-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-accent-text">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <achievement.icon
                  className={`w-8 h-8 mx-auto mb-4 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <h4 className="font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
