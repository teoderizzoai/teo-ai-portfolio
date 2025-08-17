import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Link, ArrowRight, Sparkles, Globe, Share2 } from "lucide-react";

// This component provides multiple ways to connect to the link tree page
// instead of having separate GitHub and LinkedIn buttons scattered throughout the site
const LinkTreeConnect = ({ 
  variant = "default", 
  className = "",
  showTitle = true 
}: { 
  variant?: "default" | "compact" | "card" | "inline";
  className?: string;
  showTitle?: boolean;
}) => {
  // The main link tree URL that contains all social links
  const linkTreeUrl = "https://links.matteoderizzo.site";
  
  // Different variants for different use cases throughout the site
  switch (variant) {
    case "compact":
      return (
        <div className={`flex gap-2 ${className}`}>
          {/* Compact social links that all point to the link tree */}
          <a 
            href={linkTreeUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group"
            title="Connect with me on all platforms"
          >
            <Link className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      );

    case "card":
      return (
        <Card className={`bg-card/50 border-border/30 p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 ${className}`}>
          <div className="text-center space-y-4">
            {showTitle && (
              <div className="flex items-center justify-center gap-2 text-primary">
                <Globe className="h-5 w-5" />
                <h4 className="font-semibold">All My Links</h4>
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              GitHub, LinkedIn, CV, Portfolio & more
            </p>
            <Button 
              asChild
              className="w-full group shadow-glow hover:shadow-glow/80 transition-all duration-300"
              size="sm"
            >
              <a 
                href={linkTreeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
                View All Links
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </Card>
      );

    case "inline":
      return (
        <div className={`inline-flex items-center gap-2 ${className}`}>
          <span className="text-muted-foreground">Connect with me:</span>
          <a 
            href={linkTreeUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors group"
          >
            <Link className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span>All Platforms</span>
            <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      );

    default:
      return (
        <div className={`space-y-4 ${className}`}>
          {showTitle && (
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Connect With Me</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Find me on all platforms through my link tree
              </p>
            </div>
          )}
          
          {/* Main call-to-action button */}
          <Button 
            asChild
            className="w-full group shadow-glow hover:shadow-glow/80 transition-all duration-300"
            size="lg"
          >
            <a 
              href={linkTreeUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform" />
              View All My Links
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          {/* Quick access links */}
          <div className="grid grid-cols-2 gap-3">
            <a 
              href={`${linkTreeUrl}#github`}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card/50 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-colors group text-center"
            >
              <div className="text-primary font-medium text-sm group-hover:scale-105 transition-transform">
                GitHub
              </div>
            </a>
            
            <a 
              href={`${linkTreeUrl}#linkedin`}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card/50 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-colors group text-center"
            >
              <div className="text-primary font-medium text-sm group-hover:scale-105 transition-transform">
                LinkedIn
              </div>
            </a>
          </div>
          
          {/* Additional info */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Includes CV, Portfolio, and more social platforms
            </p>
          </div>
        </div>
      );
  }
};

export default LinkTreeConnect;
