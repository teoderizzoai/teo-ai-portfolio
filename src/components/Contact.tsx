import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import LinkTreeConnect from "./LinkTreeConnect";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:teo.derizzo@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your email client should now open with the pre-filled message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss AI projects, collaboration opportunities, or just have a chat about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities in AI and data science. 
                Whether you're looking for collaboration, have a project in mind, or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a 
                    href="mailto:teo.derizzo@gmail.com" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    teo.derizzo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a 
                    href="tel:+393519665039" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    +39 351 966 5039
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Amsterdam, Netherlands</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect on Social</h4>
              {/* Replace individual GitHub and LinkedIn buttons with link tree connection */}
              <LinkTreeConnect variant="card" showTitle={false} />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g., AI Project Collaboration"
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-background border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full shadow-glow hover:shadow-glow/80 transition-all duration-300 group"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;