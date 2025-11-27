import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";

const PricingNew = () => {
  const plans = [
    {
      name: "Digital Marketing",
      price: "Starting at $250",
      features: [
        "Social Strategy",
        "Ad Optimization",
        "Analytics & Reporting",
      ],
      cta: "Start Project",
    },
    {
      name: "Graphic Designing",
      price: "Starting at $175",
      features: [
        "Branding",
        "Visual Assets",
        "Mockups",
      ],
      cta: "Start Project",
    },
    {
      name: "Video Editing",
      price: "Starting at $350",
      features: [
        "Story-driven edit",
        "Color grading",
        "Delivery formats",
      ],
      cta: "Start Project",
    },
    {
      name: "Custom Plan",
      price: "Custom",
      features: [
        "Scoped proposal",
        "Custom quote",
        "Fast turnaround",
      ],
      cta: "Contact Us",
      isCustom: true,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      {/* Purple fog and geometric shapes */}
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape top-20 left-[15%] w-96 h-96 opacity-[0.05] blur-3xl"
      />
      <img 
        src={geometricShape2}
        alt=""
        className="geometric-shape bottom-32 right-[10%] w-80 h-80 opacity-[0.04] blur-2xl"
        style={{ transform: "rotate(12deg)" }}
      />
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.03] blur-xl"
      />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Transparent pricing for exceptional work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="glass-card p-8 space-y-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full glass-card hover:bg-muted/50 transition-all duration-300"
                onClick={plan.isCustom ? scrollToContact : scrollToContact}
              >
                {plan.cta}
              </Button>
            </div>
          ))}

          {/* Intersecting shapes */}
          <img 
            src={geometricShape2}
            alt=""
            className="geometric-shape -top-20 left-1/4 w-56 h-56 opacity-[0.04] blur-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingNew;
