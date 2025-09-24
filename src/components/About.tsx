import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "System Information Management", category: "Academic", strength: "expert" },
    { name: "Data Analysis & Processing", category: "Technical", strength: "expert" },
    { name: "Product Management", category: "Leadership", strength: "advanced" },
    { name: "UI/UX Design", category: "Design", strength: "advanced" },
    { name: "Data Entry & Processing", category: "Technical", strength: "expert" },
    { name: "Business Intelligence", category: "Technical", strength: "intermediate" }
  ];

  const experience = [
    { role: "Head of Product Pralon", company: "PT Papasari", period: "Current", type: "Leadership" },
    { role: "Entry Data Processor", company: "PT Papasari", period: "Previous", type: "Technical" },
    { role: "System Information Graduate", company: "University", period: "Education", type: "Academic" }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative mesh-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-scroll-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text hover:scale-105 transition-transform inline-block">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Dedicated professional with expertise in modern web technologies and a passion for 
            creating impactful digital solutions that drive business growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Bio */}
          <div className="space-y-6 animate-scroll-reveal">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
                Building Digital Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With over 5 years of experience in web development and design, I specialize in 
                creating scalable applications and intuitive user experiences. My approach combines 
                technical expertise with creative problem-solving to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about staying at the forefront of technology trends and continuously 
                learning new tools and methodologies to enhance my craft and create meaningful impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-6 glass rounded-lg interactive-card hover:glow-border transition-all duration-300">
                <div className="text-3xl font-bold gradient-text animate-breathe">50+</div>
                <div className="text-muted-foreground text-sm font-medium">Projects Completed</div>
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-brand-cyan-light rounded-full mx-auto mt-2"></div>
              </div>
              <div className="text-center p-6 glass rounded-lg interactive-card hover:glow-border transition-all duration-300">
                <div className="text-3xl font-bold gradient-text animate-breathe" style={{animationDelay: '0.5s'}}>5+</div>
                <div className="text-muted-foreground text-sm font-medium">Years Experience</div>
                <div className="w-8 h-1 bg-gradient-to-r from-brand-cyan-light to-primary rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="space-y-6 animate-scroll-reveal" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Technical Skills & Experience
            </h3>
            
            {/* Experience Timeline */}
            <div className="space-y-3 mb-6">
              <h4 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Professional Journey
              </h4>
              {experience.map((exp, index) => (
                <Card key={exp.role} className="p-5 glass hover:glass-strong transition-all duration-300 cursor-pointer interactive-card group">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">{exp.role}</h5>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        exp.period === 'Current' 
                          ? 'bg-primary/20 text-primary animate-pulse' 
                          : 'bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Skills with categories */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-cyan-light rounded-full animate-pulse"></div>
                Core Competencies
              </h4>
              {skills.map((skill, index) => (
                <Card key={skill.name} className="p-5 group glass hover:glass-strong transition-all duration-300 cursor-pointer interactive-card">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        skill.strength === 'expert' ? 'bg-primary animate-pulse group-hover:scale-110' :
                        skill.strength === 'advanced' ? 'bg-secondary-foreground group-hover:bg-primary group-hover:scale-110' :
                        'bg-muted-foreground group-hover:bg-primary/70 group-hover:scale-110'
                      }`}></div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors text-base">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-all duration-300 ${
                        skill.strength === 'expert' ? 'bg-primary/20 text-primary group-hover:bg-primary/30' :
                        skill.strength === 'advanced' ? 'bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary' :
                        'bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary'
                      }`}>
                        {skill.strength}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        skill.category === 'Technical' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' :
                        skill.category === 'Leadership' ? 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30' :
                        skill.category === 'Design' ? 'bg-pink-500/20 text-pink-400 group-hover:bg-pink-500/30' :
                        'bg-green-500/20 text-green-400 group-hover:bg-green-500/30'
                      }`}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 glass-strong hover:glow-border transition-all duration-300 interactive-card border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-30"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Current Focus</h4>
                  <p className="text-muted-foreground">
                    Product Strategy & Data-Driven Decision Making at PT Papasari
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;