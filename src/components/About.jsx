import { Code, GraduationCap, Heart } from "lucide-react";
import profileImg from '../assets/img3.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know the person behind the code</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="glass-card p-8 text-center">
              <div className="w-64 h-64 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-primary rounded-full p-1">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">PG</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center floating">
                  <Code className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Priyanka Gaikwad</h3>
                <p className="text-accent font-medium">Computer Engineering Student</p>
                <p className="text-muted-foreground">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="glass-card p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Education & Excellence</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Final-year Computer Engineering student with an outstanding CGPA of 9.31. 
                My academic journey has been driven by curiosity and a passion for technology, 
                constantly pushing boundaries and exploring new possibilities in software development.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Technical Expertise</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Proficient in full-stack development with expertise in:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-primary font-medium">• Django & Python</span>
                <span className="text-primary font-medium">• React</span>
                <span className="text-primary font-medium">• Vite & Tailwind CSS</span>
                <span className="text-primary font-medium">• PHP & MySQL</span>
                <span className="text-primary font-medium">• Java & C++</span>
                <span className="text-primary font-medium">• RESTful APIs</span>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Passion & Purpose</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about creating impactful web applications that solve real-world problems. 
                Every line of code I write is driven by the desire to build scalable, user-friendly solutions 
                that make a difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;