const Showreel = () => {
  return (
    <section id="showreel" className="relative py-32 px-6 overflow-hidden">
      {/* Geometric shapes */}
      <div className="geometric-shape top-20 left-[5%] w-72 h-72 rounded-full bg-accent-purple opacity-[0.04] blur-3xl" />
      <div className="geometric-shape bottom-20 right-[10%] w-96 h-96 rounded-3xl bg-accent-purple opacity-[0.05] blur-2xl rotate-12" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Showreel</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our creative vision in motion
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr,2fr,1fr] gap-8 items-center">
          {/* Left text block - desktop only */}
          <div className="hidden lg:block relative">
            <div className="glass-card p-6 space-y-3">
              <p className="text-sm text-muted-foreground">Short-form edits</p>
              <p className="text-sm text-muted-foreground">Reels</p>
              <p className="text-sm text-muted-foreground">Hooks</p>
            </div>
            {/* Geometric shape behind */}
            <div className="geometric-shape -top-10 -left-10 w-32 h-32 rounded-2xl bg-accent-purple opacity-[0.05] blur-xl" />
          </div>

          {/* Showreel video card */}
          <div className="relative">
            <div className="glass-card p-4 aspect-[9/16] max-w-md mx-auto overflow-hidden">
              <div className="w-full h-full bg-muted/20 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Vertical Showreel Video</p>
              </div>
            </div>
            {/* Intersecting shapes */}
            <div className="geometric-shape -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-accent-purple opacity-[0.04] blur-2xl" />
          </div>

          {/* Right text block - desktop only */}
          <div className="hidden lg:block relative">
            <div className="glass-card p-6 space-y-3">
              <p className="text-sm text-muted-foreground">Cinematic cuts</p>
              <p className="text-sm text-muted-foreground">Color grading</p>
              <p className="text-sm text-muted-foreground">Sound design</p>
            </div>
            {/* Geometric shape behind */}
            <div className="geometric-shape -bottom-10 -right-10 w-40 h-40 rounded-3xl bg-accent-purple opacity-[0.06] blur-xl rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
