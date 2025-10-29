import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Trophy } from "lucide-react";

const Schedule = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Event date - adjust as needed
  const eventDate = new Date("2025-03-15T09:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scheduleData = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      events: [
        { time: "09:00 AM", title: "Opening Ceremony", location: "Main Auditorium" },
        { time: "11:00 AM", title: "BGMI Tournament - Round 1", location: "Gaming Arena" },
        { time: "02:00 PM", title: "Code Combat Begins", location: "Lab Block" },
        { time: "04:00 PM", title: "Dance Auditions", location: "Cultural Stage" },
        { time: "07:00 PM", title: "Welcome Night", location: "Main Ground" },
      ],
    },
    {
      day: "Day 2",
      date: "March 16, 2025",
      events: [
        { time: "09:00 AM", title: "Hackathon Kickoff", location: "Innovation Hub" },
        { time: "11:00 AM", title: "Valorant Championship", location: "Gaming Arena" },
        { time: "02:00 PM", title: "Tech Talk Sessions", location: "Seminar Hall" },
        { time: "05:00 PM", title: "Fashion Show", location: "Main Auditorium" },
        { time: "08:00 PM", title: "Battle of Bands", location: "Open Stage" },
      ],
    },
    {
      day: "Day 3",
      date: "March 17, 2025",
      events: [
        { time: "09:00 AM", title: "Finals - All Events", location: "Various Venues" },
        { time: "02:00 PM", title: "Cultural Grand Finale", location: "Main Stage" },
        { time: "05:00 PM", title: "Prize Distribution", location: "Main Auditorium" },
        { time: "07:00 PM", title: "Closing Ceremony", location: "Main Ground" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-secondary/30 mb-4">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="text-sm font-orbitron font-semibold text-secondary uppercase tracking-wider">
              Event Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Battle <span className="text-primary text-glow-orange">Schedule</span>
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-orbitron font-bold mb-8 text-foreground">
              Event Starts In
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-6 border border-border group-hover:border-primary/50 transition-all duration-300">
                    <div className="text-4xl md:text-6xl font-orbitron font-bold text-primary mb-2">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-exo">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-6xl mx-auto space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="animate-slide-up"
              style={{ animationDelay: `${0.2 + dayIndex * 0.1}s` }}
            >
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-2xl font-orbitron font-bold text-primary">
                    {day.day.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-foreground">
                    {day.day}
                  </h3>
                  <p className="text-muted-foreground font-exo">{day.date}</p>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-4 ml-0 md:ml-24">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="group relative p-6 rounded-lg bg-card/30 border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-3 text-primary">
                        <Clock className="w-5 h-5" />
                        <span className="font-orbitron font-semibold text-lg">
                          {event.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-orbitron font-bold text-foreground mb-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          <span className="font-exo">{event.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <Trophy className="w-5 h-5 text-secondary" />
            <span className="text-sm font-exo text-muted-foreground">
              Schedule subject to change. Stay tuned for updates.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
