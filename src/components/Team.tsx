import { Mail } from "lucide-react";
import { useState } from "react";
import geometricShape2 from "@/assets/geometric-shape-2.png";
const Team = () => {
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null);
  return <section id="team" className="relative py-32 px-6 overflow-visible">
      {/* Geometric shape - Editable */}
      <img src={geometricShape2} alt="" className="geometric-shape top-32 right-[10%] w-96 h-96 opacity-[0.04] blur-3xl" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
          <p className="text-xl text-muted-foreground">
            Six creators building stories together
          </p>
        </div>

        {/* 6 Static Team Cards - 3 per row on desktop - All Individually Editable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 max-w-7xl mx-auto">
          
          {/* Team Member 1 - Arin Sharma - ALL EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(1)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              {/* EDITABLE: Upload team member photo */}
              <img alt="Arin Sharma" className="w-full h-full object-cover" src="/lovable-uploads/26493cc3-4292-4b24-b1a6-c6ab42152007.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* EDITABLE: Team member name */}
              <p className="font-semibold text-lg">​Yashwanth  </p>
              {/* EDITABLE: Team member role */}
              <p className="text-sm text-muted-foreground mb-3">​Creative Director </p>
              {/* EDITABLE: Email link - change href to update email */}
              <a href="mailto:arin@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 2 - Mira Patel - ALL EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(2)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              {/* EDITABLE: Upload team member photo */}
              <img alt="Mira Patel" className="w-full h-full object-cover" src="/lovable-uploads/1c96f0e7-3a79-4508-9e1d-445106a5fa46.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* EDITABLE: Team member name */}
              <p className="font-semibold text-lg">​Aadarsh Krishna </p>
              {/* EDITABLE: Team member role */}
              <p className="text-sm text-muted-foreground mb-3">Post-Production Lead</p>
              {/* EDITABLE: Email link - change href to update email */}
              <a href="mailto:mira@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 3 - Dev Rao - ALL EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(3)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              {/* EDITABLE: Upload team member photo */}
              <img alt="Dev Rao" className="w-full h-full object-cover" src="/lovable-uploads/681cd3e4-6b8b-44db-93d8-c68adaa90f1a.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* EDITABLE: Team member name */}
              <p className="font-semibold text-lg">​Rahul Sabaris </p>
              {/* EDITABLE: Team member role */}
              <p className="text-sm text-muted-foreground mb-3">​Video-Editing Lead   </p>
              {/* EDITABLE: Email link - change href to update email */}
              <a href="mailto:dev@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 4 - Isha Kapoor - ALL EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(4)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              {/* EDITABLE: Upload team member photo */}
              <img alt="Isha Kapoor" className="w-full h-full object-cover" src="/lovable-uploads/a847dff4-8af3-4e81-9ee8-893e3712bcd0.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* EDITABLE: Team member name */}
              <p className="font-semibold text-lg">​Mukesh Kanna </p>
              {/* EDITABLE: Team member role */}
              <p className="text-sm text-muted-foreground mb-3">Production Manager​</p>
              {/* EDITABLE: Email link - change href to update email */}
              <a href="mailto:isha@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 5 - Karan Mehta - ALL EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(5)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              {/* EDITABLE: Upload team member photo */}
              <img alt="Karan Mehta" className="w-full h-full object-cover" src="/lovable-uploads/31767f83-d52d-4716-9be7-50849a304c92.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* EDITABLE: Team member name */}
              <p className="font-semibold text-lg">​Bhuvaneshram MR </p>
              {/* EDITABLE: Team member role */}
              <p className="text-sm text-muted-foreground mb-3">​Graphic-Design Lead   </p>
              {/* EDITABLE: Email link - change href to update email */}
              <a href="mailto:karan@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 6 - Riya Singh - ALL EDITABLE */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => setLightboxOpen(6)}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              {/* EDITABLE: Upload team member photo */}
              <img alt="Riya Singh" className="w-full h-full object-cover" src="/lovable-uploads/070cf02d-90f1-4219-97d8-adbb43eaf3ce.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* EDITABLE: Team member name */}
              <p className="font-semibold text-lg">​Ashiel JR </p>
              {/* EDITABLE: Team member role */}
              <p className="text-sm text-muted-foreground mb-3">Content Strategist</p>
              {/* EDITABLE: Email link - change href to update email */}
              <a href="mailto:riya@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal 1 - Arin Sharma - ALL EDITABLE */}
      {lightboxOpen === 1 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* EDITABLE: Upload photo for lightbox */}
              <img src="/lovable-uploads/26493cc3-4292-4b24-b1a6-c6ab42152007.jpg" alt="Arin Sharma" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* EDITABLE: Name */}
                <h3 className="text-3xl font-bold">​Yashwanth </h3>
                {/* EDITABLE: Role */}
                <p className="text-lg text-muted-foreground">Creative Director</p>
                {/* EDITABLE: Bio */}
                <p className="text-muted-foreground">​Deciding the visual direction, overall style, and project tone.</p>
                {/* EDITABLE: Email link */}
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:wanth404@gmail.com">
                  <Mail className="w-4 h-4" />
                  ​wanth404@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 2 - Mira Patel - ALL EDITABLE */}
      {lightboxOpen === 2 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* EDITABLE: Upload photo for lightbox */}
              <img src="/lovable-uploads/1c96f0e7-3a79-4508-9e1d-445106a5fa46.jpg" alt="Mira Patel" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* EDITABLE: Name */}
                <h3 className="text-3xl font-bold">​Aadarsh Krishna </h3>
                {/* EDITABLE: Role */}
                <p className="text-lg text-muted-foreground">Post-Production Lead</p>
                {/* EDITABLE: Bio */}
                <p className="text-muted-foreground">Supervising the entire editing process, ensuring consistency across all outputs.</p>
                {/* EDITABLE: Email link */}
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:aadarshkrishna585@gmail.com">
                  <Mail className="w-4 h-4" />
                  ​aadarshkrishna585@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 3 - Dev Rao - ALL EDITABLE */}
      {lightboxOpen === 3 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* EDITABLE: Upload photo for lightbox */}
              <img src="/lovable-uploads/681cd3e4-6b8b-44db-93d8-c68adaa90f1a.jpg" alt="Dev Rao" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* EDITABLE: Name */}
                <h3 className="text-3xl font-bold">​Rahul Sabaris </h3>
                {/* EDITABLE: Role */}
                <p className="text-lg text-muted-foreground">​Video-Editing Lead   </p>
                {/* EDITABLE: Bio */}
                <p className="text-muted-foreground">Supervising the video editing processes and the outputs. </p>
                {/* EDITABLE: Email link */}
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:rahulsabaris7@gmail.com">
                  <Mail className="w-4 h-4" />
                  ​rahulsabaris7@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 4 - Isha Kapoor - ALL EDITABLE */}
      {lightboxOpen === 4 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* EDITABLE: Upload photo for lightbox */}
              <img src="/lovable-uploads/a847dff4-8af3-4e81-9ee8-893e3712bcd0.jpg" alt="Isha Kapoor" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* EDITABLE: Name */}
                <h3 className="text-3xl font-bold">​Mukesh Kanna  </h3>
                {/* EDITABLE: Role */}
                <p className="text-lg text-muted-foreground">​Production Manager </p>
                {/* EDITABLE: Bio */}
                <p className="text-muted-foreground">Visual identity, thumbnails and brand systems.</p>
                {/* EDITABLE: Email link */}
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" href="mailto:kannamukesh">
                  <Mail className="w-4 h-4" />
                  ​kannamukesh2006@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 5 - Karan Mehta - ALL EDITABLE */}
      {lightboxOpen === 5 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* EDITABLE: Upload photo for lightbox */}
              <img src="/lovable-uploads/31767f83-d52d-4716-9be7-50849a304c92.jpg" alt="Karan Mehta" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* EDITABLE: Name */}
                <h3 className="text-3xl font-bold">Karan Mehta</h3>
                {/* EDITABLE: Role */}
                <p className="text-lg text-muted-foreground">Producer</p>
                {/* EDITABLE: Bio */}
                <p className="text-muted-foreground">Project planning, client comms and fast turnarounds.</p>
                {/* EDITABLE: Email link */}
                <a href="mailto:karan@flyn.example" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  karan@flyn.example
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Lightbox Modal 6 - Riya Singh - ALL EDITABLE */}
      {lightboxOpen === 6 && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(null)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* EDITABLE: Upload photo for lightbox */}
              <img src="/lovable-uploads/070cf02d-90f1-4219-97d8-adbb43eaf3ce.jpg" alt="Riya Singh" className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* EDITABLE: Name */}
                <h3 className="text-3xl font-bold">Riya Singh</h3>
                {/* EDITABLE: Role */}
                <p className="text-lg text-muted-foreground">Content Strategist</p>
                {/* EDITABLE: Bio */}
                <p className="text-muted-foreground">Storytelling frameworks and audience engagement strategies.</p>
                {/* EDITABLE: Email link */}
                <a href="mailto:riya@flyn.example" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  riya@flyn.example
                </a>
              </div>
            </div>
          </div>
        </div>}
    </section>;
};
export default Team;