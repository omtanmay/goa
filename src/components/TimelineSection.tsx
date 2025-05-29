
import { Card, CardContent } from "@/components/ui/card";

const timelineData = [
  {
    day: "Day 0",
    title: "Chaos, Casinos & Card Games",
    emoji: "🎲",
    summary: "The unexpected beginning where everything started with a random message and ended with card games until 3 AM.",
    quote: "Who knew a random DM would lead to this adventure?",
    color: "from-red-500 to-orange-500"
  },
  {
    day: "Day 1", 
    title: "Ice Breakers & Goosebumps",
    emoji: "❄️",
    summary: "First day jitters, awkward introductions, and that moment when you realize you're surrounded by brilliant minds.",
    quote: "The energy in the room was contagious!",
    color: "from-blue-500 to-cyan-500"
  },
  {
    day: "Day 2",
    title: "Startup Talks & Random Questions", 
    emoji: "💡",
    summary: "Mind-blowing sessions, note-taking overdrive, and asking questions that probably made no sense.",
    quote: "Wait, so unicorns aren't actually horses with horns?",
    color: "from-yellow-500 to-orange-500"
  },
  {
    day: "Day 3",
    title: "Goa Time",
    emoji: "🏖️",
    summary: "Beach vibes, team bonding, and realizing that networking doesn't have to be boring.",
    quote: "Best team building ever - sand between toes included!",
    color: "from-teal-500 to-green-500"
  },
  {
    day: "Day 4", 
    title: "Hackathon Havoc",
    emoji: "⚡",
    summary: "24 hours of pure chaos, unlimited coffee, and building something that somehow worked.",
    quote: "Sleep is overrated anyway, right?",
    color: "from-purple-500 to-pink-500"
  },
  {
    day: "Day 5",
    title: "VC Talks & Gala Nights",
    emoji: "🎉",
    summary: "The grand finale with inspiring talks, networking on steroids, and a night to remember.",
    quote: "From random message to life-changing connections!",
    color: "from-indigo-500 to-purple-500"
  }
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Journey Unfolds
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Six days that changed everything. Here's how it all went down, day by day.
          </p>
        </div>

        <div className="space-y-8">
          {timelineData.map((day, index) => (
            <Card 
              key={day.day} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Day badge */}
                  <div className={`bg-gradient-to-r ${day.color} text-white px-6 py-3 rounded-full font-bold text-lg min-w-fit`}>
                    {day.day}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{day.emoji}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {day.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                      {day.summary}
                    </p>
                    
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-300 text-lg">
                      "{day.quote}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
