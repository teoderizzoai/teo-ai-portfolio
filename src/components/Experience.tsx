import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "education";
  description: (string | { text: string; link: string; label: string })[];
  skills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "IT Manager",
    company: "HCS Group SRL, Italy",
    location: "Italy",
    period: "AUG 2024 - JUN 2025",
    type: "work",
    description: [
      "Managed backend systems and healthcare databases, ensuring data integrity, privacy, and compliance with GDPR and health regulations",
      "Designed and maintained ETL pipelines and internal APIs to support secure, real-time data to patient and operational data",
      "Led infrastructure upgrades, database migrations, and backend integrations across clinical platforms and internal tools"
    ],
    skills: ["Backend Development", "Database Management", "GDPR Compliance", "ETL Pipelines", "Healthcare Systems"]
  },
  {
    title: "Teaching Assistant",
    company: "Vrije Universiteit, Amsterdam",
    location: "Amsterdam, NL",
    period: "NOV 2023 - MAR 2025",
    type: "work",
    description: [
      "Supported students in hands-on machine learning projects",
      "Facilitated lab sessions, advised students on Python-based data analysis, and supported coursework using Pandas, Scikit-learn, and statistical testing"
    ],
    skills: ["Machine Learning", "Python", "Data Analysis", "Teaching", "Pandas", "Scikit-learn"]
  },
  {
    title: "AI Research Intern",
    company: "Welpair Solutions BV, Utrecht",
    location: "Utrecht, NL",
    period: "JAN 2023 - JUL 2023",
    type: "work",
    description: [
      "Contributed to the development of AI-powered systems for stress detection and monitoring using multimodal physiological and behavioral data",
      "Designed and implemented machine learning pipelines for real-time stress inference",
      "Built automated ETL workflows for cleaning and transforming large volumes of sensor data"
    ],
    skills: ["AI Research", "Machine Learning", "Stress Detection", "Sensor Data", "ETL Workflows"]
  }
];

const education: ExperienceItem[] = [
  {
    title: "MSc in Artificial Intelligence",
    company: "Vrij Universiteit, Amsterdam",
    location: "Amsterdam, NL",
    period: "SEP 2021 - MAR 2025",
    type: "education",
    description: [
      "Thesis: Multi-layered neural network modeling of Epilepsy mechanisms using simulation tools",
      { text: "Published at the ", link: "https://ifipaiai.org/", label: "AIAI 2025 Conference" },
      { text: " and available through ", link: "https://matteo-leaf-links.lovable.app/", label: "my link tree" },
      "Specialized in Machine Learning, Deep Learning, NLP, and Brain-Computer Interfaces"
    ],
    skills: ["Neural Networks", "Epilepsy Research", "Simulation", "Academic Research", "Deep Learning"]
  },
  {
    title: "BSc of Psychology",
    company: "Leiden University, Leiden",
    location: "Leiden, NL",
    period: "SEP 2018 - JUN 2021",
    type: "education",
    description: [
      "Gained hands-on experience with statistical software (e.g., SPSS, R), analyzed complex datasets using correlation, regression, factor analysis, and PCA techniques"
    ],
    skills: ["Statistical Analysis", "SPSS", "R", "Data Analysis", "Psychology Research"]
  }
];

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <Card className="bg-card border-border/50 p-6 hover:shadow-glow/10 transition-all duration-300 relative">
      {/* Timeline dot */}
      <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>
      
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
            <Badge variant="outline" className={
              item.type === 'work' 
                ? "border-primary/30 text-primary" 
                : "border-secondary/30 text-secondary-foreground"
            }>
              {item.type === 'work' ? 'Work' : 'Education'}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Building className="h-4 w-4" />
            {item.company}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {item.period}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {item.location}
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="space-y-2">
          {item.description.map((desc, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed text-sm">
              • {typeof desc === 'string' ? desc : (
                <>
                  {desc.text}
                  <a 
                    href={desc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline transition-colors"
                  >
                    {desc.label}
                  </a>
                </>
              )}
            </p>
          ))}
        </div>
        
        {/* Skills */}
        {item.skills && (
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-skill-tag text-foreground text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through AI research, healthcare technology, and academic excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-3"></div>
              
              {experiences.map((item, index) => (
                <div key={index} className="ml-8">
                  <ExperienceCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Education</h3>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-3"></div>
              
              {education.map((item, index) => (
                <div key={index} className="ml-8">
                  <ExperienceCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Subtle link tree connection */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Find detailed project examples and my thesis on</span>
            <a 
              href="https://matteo-leaf-links.lovable.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              my link tree
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;