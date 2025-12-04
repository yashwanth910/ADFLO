import { useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

interface WorkGridDesignProps {
  id: string;
  title: string;
}

const WorkGridDesign = ({ id, title }: WorkGridDesignProps) => {
  const [modalOpen, setModalOpen] = useState<number | null>(null);

  return (
    <>
      <section id={id} className="relative py-32 px-6 overflow-visible">
        {/* Geometric shapes */}
        <img 
          src={geometricShape1} 
          alt="" 
          className="geometric-shape bottom-32 left-[12%] w-72 h-72 opacity-[0.04] blur-3xl" 
          style={{
            transform: "rotate(200deg)",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
          }} 
        />
        <img src={geometricShape3} alt="" className="geometric-shape top-32 right-[8%] w-80 h-80 opacity-[0.04] blur-3xl" />
        <img 
          src={geometricShape1} 
          alt="" 
          className="geometric-shape bottom-20 left-[12%] w-64 h-64 opacity-[0.05] blur-2xl" 
          style={{ transform: "rotate(12deg)" }} 
        />

        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
            <p className="text-xl text-muted-foreground">
              Visual design that speaks volumes
            </p>
          </div>

          {/* 9 Card Grid: 3x3 Desktop, 2 columns Tablet, 1 column Mobile */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Design Card 1 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(1)}
              >
                {/* EDITABLE: Thumbnail Image - NO overlay, full visibility */}
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 1" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Light gradient ONLY behind text for readability */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  {/* EDITABLE: Card Title */}
                  <p className="text-sm font-semibold text-white">Design Project 1</p>
                </div>
              </div>

              {/* Design Card 2 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(2)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 2" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 2</p>
                </div>
              </div>

              {/* Design Card 3 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(3)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 3" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 3</p>
                </div>
              </div>

              {/* Design Card 4 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(4)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 4" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 4</p>
                </div>
              </div>

              {/* Design Card 5 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(5)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 5" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 5</p>
                </div>
              </div>

              {/* Design Card 6 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(6)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 6" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 6</p>
                </div>
              </div>

              {/* Design Card 7 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(7)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 7" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 7</p>
                </div>
              </div>

              {/* Design Card 8 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(8)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 8" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 8</p>
                </div>
              </div>

              {/* Design Card 9 - ALL STATIC & EDITABLE */}
              <div 
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setModalOpen(9)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 9" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 9</p>
                </div>
              </div>

            </div>

            {/* Decorative shapes */}
            <img src={geometricShape1} alt="" className="geometric-shape top-1/4 left-[5%] w-56 h-56 opacity-[0.03] blur-xl" />
            <img src={geometricShape3} alt="" className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 opacity-[0.04] blur-2xl" />
          </div>
        </div>
      </section>

      {/* Modal 1 - ALL EDITABLE */}
      {modalOpen === 1 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              onClick={() => setModalOpen(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* EDITABLE: Modal Image - Same as thumbnail or different */}
            <img 
              src="/placeholder.svg" 
              alt="Design Project 1 Full" 
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              {/* EDITABLE: Modal Title */}
              <h3 className="text-xl font-semibold mb-2">Design Project 1</h3>
              {/* EDITABLE: Modal Description */}
              <p className="text-sm text-muted-foreground">Brand identity design work</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2 - ALL EDITABLE */}
      {modalOpen === 2 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 2 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 2</h3>
              <p className="text-sm text-muted-foreground">Visual assets design</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3 - ALL EDITABLE */}
      {modalOpen === 3 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 3 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 3</h3>
              <p className="text-sm text-muted-foreground">Social graphics design</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 4 - ALL EDITABLE */}
      {modalOpen === 4 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 4 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 4</h3>
              <p className="text-sm text-muted-foreground">Marketing materials</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 5 - ALL EDITABLE */}
      {modalOpen === 5 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 5 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 5</h3>
              <p className="text-sm text-muted-foreground">Creative concepts</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 6 - ALL EDITABLE */}
      {modalOpen === 6 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 6 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 6</h3>
              <p className="text-sm text-muted-foreground">Digital artwork</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 7 - ALL EDITABLE */}
      {modalOpen === 7 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 7 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 7</h3>
              <p className="text-sm text-muted-foreground">Print design</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 8 - ALL EDITABLE */}
      {modalOpen === 8 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 8 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 8</h3>
              <p className="text-sm text-muted-foreground">UI/UX design</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal 9 - ALL EDITABLE */}
      {modalOpen === 9 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={() => setModalOpen(null)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src="/placeholder.svg" alt="Design Project 9 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 9</h3>
              <p className="text-sm text-muted-foreground">Illustration work</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkGridDesign;