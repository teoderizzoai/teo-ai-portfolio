import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient bg-leaf-pattern overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                <img 
                  src="/lovable-uploads/318fc86a-9acb-40a5-b213-956830a52039.png" 
                  alt="Matteo De Rizzo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Matteo De Rizzo
            </h1>
            
            <p className="text-2xl lg:text-3xl text-primary font-semibold mb-4">
              AI & Data Science Specialist
            </p>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Turning data into insight with the power of AI. 
              <br className="hidden lg:block" />
              Building intelligent systems that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="group shadow-glow hover:shadow-glow/80 transition-all duration-300">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/teoderizzoai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/matteo-de-rizzo-1b853a201/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="mailto:teo.derizzo@gmail.com"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;