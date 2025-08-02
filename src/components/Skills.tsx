import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "JavaScript", level: 70 }
    ]
  },
  {
    title: "ML & AI Frameworks",
    icon: "🤖",
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "LightGBM", level: 88 },
      { name: "Streamlit", level: 85 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "Google Cloud Platform", level: 80 },
      { name: "Amazon Web Services", level: 75 },
      { name: "Microsoft Azure", level: 70 },
      { name: "Docker", level: 75 }
    ]
  },
  {
    title: "AI Specializations",
    icon: "🧠",
    skills: [
      { name: "Machine Learning", level: 92 },
      { name: "Deep Learning", level: 85 },
      { name: "NLP & RAG", level: 88 },
      { name: "Computer Vision", level: 75 }
    ]
  },
  {
    title: "Data & Analytics",
    icon: "📊",
    skills: [
      { name: "ETL Workflows", level: 85 },
      { name: "ML Pipelines", level: 90 },
      { name: "Data Visualization", level: 85 },
      { name: "Statistical Analysis", level: 88 }
    ]
  },
  {
    title: "Development Tools",
    icon: "🔧",
    skills: [
      { name: "Git", level: 90 },
      { name: "Jupyter", level: 95 },
      { name: "LaTeX", level: 80 },
      { name: "VS Code", level: 90 }
    ]
  }
];

const languages = [
  { name: "English", level: "Fluent", flag: "gb" },
  { name: "Italian", level: "Native", flag: "it" },
  { name: "Czech", level: "Fluent", flag: "cz" },
  { name: "Python", level: "Fluent", flag: "python" }
];

const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and extracting insights from data
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border/50 p-6 hover:shadow-glow/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <Card className="bg-card border-border/50 p-8 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Languages</h3>
            <p className="text-muted-foreground">Multilingual communication across cultures and code</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="text-center p-4 bg-muted/30 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="text-3xl mb-2">
                  {lang.flag === "python" ? (
                    <span className="text-3xl">🐍</span>
                  ) : (
                    <span className={`fi fi-${lang.flag}`} style={{ fontSize: '2rem' }}></span>
                  )}
                </div>
                <div className="font-medium text-foreground">{lang.name}</div>
                <div className="text-sm text-muted-foreground">{lang.level}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;