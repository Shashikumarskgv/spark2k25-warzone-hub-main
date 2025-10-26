import { Heart, Zap } from "lucide-react";
import sparkLogo from "@/assets/spark-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden border-t border-border">
      {/* Animated Sparks Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary rounded-full animate-spark-trail"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={sparkLogo} 
                alt="SPARK 2K25" 
                className="h-16 w-16 animate-glow-pulse"
              />
              <div className="text-left">
                <h3 className="text-3xl font-orbitron font-bold">
                  <span className="text-glow-cyan">SPARK</span>{" "}
                  <span className="text-primary">2K25</span>
                </h3>
                <p className="text-sm text-muted-foreground font-exo">
                  SV College, Tirupati
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-lg font-orbitron font-bold">
              <span className="text-foreground">Rise.</span>
              <span className="text-primary">Play.</span>
              <span className="text-secondary">Conquer.</span>
            </div>
          </div>

          {/* Divider with Spark Icon */}
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-exo text-muted-foreground">
            {["About", "Events", "Schedule", "Gallery", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  document
                    .getElementById(link.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-primary transition-colors duration-300"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/50 w-full">
            <p className="text-sm text-muted-foreground font-exo flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} SPARK 2K25. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> by SV College
              </span>
            </p>
          </div>

          {/* Tech Stack Badge */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border text-xs font-exo text-muted-foreground">
              <Zap className="w-3 h-3 text-secondary" />
              <span>Powered by Innovation & Adrenaline</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
