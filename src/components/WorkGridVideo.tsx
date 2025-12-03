import { Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

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

  // Helper to detect video platform
  const detectPlatform = (url: string) => {
    const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
    const isVimeo = url.includes('vimeo.com');
    return { isYouTube, isVimeo };
  };

  const handleCardClick = (cardElement: HTMLElement) => {
    const videoUrl = cardElement.getAttribute('data-video-url') || '';
    const videoTitle = cardElement.getAttribute('data-video-title') || '';
    const { isYouTube, isVimeo } = detectPlatform(videoUrl);
    setSelectedVideo({ url: videoUrl, title: videoTitle, isYouTube, isVimeo });
  };

  return (
    <>
      <section id={id} className="relative py-32 px-6 overflow-visible">
        {/* Additional geometric shapes */}
        <img 
          src={geometricShape3}
          alt=""
          className="geometric-shape top-20 right-[8%] w-64 h-64 opacity-[0.03] blur-2xl"
          style={{ 
            transform: "rotate(75deg)",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
          }}
        />
        {/* Geometric shapes - All Editable */}
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

          {/* Grid: 3 top row, 2 centered bottom row - All Static Cards */}
          <div className="relative">
            {/* First Row - 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Video Card 1 - EDITABLE: Change data-video-url to your video link, upload thumbnail image */}
              <div
                data-video-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                data-video-title="Video Project 1"
                onClick={(e) => handleCardClick(e.currentTarget)}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* EDITABLE: Upload your thumbnail image here */}
                <img 
                  src="/placeholder.svg" 
                  alt="Video Project 1 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  {/* EDITABLE: Video title */}
                  <p className="text-sm font-semibold">Video Project 1</p>
                  {/* EDITABLE: Video description */}
                  <p className="text-xs text-muted-foreground">Cinematic storytelling</p>
                </div>
              </div>

              {/* Video Card 2 - EDITABLE: Change data-video-url to your video link, upload thumbnail image */}
              <div
                data-video-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                data-video-title="Video Project 2"
                onClick={(e) => handleCardClick(e.currentTarget)}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* EDITABLE: Upload your thumbnail image here */}
                <img 
                  src="/placeholder.svg" 
                  alt="Video Project 2 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  {/* EDITABLE: Video title */}
                  <p className="text-sm font-semibold">Video Project 2</p>
                  {/* EDITABLE: Video description */}
                  <p className="text-xs text-muted-foreground">Creative reel</p>
                </div>
              </div>

              {/* Video Card 3 - EDITABLE: Change data-video-url to your video link, upload thumbnail image */}
              <div
                data-video-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                data-video-title="Video Project 3"
                onClick={(e) => handleCardClick(e.currentTarget)}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* EDITABLE: Upload your thumbnail image here */}
                <img 
                  src="/placeholder.svg" 
                  alt="Video Project 3 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  {/* EDITABLE: Video title */}
                  <p className="text-sm font-semibold">Video Project 3</p>
                  {/* EDITABLE: Video description */}
                  <p className="text-xs text-muted-foreground">Brand video</p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Centered Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Video Card 4 - EDITABLE: Change data-video-url to your video link, upload thumbnail image */}
              <div
                data-video-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                data-video-title="Video Project 4"
                onClick={(e) => handleCardClick(e.currentTarget)}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* EDITABLE: Upload your thumbnail image here */}
                <img 
                  src="/placeholder.svg" 
                  alt="Video Project 4 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  {/* EDITABLE: Video title */}
                  <p className="text-sm font-semibold">Video Project 4</p>
                  {/* EDITABLE: Video description */}
                  <p className="text-xs text-muted-foreground">Product showcase</p>
                </div>
              </div>

              {/* Video Card 5 - EDITABLE: Change data-video-url to your video link, upload thumbnail image */}
              <div
                data-video-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                data-video-title="Video Project 5"
                onClick={(e) => handleCardClick(e.currentTarget)}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* EDITABLE: Upload your thumbnail image here */}
                <img 
                  src="/placeholder.svg" 
                  alt="Video Project 5 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <Play className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  {/* EDITABLE: Video title */}
                  <p className="text-sm font-semibold">Video Project 5</p>
                  {/* EDITABLE: Video description */}
                  <p className="text-xs text-muted-foreground">Social media content</p>
                </div>
              </div>
            </div>

            {/* Additional Intersecting shapes */}
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
