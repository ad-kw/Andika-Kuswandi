import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.webp";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg font-medium">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Creative</span>
              <br />
              <span className="text-foreground">Professional</span>
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg sm:text-xl max-w-md lg:max-w-lg">
            Passionate about creating exceptional digital experiences with cutting-edge technology 
            and innovative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="animate-pulse-glow">
              View My Work
            </Button>
            <Button variant="glass" size="lg">
              Download CV
            </Button>
          </div>
          
          {/* Tech indicators */}
          <div className="flex gap-3 justify-center lg:justify-start pt-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-brand rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
            <img 
              src={heroPortrait} 
              alt="Professional portrait with cyan lighting" 
              className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-primary/20 shadow-elegant animate-float"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-pulse glow-border"></div>
            <div className="absolute bottom-8 left-4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;