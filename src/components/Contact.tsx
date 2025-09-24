import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 mesh-bg relative overflow-hidden">
      {/* Liquid Background Elements */}
      <div className="absolute top-16 right-16 w-44 h-44 bg-brand-cyan/5 animate-liquid-flow blur-2xl"></div>
      <div className="absolute bottom-16 left-16 w-28 h-28 bg-brand-cyan-light/4 animate-liquid-wave blur-xl" style={{animationDelay: '1s'}}></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create 
            something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 liquid-card glass hover:glass-strong transition-glass">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 liquid-card glass hover:glass-strong transition-glass">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 liquid-card glass hover:glass-strong transition-glass">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">github.com/yourusername</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="liquid-card glass-strong">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input id="firstName" placeholder="John" className="glass-subtle" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="glass-subtle" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="glass-subtle" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input id="subject" placeholder="Project Discussion" className="glass-subtle" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  className="glass-subtle min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;