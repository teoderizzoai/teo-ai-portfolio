const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-card border-4 border-primary/20">
                  <img 
                    src="/lovable-uploads/318fc86a-9acb-40a5-b213-956830a52039.png" 
                    alt="Matteo De Rizzo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-foreground leading-relaxed">
                  I'm a recent <span className="text-primary font-semibold">AI graduate</span> featured in the 21st AIAI conference. 
                  My expertise spans <span className="text-primary">computational data analysis</span>, <span className="text-primary">backend development</span>, 
                  and <span className="text-primary">machine learning applications</span> in both research and production settings.
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

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-card/50 p-4 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-primary mb-2">🎓 Education</h4>
                  <p className="text-sm text-muted-foreground">MSc in Artificial Intelligence<br/>Vrij Universiteit, Amsterdam</p>
                </div>
                
                <div className="bg-card/50 p-4 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-primary mb-2">💼 Current Role</h4>
                  <p className="text-sm text-muted-foreground">IT Manager<br/>HCS Group Srl, Italy</p>
                </div>
                
                <div className="bg-card/50 p-4 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-primary mb-2">🔬 Research</h4>
                  <p className="text-sm text-muted-foreground">AI Research Intern<br/>Welpair Solutions BV</p>
                </div>
                
                <div className="bg-card/50 p-4 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-primary mb-2">📍 Location</h4>
                  <p className="text-sm text-muted-foreground">Amsterdam, Netherlands<br/>Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;