import { Mail } from "lucide-react";
import { useState } from "react";
import geometricShape2 from "@/assets/geometric-shape-2.png";
const Team = () => {
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null);
  return <section id="team" className="relative py-32 px-6 overflow-visible">
      {/* Geometric shape */}
      <img src={geometricShape2} alt="" className="geometric-shape top-32 right-[10%] w-96 h-96 opacity-[0.04] blur-3xl" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
          <p className="text-xl text-muted-foreground">
            Six creators building stories together
          </p>
        </div>

        {/* 6 Static Team Cards - 3 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 max-w-7xl mx-auto">
          
          {/* Team Member 1 - ALL STATIC & EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(1)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              {/* EDITABLE: Team member photo */}
              <img alt="Team Member 1" className="w-full h-full object-cover" src="https://github.com/yashwanth910/portfolio-media/releases/download/v1/yash.dp.for.website.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* EDITABLE: Name */}
              <p className="font-semibold text-lg">Yashwanth</p>
              {/* EDITABLE: Role */}
              <p className="text-sm text-muted-foreground mb-3">Creative Director</p>
              {/* Mail icon with decorative dots - ALL EDITABLE */}
              <div className="flex justify-center items-center gap-3">
                {/* EDITABLE: Left decorative dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                {/* EDITABLE: Mail link - click to edit href */}
                <a href="mailto:yashwanth@adflo.in" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                  <Mail className="w-5 h-5" />
                </a>
                {/* EDITABLE: Right decorative dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

          {/* Team Member 2 - ALL STATIC & EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(2)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Team Member 2" className="w-full h-full object-cover" src="/lovable-uploads/1c96f0e7-3a79-4508-9e1d-445106a5fa46.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Aadarsh Krishna</p>
              <p className="text-sm text-muted-foreground mb-3">Post-Production Lead</p>
              <div className="flex justify-center items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <a href="mailto:aadarsh@adflo.in" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                  <Mail className="w-5 h-5" />
                </a>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

          {/* Team Member 3 - ALL STATIC & EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(3)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Team Member 3" className="w-full h-full object-cover" src="/lovable-uploads/681cd3e4-6b8b-44db-93d8-c68adaa90f1a.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Rahul Sabaris</p>
              <p className="text-sm text-muted-foreground mb-3">Video-Editing Lead</p>
              <div className="flex justify-center items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <a href="mailto:rahul@adflo.in" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                  <Mail className="w-5 h-5" />
                </a>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

          {/* Team Member 4 - ALL STATIC & EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(4)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Team Member 4" className="w-full h-full object-cover" src="/lovable-uploads/a847dff4-8af3-4e81-9ee8-893e3712bcd0.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Mukesh Kanna</p>
              <p className="text-sm text-muted-foreground mb-3">Production Manager</p>
              <div className="flex justify-center items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <a href="mailto:mukesh@adflo.in" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                  <Mail className="w-5 h-5" />
                </a>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

          {/* Team Member 5 - ALL STATIC & EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(5)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Team Member 5" className="w-full h-full object-cover" src="/lovable-uploads/31767f83-d52d-4716-9be7-50849a304c92.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Bhuvaneshram MR</p>
              <p className="text-sm text-muted-foreground mb-3">Graphic-Design Lead</p>
              <div className="flex justify-center items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <a href="mailto:bhuvaneshram@adflo.in" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                  <Mail className="w-5 h-5" />
                </a>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

          {/* Team Member 6 - ALL STATIC & EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(6)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Team Member 6" className="w-full h-full object-cover" src="/lovable-uploads/070cf02d-90f1-4219-97d8-adbb43eaf3ce.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Ashiel JR</p>
              <p className="text-sm text-muted-foreground mb-3">Content Strategist</p>
              <div className="flex justify-center items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <a href="mailto:ashiel@adflo.in" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                  <Mail className="w-5 h-5" />
                </a>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal 1 - ALL EDITABLE */}
      {lightboxOpen === 1 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* EDITABLE: Modal photo */}
              <img src="https://github.com/yashwanth910/portfolio-media/releases/download/v1/yash.dp.for.website.jpg" alt="Team Member 1" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* EDITABLE: Name */}
                <h3 className="text-3xl font-bold">Yashwanth</h3>
                {/* EDITABLE: Role */}
                <p className="text-lg text-muted-foreground">Creative Director</p>
                {/* EDITABLE: Bio */}
                <p className="text-muted-foreground">Deciding the visual direction, overall style, and project tone.</p>
                {/* EDITABLE: Email link */}
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:yashwanth@adflo.in">
                  <Mail className="w-4 h-4" />
                  yashwanth@adflo.in
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 2 - ALL EDITABLE */}
      {lightboxOpen === 2 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img src="/lovable-uploads/1c96f0e7-3a79-4508-9e1d-445106a5fa46.jpg" alt="Team Member 2" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">Aadarsh Krishna</h3>
                <p className="text-lg text-muted-foreground">Post-Production Lead</p>
                <p className="text-muted-foreground">Supervising the entire editing process, ensuring consistency across all outputs.</p>
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:aadarsh@adflo.in">
                  <Mail className="w-4 h-4" />
                  aadarsh@adflo.in
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 3 - ALL EDITABLE */}
      {lightboxOpen === 3 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img src="/lovable-uploads/681cd3e4-6b8b-44db-93d8-c68adaa90f1a.jpg" alt="Team Member 3" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">Rahul Sabaris</h3>
                <p className="text-lg text-muted-foreground">Video-Editing Lead</p>
                <p className="text-muted-foreground">Supervising the video editing processes and managing the outputs.</p>
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:rahul@adflo.in">
                  <Mail className="w-4 h-4" />
                  rahul@adflo.in
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 4 - ALL EDITABLE */}
      {lightboxOpen === 4 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img src="/lovable-uploads/a847dff4-8af3-4e81-9ee8-893e3712bcd0.jpg" alt="Team Member 4" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">Mukesh Kanna</h3>
                <p className="text-lg text-muted-foreground">Production Manager</p>
                <p className="text-muted-foreground">Communicating with clients, managing deadlines, revisions, organizing the pipeline.</p>
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:mukesh@adflo.in">
                  <Mail className="w-4 h-4" />
                  mukesh@adflo.in
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 5 - ALL EDITABLE */}
      {lightboxOpen === 5 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img src="/lovable-uploads/31767f83-d52d-4716-9be7-50849a304c92.jpg" alt="Team Member 5" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">Bhuvaneshram MR</h3>
                <p className="text-lg text-muted-foreground">Graphic-Design Lead</p>
                <p className="text-muted-foreground">Leading all graphic design initiatives and visual branding.</p>
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:bhuvaneshram@adflo.in">
                  <Mail className="w-4 h-4" />
                  bhuvaneshram@adflo.in
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 6 - ALL EDITABLE */}
      {lightboxOpen === 6 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img src="/lovable-uploads/070cf02d-90f1-4219-97d8-adbb43eaf3ce.jpg" alt="Team Member 6" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">Ashiel JR</h3>
                <p className="text-lg text-muted-foreground">Content Strategist</p>
                <p className="text-muted-foreground">Developing content strategy and creative direction for all projects.</p>
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:ashiel@adflo.in">
                  <Mail className="w-4 h-4" />
                  ashiel@adflo.in
                </a>
              </div>
            </div>
          </div>
        </div>}
    </section>;
};
export default Team;