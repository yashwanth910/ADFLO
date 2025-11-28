import { CheckCircle, Zap, Award, Users, Video, Palette, Sparkles, TrendingUp, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutUs = () => {
  const whyUs = [
    { icon: CheckCircle, title: "Premium Quality", description: "Every frame crafted to perfection" },
    { icon: Zap, title: "Lightning Fast", description: "Quick turnarounds without compromise" },
    { icon: Award, title: "Award-Winning", description: "Recognized excellence in visual storytelling" },
    { icon: Users, title: "Collaborative", description: "Your vision, our expertise" },
  ];

  const capabilities = [
    { icon: Video, title: "Video Editing", description: "Cinematic cuts and seamless transitions" },
    { icon: Palette, title: "Graphic Design", description: "Visual identity that stands out" },
    { icon: Sparkles, title: "Motion Graphics", description: "Dynamic animations that engage" },
    { icon: TrendingUp, title: "Content Strategy", description: "Data-driven creative decisions" },
    { icon: Target, title: "Brand Development", description: "Cohesive visual storytelling" },
  ];

  const faqs = [
    {
      question: "What's your typical turnaround time?",
      answer: "Most projects are completed within 3-5 business days, with rush options available for urgent needs.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! All packages include up to 3 rounds of revisions to ensure your complete satisfaction.",
    },
    {
      question: "What file formats do you deliver?",
      answer: "We deliver in all major formats including MP4, MOV, PNG, JPEG, SVG, and source files upon request.",
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer: "Absolutely! We specialize in maintaining brand consistency while elevating your visual presence.",
    },
  ];

  return (
    <section id="about-us" className="relative py-32 px-6 overflow-visible">
      {/* Geometric shapes with edge fade */}
      <div className="geometric-shape top-20 left-[10%] w-96 h-96 rounded-full bg-accent-purple opacity-[0.03] blur-3xl" style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 100%)' }} />
      <div className="geometric-shape bottom-32 right-[15%] w-80 h-80 rounded-3xl bg-accent-purple opacity-[0.04] blur-2xl rotate-45" style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 100%)' }} />

      <div className="container mx-auto space-y-32">
        {/* Why Us */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground">Excellence in every detail</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 text-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 mx-auto text-muted-foreground" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
            {/* Intersecting shape */}
            <div className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-2xl bg-accent-purple opacity-[0.03] blur-xl" />
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Capabilities</h2>
            <p className="text-xl text-muted-foreground">Full-spectrum creative services</p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {capabilities.slice(0, 3).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-muted-foreground" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {capabilities.slice(3).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx + 3}
                    className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-muted-foreground" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Intersecting shapes */}
            <div className="geometric-shape top-1/4 right-[8%] w-72 h-72 rounded-full bg-accent-purple opacity-[0.04] blur-2xl" />
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="glass-card px-6 border-0 hover:scale-[1.02] hover:shadow-lg hover:shadow-muted/10 transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
