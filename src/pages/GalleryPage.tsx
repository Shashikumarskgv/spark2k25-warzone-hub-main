import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Play, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FireParticles from "@/components/FireParticles";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ["All", "Gaming", "Cultural", "Guests", "Winners", "Backstage"];

  // Mock gallery data
  const galleryItems: GalleryItem[] = [
    { id: 1, title: "BGMI Finals", category: "Gaming", image: "", description: "Epic battle royale showdown" },
    { id: 2, title: "Dance Performance", category: "Cultural", image: "", description: "Mesmerizing moves" },
    { id: 3, title: "Chief Guest", category: "Guests", image: "", description: "Industry leader keynote" },
    { id: 4, title: "Winner Moment", category: "Winners", image: "", description: "Victory celebration" },
    { id: 5, title: "Setup Time", category: "Backstage", image: "", description: "Behind the scenes prep" },
    { id: 6, title: "Coding Marathon", category: "Gaming", image: "", description: "Hackathon intensity" },
    { id: 7, title: "Stage Performance", category: "Cultural", image: "", description: "Live concert energy" },
    { id: 8, title: "Tech Talk", category: "Guests", image: "", description: "Innovation insights" },
    { id: 9, title: "Trophy Ceremony", category: "Winners", image: "", description: "Champions crowned" },
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <FireParticles density={40} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzMzMyIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 text-glow-orange">
            SPARK 2K25
          </h1>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-secondary text-glow-cyan">
            GALLERY
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-exo">
            Relive the fire, thrill, and memories
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm uppercase tracking-wider">View Moments</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "hero" : "ghost_glow"}
                onClick={() => setSelectedCategory(category)}
                className="font-orbitron"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/40 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-3xl">📸</span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-glow-orange" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Reels Section */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-glow-cyan">
            Highlight <span className="text-primary">Reels</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative aspect-video rounded-xl overflow-hidden border-2 border-border hover:border-secondary transition-all duration-300 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-card/60 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-secondary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-orbitron font-bold text-foreground">Highlight Reel {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12">
            Behind the <span className="text-secondary text-glow-cyan">Scenes</span>
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex-shrink-0 w-80 aspect-[4/3] rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-card/60 flex items-center justify-center">
                    <div className="text-center p-6">
                      <span className="text-4xl mb-2 block">🎬</span>
                      <p className="text-sm font-orbitron">BTS Moment {item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outro Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-2xl md:text-4xl font-orbitron font-bold mb-8 text-glow-orange animate-glow-pulse">
            "A Celebration of Passion, Power & Play"
          </p>
          <p className="text-xl text-muted-foreground mb-12 font-exo">
            SPARK 2K25 Media Crew 🎥
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={() => navigate("/")}
            className="animate-pulse"
          >
            Return Home
          </Button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border-2 border-primary rounded-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="battle"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-border">
                <span className="text-6xl">📸</span>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-orbitron font-bold mb-4 text-glow-orange">
                  {selectedImage.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Category</span>
                    <p className="text-lg font-orbitron text-secondary">{selectedImage.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Description</span>
                    <p className="text-lg">{selectedImage.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
