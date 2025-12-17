import { Play } from "lucide-react";
import { useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
import VideoModal from "./VideoModal";

const videos = [
  {
    id: 1,
    title: "Video 01 — Ad Edit",
    thumbnail: "/lovable-uploads/video1-thumb.jpg",
    videoUrl: "https://github.com/yashwanth910/portfolio-media/releases/download/v1/tcs.vs.pig.farm.mp4",
  },
  {
    id: 2,
    title: "Video 02 — Brand Film",
    thumbnail: "/lovable-uploads/video2-thumb.jpg",
    videoUrl: "https://github.com/yashwanth910/portfolio-media/releases/download/v1/documentary.mp4",
  },
  {
    id: 3,
    title: "Video 03 — Reel",
    thumbnail: "/lovable-uploads/video3-thumb.jpg",
    videoUrl: "https://github.com/yashwanth910/portfolio-media/releases/download/v1/jatti.promo.mp4",
  },
  {
    id: 4,
    title: "Video 04 — Product",
    thumbnail: "/lovable-uploads/video4-thumb.jpg",
    videoUrl: "https://github.com/yashwanth910/portfolio-media/releases/download/v1/thatha.mp4",
  },
  {
    id: 5,
    title: "Video 05 — Social",
    thumbnail: "/lovable-uploads/video5-thumb.jpg",
    videoUrl: "https://github.com/yashwanth910/portfolio-media/releases/download/v1/physiodoc.mp4",
  },
  {
    id: 6,
    title: "Video 06 — Social",
    thumbnail: "/lovable-uploads/video5-thumb.jpg",
    videoUrl: "https://github.com/yashwanth910/portfolio-media/releases/download/v1/doctor.spotlight.recognition.mp4",
  },
];

interface WorkGridVideoProps {
  id: string;
  title: string;
}
const WorkGridVideo = ({
  id,
  title
}: WorkGridVideoProps) => {
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const handleCloseModal = () => {
    setModalOpen(null);
  };

  const activeVideo = videos.find(v => v.id === modalOpen);

  return <>
      <section id={id} className="relative py-32 px-6 overflow-visible">
        {/* Geometric shapes */}
        <img src={geometricShape3} alt="" className="geometric-shape top-20 right-[8%] w-64 h-64 opacity-[0.03] blur-2xl" style={{
        transform: "rotate(75deg)",
        maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
      }} />
        <img src={geometricShape1} alt="" className="geometric-shape top-32 right-[8%] w-80 h-80 opacity-[0.04] blur-3xl" />
        <img src={geometricShape2} alt="" className="geometric-shape bottom-20 left-[12%] w-64 h-64 opacity-[0.05] blur-2xl" style={{
        transform: "rotate(12deg)"
      }} />

        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
            <p className="text-xl text-muted-foreground">Cinematic storytelling that captivates</p>
          </div>

          {/* Grid: 3 top row, 2 centered bottom row */}
          <div className="relative">
            {/* First Row - 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Video Card 1 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(1)}>
                <img src={videos[0].thumbnail} alt="Video 01 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 01 — Ad Edit</p>
                </div>
              </div>

              {/* Video Card 2 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(2)}>
                <img alt="Video 02 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src={videos[1].thumbnail} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 02 — Brand Film</p>
                </div>
              </div>

              {/* Video Card 3 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(3)}>
                <img src={videos[2].thumbnail} alt="Video 03 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 03 — Reel</p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Centered Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Video Card 4 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(4)}>
                <img src={videos[3].thumbnail} alt="Video 04 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 04 — Product</p>
                </div>
              </div>

              {/* Video Card 5 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(5)}>
                <img src={videos[4].thumbnail} alt="Video 05 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 05 — Social</p>
                </div>
              </div>

              {/* Video Card 6 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(6)}>
                <img alt="Video 06 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src={videos[5].thumbnail} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 06 — Brand Film</p>
                </div>
              </div>
            </div>

            {/* Additional decorative shapes */}
            <img src={geometricShape1} alt="" className="geometric-shape top-1/4 left-[5%] w-56 h-56 opacity-[0.03] blur-xl" />
            <img src={geometricShape2} alt="" className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 opacity-[0.04] blur-2xl" />
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!activeVideo}
        onClose={handleCloseModal}
        videoUrl={activeVideo?.videoUrl || ""}
        title={activeVideo?.title || ""}
      />
      
    </>;
};
export default WorkGridVideo;