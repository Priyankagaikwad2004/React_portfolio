import React from 'react';

const Certificates = () => {
  // Custom icon components since lucide-react isn't installed
  const Award = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"></circle>
      <polyline points="9 14 12 11 15 14"></polyline>
      <line x1="12" y1="16" x2="12" y2="19"></line>
    </svg>
  );

  const Calendar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const ExternalLink = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  const Shield = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const certificates = [
    {
      title: "Java Full Stack Development",
      issuer: "Tech Certification Authority",
      date: "2024",
      description: "Comprehensive certification covering Java backend development, Spring Framework, and full-stack application development.",
      skills: ["Java", "Spring Boot", "RESTful APIs", "Database Integration"],
      credentialId: "JAVA-FS-2024-001",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Database Management Systems (DBMS)",
      issuer: "Database Institute",
      date: "2024",
      description: "Advanced certification in database design, optimization, and management covering both SQL and NoSQL databases.",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Modeling"],
      credentialId: "DBMS-ADV-2024-002",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Prompt Engineering Specialist",
      issuer: "AI Education Platform",
      date: "2024",
      description: "Specialized certification in AI prompt engineering, covering advanced techniques for working with large language models.",
      skills: ["AI/ML", "Prompt Design", "LLM Integration", "AI Ethics"],
      credentialId: "PE-SPEC-2024-003",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "Programming Institute",
      date: "2023",
      description: "Foundation certification demonstrating proficiency in Java programming concepts, OOP principles, and application development.",
      skills: ["Java Basics", "OOP", "Data Structures", "Algorithms"],
      credentialId: "JAVA-FUND-2023-004",
      gradient: "from-blue-500 to-green-500"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 relative bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-gray-400 text-lg">Professional certifications and continuous learning</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <div
              key={cert.credentialId}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.gradient} p-3 flex-shrink-0 shadow-lg`}>
                  <Award className="w-full h-full text-white" />
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {cert.title}
              </h3>
              
              <p className="text-blue-400 font-medium mb-4">{cert.issuer}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2 text-sm">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-gray-400">
                  <Shield className="w-3 h-3 mr-2" />
                  <span>Credential ID: {cert.credentialId}</span>
                </div>
              </div>
              
              <button className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-gray-600 transition-colors flex items-center justify-center group/btn">
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                Verify Certificate
              </button>
            </div>
          ))}
        </div>
        
        {/* Certification Summary */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-8 text-center border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Continuous Learning Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">4+</div>
              <div className="text-sm text-gray-400">Professional Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">2024</div>
              <div className="text-sm text-gray-400">Latest Certification Year</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-400">Commitment to Excellence</div>
            </div>
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My commitment to continuous learning drives me to stay updated with the latest technologies 
            and industry best practices. Each certification represents my dedication to professional growth 
            and technical excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;