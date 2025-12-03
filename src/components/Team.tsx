import { Mail } from "lucide-react";
import { useState } from "react";
import geometricShape2 from "@/assets/geometric-shape-2.png";
const Team = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setLightboxOpen(true);
  };
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
          {/* Team Member 1 - Arin Sharma */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => handleMemberClick({
          name: "Arin Sharma",
          role: "Lead Editor",
          bio: "Final cut specialist; cinematic pacing & grading.",
          email: "arin@flyn.example",
          image: "/placeholder.svg"
        })}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Arin Sharma" className="w-full h-full object-cover" src="/lovable-uploads/26493cc3-4292-4b24-b1a6-c6ab42152007.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Arin Sharma</p>
              <p className="text-sm text-muted-foreground mb-3">Lead Editor</p>
              <a href="mailto:arin@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 2 - Mira Patel */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => handleMemberClick({
          name: "Mira Patel",
          role: "Motion/Graphics Lead",
          bio: "Brand motion, titles and clean transitions.",
          email: "mira@flyn.example",
          image: "/placeholder.svg"
        })}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Mira Patel" className="w-full h-full object-cover" src="/lovable-uploads/1c96f0e7-3a79-4508-9e1d-445106a5fa46.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Mira Patel</p>
              <p className="text-sm text-muted-foreground mb-3">Motion/Graphics Lead</p>
              <a href="mailto:mira@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 3 - Dev Rao */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => handleMemberClick({
          name: "Dev Rao",
          role: "Colourist & Sound Designer",
          bio: "Colour grading + audio mix for cinematic deliverables.",
          email: "dev@flyn.example",
          image: "/placeholder.svg"
        })}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Dev Rao" className="w-full h-full object-cover" src="/lovable-uploads/681cd3e4-6b8b-44db-93d8-c68adaa90f1a.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Dev Rao</p>
              <p className="text-sm text-muted-foreground mb-3">Colourist & Sound Designer</p>
              <a href="mailto:dev@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 4 - Isha Kapoor */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => handleMemberClick({
          name: "Isha Kapoor",
          role: "Graphic Designer",
          bio: "Visual identity, thumbnails and brand systems.",
          email: "isha@flyn.example",
          image: "/placeholder.svg"
        })}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Isha Kapoor" className="w-full h-full object-cover" src="/lovable-uploads/a847dff4-8af3-4e81-9ee8-893e3712bcd0.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Isha Kapoor</p>
              <p className="text-sm text-muted-foreground mb-3">Graphic Designer</p>
              <a href="mailto:isha@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 5 - Karan Mehta */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => handleMemberClick({
          name: "Karan Mehta",
          role: "Producer",
          bio: "Project planning, client comms and fast turnarounds.",
          email: "karan@flyn.example",
          image: "/placeholder.svg"
        })}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Karan Mehta" className="w-full h-full object-cover" src="/lovable-uploads/31767f83-d52d-4716-9be7-50849a304c92.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Karan Mehta</p>
              <p className="text-sm text-muted-foreground mb-3">Producer</p>
              <a href="mailto:karan@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member 6 - Riya Singh */}
          <div className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer" style={{
          minHeight: '380px',
          borderRadius: '16px'
        }} onClick={() => handleMemberClick({
          name: "Riya Singh",
          role: "Content Strategist",
          bio: "Storytelling frameworks and audience engagement strategies.",
          email: "riya@flyn.example",
          image: "/placeholder.svg"
        })}>
            <div className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden" style={{
            border: '6px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img alt="Riya Singh" className="w-full h-full object-cover" src="/lovable-uploads/070cf02d-90f1-4219-97d8-adbb43eaf3ce.jpg" />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Riya Singh</p>
              <p className="text-sm text-muted-foreground mb-3">Content Strategist</p>
              <a href="mailto:riya@flyn.example" className="flex justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => e.stopPropagation()}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal - Editable */}
      {lightboxOpen && selectedMember && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setLightboxOpen(false)}>
          <div className="glass-card p-10 max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setLightboxOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img src={selectedMember.image} alt={selectedMember.name} className="w-48 h-48 rounded-full object-cover" style={{
            border: '8px solid rgba(255, 255, 255, 0.08)'
          }} />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">{selectedMember.name}</h3>
                <p className="text-lg text-muted-foreground">{selectedMember.role}</p>
                <p className="text-muted-foreground">{selectedMember.bio}</p>
                <a href={`mailto:${selectedMember.email}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  {selectedMember.email}
                </a>
              </div>
            </div>
          </div>
        </div>}
    </section>;
};
export default Team;