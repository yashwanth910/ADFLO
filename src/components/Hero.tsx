import { Button } from "@/components/ui/button";
import palmLeaf1 from "@/assets/palm-leaf-1.png";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-visible">
      {/* Geometric shapes - All Editable, Overflow Visible with Fade */}
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape top-20 left-[10%] w-64 h-64 opacity-[0.04] blur-2xl"
        style={{ 
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
        }}
      />
      <img 
        src={geometricShape2}
        alt=""
        className="geometric-shape top-40 right-[15%] w-80 h-80 opacity-[0.05] blur-3xl"
        style={{ 
          transform: "rotate(45deg)",
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
        }}
      />
      <img 
        src={geometricShape3}
        alt=""
        className="geometric-shape bottom-32 left-[20%] w-48 h-48 opacity-[0.03] blur-xl"
        style={{ 
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
        }}
      />
      {/* Additional shapes for empty spaces */}
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape bottom-10 right-[25%] w-56 h-56 opacity-[0.03] blur-2xl"
        style={{ 
          transform: "rotate(120deg)",
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
        }}
      />

      {/* Hero card - All Static Editable Text */}
      <div className="relative z-10 glass-card max-w-5xl w-full p-12 md:p-16 text-center space-y-8 hover:shadow-2xl hover:shadow-muted/10 transition-all duration-500">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Elevate Your Visual Story
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Premium video editing & graphic design crafted for creators, brands, and visionaries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="glass-card text-white hover:bg-muted/50 hover:shadow-[0_0_20px_rgba(167,117,255,0.4)] transition-all duration-300 hover:-translate-y-1" 
            onClick={() => scrollToSection("#video-work")}
          >
            View Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-card border-border text-white hover:bg-muted/30 transition-all duration-300 hover:-translate-y-1" 
            onClick={() => scrollToSection("#contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
