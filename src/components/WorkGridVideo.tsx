import { Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";

interface WorkGridVideoProps {
  id: string;
  title: string;
}

const WorkGridVideo = ({ id, title }: WorkGridVideoProps) => {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    isYouTube?: boolean;
    isVimeo?: boolean;
  } | null>(null);

  const items = [
    {
      title: "Video Project 1",
      description: "Cinematic storytelling",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isYouTube: true,
    },
    {
      title: "Video Project 2",
      description: "Creative reel",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isYouTube: true,
    },
    {
      title: "Video Project 3",
      description: "Brand video",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isYouTube: true,
    },
    {
      title: "Video Project 4",
      description: "Product showcase",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isYouTube: true,
    },
    {
      title: "Video Project 5",
      description: "Social media content",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isYouTube: true,
    },
  ];

  return (
    <>
      <section id={id} className="relative py-32 px-6 overflow-hidden">
        {/* Geometric shapes behind grid */}
        <img 
          src={geometricShape1}
          alt=""
          className="geometric-shape top-32 right-[8%] w-80 h-80 opacity-[0.04] blur-3xl"
        />
        <img 
          src={geometricShape2}
          alt=""
          className="geometric-shape bottom-20 left-[12%] w-64 h-64 opacity-[0.05] blur-2xl"
          style={{ transform: "rotate(12deg)" }}
        />

        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
            <p className="text-xl text-muted-foreground">
              Cinematic storytelling that captivates
            </p>
          </div>

          {/* Grid: 3 top row, 2 centered bottom row */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {items.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedVideo({
                    url: item.videoUrl,
                    title: item.title,
                    isYouTube: item.isYouTube,
                  })}
                  className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10 flex flex-col items-center space-y-2">
                    <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Centered 2 cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {items.slice(3).map((item, idx) => (
                <div
                  key={idx + 3}
                  onClick={() => setSelectedVideo({
                    url: item.videoUrl,
                    title: item.title,
                    isYouTube: item.isYouTube,
                  })}
                  className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10 flex flex-col items-center space-y-2">
                    <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Intersecting shapes */}
            <img 
              src={geometricShape1}
              alt=""
              className="geometric-shape top-1/4 left-[5%] w-56 h-56 opacity-[0.03] blur-xl"
            />
            <img 
              src={geometricShape2}
              alt=""
              className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 opacity-[0.04] blur-2xl"
            />
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
        isYouTube={selectedVideo?.isYouTube}
        isVimeo={selectedVideo?.isVimeo}
      />
    </>
  );
};

export default WorkGridVideo;
