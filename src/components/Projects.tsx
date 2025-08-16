import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import LinkTreeConnect from "./LinkTreeConnect";
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
  images: string[];
  category: string;
  grade?: string;
}

const projects: Project[] = [
  {
    id: "spotify",
    title: "Spotify Hit Predictor - 'Will It Hit?'",
    subtitle: "AI-Powered Music Hit Prediction Platform - Coming Soon",
    description: "Predict whether your song will become a hit using machine learning and Spotify's audio features (Currently in development)",
    fullDescription: "Spotify Hit Predictor is an innovative web application that uses machine learning to predict the hit potential of songs based on their audio characteristics. By analyzing features like danceability, energy, valence, and other musical attributes, the platform provides data-driven insights to help artists, producers, and music enthusiasts understand what makes a song successful. The application supports multiple input methods including audio file uploads, CSV data, and Spotify URIs, with real-time processing and detailed analytics. This project is currently in active development.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "Python", "scikit-learn", "XGBoost", "Spotify API", "OAuth 2.0"],
    achievements: [
      "Multiple input methods: audio files, CSV data, and Spotify URIs",
      "AI-powered predictions with >80% accuracy on test datasets",
      "Real-time processing with progress indicators",
      "Modern responsive UI built with shadcn/ui components",
      "Secure OAuth 2.0 authentication with Spotify",
      "Comprehensive audio feature analysis and visualization"
    ],
    links: [
      { label: "Live Demo", url: "https://predict-my-hit.lovable.app", icon: <ExternalLink className="h-4 w-4" /> }
    ],
    images: [
      "https://i.postimg.cc/DyfbCJn2/Spotify-089b80c169d44fcfa110aebc6801289f.png",
      "https://i.postimg.cc/yxsnp1Yw/Screenshot-from-2025-08-04-17-40-41.png",
      "https://i.postimg.cc/kgBsphqX/Screenshot-from-2025-08-04-17-41-17.png"
    ],
    category: "AI & Machine Learning"
  },
  {
    id: "raglite",
    title: "RAGlite Elden Ring Quiz",
    subtitle: "Personal RAG Project – Self-Initiated",
    description: "Personalized quiz generator using Retrieval-Augmented Generation",
    fullDescription: "This project is my personal attempt to understand how Retrieval-Augmented Generation (RAG) works by building a practical application: a personalized quiz generator for Elden Ring, combining structured item data with contextual in-game lore. Every quiz is personalized based on a specific item (weapons, NPCs, places, etc.), based only on in-game text and descriptions, and educational : each answer comes with a short explanation, so you learn something new every time!",
    techStack: ["Python", "Streamlit", "Groq LLM", "RAG", "Custom Chunking", "JSON", "Text Processing"],
    achievements: [
      "Custom chunking & scoring-based retrieval (no vector libraries)",
      "Combines structured data with narrative lore",
      "Real-time quiz generation with explanations",
      "Deployed on Streamlit Community Cloud",
      "Interactive UI with themed visual feedback",
      "Item-type filtering for focused quizzes"
    ],
    links: [
      { label: "Launch the App", url: "https://erqproject-8ykkmud3dzdnzkwjqyggf3.streamlit.app/", icon: <ExternalLink className="h-4 w-4" /> }
    ],
    images: [
      "https://i.postimg.cc/wTB7XCQM/elden-ring.png",
      "https://i.imgur.com/36Nj2Fn.png"
    ],
    category: "NLP & RAG"
  },
  {
    id: "pushup",
    title: "Push-Up Prediction from Smartphone & Smartwatch Sensor Data",
    subtitle: "ML for the Quantified Self – VU Amsterdam",
    description: "Predicted push-up count using iPhone & Apple Watch sensor data with advanced signal processing",
    fullDescription: "As part of the ML for the Quantified Self course at Vrije Universiteit Amsterdam, I worked with two teammates to predict the number of push-ups done in the last 10 seconds using wearable sensor data. We collected and processed time-series data from iPhone and Apple Watch sensors, merged multiple sensors (accelerometer, gyroscope, gravity, magnetometer, orientation, barometer, heart rate), applied Fourier Transform and created spectrograms to analyze frequency patterns, engineered clustering-based features, and trained several ML models including Random Forest, Decision Tree, SVM, Neural Network, Gradient Boosting, and Naive Bayes. The Random Forest model achieved the best performance with significantly lower MSE and highest R² score.",
    techStack: ["Python", "Scikit-learn", "FFT", "Random Forest", "Decision Trees", "SVM", "Neural Network", "Gradient Boosting", "Signal Processing", "Sensor Fusion"],
    achievements: [
      "Applied FFT, clustering, and EDA for feature extraction",
      "Achieved R² = 0.89 with Random Forest model",
      "Grade: 9.5/10",
      "Comprehensive data pipeline and model comparison",
      "Processed 48 original features to 11990 time-aligned rows",
      "Statistical evaluation using ANOVA and Bonferroni correction"
    ],
    links: [
      { label: "View Project", url: "#", icon: <ExternalLink className="h-4 w-4" /> }
    ],
    images: [
      "https://i.imgur.com/rbwdAzC.png",
      "https://i.imgur.com/LRr5aVg.png",
      "https://i.imgur.com/SKobf2V.png"
    ],
    category: "Machine Learning",
    grade: "9.5/10"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Card className="bg-project-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300 overflow-hidden group">
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img 
          src={project.images[currentImageIndex]} 
          alt={project.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110 text-lg font-bold"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110 text-lg font-bold"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                    index === currentImageIndex ? 'bg-white shadow-lg' : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-primary border-primary/30">
                {project.category}
              </Badge>
              {project.id === "spotify" && (
                <Badge variant="destructive" className="bg-orange-500/10 text-orange-500 border-orange-500/30">
                  Coming Soon
                </Badge>
              )}
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
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
        
        {/* Link tree connection for full project code */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see the full code?
            </h3>
            <p className="text-muted-foreground mb-6">
              All project repositories, along with my GitHub, LinkedIn, CV, and portfolio are available through my link tree
            </p>
            <LinkTreeConnect variant="default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;