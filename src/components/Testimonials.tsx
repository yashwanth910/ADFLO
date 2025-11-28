import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      content: "Absolutely transformed my content. The attention to detail and creative vision is unmatched.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Brand Director",
      content: "Professional, efficient, and incredibly talented. Our brand has never looked better.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Marketing Manager",
      content: "The team understood our vision perfectly and delivered beyond expectations. Highly recommend!",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Startup Founder",
      content: "Fast turnaround without compromising quality. They're now our go-to creative partner.",
      rating: 5,
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 0.5;
        
        // Reset scroll position when reaching halfway (seamless loop)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
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

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Geometric shapes behind testimonials */}
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape top-32 right-[12%] w-80 h-80 opacity-[0.04] blur-3xl"
      />
      <img 
        src={geometricShape3}
        alt=""
        className="geometric-shape bottom-20 left-[10%] w-72 h-72 opacity-[0.05] blur-2xl"
        style={{ transform: "rotate(45deg)" }}
      />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by creators and brands worldwide
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-x-hidden relative pt-4 cursor-pointer"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-8" style={{ width: 'max-content' }}>
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px]"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, starIdx) => (
                    <Star key={starIdx} className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Intersecting shape */}
          <img 
            src={geometricShape1}
            alt=""
            className="geometric-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] blur-xl pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
