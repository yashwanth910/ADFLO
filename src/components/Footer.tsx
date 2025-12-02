import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">FLYN STUDIOS</h3>
            <p className="text-sm text-muted-foreground">
              Crafting visual stories that captivate and inspire.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#video-work" className="hover:text-foreground transition-colors">Work</a>
              <a href="#about-us" className="hover:text-foreground transition-colors">About</a>
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <a href="#team" className="hover:text-foreground transition-colors">Team</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <a 
              href="mailto:cypher.ark.yt@gmail.com" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              cypher.ark.yt@gmail.com
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© 2024 FLYN STUDIOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;