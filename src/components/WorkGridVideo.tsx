import { Play } from "lucide-react";
import { useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
interface WorkGridVideoProps {
  id: string;
  title: string;
}
const WorkGridVideo = ({
  id,
  title
}: WorkGridVideoProps) => {
  const [modalOpen, setModalOpen] = useState<number | null>(null);
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
            <p className="text-xl text-muted-foreground">
              Cinematic storytelling that captivates
            </p>
          </div>

          {/* Grid: 3 top row, 2 centered bottom row */}
          <div className="relative">
            {/* First Row - 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              
              {/* Video Card 1 - ALL STATIC & EDITABLE */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(1)}>
                {/* EDITABLE: Thumbnail Image - Replace via Visual Editor */}
                <img alt="Video 01 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/f81e1001-7d19-4959-88e4-f553d5f452fa.jpg" />
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* EDITABLE: Play Icon */}
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  {/* EDITABLE: Text Label */}
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 01 — Ad Edit</p>
                </div>
              </div>

              {/* Video Card 2 - ALL STATIC & EDITABLE */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(2)}>
                {/* EDITABLE: Thumbnail Image */}
                <img src="/placeholder.svg" alt="Video 02 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* EDITABLE: Play Icon */}
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  {/* EDITABLE: Text Label */}
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 02 — Brand Film</p>
                </div>
              </div>

              {/* Video Card 3 - ALL STATIC & EDITABLE */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(3)}>
                {/* EDITABLE: Thumbnail Image */}
                <img src="/placeholder.svg" alt="Video 03 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* EDITABLE: Play Icon */}
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  {/* EDITABLE: Text Label */}
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 03 — Reel</p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Centered Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* Video Card 4 - ALL STATIC & EDITABLE */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(4)}>
                {/* EDITABLE: Thumbnail Image */}
                <img src="/placeholder.svg" alt="Video 04 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* EDITABLE: Play Icon */}
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  {/* EDITABLE: Text Label */}
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 04 — Product</p>
                </div>
              </div>

              {/* Video Card 5 - ALL STATIC & EDITABLE */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(5)}>
                {/* EDITABLE: Thumbnail Image */}
                <img src="/placeholder.svg" alt="Video 05 Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* EDITABLE: Play Icon */}
                  <Play className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                  {/* EDITABLE: Text Label */}
                  <p className="mt-3 text-sm font-semibold text-white drop-shadow-lg">Video 05 — Social</p>
                </div>
              </div>
            </div>

            {/* Additional shapes */}
            <img src={geometricShape1} alt="" className="geometric-shape top-1/4 left-[5%] w-56 h-56 opacity-[0.03] blur-xl" />
            <img src={geometricShape2} alt="" className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 opacity-[0.04] blur-2xl" />
          </div>
        </div>
      </section>

      {/* Modal 1 - ALL EDITABLE */}
      {modalOpen === 1 && <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE: Video Source - Upload or paste URL */}
            <video src="/placeholder.svg" controls autoPlay className="w-full aspect-video rounded-xl bg-black" />
            <div className="mt-4 text-center">
              {/* EDITABLE: Modal Title */}
              <h3 className="text-xl font-bold text-white">Video 01 — Ad Edit</h3>
              {/* EDITABLE: Modal Description */}
              <p className="text-sm text-white/60 mt-1">Commercial advertisement edit for brand campaign</p>
            </div>
          </div>
        </div>}

      {/* Modal 2 - ALL EDITABLE */}
      {modalOpen === 2 && <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE: Video Source */}
            <video src="/placeholder.svg" controls autoPlay className="w-full aspect-video rounded-xl bg-black" />
            <div className="mt-4 text-center">
              {/* EDITABLE: Modal Title */}
              <h3 className="text-xl font-bold text-white">Video 02 — Brand Film</h3>
              {/* EDITABLE: Modal Description */}
              <p className="text-sm text-white/60 mt-1">Cinematic brand storytelling piece</p>
            </div>
          </div>
        </div>}

      {/* Modal 3 - ALL EDITABLE */}
      {modalOpen === 3 && <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE: Video Source */}
            <video src="/placeholder.svg" controls autoPlay className="w-full aspect-video rounded-xl bg-black" />
            <div className="mt-4 text-center">
              {/* EDITABLE: Modal Title */}
              <h3 className="text-xl font-bold text-white">Video 03 — Reel</h3>
              {/* EDITABLE: Modal Description */}
              <p className="text-sm text-white/60 mt-1">Social media reel content</p>
            </div>
          </div>
        </div>}

      {/* Modal 4 - ALL EDITABLE */}
      {modalOpen === 4 && <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE: Video Source */}
            <video src="/placeholder.svg" controls autoPlay className="w-full aspect-video rounded-xl bg-black" />
            <div className="mt-4 text-center">
              {/* EDITABLE: Modal Title */}
              <h3 className="text-xl font-bold text-white">Video 04 — Product</h3>
              {/* EDITABLE: Modal Description */}
              <p className="text-sm text-white/60 mt-1">Product showcase video</p>
            </div>
          </div>
        </div>}

      {/* Modal 5 - ALL EDITABLE */}
      {modalOpen === 5 && <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE: Video Source */}
            <video src="/placeholder.svg" controls autoPlay className="w-full aspect-video rounded-xl bg-black" />
            <div className="mt-4 text-center">
              {/* EDITABLE: Modal Title */}
              <h3 className="text-xl font-bold text-white">Video 05 — Social</h3>
              {/* EDITABLE: Modal Description */}
              <p className="text-sm text-white/60 mt-1">Social media content piece</p>
            </div>
          </div>
        </div>}
    </>;
};
export default WorkGridVideo;