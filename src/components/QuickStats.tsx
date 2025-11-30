import geometricShape1 from "@/assets/geometric-shape-1.png";

const QuickStats = () => {
  return (
    <section className="relative py-16 px-4 md:px-6 overflow-visible">
      <div className="container mx-auto max-w-6xl">
        <div 
          className="glass-card px-4 md:px-12 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300"
          style={{ 
            borderRadius: '25px',
            minHeight: '70px'
          }}
        >
          {/* Stat 1 */}
          <div className="text-center">
            <p className="text-sm md:text-lg lg:text-xl font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap">
              200+ Edited Videos
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <p className="text-sm md:text-lg lg:text-xl font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap">
              6 Studio Members
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <p className="text-sm md:text-lg lg:text-xl font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap">
              10+ Brands Helped
            </p>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <p className="text-sm md:text-lg lg:text-xl font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap">
              100% On-time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;