import { Mail, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import geometricShape2 from "@/assets/geometric-shape-2.png";

const Team = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setLightboxOpen(true);
  };

  return (
    <section id="team" className="relative py-32 px-6 overflow-visible">
      {/* Geometric shape - Editable */}
      <img 
        src={geometricShape2}
        alt=""
        className="geometric-shape top-32 right-[10%] w-96 h-96 opacity-[0.04] blur-3xl"
      />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
          <p className="text-xl text-muted-foreground">
            Five creators building stories together
          </p>
        </div>

        {/* 5 Static Team Cards - All Individually Editable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 max-w-7xl mx-auto">
          {/* Team Member 1 - Arin Sharma */}
          <div 
            className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer"
            style={{ minHeight: '380px', borderRadius: '16px' }}
            onClick={() => handleMemberClick({
              name: "Arin Sharma",
              role: "Lead Editor",
              bio: "Final cut specialist; cinematic pacing & grading.",
              email: "arin@flyn.example",
              image: "/placeholder.svg"
            })}
          >
            <div 
              className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden"
              style={{ border: '6px solid rgba(255, 255, 255, 0.08)' }}
            >
              <img 
                src="/placeholder.svg" 
                alt="Arin Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Arin Sharma</p>
              <p className="text-sm text-muted-foreground mb-3">Lead Editor</p>
              <div className="flex gap-3 justify-center">
                <a href="mailto:arin@flyn.example" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 - Mira Patel */}
          <div 
            className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer"
            style={{ minHeight: '380px', borderRadius: '16px' }}
            onClick={() => handleMemberClick({
              name: "Mira Patel",
              role: "Motion/Graphics Lead",
              bio: "Brand motion, titles and clean transitions.",
              email: "mira@flyn.example",
              image: "/placeholder.svg"
            })}
          >
            <div 
              className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden"
              style={{ border: '6px solid rgba(255, 255, 255, 0.08)' }}
            >
              <img 
                src="/placeholder.svg" 
                alt="Mira Patel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Mira Patel</p>
              <p className="text-sm text-muted-foreground mb-3">Motion/Graphics Lead</p>
              <div className="flex gap-3 justify-center">
                <a href="mailto:mira@flyn.example" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 - Dev Rao */}
          <div 
            className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer"
            style={{ minHeight: '380px', borderRadius: '16px' }}
            onClick={() => handleMemberClick({
              name: "Dev Rao",
              role: "Colourist & Sound Designer",
              bio: "Colour grading + audio mix for cinematic deliverables.",
              email: "dev@flyn.example",
              image: "/placeholder.svg"
            })}
          >
            <div 
              className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden"
              style={{ border: '6px solid rgba(255, 255, 255, 0.08)' }}
            >
              <img 
                src="/placeholder.svg" 
                alt="Dev Rao"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Dev Rao</p>
              <p className="text-sm text-muted-foreground mb-3">Colourist & Sound Designer</p>
              <div className="flex gap-3 justify-center">
                <a href="mailto:dev@flyn.example" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 - Isha Kapoor */}
          <div 
            className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer"
            style={{ minHeight: '380px', borderRadius: '16px' }}
            onClick={() => handleMemberClick({
              name: "Isha Kapoor",
              role: "Graphic Designer",
              bio: "Visual identity, thumbnails and brand systems.",
              email: "isha@flyn.example",
              image: "/placeholder.svg"
            })}
          >
            <div 
              className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden"
              style={{ border: '6px solid rgba(255, 255, 255, 0.08)' }}
            >
              <img 
                src="/placeholder.svg" 
                alt="Isha Kapoor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Isha Kapoor</p>
              <p className="text-sm text-muted-foreground mb-3">Graphic Designer</p>
              <div className="flex gap-3 justify-center">
                <a href="mailto:isha@flyn.example" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 5 - Karan Mehta */}
          <div 
            className="glass-card p-7 flex flex-col items-center space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-muted/10 transition-all duration-300 cursor-pointer"
            style={{ minHeight: '380px', borderRadius: '16px' }}
            onClick={() => handleMemberClick({
              name: "Karan Mehta",
              role: "Producer",
              bio: "Project planning, client comms and fast turnarounds.",
              email: "karan@flyn.example",
              image: "/placeholder.svg"
            })}
          >
            <div 
              className="w-[170px] h-[170px] mx-auto rounded-full overflow-hidden"
              style={{ border: '6px solid rgba(255, 255, 255, 0.08)' }}
            >
              <img 
                src="/placeholder.svg" 
                alt="Karan Mehta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="font-semibold text-lg">Karan Mehta</p>
              <p className="text-sm text-muted-foreground mb-3">Producer</p>
              <div className="flex gap-3 justify-center">
                <a href="mailto:karan@flyn.example" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal - Editable */}
      {lightboxOpen && selectedMember && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="glass-card p-10 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img 
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-48 h-48 rounded-full object-cover"
                style={{ border: '8px solid rgba(255, 255, 255, 0.08)' }}
              />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">{selectedMember.name}</h3>
                <p className="text-lg text-muted-foreground">{selectedMember.role}</p>
                <p className="text-muted-foreground">{selectedMember.bio}</p>
                <a 
                  href={`mailto:${selectedMember.email}`}
                  className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {selectedMember.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
