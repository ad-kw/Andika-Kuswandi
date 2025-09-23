import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern design and seamless user experience.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Live",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features.",
      tags: ["Vue.js", "Socket.io", "MongoDB", "Express"],
      status: "Development",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence and reporting.",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      status: "Live",
      featured: true
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication.",
      tags: ["React Native", "Firebase", "Node.js", "JWT"],
      status: "Beta",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 glass-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've been exploring.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover:glow-border transition-glass hover:-translate-y-2 ${
                project.featured ? 'glass-strong' : 'glass'
              }`}
            >
              <CardHeader className="space-y-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === 'Live' ? 'default' : 'secondary'}
                    className={project.status === 'Live' ? 'bg-primary/20 text-primary border-primary/30' : ''}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="glow" size="sm" className="flex-1">
                    View Project
                  </Button>
                  <Button variant="ghost" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;