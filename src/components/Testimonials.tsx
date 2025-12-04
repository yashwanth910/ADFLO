import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationId: number;
    let isPaused = false;
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 0.5; // Slow smooth scroll

        // Reset when reaching halfway for seamless loop
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    const handleClick = () => {
      isPaused = !isPaused;
    };
    scrollContainer.addEventListener("click", handleClick);
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer?.removeEventListener("click", handleClick);
    };
  }, []);
  return <section className="relative py-32 overflow-hidden">
      {/* Geometric shapes - All Editable */}
      <img src={geometricShape1} alt="" className="geometric-shape top-32 right-[12%] w-80 h-80 opacity-[0.04] blur-3xl" />
      <img src={geometricShape3} alt="" className="geometric-shape bottom-20 left-[10%] w-72 h-72 opacity-[0.05] blur-2xl" style={{
      transform: "rotate(45deg)"
    }} />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by creators and brands worldwide
          </p>
        </div>
      </div>

      {/* Full-width scrolling container with padding */}
      <div ref={scrollRef} className="overflow-x-hidden relative cursor-pointer" style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
        <div className="flex gap-8 px-0" style={{
        width: 'max-content'
      }}>
          {/* Review Card 1 - All Editable */}
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;Absolutely transformed my content. The attention to detail and creative vision is unmatched.&rdquo;</p>
            <div>
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
          </div>

          {/* Review Card 2 - All Editable */}
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">“Loved the dedication of the team, some days work went on till 3 AM in the nights and the video got delivered on time in the morning ”</p>
            <div>
              <p className="font-semibold">​Nithin</p>
              <p className="text-sm text-muted-foreground">​Neydal - Founder </p>
            </div>
          </div>

          {/* Review Card 3 - All Editable */}
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">"My idea was brought on screen, they listened to my requirements without interruptions in the discovery call and delivered it as promised with extra suggestions”</p>
            <div>
              <p className="font-semibold">​Mayank</p>
              <p className="text-sm text-muted-foreground">​JidoElectric - Founder </p>
            </div>
          </div>

          {/* Review Card 4 - All Editable */}
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;Fast turnaround without compromising quality. They're now our go-to creative partner.&rdquo;</p>
            <div>
              <p className="font-semibold">David Park</p>
              <p className="text-sm text-muted-foreground">Startup Founder</p>
            </div>
          </div>

          {/* Review Card 5 - All Editable */}
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;Exceptional work that elevated our entire content strategy. Worth every penny!&rdquo;</p>
            <div>
              <p className="font-semibold">Jessica Wang</p>
              <p className="text-sm text-muted-foreground">“I wanted reels in bulk, like 2 reels a day. When a lot of people told that was too much work, these guys delivered it on time everyday and eventually they started managing my entire page”</p>
            </div>
          </div>

          {/* Duplicate all 5 cards for seamless loop */}
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;Absolutely transformed my content. The attention to detail and creative vision is unmatched.&rdquo;</p>
            <div>
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
          </div>
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;Professional, efficient, and incredibly talented. Our brand has never looked better.&rdquo;</p>
            <div>
              <p className="font-semibold">Marcus Rodriguez</p>
              <p className="text-sm text-muted-foreground">Brand Director</p>
            </div>
          </div>
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;The team understood our vision perfectly and delivered beyond expectations. Highly recommend!&rdquo;</p>
            <div>
              <p className="font-semibold">Emily Thompson</p>
              <p className="text-sm text-muted-foreground">Marketing Manager</p>
            </div>
          </div>
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;Fast turnaround without compromising quality. They're now our go-to creative partner.&rdquo;</p>
            <div>
              <p className="font-semibold">David Park</p>
              <p className="text-sm text-muted-foreground">Startup Founder</p>
            </div>
          </div>
          <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">&ldquo;Exceptional work that elevated our entire content strategy. Worth every penny!&rdquo;</p>
            <div>
              <p className="font-semibold">Jessica Wang</p>
              <p className="text-sm text-muted-foreground">Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;