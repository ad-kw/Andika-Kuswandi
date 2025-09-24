import { Button } from "@/components/ui/button";
import PhotoCard from "@/components/ui/PhotoCard";
import heroPortrait from "@/assets/hero-portrait.webp";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      {/* Enhanced Liquid Glass Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/8 rounded-full blur-3xl animate-gentle-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-cyan-light/6 rounded-full blur-2xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-breathe" style={{animationDelay: '1s'}}></div>
      <div className="absolute inset-0 animate-shimmer opacity-50"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 animate-scroll-reveal">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg font-medium animate-scroll-reveal" style={{animationDelay: '0.1s'}}>
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold animate-scroll-reveal" style={{animationDelay: '0.2s'}}>
              <span className="gradient-text hover:scale-105 transition-transform inline-block">Creative</span>
              <br />
              <span className="text-foreground hover:text-primary transition-colors">Professional</span>
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg sm:text-xl max-w-md lg:max-w-lg animate-scroll-reveal" style={{animationDelay: '0.3s'}}>
            Passionate about creating exceptional digital experiences with cutting-edge technology 
            and innovative design solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scroll-reveal" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="lg" className="animate-pulse-glow hover:scale-105 transition-all duration-300 interactive-card">
              <span className="flex items-center gap-2">
                View My Work
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              </span>
            </Button>
            <Button variant="glass" size="lg" className="hover:scale-105 transition-all duration-300 desktop-hover">
              Download CV
            </Button>
          </div>
          
          {/* Enhanced Tech indicators with labels */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4 animate-scroll-reveal" style={{animationDelay: '0.5s'}}>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-brand-cyan-light rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-muted-foreground text-sm">Available for projects</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Swipeable PhotoCard */}
        <div className="flex justify-center lg:justify-end animate-scroll-reveal" style={{animationDelay: '0.6s'}}>
          <div className="relative">
            {/* Decorative elements around the card */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-breathe"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-brand-cyan-light/30 rounded-full animate-breathe" style={{animationDelay: '1s'}}></div>
            
            <PhotoCard
              frontImage={heroPortrait}
              frontAlt="Professional ID Card with cyan lighting"
              backContent={
                <div className="space-y-4 text-foreground p-2">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold gradient-text">Creative Professional</h3>
                    <p className="text-muted-foreground text-sm">Digital Experience Designer</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 glass-subtle rounded-lg">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="text-primary font-semibold">5+ Years</span>
                    </div>
                    <div className="flex justify-between items-center p-2 glass-subtle rounded-lg">
                      <span className="text-muted-foreground">Specialty:</span>
                      <span className="text-primary font-semibold">Full Stack</span>
                    </div>
                    <div className="flex justify-between items-center p-2 glass-subtle rounded-lg">
                      <span className="text-muted-foreground">Projects:</span>
                      <span className="text-primary font-semibold">50+ Completed</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20">
                    <div className="text-xs text-muted-foreground italic text-center">
                      "Passionate about creating exceptional digital experiences"
                    </div>
                  </div>

                  <div className="flex gap-2 justify-center pt-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-brand-cyan-light rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              }
              className="w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-80 lg:h-[28rem] xl:w-96 xl:h-[30rem] animate-gentle-float hover:scale-105 transition-all duration-500 interactive-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;