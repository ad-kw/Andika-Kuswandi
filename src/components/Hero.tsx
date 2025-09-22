import { Button } from "@/components/ui/button";
import PhotoCard from "@/components/ui/PhotoCard";
import heroPortrait from "@/assets/hero-portrait.webp";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glass background layers */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-decorative/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-accent/8 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
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
            <div className="w-2 h-2 cyan-decorative rounded-full animate-pulse shadow-cyan-glow"></div>
            <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 cyan-decorative rounded-full animate-pulse shadow-cyan-glow" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Swipeable PhotoCard */}
        <div className="flex justify-center lg:justify-end">
          <PhotoCard
            frontImage={heroPortrait}
            frontAlt="Professional ID Card with cyan lighting"
            backContent={
              <div className="space-y-4 text-foreground">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold gradient-text">Creative Professional</h3>
                  <p className="text-muted-foreground text-sm">Digital Experience Designer</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="text-primary">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialty:</span>
                    <span className="text-primary">Full Stack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects:</span>
                    <span className="text-primary">50+ Completed</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <div className="text-xs text-muted-foreground">
                    "Passionate about creating exceptional digital experiences"
                  </div>
                </div>

                <div className="flex gap-2 justify-center pt-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            }
            className="w-72 h-96 lg:w-80 lg:h-[28rem] animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;