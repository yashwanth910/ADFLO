import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationId: number;
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 0.5;

        // Reset when reaching halfway (where duplicates start)
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  // Card component - hover only animates, click toggles pause
  const ReviewCard = ({
    children
  }: {
    children: React.ReactNode;
  }) => <div className="glass-card p-8 space-y-6 hover:scale-[1.04] hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 flex-shrink-0 w-[400px] cursor-pointer" onClick={() => setIsPaused(!isPaused)}>
      {children}
    </div>;
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
            ​Hear from some of our closest clients                    
          </p>
        </div>
      </div>

      {/* Full-width scrolling container */}
      <div ref={scrollRef} className="overflow-x-hidden relative" style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      paddingTop: "100px",
      paddingBottom: "100px"
    }}>
        <div className="flex gap-8 px-0" style={{
        width: "max-content"
      }}>
          {/* ===== ORIGINAL 6 REVIEW CARDS - ALL EDITABLE ===== */}

          {/* Review Card 1 - EDITABLE */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "Loved the dedication of the team, some days work went on till 3 AM in the nights and the video got delivered on time in the morning"
            </p>
            <div>
              <p className="font-semibold">Nithin</p>
              <p className="text-sm text-muted-foreground">Neydal - Founder</p>
            </div>
          </ReviewCard>

          {/* Review Card 2 - EDITABLE */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "My idea was brought on screen, they listened to my requirements without interruptions in the discovery call and delivered it as promised with extra suggestions"
            </p>
            <div>
              <p className="font-semibold">Mayank</p>
              <p className="text-sm text-muted-foreground">JidoElectric - Founder</p>
            </div>
          </ReviewCard>

          {/* Review Card 3 - EDITABLE */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "I wanted reels in bulk, like 2 reels a day. When a lot of people told that was too much work, these guys delivered it on time everyday and eventually I let them manage my entire page"
            </p>
            <div>
              <p className="font-semibold">Kuldeep</p>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
          </ReviewCard>

          {/* Review Card 4 - EDITABLE */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              &quot;I am a doctor and I post medical informative reels, these guys didn't just do the job, they wanted every single medical info to be right and got confirmation on any doubts before putting them into the context of the video, they had no wrong or misleading info peeking into the reels, not even any unrelated stock footage or photos&quot;
            </p>
            <div>
              <p className="font-semibold">Dr Monika Rajput</p>
              <p className="text-sm text-muted-foreground">Content Creator (Doctor)</p>
            </div>
          </ReviewCard>

          {/* Review Card 5 - EDITABLE */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              &quot;Absolutely transformed my content. The attention to detail and creative vision is unmatched, I thought this would be just another editing gig but then the results were awesome. No careless misses, loved their dedication and attention to detail.&quot;
            </p>
            <div>
              <p className="font-semibold">Chandru</p>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
          </ReviewCard>

          {/* Review Card 6 - EDITABLE */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "These guys were a recommendation from a friend of mine, they are still young and in college but the amount of work and dedication they put in is unmatched."
            </p>
            <div>
              <p className="font-semibold">Swetha</p>
              <p className="text-sm text-muted-foreground">Metro Cafe - Manager</p>
            </div>
          </ReviewCard>

          {/* ===== DUPLICATES FOR SEAMLESS LOOP (exact copies) ===== */}

          {/* Duplicate 1 */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              &quot;Loved the dedication of the team, some days work went on till 3 AM in the nights and the video got delivered on time in the morning, they are the ones who manage my other clothing brand called Aswathi too&quot;
            </p>
            <div>
              <p className="font-semibold">Nithin</p>
              <p className="text-sm text-muted-foreground">Neydal - Founder</p>
            </div>
          </ReviewCard>

          {/* Duplicate 2 */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "My idea was brought on screen, they listened to my requirements without interruptions in the discovery call and delivered it as promised with extra suggestions"
            </p>
            <div>
              <p className="font-semibold">Mayank</p>
              <p className="text-sm text-muted-foreground">JidoElectric - Founder</p>
            </div>
          </ReviewCard>

          {/* Duplicate 3 */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "I wanted reels in bulk, like 2 reels a day. When a lot of people told that was too much work, these guys delivered it on time everyday and eventually I let them manage my entire page"
            </p>
            <div>
              <p className="font-semibold">Kuldeep</p>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
          </ReviewCard>

          {/* Duplicate 4 */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "I am a doctor and I post medical informative reels, these guys didn't just do the job, they wanted every single medical info to be right and got confirmation on any doubts before putting them into the context of the video"
            </p>
            <div>
              <p className="font-semibold">Dr Monika Rajput</p>
              <p className="text-sm text-muted-foreground">Content Creator (Doctor)</p>
            </div>
          </ReviewCard>

          {/* Duplicate 5 */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "Absolutely transformed my content. The attention to detail and creative vision is unmatched, I thought this would be just another editing gig but then the results were awesome. No careless misses, loved their dedication"
            </p>
            <div>
              <p className="font-semibold">Chandru</p>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
          </ReviewCard>

          {/* Duplicate 6 */}
          <ReviewCard>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
              <Star className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
            </div>
            <p className="text-muted-foreground italic">
              "These guys were a recommendation from a friend of mine, they are still young and in college but the amount of work and dedication they put in is unmatched."
            </p>
            <div>
              <p className="font-semibold">Swetha</p>
              <p className="text-sm text-muted-foreground">Metro Cafe - Manager</p>
            </div>
          </ReviewCard>
        </div>
      </div>
    </section>;
};
export default Testimonials;