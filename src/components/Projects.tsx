import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ragLiteQuiz from "@/assets/raglite-quiz.jpg";
import pushupPrediction from "@/assets/pushup-prediction.jpg";
import expediaBooking from "@/assets/expedia-booking.jpg";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  achievements: string[];
  links: { label: string; url: string; icon: React.ReactNode }[];
  image: string;
  category: string;
  grade?: string;
}

const projects: Project[] = [
  {
    id: "raglite",
    title: "RAGlite Elden Ring Quiz",
    subtitle: "Personal RAG Project – Self-Initiated",
    description: "Personalized quiz generator using Retrieval-Augmented Generation",
    fullDescription: "A sophisticated quiz generator that combines structured item data with in-game lore to create personalized Q&A sessions with detailed explanations. Built using cutting-edge RAG techniques.",
    techStack: ["Python", "Streamlit", "Groq LLM", "RAG", "Custom Chunking"],
    achievements: [
      "Custom chunking & scoring-based retrieval (no vector libraries)",
      "Combines structured data with narrative lore",
      "Real-time quiz generation with explanations",
      "Deployed on Streamlit Community Cloud"
    ],
    links: [
      { label: "Try on Streamlit", url: "#", icon: <ExternalLink className="h-4 w-4" /> },
      { label: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> }
    ],
    image: ragLiteQuiz,
    category: "NLP & RAG"
  },
  {
    id: "pushup",
    title: "Push-Up Prediction Using Sensor Data",
    subtitle: "ML for the Quantified Self – VU Amsterdam",
    description: "Predicted push-up count using iPhone & Apple Watch sensor data",
    fullDescription: "Applied advanced signal processing and machine learning techniques to predict exercise repetitions from wearable sensor data, achieving high accuracy through careful feature engineering.",
    techStack: ["Python", "Scikit-learn", "FFT", "Random Forest", "Decision Trees", "Sensor Fusion"],
    achievements: [
      "Applied FFT, clustering, and EDA for feature extraction",
      "Achieved R² = 0.89 with Random Forest model",
      "Grade: 9/10",
      "Comprehensive data pipeline and model comparison"
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> }
    ],
    image: pushupPrediction,
    category: "Machine Learning",
    grade: "9/10"
  },
  {
    id: "expedia",
    title: "Expedia Hotel Booking Prediction",
    subtitle: "Data Mining Techniques – VU Amsterdam",
    description: "Built Learning-to-Rank models for hotel booking prediction",
    fullDescription: "Developed sophisticated ranking algorithms for hotel recommendation systems using advanced ML techniques and achieved top performance on Kaggle leaderboard.",
    techStack: ["Python", "LightGBM", "LambdaMART", "Pandas", "Learning-to-Rank"],
    achievements: [
      "Used LightGBM & LambdaMART algorithms",
      "Advanced preprocessing and custom scoring",
      "Kaggle leaderboard NDCG@5 = 0.385",
      "Grade: 9.5/10"
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> }
    ],
    image: expediaBooking,
    category: "Data Mining",
    grade: "9.5/10"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-project-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300 overflow-hidden group">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-primary border-primary/30">
                {project.category}
              </Badge>
              {project.grade && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Grade: {project.grade}
                </Badge>
              )}
            </div>
            
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-3">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-skill-tag text-foreground text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Expandable Section */}
        {isExpanded && (
          <div className="space-y-4 border-t border-border/30 pt-4">
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div>
              <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
              <ul className="space-y-1">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {project.links.map((link, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="sm"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                More
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in AI, machine learning, and data science through impactful projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;