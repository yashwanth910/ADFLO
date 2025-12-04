import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoPlaceholder from "@/assets/logo-placeholder.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setIsOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/50" style={{
    height: '70px'
  }}>
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Image - Editable - Rectangular */}
          <div className="flex items-center">
            <img alt="Studio Logo" className="h-12 w-24 object-cover rounded-xl" src="/lovable-uploads/b29e94c7-ea4e-433a-81c3-e23b9b2f3a04.png" />
          </div>

          {/* Desktop Navigation - All Static Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#hero" onClick={e => scrollToSection(e, "#hero")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              Home
            </a>
            <a href="#video-work" onClick={e => scrollToSection(e, "#video-work")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              Video Work
            </a>
            <a href="#design-work" onClick={e => scrollToSection(e, "#design-work")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              Design Work
            </a>
            <a href="#about-us" onClick={e => scrollToSection(e, "#about-us")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              About Us
            </a>
            <a href="#services" onClick={e => scrollToSection(e, "#services")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              Services
            </a>
            <a href="#pricing" onClick={e => scrollToSection(e, "#pricing")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              Pricing
            </a>
            <a href="#team" onClick={e => scrollToSection(e, "#team")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              Team
            </a>
            <a href="#contact" onClick={e => scrollToSection(e, "#contact")} className="text-sm text-muted-foreground hover:text-foreground hover:brightness-110 transition-all duration-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Now positioned absolute to avoid being cut off */}
        {isOpen && <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-t border-border/50 pb-4 pt-4 px-6 space-y-4 animate-fade-up">
            <a href="#hero" onClick={e => scrollToSection(e, "#hero")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#video-work" onClick={e => scrollToSection(e, "#video-work")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Video Work
            </a>
            <a href="#design-work" onClick={e => scrollToSection(e, "#design-work")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Design Work
            </a>
            <a href="#about-us" onClick={e => scrollToSection(e, "#about-us")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </a>
            <a href="#services" onClick={e => scrollToSection(e, "#services")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#pricing" onClick={e => scrollToSection(e, "#pricing")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#team" onClick={e => scrollToSection(e, "#team")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#contact" onClick={e => scrollToSection(e, "#contact")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>}
      </div>
    </nav>;
};
export default Navbar;