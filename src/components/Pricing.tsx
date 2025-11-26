import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      price: "$499",
      period: "per project",
      features: [
        "Up to 5 minutes of edited content",
        "2 rounds of revisions",
        "3-5 day turnaround",
        "HD export (1080p)",
        "Basic color grading",
      ],
    },
    {
      name: "Premium",
      price: "$999",
      period: "per project",
      featured: true,
      features: [
        "Up to 10 minutes of edited content",
        "3 rounds of revisions",
        "2-3 day turnaround",
        "4K export",
        "Advanced color grading",
        "Motion graphics included",
        "Priority support",
      ],
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
      <div className="geometric-shape top-20 left-[15%] w-96 h-96 rounded-full bg-accent-purple opacity-[0.05] blur-3xl" />
      <div className="geometric-shape bottom-32 right-[10%] w-80 h-80 rounded-3xl bg-accent-purple opacity-[0.04] blur-2xl rotate-12" />
      <div className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-2xl bg-accent-purple opacity-[0.03] blur-xl" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Transparent pricing for exceptional work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-card p-10 space-y-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 ${
                plan.featured ? "ring-2 ring-muted" : ""
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full glass-card hover:bg-muted/50 transition-all duration-300"
                size="lg"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          ))}

          {/* Intersecting shapes */}
          <div className="geometric-shape -top-20 left-1/4 w-56 h-56 rounded-full bg-accent-purple opacity-[0.04] blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
