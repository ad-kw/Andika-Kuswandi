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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative mesh-bg">
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
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
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
                <Card key={exp.role} className="p-4 glass hover:glass-strong transition-glass cursor-pointer hover:scale-[1.02]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-foreground">{exp.role}</h5>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exp.period === 'Current' ? 'bg-primary/20 text-primary' : 'bg-secondary text-secondary-foreground'
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
              <h4 className="text-lg font-medium text-foreground">Core Competencies</h4>
              {skills.map((skill, index) => (
                <Card key={skill.name} className="p-4 group glass hover:glass-strong transition-glass cursor-pointer hover:scale-[1.02]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        skill.strength === 'expert' ? 'bg-primary animate-pulse' :
                        skill.strength === 'advanced' ? 'bg-secondary-foreground' :
                        'bg-muted-foreground'
                      }`}></div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        skill.strength === 'expert' ? 'bg-primary/20 text-primary' :
                        skill.strength === 'advanced' ? 'bg-secondary text-secondary-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {skill.strength}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skill.category === 'Technical' ? 'bg-blue-500/20 text-blue-400' :
                        skill.category === 'Leadership' ? 'bg-purple-500/20 text-purple-400' :
                        skill.category === 'Design' ? 'bg-pink-500/20 text-pink-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 glass-strong hover:glow-border transition-glass">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Current Focus</h4>
                  <p className="text-muted-foreground text-sm">
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