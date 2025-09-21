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
        
        {/* Interactive Lanyard */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative lanyard-container">
            {/* Lanyard Strap */}
            <div className="lanyard-strap">
              <div className="strap-segment strap-1"></div>
              <div className="strap-segment strap-2"></div>
              <div className="strap-segment strap-3"></div>
              <div className="strap-segment strap-4"></div>
              <div className="strap-segment strap-5"></div>
            </div>
            
            {/* ID Card */}
            <div className="lanyard-card">
              <div className="absolute inset-0 bg-gradient-brand rounded-lg blur-xl opacity-20 animate-pulse-glow"></div>
              <img 
                src={heroPortrait} 
                alt="Professional ID Card with cyan lighting" 
                className="relative z-10 w-72 h-96 lg:w-80 lg:h-[28rem] object-cover rounded-lg border-2 border-primary/20 shadow-elegant"
              />
              {/* Card Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 rounded-b-lg">
                <div className="text-white text-sm font-medium">Professional</div>
                <div className="text-primary text-xs">Creative Developer</div>
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-pulse glow-border"></div>
              <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;