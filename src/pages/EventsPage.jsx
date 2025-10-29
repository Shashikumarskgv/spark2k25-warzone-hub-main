import { useState } from "react";
import { Search, X, Trophy, Users, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = ["All", "Technical", "Cultural", "Sports", "Workshop"];

  const events = [
    {
      id: 1,
      name: "BGMI Championship",
      code: "GAME001",
      category: "Sports",
      date: "March 15, 2025",
      fee: "₹500 per team",
      image: "/placeholder.svg",
      prizes: "1st Prize: ₹50,000 | 2nd Prize: ₹30,000 | 3rd Prize: ₹20,000",
      type: "Team (4 players)",
      rules: [
        "Maximum 4 players per team",
        "TPP mode only",
        "Custom room matches",
        "Final round will be streamed live",
        "Any use of hacks/cheats will lead to immediate disqualification"
      ]
    },
    {
      id: 2,
      name: "Code Combat",
      code: "TECH001",
      category: "Technical",
      date: "March 16, 2025",
      fee: "₹200 per person",
      image: "/placeholder.svg",
      prizes: "1st Prize: ₹25,000 | 2nd Prize: ₹15,000 | 3rd Prize: ₹10,000",
      type: "Individual",
      rules: [
        "Duration: 3 hours",
        "Use any programming language",
        "Internet access will be monitored",
        "Original code only - plagiarism will be checked",
        "Debugging tools allowed"
      ]
    },
    {
      id: 3,
      name: "Battle of Bands",
      code: "CULT001",
      category: "Cultural",
      date: "March 17, 2025",
      fee: "₹1000 per band",
      image: "/placeholder.svg",
      prizes: "1st Prize: ₹40,000 | 2nd Prize: ₹25,000 | 3rd Prize: ₹15,000",
      type: "Team (4-6 members)",
      rules: [
        "Band size: 4 to 6 members",
        "Performance time: 15 minutes maximum",
        "Original compositions preferred",
        "Basic sound system will be provided",
        "Bring your own instruments"
      ]
    },
    {
      id: 4,
      name: "AI Workshop",
      code: "WORK001",
      category: "Workshop",
      date: "March 14, 2025",
      fee: "₹300 per person",
      image: "/placeholder.svg",
      prizes: "Certificate of Participation",
      type: "Individual",
      rules: [
        "Bring your own laptop",
        "Basic Python knowledge required",
        "Duration: 4 hours",
        "Hands-on projects included",
        "Free course materials provided"
      ]
    },
    {
      id: 5,
      name: "Valorant Strike",
      code: "GAME002",
      category: "Sports",
      date: "March 15, 2025",
      fee: "₹600 per team",
      image: "/placeholder.svg",
      prizes: "1st Prize: ₹45,000 | 2nd Prize: ₹25,000 | 3rd Prize: ₹15,000",
      type: "Team (5 players)",
      rules: [
        "5 players per team",
        "Standard competitive rules",
        "Best of 3 format for finals",
        "All agents allowed",
        "Server: Mumbai"
      ]
    },
    {
      id: 6,
      name: "Dance Floor",
      code: "CULT002",
      category: "Cultural",
      date: "March 17, 2025",
      fee: "₹400 per group",
      image: "/placeholder.svg",
      prizes: "1st Prize: ₹30,000 | 2nd Prize: ₹20,000 | 3rd Prize: ₹10,000",
      type: "Team (5-10 members)",
      rules: [
        "Group size: 5 to 10 members",
        "Performance time: 8 minutes",
        "Any dance style allowed",
        "Props allowed",
        "Music to be submitted 2 days prior"
      ]
    },
    {
      id: 7,
      name: "Web Warriors",
      code: "TECH002",
      category: "Technical",
      date: "March 16, 2025",
      fee: "₹300 per team",
      image: "/placeholder.svg",
      prizes: "1st Prize: ₹20,000 | 2nd Prize: ₹12,000 | 3rd Prize: ₹8,000",
      type: "Team (2 members)",
      rules: [
        "Build a functional web application",
        "Duration: 6 hours",
        "Use any framework or library",
        "Responsive design mandatory",
        "Judged on creativity and functionality"
      ]
    },
    {
      id: 8,
      name: "Hackathon",
      code: "WORK002",
      category: "Workshop",
      date: "March 14-15, 2025",
      fee: "₹500 per team",
      image: "/placeholder.svg",
      prizes: "1st Prize: ₹60,000 | 2nd Prize: ₹40,000 | 3rd Prize: ₹20,000",
      type: "Team (3-4 members)",
      rules: [
        "24-hour coding marathon",
        "Build a working prototype",
        "Theme announced at start",
        "Mentors available throughout",
        "Final presentation: 5 minutes"
      ]
    }
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeCategory === "All" || event.category === activeCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <SparkEffect />
      
      {/* Falling Stars Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-[fall_${8 + Math.random() * 4}s_linear_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.6,
              boxShadow: "0 0 4px hsl(var(--primary))"
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Title */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4">
              <span className="text-primary">Event</span>{" "}
              <span className="text-foreground">Arena</span>
            </h1>
            <p className="text-lg text-muted-foreground font-exo">
              Choose your battleground. Register now and claim victory.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`font-orbitron transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary/20 border-primary text-primary shadow-lg shadow-primary/20"
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for your favorite event…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card/50 backdrop-blur-sm border-primary/30 focus:border-primary rounded-xl font-exo text-lg"
              />
            </div>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                  {/* Event Poster */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <span className="text-xs font-orbitron font-semibold text-primary">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.name}
                    </h3>

                    <div className="space-y-2 text-sm font-exo">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>{event.fee}</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      onClick={() => setSelectedEvent(event)}
                      className="w-full bg-transparent border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-orbitron transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>

                  {/* Corner Glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground font-exo">
                No events found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Event Details Popup Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedEvent(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-primary/30 max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-primary/20 animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:rotate-90"
            >
              <X className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Event Details */}
              <div className="p-8 md:p-10 space-y-6 overflow-y-auto max-h-[90vh]">
                <div>
                  <h2 className="text-4xl font-orbitron font-bold text-primary mb-2">
                    {selectedEvent.name}
                  </h2>
                  <p className="text-sm text-muted-foreground font-exo">
                    Event Code: <span className="text-secondary">{selectedEvent.code}</span>
                  </p>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm font-orbitron font-semibold text-primary">
                    {selectedEvent.category}
                  </span>
                </div>

                {/* Event Info Grid */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-exo">Date</p>
                      <p className="text-lg font-orbitron font-semibold">{selectedEvent.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-exo">Entry Fee</p>
                      <p className="text-lg font-orbitron font-semibold">{selectedEvent.fee}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-exo">Participation Type</p>
                      <p className="text-lg font-orbitron font-semibold">{selectedEvent.type}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground font-exo">Prizes</p>
                      <p className="text-base font-exo font-semibold text-secondary">
                        {selectedEvent.prizes}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rules Section */}
                <div className="pt-4">
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground">
                    Rules & Guidelines
                  </h3>
                  <ul className="space-y-2">
                    {selectedEvent.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground font-exo">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Register Button */}
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron text-lg shadow-lg shadow-primary/20">
                  Register Now
                </Button>
              </div>

              {/* Right Side - Event Poster */}
              <div className="relative h-full min-h-[400px] md:min-h-0 bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EventsPage;
