import { Film, Smartphone, Layers, RefreshCw, Award } from "lucide-react";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
const Services = () => {
  return <section id="services" className="relative py-32 px-6 overflow-visible">
      {/* Additional geometric shapes */}
      <img src={geometricShape2} alt="" className="geometric-shape top-40 left-[5%] w-80 h-80 opacity-[0.03] blur-3xl" style={{
      transform: "rotate(90deg)",
      maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
      WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
    }} />
      {/* Geometric shapes - All Editable */}
      <img src={geometricShape2} alt="" className="geometric-shape top-32 left-[10%] w-96 h-96 opacity-[0.05] blur-3xl" />
      <img src={geometricShape3} alt="" className="geometric-shape bottom-20 right-[15%] w-72 h-72 opacity-[0.04] blur-2xl" style={{
      transform: "rotate(12deg)"
    }} />
      <img src={geometricShape2} alt="" className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] blur-xl" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to your vision
          </p>
        </div>

        {/* 3 + 2 centered layout - All Static Cards */}
        <div className="relative">
          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Service Card 1 - Video Editing */}
            <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 group">
              <Film className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-2xl font-semibold">Video Editing</h3>
              <p className="text-muted-foreground">Story-driven edits with seamless transitions, colour grading, and sound design.</p>
            </div>

            {/* Service Card 2 - Reels & Shorts */}
            <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 group">
              <Smartphone className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-2xl font-semibold">Reels & Shorts</h3>
              <p className="text-muted-foreground">Attention-grabbing content optimized for social platforms. Maximum impact in minimal time.</p>
            </div>

            {/* Service Card 3 - Graphic Design */}
            <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 group">
              <Layers className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-2xl font-semibold">Graphic Design</h3>
              <p className="text-muted-foreground">From logos to full brand suites. Visual design that tells your story.</p>
            </div>
          </div>

          {/* Second Row - 2 Centered Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Service Card 4 - Branding & Identity */}
            <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 group">
              <Award className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-2xl font-semibold">Branding & Identity</h3>
              <p className="text-muted-foreground">Creating memorable brand experiences that resonate with your audience.</p>
            </div>

            {/* Service Card 5 - Content Repurposing */}
            <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 group">
              <RefreshCw className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-2xl font-semibold">Content Repurposing</h3>
              <p className="text-muted-foreground">Transform one piece of content into multiple formats across all platforms.</p>
            </div>
          </div>

          {/* Additional intersecting shapes */}
          <img src={geometricShape3} alt="" className="geometric-shape top-1/4 right-[5%] w-64 h-64 opacity-[0.04] blur-2xl" />
        </div>
      </div>
    </section>;
};
export default Services;