import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Purple palm leaf silhouette - bottom right */}
      <div 
        className="absolute bottom-10 right-10 w-[600px] h-[600px] opacity-[0.07] blur-[18px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(262, 100%, 71%) 0%, transparent 70%)",
          transform: "rotate(-25deg)",
        }}
      />

      {/* Geometric shapes behind hero card */}
      <div className="geometric-shape top-20 left-[10%] w-64 h-64 rounded-full bg-accent-purple opacity-[0.04] blur-2xl" />
      <div className="geometric-shape top-40 right-[15%] w-80 h-80 rounded-3xl bg-accent-purple opacity-[0.05] blur-3xl rotate-45" />
      <div className="geometric-shape bottom-32 left-[20%] w-48 h-48 rounded-2xl bg-accent-purple opacity-[0.03] blur-xl" />

      {/* Hero card */}
      <div className="relative z-10 glass-card max-w-5xl w-full p-12 md:p-16 text-center space-y-8 hover:shadow-2xl hover:shadow-muted/10 transition-all duration-500">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Elevate Your Visual Story
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Premium video editing & graphic design crafted for creators, brands, and visionaries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="glass-card hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-muted/20"
            onClick={() => scrollToSection("#video-work")}
          >
            View Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-card border-border hover:bg-muted/30 transition-all duration-300 hover:-translate-y-1"
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
