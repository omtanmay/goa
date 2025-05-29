
import { Card, CardContent } from "@/components/ui/card";

const timelineData = [
  {
    day: "Pre-YEB",
    title: "Random Registration & Chaos 📱",
    emoji: "🎲",
    summary: "Got a random YEB link in school group → registered without thinking (don't even remember what I wrote 😭). GD session at IIT Hyderabad went terribly - host kicked me out after saying 'good morning' 💀. Got second chance, missed the info link, realized 10 mins before meeting!",
    details: [
      "📱 Random YEB 7th edition link in school group → instant registration",
      "📝 Wrote essays (memory.exe has stopped working 😭)",
      "🏛️ GD session at IIT Hyd during workshop/hackathon",
      "😭 Host let me in, I said 'good morning', got KICKED OUT immediately",
      "🎉 Plot twist: got message next day for second chance!",
      "⏰ Missed info link, realized 10 mins before meeting (classic me)",
      "🎯 Answered 'Is degree useful for entrepreneur?' - two sides of same coin",
      "📊 Listed successful people with/without degrees",
      "🤔 Didn't see other GD members, thought only I got selected lol",
      "📧 SURPRISE: Email saying 'come to Goa, pay ₹20k'",
      "👨‍💼 Convinced skeptical dad to let me go alone (mission accomplished)"
    ],
    quote: "Host really said 'good morning' and chose violence by kicking me out 😭",
    color: "from-red-500 to-orange-500"
  },
  {
    day: "Day 0",
    title: "Flight, Casinos & Snake Warnings 🐍",
    emoji: "✈️",
    summary: "Parents checking status every 10 mins 😭. Digi Yatra made flight easy, landed 30 mins late. Met 3 mates who'd become legends. Introvert mode activated but eldest bro helped. Casinos EVERYWHERE (Big Daddy casino 💀). BITS Goa welcomed us with SNAKE WARNING BOARD!",
    details: [
      "✈️ Parents status check every 10 mins (would run out of space mentioning all)",
      "📱 Digi Yatra = smooth sailing",
      "🏝️ Landed in Goa 30 mins late",
      "👥 Met 3 other people (oh boy, little did I know what was ahead)",
      "😅 Stood aside being introvert, eldest bro helped me socialize",
      "🎰 CASINOS EVERYWHERE (Big Daddy casino BS 😭)",
      "🚗 Chatted with driver en route to BITS Goa",
      "🐍 First sight: SNAKE WARNING BOARD with list of appearances",
      "🏠 Checked into hostel, met Madhav & Kushagra from car",
      "🐕 Dog started following us, jumping on us (distraction & RUN mode)",
      "🍽️ FOUR HOURS finding C mess with 60 students + 5 PhD students",
      "😭 Found it in girls' hostel area (the ONE place we ignored)",
      "🃏 Kushagra's neighbor: card games! Me: 'Ha satta khelenge na' (let's play cigarettes 😭)",
      "💀 Thought satta/sutta meant cards in Hindi",
      "🌙 Met roommate Sid from Bangalore at midnight"
    ],
    quote: "Snake warning board as welcome message? BITS Goa really said 'survival mode activated' 🐍",
    color: "from-blue-500 to-cyan-500"
  },
  {
    day: "Day 2",
    title: "Ice Breakers & Goosebumps 🔥",
    emoji: "❄️",
    summary: "Woke up early for scenery (found nothing for 2km 😭). Ice breaker in HOTTEST shirt = sweat waterfall. Main mission: CONNECT WITH CEO SPEAKERS! Anirban Roy's unscripted speech gave everyone goosebumps. Met inspiring Amit Sir who makes 100% profit (too dumb to understand how lol).",
    details: [
      "🌅 Early morning scenery hunt - nothing for 2 kilometers 😭",
      "🎮 Went back to play video games, woke Sid up",
      "👕 Wore hottest shirt to ice breaker = shirt completely drenched",
      "🎯 MAIN REASON FOR COMING: Connect with CEO speakers!",
      "🎤 Anirban Roy sir's unscripted speech = instant goosebumps for everyone",
      "👔 Vice Chairman of AICTE dropped wisdom bombs",
      "⭐ Met Amit Sir - most inspiring person & talk of the aunties 😂",
      "💰 Sir shared 100% profit secrets (I'm too dumb to understand lol)",
      "🔬 PCB activity = BEST SESSION of YEB",
      "🌙 Didn't sleep till 4 AM (sleep is overrated anyway)"
    ],
    quote: "Anirban Roy really delivered unscripted goosebumps while I was drowning in shirt sweat 💦",
    color: "from-yellow-500 to-orange-500"
  },
  {
    day: "Day 3",
    title: "Rasgulla Patents & Internship Hunting 💡",
    emoji: "🍬",
    summary: "More classes and speeches, but Amit Sir's energy stole the show! In Shalini Ma'am's class, asked if I could patent rasgulla recipe 🗿. Slid into Farheen Sayed Ma'am's DMs for internship (need that dough for college apps 😋). Pretty sure I got ghosted lol. Mentoring with Abhishek Sir was fire!",
    details: [
      "📚 Day continued with classes and speeches",
      "⚡ Main highlight: Amit Sir's speeches and ENERGY",
      "🍬 Asked Shalini Ma'am about patenting rasgulla recipe 🗿",
      "💼 Asked Farheen Sayed Ma'am for internship (college application dough needed 😋)",
      "👻 Think I got ghosted (internship request status: pending/dead)",
      "👨‍🏫 Mentoring session with Abhishek Sir = pure fun"
    ],
    quote: "Me asking about rasgulla patents while hunting for internships - priorities? What priorities? 🗿",
    color: "from-teal-500 to-green-500"
  },
  {
    day: "Day 4",
    title: "Goa Exploration (Sort Of) 🏖️",
    emoji: "⛪",
    summary: "WE WENT TO GOAAAAA 🗿🗿 Visited Baby Jesus Church and uhh... wait, that's all we did 😢. Speedrun tourism at its finest!",
    details: [
      "🏖️ Finally went to actual Goa (excitement level: maximum)",
      "⛪ Visited Baby Jesus Church",
      "😢 And that's literally all we did",
      "⏰ Goa speedrun completed (world record attempt?)"
    ],
    quote: "Goa trip summary: Baby Jesus Church. That's it. That's the tweet. 😢",
    color: "from-purple-500 to-pink-500"
  },
  {
    day: "Day 5",
    title: "Hackathon Hell & Monster Energy ⚡",
    emoji: "💻",
    summary: "HELL HELL HELL MONSTER MONSTER MONSTER (energy drink) 🔥. Hackathon = GGs 0-10 easy loss. Wasted sleep AND Monster! Had to represent company with 3 products, different systems, different delivery - ALL IN 3 MINUTES! First to pitch when projector setup took 1 MINUTE 😭",
    details: [
      "⚡ MONSTER ENERGY MODE: ACTIVATED",
      "💻 Hackathon difficulty: HELL level",
      "📊 Mission impossible: 3 products, 3 different systems, 3 different delivery methods",
      "⏰ Time limit: 3 MINUTES for everything",
      "😭 Plot twist: First to pitch when projector setup ate 1 minute",
      "🎯 Result: GGs 0-10, easy loss",
      "💸 Casualties: Sleep + Monster energy drink"
    ],
    quote: "3 products in 3 minutes with broken projector? Challenge impossible level unlocked 💀",
    color: "from-red-600 to-orange-600"
  },
  {
    day: "Day 6",
    title: "VC Meetings & Gala Madness 🎉",
    emoji: "💰",
    summary: "Met Shyam Menon Sir (VC legend) - gonna pitch my kickass startup for ₹69 crore funding 🗿. Thinkerbell Labs CEO's stories + personal data collection ideas = new way of thinking unlocked! My favorite color is now chrome white 🗿. Gala dinner dance floor domination after app dev brainstorming!",
    details: [
      "💼 Met Shyam Menon Sir - VC extraordinaire",
      "💰 Master plan: Pitch kickass startup for ₹69 crore funding 🗿",
      "🧠 Thinkerbell Labs CEO = mind blown with stories",
      "📊 Personal data collection discussions = new thinking paradigm",
      "⚪ Character development: Favorite color now chrome white 🗿",
      "📱 App dev brainstorming activity (my favorite part!)",
      "💃 Gala dinner = danced like HELL",
      "✈️ Flew back home with Hyderabad squad"
    ],
    quote: "From ₹69 crore funding dreams to chrome white obsession - what a character arc! 🗿",
    color: "from-indigo-500 to-purple-500"
  }
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Chaotic Journey Unfolds 📖
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From random school group messages to ₹69 crore funding dreams. Here's how it all went down, unfiltered and chaotic! 😭
          </p>
        </div>

        <div className="space-y-12">
          {timelineData.map((day, index) => (
            <Card 
              key={day.day} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col gap-6">
                  {/* Day Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className={`bg-gradient-to-r ${day.color} text-white px-6 py-3 rounded-full font-bold text-lg min-w-fit`}>
                      {day.day}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{day.emoji}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {day.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Summary */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {day.summary}
                  </p>
                  
                  {/* Detailed Timeline */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {day.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-500/10 rounded-r-lg">
                    <p className="italic text-blue-300 text-lg font-medium">"{day.quote}"</p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final Reflection */}
        <Card className="mt-16 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">The Real Plot Twist 🎭</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Started with: Random school group message<br/>
              Ended with: Snake warnings, rasgulla patents, ₹69 crore dreams, chrome white obsession, and lifelong memories
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Character development level: MAXIMUM 🗿✨
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
