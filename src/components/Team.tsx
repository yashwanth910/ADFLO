const Team = () => {
  const teamMembers = [
    { name: "Team Member 1", role: "Creative Director", image: "/placeholder.svg" },
    { name: "Team Member 2", role: "Video Editor", image: "/placeholder.svg" },
    { name: "Team Member 3", role: "Graphic Designer", image: "/placeholder.svg" },
    { name: "Team Member 4", role: "Motion Graphics", image: "/placeholder.svg" },
    { name: "Team Member 5", role: "Producer", image: "/placeholder.svg" },
  ];

  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
          <p className="text-xl text-muted-foreground">
            Five creators building stories together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="glass-card p-6 text-center space-y-4 hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 mx-auto rounded-full bg-muted/20 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
