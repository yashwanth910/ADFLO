import { useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
interface WorkGridDesignProps {
  id: string;
  title: string;
}
const WorkGridDesign = ({
  id,
  title
}: WorkGridDesignProps) => {
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const closeModal = () => {
    setModalOpen(null);
  };
  return <>
      <section id={id} className="relative py-32 px-6 overflow-visible">
        {/* Geometric shapes */}
        <img src={geometricShape1} alt="" className="geometric-shape bottom-32 left-[12%] w-72 h-72 opacity-[0.04] blur-3xl" style={{
        transform: "rotate(200deg)",
        maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
      }} />
        <img src={geometricShape3} alt="" className="geometric-shape top-32 right-[8%] w-80 h-80 opacity-[0.04] blur-3xl" />
        <img src={geometricShape1} alt="" className="geometric-shape bottom-20 left-[12%] w-64 h-64 opacity-[0.05] blur-2xl" style={{
        transform: "rotate(12deg)"
      }} />

        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
            <p className="text-xl text-muted-foreground">Visual design that speaks volumes</p>
          </div>

          {/* 9 Card Grid: 3x3 Desktop, 2 columns Tablet, 1 column Mobile */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Design Card 1 - Thumbnail editable separately */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(1)}>
                <img alt="Design Project 1 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/e1c96da1-122d-4310-a5ee-e9904cb69a21.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 1</p>
                </div>
              </div>

              {/* Design Card 2 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(2)}>
                <img alt="Design Project 2 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/2f17df63-a1be-4dd3-926a-38a3b412e546.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 2</p>
                </div>
              </div>

              {/* Design Card 3 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(3)}>
                <img alt="Design Project 3 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/cb228b35-0266-45f4-a1b4-c1a43becca7a.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 3</p>
                </div>
              </div>

              {/* Design Card 4 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(4)}>
                <img alt="Design Project 4 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/704b5a20-0183-4daa-85e6-9a97085c68e1.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 4</p>
                </div>
              </div>

              {/* Design Card 5 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(5)}>
                <img alt="Design Project 5 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/b181ccaf-ead2-41a5-92c0-8dbe69c7fae5.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 5</p>
                </div>
              </div>

              {/* Design Card 6 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(6)}>
                <img alt="Design Project 6 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/13604ad6-fd68-446a-a63a-f600535d29a3.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 6</p>
                </div>
              </div>

              {/* Design Card 7 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(7)}>
                <img alt="Design Project 7 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/2037c3bd-dacc-430a-bd14-f6caafeb382e.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 7</p>
                </div>
              </div>

              {/* Design Card 8 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(8)}>
                <img alt="Design Project 8 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/120b966a-2478-4876-9624-e343c2c9c626.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 8</p>
                </div>
              </div>

              {/* Design Card 9 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(9)}>
                <img alt="Design Project 9 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/46584cef-e925-4141-8951-3fd095aea5d8.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 9</p>
                </div>
              </div>

              {/* Design Card 10 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(10)}>
                <img alt="Design Project 10 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/59c4eb29-2b0a-4af3-9824-f2312dd03584.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 10</p>
                </div>
              </div>

              {/* Design Card 11 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(11)}>
                <img alt="Design Project 11 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/a9b4a403-0d11-42bb-b1a5-6d4a996f1758.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 11</p>
                </div>
              </div>

              {/* Design Card 12 */}
              <div className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl" onClick={() => setModalOpen(12)}>
                <img alt="Design Project 12 Thumbnail" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/f19b79ac-b588-4579-83ad-05317b83f9a5.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Design Project 12</p>
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <img src={geometricShape1} alt="" className="geometric-shape top-1/4 left-[5%] w-56 h-56 opacity-[0.03] blur-xl" />
            <img src={geometricShape3} alt="" className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 opacity-[0.04] blur-2xl" />
          </div>
        </div>
      </section>

      {/* ===== MODALS - Each with SEPARATELY editable full image ===== */}

      {/* Modal 1 */}
      {modalOpen === 1 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* SEPARATE EDITABLE IMAGE for modal */}
            <img alt="Design Project 1 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/21e3119c-2d5a-4db9-a218-ac926c99c64a.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 1</h3>
              <p className="text-sm text-muted-foreground">Brand identity design work</p>
            </div>
          </div>
        </div>}

      {/* Modal 2 */}
      {modalOpen === 2 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 2 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/5e0f67b6-029f-4fc9-a520-8be053c00bff.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 2</h3>
              <p className="text-sm text-muted-foreground"> Business Card design</p>
            </div>
          </div>
        </div>}

      {/* Modal 3 */}
      {modalOpen === 3 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 3 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/cebe6388-d11a-4812-bb78-61b128e83801.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 3</h3>
              <p className="text-sm text-muted-foreground">​Brand Identity Design       </p>
            </div>
          </div>
        </div>}

      {/* Modal 4 */}
      {modalOpen === 4 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 4 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/a2a8fae3-4f6c-4d5e-9151-71dc258c75f3.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 4</h3>
              <p className="text-sm text-muted-foreground">Marketing Flyer </p>
            </div>
          </div>
        </div>}

      {/* Modal 5 */}
      {modalOpen === 5 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 5 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/612e85b2-3f86-4395-a530-2590b514c3f6.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 5</h3>
              <p className="text-sm text-muted-foreground">​Event Flyer</p>
            </div>
          </div>
        </div>}

      {/* Modal 6 */}
      {modalOpen === 6 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 6 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/acf4b083-b775-4b60-86b6-fd18eb3efc4f.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 6</h3>
              <p className="text-sm text-muted-foreground">Digital artwork</p>
            </div>
          </div>
        </div>}

      {/* Modal 7 */}
      {modalOpen === 7 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 7 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/dcb31846-62a7-4b6b-b3b8-379cb5d5a926.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 7</h3>
              <p className="text-sm text-muted-foreground">​Tech Meet Flyer</p>
            </div>
          </div>
        </div>}

      {/* Modal 8 */}
      {modalOpen === 8 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 8 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/3f831250-54e9-4fc1-8c41-cba35cb71c7f.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 8</h3>
              <p className="text-sm text-muted-foreground">​Event Flyer </p>
            </div>
          </div>
        </div>}

      {/* Modal 9 */}
      {modalOpen === 9 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 9 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/e5ae907f-464e-4425-bf54-444cfcb6766b.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 9</h3>
              <p className="text-sm text-muted-foreground">Logo Design </p>
            </div>
          </div>
        </div>}

        {/* Modal 10 */}
      {modalOpen === 10 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 10 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/3f831250-54e9-4fc1-8c41-cba35cb71c7f.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 10</h3>
              <p className="text-sm text-muted-foreground">Audition ​Event Flyer </p>
            </div>
          </div>
        </div>}

        {/* Modal 11 */}
      {modalOpen === 11 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 11 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/3f831250-54e9-4fc1-8c41-cba35cb71c7f.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 11</h3>
              <p className="text-sm text-muted-foreground">​Social Media Post </p>
            </div>
          </div>
        </div>}

        {/* Modal 12 */}
      {modalOpen === 12 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img alt="Design Project 12 Full" className="max-w-full max-h-[75vh] object-contain rounded-xl" src="/lovable-uploads/3f831250-54e9-4fc1-8c41-cba35cb71c7f.jpg" />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              <h3 className="text-xl font-semibold mb-2">Design Project 12</h3>
              <p className="text-sm text-muted-foreground">​Logo Design </p>
            </div>
          </div>
        </div>}
    </>;
};
export default WorkGridDesign;