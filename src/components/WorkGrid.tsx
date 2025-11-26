import { Play, Image as ImageIcon } from "lucide-react";

interface WorkGridProps {
  id: string;
  title: string;
  type: "video" | "design";
}

const WorkGrid = ({ id, title, type }: WorkGridProps) => {
  const items = [
    { title: `${type === "video" ? "Video" : "Design"} Project 1` },
    { title: `${type === "video" ? "Video" : "Design"} Project 2` },
    { title: `${type === "video" ? "Video" : "Design"} Project 3` },
    { title: `${type === "video" ? "Video" : "Design"} Project 4` },
    { title: `${type === "video" ? "Video" : "Design"} Project 5` },
  ];

  return (
    <section id={id} className="relative py-32 px-6 overflow-hidden">
      {/* Geometric shapes behind grid */}
      <div className="geometric-shape top-32 right-[8%] w-80 h-80 rounded-full bg-accent-purple opacity-[0.04] blur-3xl" />
      <div className="geometric-shape bottom-20 left-[12%] w-64 h-64 rounded-3xl bg-accent-purple opacity-[0.05] blur-2xl rotate-12" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-xl text-muted-foreground">
            {type === "video" 
              ? "Cinematic storytelling that captivates" 
              : "Visual design that speaks volumes"}
          </p>
        </div>

        {/* Grid: 3 top row, 2 centered bottom row */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {items.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
              >
                {type === "video" ? (
                  <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                ) : (
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
            ))}
          </div>
          
          {/* Centered 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {items.slice(3).map((item, idx) => (
              <div
                key={idx + 3}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
              >
                {type === "video" ? (
                  <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                ) : (
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Intersecting shapes */}
          <div className="geometric-shape top-1/4 left-[5%] w-56 h-56 rounded-2xl bg-accent-purple opacity-[0.03] blur-xl" />
          <div className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 rounded-full bg-accent-purple opacity-[0.04] blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
