import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";
import ImageLightbox from "./ImageLightbox";

interface WorkGridDesignProps {
  id: string;
  title: string;
}

const WorkGridDesign = ({ id, title }: WorkGridDesignProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Static array for lightbox navigation
  const allImages = [
    { title: "Design Project 1", description: "Brand identity", image: "/placeholder.svg" },
    { title: "Design Project 2", description: "Visual assets", image: "/placeholder.svg" },
    { title: "Design Project 3", description: "Social graphics", image: "/placeholder.svg" },
    { title: "Design Project 4", description: "Marketing materials", image: "/placeholder.svg" },
    { title: "Design Project 5", description: "Creative concepts", image: "/placeholder.svg" },
    { title: "Design Project 6", description: "Digital artwork", image: "/placeholder.svg" },
  ];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {lightboxOpen && (
        <ImageLightbox
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}

      <section id={id} className="relative py-32 px-6 overflow-visible">
        {/* Geometric shapes - All Editable */}
        <img 
          src={geometricShape3}
          alt=""
          className="geometric-shape top-32 right-[8%] w-80 h-80 opacity-[0.04] blur-3xl"
        />
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

          {/* Grid: 3 + 3 rows - All Static Cards */}
          <div className="relative">
            {/* First Row - 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Design Card 1 - All Editable */}
              <div
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(0)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 1"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <p className="text-sm font-semibold">Design Project 1</p>
                  <p className="text-xs text-muted-foreground">Brand identity</p>
                </div>
              </div>

              {/* Design Card 2 - All Editable */}
              <div
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(1)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 2"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <p className="text-sm font-semibold">Design Project 2</p>
                  <p className="text-xs text-muted-foreground">Visual assets</p>
                </div>
              </div>

              {/* Design Card 3 - All Editable */}
              <div
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(2)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 3"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <p className="text-sm font-semibold">Design Project 3</p>
                  <p className="text-xs text-muted-foreground">Social graphics</p>
                </div>
              </div>
            </div>

            {/* Second Row - 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Design Card 4 - All Editable */}
              <div
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(3)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 4"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <p className="text-sm font-semibold">Design Project 4</p>
                  <p className="text-xs text-muted-foreground">Marketing materials</p>
                </div>
              </div>

              {/* Design Card 5 - All Editable */}
              <div
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(4)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 5"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <p className="text-sm font-semibold">Design Project 5</p>
                  <p className="text-xs text-muted-foreground">Creative concepts</p>
                </div>
              </div>

              {/* Design Card 6 - All Editable */}
              <div
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(5)}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Design Project 6"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <p className="text-sm font-semibold">Design Project 6</p>
                  <p className="text-xs text-muted-foreground">Digital artwork</p>
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
              src={geometricShape3}
              alt=""
              className="geometric-shape bottom-1/4 right-[5%] w-72 h-72 opacity-[0.04] blur-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkGridDesign;
