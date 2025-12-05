import { useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

interface WorkGridDesignProps {
  id: string;
  title: string;
}

const WorkGridDesign = ({ id, title }: WorkGridDesignProps) => {
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [modalImageSrc, setModalImageSrc] = useState<string>("");

  // Open modal with the same image source as the card
  const openModal = (cardNumber: number, imageSrc: string) => {
    setModalOpen(cardNumber);
    setModalImageSrc(imageSrc);
  };

  const closeModal = () => {
    setModalOpen(null);
    setModalImageSrc("");
  };

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
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
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
            <p className="text-xl text-muted-foreground">Visual design that speaks volumes</p>
          </div>

          {/* 9 Card Grid: 3x3 Desktop, 2 columns Tablet, 1 column Mobile */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Design Card 1 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(1, "/lovable-uploads/6ad463dc-ea13-45f1-b57a-cb5c0aac1eff.jpg")}
              >
                {/* EDITABLE: Image - This same image shows in the modal */}
                <img
                  src="/lovable-uploads/6ad463dc-ea13-45f1-b57a-cb5c0aac1eff.jpg"
                  alt="Design Project 1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  {/* EDITABLE: Card Title */}
                  <p className="text-sm font-semibold text-white">Design Project 1</p>
                </div>
              </div>

              {/* Design Card 2 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(2, "/placeholder.svg")}
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

              {/* Design Card 3 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(3, "/placeholder.svg")}
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

              {/* Design Card 4 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(4, "/placeholder.svg")}
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

              {/* Design Card 5 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(5, "/placeholder.svg")}
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

              {/* Design Card 6 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(6, "/placeholder.svg")}
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

              {/* Design Card 7 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(7, "/placeholder.svg")}
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

              {/* Design Card 8 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(8, "/placeholder.svg")}
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

              {/* Design Card 9 - STATIC & EDITABLE */}
              <div
                className="glass-card aspect-video group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => openModal(9, "/placeholder.svg")}
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

      {/* ===== SINGLE MODAL - Uses same image as clicked card ===== */}
      {modalOpen !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onClick={closeModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Image automatically uses the same source as the card */}
            <img
              src={modalImageSrc}
              alt={`Design Project ${modalOpen} Full`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="glass-card mt-4 p-4 rounded-lg max-w-2xl text-center">
              {/* Modal content based on which card was clicked */}
              {modalOpen === 1 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 1</h3>
                  <p className="text-sm text-muted-foreground">Brand identity design work</p>
                </>
              )}
              {modalOpen === 2 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 2</h3>
                  <p className="text-sm text-muted-foreground">Visual assets design</p>
                </>
              )}
              {modalOpen === 3 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 3</h3>
                  <p className="text-sm text-muted-foreground">Social graphics design</p>
                </>
              )}
              {modalOpen === 4 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 4</h3>
                  <p className="text-sm text-muted-foreground">Marketing materials</p>
                </>
              )}
              {modalOpen === 5 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 5</h3>
                  <p className="text-sm text-muted-foreground">Creative concepts</p>
                </>
              )}
              {modalOpen === 6 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 6</h3>
                  <p className="text-sm text-muted-foreground">Digital artwork</p>
                </>
              )}
              {modalOpen === 7 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 7</h3>
                  <p className="text-sm text-muted-foreground">Print design</p>
                </>
              )}
              {modalOpen === 8 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 8</h3>
                  <p className="text-sm text-muted-foreground">UI/UX design</p>
                </>
              )}
              {modalOpen === 9 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Design Project 9</h3>
                  <p className="text-sm text-muted-foreground">Illustration work</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkGridDesign;
