import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
const PricingNew = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return <section id="pricing" className="relative py-32 px-6 overflow-visible">
      {/* Additional geometric shapes */}
      <img src={geometricShape3} alt="" className="geometric-shape bottom-20 right-[18%] w-60 h-60 opacity-[0.04] blur-2xl" style={{
      transform: "rotate(150deg)",
      maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
      WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
    }} />
      {/* Geometric shapes - All Editable */}
      <img src={geometricShape1} alt="" className="geometric-shape top-20 left-[15%] w-96 h-96 opacity-[0.05] blur-3xl" />
      <img src={geometricShape2} alt="" className="geometric-shape bottom-32 right-[10%] w-80 h-80 opacity-[0.04] blur-2xl" style={{
      transform: "rotate(12deg)"
    }} />
      <img src={geometricShape1} alt="" className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.03] blur-xl" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Transparent pricing for exceptional work
          </p>
        </div>

        {/* 4 Static Pricing Cards - All Individually Editable */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
          {/* Pricing Card 1 - Digital Marketing */}
          <div className="glass-card p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300" style={{
          minHeight: '480px'
        }}>
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Digital Marketing</h3>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <p className="text-lg font-medium">₹12,000 / month</p>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Social Strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Ad Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Analytics & Reporting</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button className="w-full glass-card text-white hover:bg-muted/50 hover:shadow-[0_0_20px_rgba(167,117,255,0.3)] transition-all duration-300" onClick={scrollToContact}>
                Start Project
              </Button>
            </div>
          </div>

          {/* Pricing Card 2 - Graphic Designing */}
          <div className="glass-card p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300" style={{
          minHeight: '480px'
        }}>
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Graphic Designing</h3>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <p className="text-lg font-medium">₹12,000 / month </p>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Branding </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Visual Assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Mockups</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button className="w-full glass-card text-white hover:bg-muted/50 hover:shadow-[0_0_20px_rgba(167,117,255,0.3)] transition-all duration-300" onClick={scrollToContact}>
                Start Project
              </Button>
            </div>
          </div>

          {/* Pricing Card 3 - Video Editing */}
          <div className="glass-card p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300" style={{
          minHeight: '480px'
        }}>
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Video Editing</h3>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <p className="text-lg font-medium">₹20,000 / month</p>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Story-driven edit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Color grading</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Delivery formats</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button className="w-full glass-card text-white hover:bg-muted/50 hover:shadow-[0_0_20px_rgba(167,117,255,0.3)] transition-all duration-300" onClick={scrollToContact}>
                Start Project
              </Button>
            </div>
          </div>

          {/* Pricing Card 4 - Custom Plan */}
          <div className="glass-card p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300" style={{
          minHeight: '480px'
        }}>
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Custom Plan</h3>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Price</span>
                  <p className="text-lg font-medium">Custom   </p>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Scoped proposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Custom quote</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Fast turnaround</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button className="w-full glass-card text-white hover:bg-muted/50 hover:shadow-[0_0_20px_rgba(167,117,255,0.3)] transition-all duration-300" onClick={scrollToContact}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Additional intersecting shape */}
        <img src={geometricShape2} alt="" className="geometric-shape -top-20 left-1/4 w-56 h-56 opacity-[0.04] blur-2xl" />
      </div>
    </section>;
};
export default PricingNew;