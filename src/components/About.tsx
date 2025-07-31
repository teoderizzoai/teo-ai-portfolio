const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              About Me
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                    <img 
                      src="/lovable-uploads/318fc86a-9acb-40a5-b213-956830a52039.png" 
                      alt="Matteo De Rizzo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating decoration */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                </div>
              </div>

              {/* About Content */}
              <div className="flex-1 space-y-6">
                <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a recent <span className="text-primary font-semibold">AI graduate</span> featured in the 21st AIAI conference. 
                My expertise spans <span className="text-primary">computational data analysis</span>, <span className="text-primary">backend development</span>, 
                and <span className="text-primary">machine learning applications</span> in both research and production settings.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My                 <a 
                  href="https://github.com/teoderizzoai/Masters-Thesis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors font-semibold"
                >
                  thesis paper
                </a> on multi-layered model of <span className="text-primary font-semibold">epilepsy</span>, integrating <span className="text-primary font-semibold">epigenetics</span>, was published at the{' '}
                <a 
                  href="https://ifipaiai.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors font-semibold"
                >
                  AIAI Conference
                </a>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My academic and industry experience includes a digital health internship at <strong>WelPair</strong>, 
                a teaching assistant role, and a recent position as <strong>IT Manager at HCS Group Srl</strong>, 
                where I led backend and database systems in a healthcare environment.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                These roles highlight both my technical skills and ability to communicate complex ideas clearly. 
                I'm especially drawn to roles in <span className="text-primary">AI engineering</span> or <span className="text-primary">data science</span>, 
                where I can bridge the gap between cutting-edge research and real-world applications.
              </p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
          <div className="bg-card/50 p-4 rounded-lg border border-border/30">
            <h4 className="font-semibold text-primary mb-2">🎓 Education</h4>
            <p className="text-sm text-muted-foreground">MSc in Artificial Intelligence<br/>Vrij Universiteit, Amsterdam</p>
          </div>
          
          <div className="bg-card/50 p-4 rounded-lg border border-border/30">
            <h4 className="font-semibold text-primary mb-2">📍 Location</h4>
            <p className="text-sm text-muted-foreground">Amsterdam, Netherlands<br/>Open to opportunities</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;