import { useState } from "react";
import { CheckCircle, Zap, Award, Users, Video, Palette, Sparkles, TrendingUp, ChevronDown } from "lucide-react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(index);
    }
  };
  return <section id="about-us" className="relative py-32 px-6 overflow-visible">
      {/* Geometric shapes - All Editable */}
      <img src={geometricShape1} alt="" className="geometric-shape top-20 left-[10%] w-96 h-96 opacity-[0.03] blur-3xl" />
      <img src={geometricShape2} alt="" className="geometric-shape bottom-32 right-[15%] w-80 h-80 opacity-[0.04] blur-2xl" style={{
      transform: "rotate(45deg)"
    }} />

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
              <Video className="w-10 h-10 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-semibold">​Conversion Focused Ads</h3>
              <p className="text-sm text-muted-foreground">Plan, shoot, edit, market Premium Ads   </p>
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
                <h3 className="text-xl font-semibold">​Colour Grading </h3>
                <p className="text-sm text-muted-foreground">​Cinematic tone - frame by frame</p>
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

        {/* FAQ - 5 Accordion Items */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know</p>
          </div>

          <div className="max-w-3xl mx-auto relative space-y-4">
            {/* FAQ Item 1 - EDITABLE */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <div role="button" tabIndex={0} aria-expanded={openFaq === 1} onClick={() => toggleFaq(1)} onKeyDown={e => handleKeyDown(e, 1)} className="p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">What's your typical turnaround time?</h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground">
                  Most projects are completed within 3-5 business days, with rush options available for urgent needs.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 - EDITABLE */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <div role="button" tabIndex={0} aria-expanded={openFaq === 2} onClick={() => toggleFaq(2)} onKeyDown={e => handleKeyDown(e, 2)} className="p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">Do you offer revisions?</h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground">
                  Yes! All packages include up to 3 rounds of revisions to ensure your complete satisfaction.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 - EDITABLE */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <div role="button" tabIndex={0} aria-expanded={openFaq === 3} onClick={() => toggleFaq(3)} onKeyDown={e => handleKeyDown(e, 3)} className="p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">What file formats do you deliver?</h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground">
                  We deliver in all major formats including MP4, MOV, PNG, JPEG, SVG, and source files upon request.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 - EDITABLE */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <div role="button" tabIndex={0} aria-expanded={openFaq === 4} onClick={() => toggleFaq(4)} onKeyDown={e => handleKeyDown(e, 4)} className="p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">Can you work with my existing brand guidelines?</h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground">
                  Absolutely! We specialize in maintaining brand consistency while elevating your visual presence.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 - EDITABLE */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <div role="button" tabIndex={0} aria-expanded={openFaq === 5} onClick={() => toggleFaq(5)} onKeyDown={e => handleKeyDown(e, 5)} className="p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">What is your pricing structure?</h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground">
                  We offer flexible pricing based on project scope and requirements. Check our Pricing section for starting rates or contact us for a custom quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;