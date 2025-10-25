import { Target, Users, Rocket, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "Empowering students through innovation, technology, and competitive gaming excellence.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Bringing together 1000+ students from across the region for an unforgettable experience.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Showcasing cutting-edge tech projects, gaming tournaments, and cultural performances.",
    },
    {
      icon: Zap,
      title: "Energy",
      description: "High-octane competitions, adrenaline-pumping challenges, and electrifying entertainment.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/30 mb-4">
            <span className="text-sm font-orbitron font-semibold text-primary uppercase tracking-wider">
              About SPARK 2K25
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-glow-cyan">Rise.</span>{" "}
            <span className="text-primary text-glow-orange">Play.</span>{" "}
            <span className="text-glow-cyan">Conquer.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            SPARK 2K25 is SV College's flagship annual event that blends gaming, technology, 
            and culture into an explosive three-day experience. Join us for epic battles, 
            innovative showcases, and memories that last a lifetime.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--fire-orange)/0.3)] animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-exo">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1000+", label: "Participants" },
            { value: "50+", label: "Events" },
            { value: "₹5L+", label: "Prize Pool" },
            { value: "3", label: "Days of Action" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card/30 border border-border animate-slide-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-exo">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
