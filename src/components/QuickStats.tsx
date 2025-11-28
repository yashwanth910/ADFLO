import geometricShape1 from "@/assets/geometric-shape-1.png";

const QuickStats = () => {
  return (
    <section className="relative py-20 px-[8%] overflow-visible">
      {/* Purple fog behind island */}
      <img 
        src={geometricShape1}
        alt=""
        className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.06] blur-3xl"
      />

      {/* Floating island container */}
      <div className="relative max-w-[1400px] mx-auto">
        <div 
          className="glass-card h-[55vh] min-h-[400px] rounded-[48px] flex items-center justify-center p-8 shadow-2xl"
          style={{
            boxShadow: "inset 0 2px 8px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.4)"
          }}
        >
          {/* Stats text - responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl text-center">
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-5xl md:text-6xl font-bold mb-2">200+</p>
              <p className="text-sm text-muted-foreground font-light">Edited Videos</p>
            </div>
            
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-5xl md:text-6xl font-bold mb-2">5</p>
              <p className="text-sm text-muted-foreground font-light">Studio Members</p>
            </div>
            
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-5xl md:text-6xl font-bold mb-2">10+</p>
              <p className="text-sm text-muted-foreground font-light">Brands Helped</p>
            </div>
            
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-5xl md:text-6xl font-bold mb-2">100%</p>
              <p className="text-sm text-muted-foreground font-light">On-time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
