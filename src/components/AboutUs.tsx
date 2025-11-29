import { CheckCircle, Zap, Award, Users, Video, Palette, Sparkles, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";

const AboutUs = () => {
  return (
    <section id="about-us" className="relative py-32 px-6 overflow-visible">
      {/* Geometric shapes - All Editable */}
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape top-20 left-[10%] w-96 h-96 opacity-[0.03] blur-3xl"
      />
      <img 
        src={geometricShape2}
        alt=""
        className="geometric-shape bottom-32 right-[15%] w-80 h-80 opacity-[0.04] blur-2xl"
        style={{ transform: "rotate(45deg)" }}
      />

      <div className="container mx-auto space-y-32">
        {/* Why Choose Us - 4 Static Cards */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground">Excellence in every detail</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Why Us Card 1 */}
            <div className="glass-card p-8 text-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
              <CheckCircle className="w-10 h-10 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-semibold">Premium Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Every frame crafted to perfection</p>
            </div>

            {/* Why Us Card 2 */}
            <div className="glass-card p-8 text-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
              <Zap className="w-10 h-10 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-semibold">Fast Turnaround Times</h3>
              <p className="text-sm text-muted-foreground">Quick turnarounds without compromise</p>
            </div>

            {/* Why Us Card 3 */}
            <div className="glass-card p-8 text-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
              <Award className="w-10 h-10 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-semibold">Award-Winning Work</h3>
              <p className="text-sm text-muted-foreground">Recognized excellence in visual storytelling</p>
            </div>

            {/* Why Us Card 4 */}
            <div className="glass-card p-8 text-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
              <Users className="w-10 h-10 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-semibold">Dedicated Creative Team</h3>
              <p className="text-sm text-muted-foreground">Your vision, our expertise</p>
            </div>
          </div>
        </div>

        {/* Our Capabilities - 5 Static Cards (3+2) */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Capabilities</h2>
            <p className="text-xl text-muted-foreground">Full-spectrum creative services</p>
          </div>

          <div className="relative">
            {/* First Row - 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Capability Card 1 */}
              <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
                <Video className="w-10 h-10 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Video Editing</h3>
                <p className="text-sm text-muted-foreground">Cinematic cuts and seamless transitions</p>
              </div>

              {/* Capability Card 2 */}
              <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
                <Palette className="w-10 h-10 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Graphic Design</h3>
                <p className="text-sm text-muted-foreground">Visual identity that stands out</p>
              </div>

              {/* Capability Card 3 */}
              <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
                <Sparkles className="w-10 h-10 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Motion Graphics</h3>
                <p className="text-sm text-muted-foreground">Dynamic animations that engage</p>
              </div>
            </div>

            {/* Second Row - 2 Centered Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Capability Card 4 */}
              <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Content Strategy</h3>
                <p className="text-sm text-muted-foreground">Data-driven creative decisions</p>
              </div>

              {/* Capability Card 5 */}
              <div className="glass-card p-8 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300">
                <Award className="w-10 h-10 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Brand Development</h3>
                <p className="text-sm text-muted-foreground">Cohesive visual storytelling</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ - 5 Static Items */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <Accordion type="single" collapsible className="space-y-4">
              {/* FAQ Item 1 */}
              <AccordionItem
                value="item-1"
                className="glass-card px-6 border-0 hover:scale-[1.02] hover:shadow-lg hover:shadow-muted/10 transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  What's your typical turnaround time?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Most projects are completed within 3-5 business days, with rush options available for urgent needs.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 2 */}
              <AccordionItem
                value="item-2"
                className="glass-card px-6 border-0 hover:scale-[1.02] hover:shadow-lg hover:shadow-muted/10 transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Do you offer revisions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes! All packages include up to 3 rounds of revisions to ensure your complete satisfaction.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem
                value="item-3"
                className="glass-card px-6 border-0 hover:scale-[1.02] hover:shadow-lg hover:shadow-muted/10 transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  What file formats do you deliver?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  We deliver in all major formats including MP4, MOV, PNG, JPEG, SVG, and source files upon request.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 4 */}
              <AccordionItem
                value="item-4"
                className="glass-card px-6 border-0 hover:scale-[1.02] hover:shadow-lg hover:shadow-muted/10 transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Can you work with my existing brand guidelines?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Absolutely! We specialize in maintaining brand consistency while elevating your visual presence.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 5 */}
              <AccordionItem
                value="item-5"
                className="glass-card px-6 border-0 hover:scale-[1.02] hover:shadow-lg hover:shadow-muted/10 transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  What is your pricing structure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  We offer flexible pricing based on project scope and requirements. Check our Pricing section for starting rates or contact us for a custom quote.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
