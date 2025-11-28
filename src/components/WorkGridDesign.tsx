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

  const items = [
    {
      title: "Design Project 1",
      description: "Brand identity",
      image: "/placeholder.svg",
    },
    {
      title: "Design Project 2",
      description: "Visual assets",
      image: "/placeholder.svg",
    },
    {
      title: "Design Project 3",
      description: "Social graphics",
      image: "/placeholder.svg",
    },
    {
      title: "Design Project 4",
      description: "Marketing materials",
      image: "/placeholder.svg",
    },
    {
      title: "Design Project 5",
      description: "Creative concepts",
      image: "/placeholder.svg",
    },
  ];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {lightboxOpen && (
        <ImageLightbox
          images={items}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}

      <section id={id} className="relative py-32 px-6 overflow-hidden">
      {/* Geometric shapes behind grid */}
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

        {/* Grid: 3 top row, 2 centered bottom row */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {items.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(idx)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
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
                className="glass-card p-6 aspect-video flex flex-col items-center justify-center space-y-4 group hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(idx + 3)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <ImageIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
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
