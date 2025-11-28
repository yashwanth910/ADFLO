import { useState } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import geometricShape1 from "@/assets/geometric-shape-1.png";

const QuickStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    {
      number: "200+",
      caption: "Edited Videos",
      tooltip: "High-quality edits delivered to satisfied clients",
      icon: TrendingUp,
    },
    {
      number: "5",
      caption: "Studio Members",
      tooltip: "Talented creatives working together",
      icon: Users,
    },
    {
      number: "10+",
      caption: "Brands Helped",
      tooltip: "Growing businesses with compelling content",
      icon: Award,
    },
    {
      number: "100%",
      caption: "On-time Delivery",
      tooltip: "We never miss a deadline",
      icon: Clock,
    },
  ];

  return (
    <section className="relative py-20 px-[8%] overflow-visible">
      {/* Purple fog behind island */}
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.06] blur-3xl"
      />

      {/* Floating island container */}
      <div className="relative max-w-[1400px] mx-auto">
        <div 
          className="glass-card h-[55vh] min-h-[400px] rounded-[48px] flex items-center justify-center p-8 shadow-2xl"
          style={{
            boxShadow: "inset 0 2px 8px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.4)"
          }}
        >
          {/* Stats grid - responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${stat.number} ${stat.caption}`}
                  onFocus={() => setHoveredIndex(idx)}
                  onBlur={() => setHoveredIndex(null)}
                >
                  {/* Stat tile */}
                  <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center space-y-4 h-full min-h-[200px] transition-all duration-300 hover:scale-[1.06] hover:shadow-xl hover:shadow-purple-500/10 focus-within:scale-[1.06] focus-within:ring-2 focus-within:ring-purple-500/20">
                    <Icon className="w-8 h-8 text-muted-foreground" />
                    <div className="text-center space-y-2">
                      <p className="text-5xl font-bold">{stat.number}</p>
                      <p className="text-sm text-muted-foreground font-light">{stat.caption}</p>
                    </div>
                  </div>

                  {/* Tooltip - desktop only */}
                  {hoveredIndex === idx && (
                    <div className="hidden lg:block absolute -top-16 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
                      <div className="glass-card px-4 py-2 rounded-lg whitespace-nowrap text-xs text-muted-foreground">
                        {stat.tooltip}
                      </div>
                    </div>
                  )}

                  {/* Mobile tooltip as caption */}
                  <div className="lg:hidden mt-2 text-center">
                    <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {stat.tooltip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
