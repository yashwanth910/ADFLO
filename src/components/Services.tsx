import { Film, Smartphone, Layers, Sparkles, RefreshCw } from "lucide-react";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Story-driven edits with seamless transitions, color grading, and sound design.",
    },
    {
      icon: Smartphone,
      title: "Reels & Short-Form",
      description: "Attention-grabbing content optimized for social platforms. Maximum impact in minimal time.",
    },
    {
      icon: Layers,
      title: "Graphic Design",
      description: "From logos to full brand suites. Visual design that tells your story.",
    },
    {
      icon: Sparkles,
      title: "Color Grading",
      description: "Professional color correction and cinematic grading for stunning visuals.",
    },
    {
      icon: RefreshCw,
      title: "Content Repurposing",
      description: "Transform one piece of content into multiple formats across all platforms.",
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Purple geometric shapes */}
      <img 
        src={geometricShape2}
        alt=""
        className="geometric-shape top-32 left-[10%] w-96 h-96 opacity-[0.05] blur-3xl"
      />
      <img 
        src={geometricShape3}
        alt=""
        className="geometric-shape bottom-20 right-[15%] w-72 h-72 opacity-[0.04] blur-2xl"
        style={{ transform: "rotate(12deg)" }}
      />
      <img 
        src={geometricShape2}
        alt=""
        className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] blur-xl"
      />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to your vision
          </p>
        </div>

        {/* 3 + 2 centered layout */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.slice(3).map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx + 3}
                  className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional intersecting shapes */}
          <img 
            src={geometricShape3}
            alt=""
            className="geometric-shape top-1/4 right-[5%] w-64 h-64 opacity-[0.04] blur-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
