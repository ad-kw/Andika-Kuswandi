const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 glass-subtle border-t border-glass-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm">
              Creating digital excellence through innovative design and development.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="w-8 h-8 glass rounded-full flex items-center justify-center hover:glass-strong hover:glow-border transition-glass">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
              </a>
              <a href="#" className="w-8 h-8 glass rounded-full flex items-center justify-center hover:glass-strong hover:glow-border transition-glass">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
              </a>
              <a href="#" className="w-8 h-8 glass rounded-full flex items-center justify-center hover:glass-strong hover:glow-border transition-glass">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-glass-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio. Crafted with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;