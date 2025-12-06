import { Play } from "lucide-react";
import { useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

interface WorkGridVideoProps {
  id: string;
  title: string;
}

const WorkGridVideo = ({ id, title }: WorkGridVideoProps) => {
  const [modalOpen, setModalOpen] = useState<number | null>(null);

  const handleCloseModal = () => {
    setModalOpen(null);
  };

  return (
    <>
      <section id={id} className="relative py-32 px-6 overflow-visible">
        {/* Geometric shapes */}
        <img
          src={geometricShape3}
          alt=""
          className="geometric-shape top-20 right-[8%] w-64 h-64 opacity-[0.03] blur-2xl"
          style={{
            transform: "rotate(75deg)",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
        <img src={geometricShape1} alt="" className="geometric-shape top-32 right-[8%] w-80 h-80 opacity-[0.04] blur-3xl" />
        <img
          src={geometricShape2}
          alt=""
          className="geometric-shape bottom-20 left-[12%] w-64 h-64 opacity-[0.05] blur-2xl"
          style={{ transform: "rotate(12deg)" }}
        />

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
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(1)}
              >
                <img
                  src="/lovable-uploads/f81e1001-7d19-4959-88e4-f553d5f452fa.jpg"
                  alt="Video 01 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 01 — Ad Edit</p>
                </div>
              </div>

              {/* Video Card 2 */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(2)}
              >
                <img
                  src="/placeholder.svg"
                  alt="Video 02 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 02 — Brand Film</p>
                </div>
              </div>

              {/* Video Card 3 */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(3)}
              >
                <img
                  src="/placeholder.svg"
                  alt="Video 03 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 03 — Reel</p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Centered Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Video Card 4 */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(4)}
              >
                <img
                  src="/placeholder.svg"
                  alt="Video 04 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 04 — Product</p>
                </div>
              </div>

              {/* Video Card 5 */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(5)}
              >
                <img
                  src="/placeholder.svg"
                  alt="Video 05 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 05 — Social</p>
                </div>
              </div>
            </div>

            {/* Additional decorative shapes */}
            <img src={geometricShape1} alt="" className="geometric-shape top-1/4 left-[5%] w-56 h-56 opacity-[0.03] blur-xl" />
            <img src={geometricShape2} alt="" className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 opacity-[0.04] blur-2xl" />
          </div>
        </div>
      </section>

      {/* ===== VIDEO MODALS - Each with separately editable video source ===== */}

      {/* Modal 1 */}
      {modalOpen === 1 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={handleCloseModal}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={handleCloseModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE VIDEO: Upload or set URL via Visual Edits */}
            <video
              controls
              autoPlay
              className="w-full rounded-xl bg-black"
              style={{ maxHeight: "75vh", objectFit: "contain" }}
              poster="/lovable-uploads/f81e1001-7d19-4959-88e4-f553d5f452fa.jpg"
            >
              <source src="/placeholder.svg" type="video/mp4" />
            </video>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">Video 01 — Ad Edit</h3>
              <p className="text-sm text-white/60 mt-1">Commercial advertisement edit for brand campaign</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2 */}
      {modalOpen === 2 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={handleCloseModal}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={handleCloseModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE VIDEO: Upload or set URL via Visual Edits */}
            <video
              controls
              autoPlay
              className="w-full rounded-xl bg-black"
              style={{ maxHeight: "75vh", objectFit: "contain" }}
              poster="/placeholder.svg"
            >
              <source src="/placeholder.svg" type="video/mp4" />
            </video>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">Video 02 — Brand Film</h3>
              <p className="text-sm text-white/60 mt-1">Cinematic brand storytelling piece</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3 */}
      {modalOpen === 3 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={handleCloseModal}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={handleCloseModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE VIDEO: Upload or set URL via Visual Edits */}
            <video
              controls
              autoPlay
              className="w-full rounded-xl bg-black"
              style={{ maxHeight: "75vh", objectFit: "contain" }}
              poster="/placeholder.svg"
            >
              <source src="/placeholder.svg" type="video/mp4" />
            </video>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">Video 03 — Reel</h3>
              <p className="text-sm text-white/60 mt-1">Social media reel content</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 4 */}
      {modalOpen === 4 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={handleCloseModal}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={handleCloseModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE VIDEO: Upload or set URL via Visual Edits */}
            <video
              controls
              autoPlay
              className="w-full rounded-xl bg-black"
              style={{ maxHeight: "75vh", objectFit: "contain" }}
              poster="/placeholder.svg"
            >
              <source src="/placeholder.svg" type="video/mp4" />
            </video>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">Video 04 — Product</h3>
              <p className="text-sm text-white/60 mt-1">Product showcase video</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 5 */}
      {modalOpen === 5 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={handleCloseModal}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={handleCloseModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE VIDEO: Upload or set URL via Visual Edits */}
            <video
              controls
              autoPlay
              className="w-full rounded-xl bg-black"
              style={{ maxHeight: "75vh", objectFit: "contain" }}
              poster="/placeholder.svg"
            >
              <source src="/placeholder.svg" type="video/mp4" />
            </video>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">Video 05 — Social</h3>
              <p className="text-sm text-white/60 mt-1">Social media content piece</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkGridVideo;