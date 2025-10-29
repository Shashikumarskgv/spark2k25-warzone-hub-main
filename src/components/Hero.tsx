import { Button } from "@/components/ui/button";
import { Sword, Zap, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBattlefield from "@/assets/hero-battlefield.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBattlefield}
          alt="SPARK 2K25 Battlefield"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-spark-trail"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 mb-8 animate-glow-pulse">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-orbitron font-semibold text-foreground uppercase tracking-wider">
              SV College, Tirupati
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black mb-6 animate-float">
            <span className="text-glow-cyan">SPARK</span>
            <br />
            <span className="text-glow-orange text-primary">2K25</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl font-exo font-light text-muted-foreground mb-4 tracking-wide">
            Where Innovation Meets Adrenaline
          </p>

          {/* Feature Icons */}
          <div className="flex items-center justify-center gap-8 mb-12 text-foreground/80">
            <div className="flex items-center gap-2">
              <Sword className="w-6 h-6 text-primary" />
              <span className="text-sm font-orbitron">Gaming</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-secondary" />
              <span className="text-sm font-orbitron">Technical</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              <span className="text-sm font-orbitron">Cultural</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              Join the Battle
            </Button>
            <Button
              variant="battle"
              size="xl"
              onClick={() => navigate("/events")}
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default Hero;
