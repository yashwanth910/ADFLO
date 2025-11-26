import { Star } from "lucide-react";

const Testimonials = () => {
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

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Geometric shapes behind testimonials */}
      <div className="geometric-shape top-32 right-[12%] w-80 h-80 rounded-full bg-accent-purple opacity-[0.04] blur-3xl" />
      <div className="geometric-shape bottom-20 left-[10%] w-72 h-72 rounded-3xl bg-accent-purple opacity-[0.05] blur-2xl rotate-45" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by creators and brands worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-card p-8 space-y-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
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

          {/* Intersecting shape */}
          <div className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-2xl bg-accent-purple opacity-[0.03] blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
