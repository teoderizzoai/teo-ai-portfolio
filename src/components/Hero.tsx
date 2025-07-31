import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Blurred background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)'
        }}
      ></div>
      
      {/* Background overlay with fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="flex-1 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
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