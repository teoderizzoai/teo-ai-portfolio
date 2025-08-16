import { Button } from "@/components/ui/button";
import { Link, ExternalLink } from "lucide-react";

// This component creates a floating button that's always visible on the page
// providing easy access to the link tree from anywhere
const FloatingLinkTree = () => {
  const linkTreeUrl = "https://matteo-leaf-links.lovable.app/";
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating action button for link tree access */}
      <Button
        asChild
        size="lg"
        className="rounded-full w-16 h-16 p-0 shadow-glow hover:shadow-glow/80 transition-all duration-300 bg-primary hover:bg-primary/90 text-white group"
        title="Connect with me on all platforms"
      >
        <a 
          href={linkTreeUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          {/* Animated icon that shows the purpose */}
          <div className="relative">
            <Link className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <ExternalLink className="absolute -top-1 -right-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>
      </Button>
      
      {/* Tooltip text that appears on hover */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-card border border-border/30 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        <span className="text-sm text-foreground">All My Links</span>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card"></div>
      </div>
    </div>
  );
};

export default FloatingLinkTree;
