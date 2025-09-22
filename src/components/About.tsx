import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "System Information Management", level: 95, category: "Academic" },
    { name: "Data Analysis & Processing", level: 90, category: "Technical" },
    { name: "Product Management", level: 88, category: "Leadership" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Data Entry & Processing", level: 92, category: "Technical" },
    { name: "Business Intelligence", level: 80, category: "Technical" }
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
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
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
                <Card key={exp.role} className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] border border-primary/10">
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
                <div key={skill.name} className="space-y-2 group hover:bg-card/50 p-3 rounded-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skill.category === 'Technical' ? 'bg-blue-500/20 text-blue-400' :
                        skill.category === 'Leadership' ? 'bg-purple-500/20 text-purple-400' :
                        skill.category === 'Design' ? 'bg-pink-500/20 text-pink-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-brand h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="p-6 bg-gradient-surface border border-primary/10 hover:border-primary/20 transition-all duration-300">
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