import geometricShape1 from "@/assets/geometric-shape-1.png";
const QuickStats = () => {
  return <section className="relative py-20 px-[8%] overflow-visible">
      {/* Purple fog behind island - Editable */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] opacity-[0.08] blur-[50px] pointer-events-none" style={{
      background: 'radial-gradient(circle, hsl(262, 100%, 71%), transparent)'
    }} />

      {/* Geometric shape - Editable */}
      <img src={geometricShape1} alt="" className="geometric-shape top-0 right-[20%] w-48 h-48 opacity-[0.03] blur-xl" />

      <div className="container mx-auto">
        {/* Slim Island Container */}
        <div className="glass-card mx-auto flex items-center justify-center" style={{
        height: '70px',
        maxWidth: '1200px',
        borderRadius: '25px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.4)'
      }}>
          {/* Four Static Text Stats - All Individually Editable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 w-full max-w-5xl text-center px-6">
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-base sm:text-lg font-semibold">200+ Edited Videos</p>
            </div>
            
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-base sm:text-lg font-semibold">5 Studio Members</p>
            </div>
            
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-base sm:text-lg font-semibold">10+ Brands Helped</p>
            </div>
            
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-base sm:text-lg font-semibold">100% On-time </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default QuickStats;