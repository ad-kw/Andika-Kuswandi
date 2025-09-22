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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated professional with expertise in modern web technologies and a passion for 
            creating impactful digital solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Building Digital Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in web development and design, I specialize in 
                creating scalable applications and intuitive user experiences. My approach combines 
                technical expertise with creative problem-solving to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about staying at the forefront of technology trends and continuously 
                learning new tools and methodologies to enhance my craft.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="glass-card text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Technical Skills & Experience
            </h3>
            
            {/* Experience Timeline */}
            <div className="space-y-3 mb-6">
              <h4 className="text-lg font-medium text-foreground mb-3">Professional Journey</h4>
              {experience.map((exp, index) => (
                <div key={exp.role} className="glass-card p-4 rounded-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-foreground">{exp.role}</h5>
                      <p className="cyan-decorative font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium glass-surface ${
                        exp.period === 'Current' ? 'cyan-decorative border border-cyan-accent/30' : 'text-secondary-foreground'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Skills with categories */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">Core Competencies</h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="glass-card p-4 rounded-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full animate-pulse ${
                        skill.strength === 'expert' ? 'cyan-decorative shadow-cyan-glow' :
                        skill.strength === 'advanced' ? 'bg-foreground/60' :
                        'bg-muted-foreground/60'
                      }`}></div>
                      <span className="text-foreground font-medium hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize glass-surface ${
                        skill.strength === 'expert' ? 'cyan-decorative border border-cyan-accent/30' :
                        skill.strength === 'advanced' ? 'text-foreground/80' :
                        'text-muted-foreground'
                      }`}>
                        {skill.strength}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium glass-surface ${
                        skill.category === 'Technical' ? 'text-blue-300/70' :
                        skill.category === 'Leadership' ? 'text-purple-300/70' :
                        skill.category === 'Design' ? 'text-pink-300/70' :
                        'text-green-300/70'
                      }`}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-card p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 cyan-decorative rounded-full animate-pulse shadow-cyan-glow"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Current Focus</h4>
                  <p className="text-muted-foreground text-sm">
                    Product Strategy & Data-Driven Decision Making at PT Papasari
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;