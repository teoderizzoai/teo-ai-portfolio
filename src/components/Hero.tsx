import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import LinkTreeConnect from "./LinkTreeConnect";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Subtle gradient fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-5xl mx-auto">

          {/* Portrait photo */}
          <div className="flex-shrink-0">
            <div
              className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl"
              style={{ outline: '4px solid hsl(33 20% 70% / 0.5)', boxShadow: '0 0 60px hsl(33 20% 70% / 0.25), 0 20px 60px hsl(220 13% 8% / 0.6)' }}
            >
              <img
                src="/hero-portrait.png"
                alt="Matteo De Rizzo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Matteo De Rizzo
            </h1>

            <p className="text-2xl lg:text-2xl text-primary/80 font-semibold mb-4">
              AI & Data Science Specialist
            </p>

            <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
              Turning data into insight with the power of AI.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Building intelligent systems that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="group shadow-glow hover:shadow-glow/80 transition-all duration-300"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Matteo De Rizzo CV.pdf';
                  link.download = 'Matteo De Rizzo CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start items-center">
              <LinkTreeConnect variant="compact" />

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
