import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const timelineData = [
  {
    day: "Pre-YEB",
    title: "Random Registration & Chaos 📱",
    emoji: "🎲",
    summary: "Got a random YEB link in school group → registered without thinking (don't even remember what I wrote 😭). GD session at IIT Hyderabad went terribly - host kicked me out after saying 'good morning' 💀. Got second chance, missed the info link, realized 10 mins before meeting!",
    details: `I randomly got a message in my school group which had a link for YEB 7th edition so I thought what's the harm and registered and gave my essays (I don't even remember what I wrote 😭😭).

    So then it was the group discussion session and I was in IIT Hyd when it was happening for a workshop/hackathon so I went out in the middle of the class and I tried to join but the damn host let me in for a second, I said good morning and he kicked me 😭 and then I thought it's over but the next day I received a message telling me that I can go for it again so I thought yey!

    I totally missed the link where they said give your info when you will attend 😭 so I realized that link 10 minutes before the meeting so I kept the details and went in and answered to the question "is a degree useful for an entrepreneur" - I told it's 2 sides of the same coin and listed successful people who had and didn't have a degree.

    I didn't actually see my other GD members so I guess only I was selected haha, so then I was like yeah maybe I didn't get selected. After a while I got an email telling me come Goa pay 20k. I told my dad who was skeptical at first to send me alone but I made him agree to me lol.`,
    quote: "Host really said 'good morning' and chose violence by kicking me out 😭",
    color: "from-red-500 to-orange-500"
  },
  {
    day: "Day 0",
    title: "Flight, Casinos & Snake Warnings 🐍",
    emoji: "✈️",
    summary: "Parents checking status every 10 mins 😭. Digi Yatra made flight easy, landed 30 mins late. Met 3 mates who'd become legends. Introvert mode activated but eldest bro helped. Casinos EVERYWHERE (Big Daddy casino 💀). BITS Goa welcomed us with SNAKE WARNING BOARD!",
    details: `I got on the flight (every 10 minutes my mom and dad would ask status - I won't mention that because I would run out of space) 😭 So then I got on the plane easily with Digi Yatra and landed in Goa with a 30-minute delay and there the guy told me to wait with 3 other people (oh boy only if I knew what was ahead with those 3 mates).

    So then I stood a bit to the side because I am an introvert and didn't want to socialize 😭 but the eldest bro there helped me and then everywhere I looked I saw casinos 😭😭 (BIG DADDY casino bs 😭) and we chatted with the driver and reached BITS Goa and the first thing we see is a board with the list of snakes which have appeared and BE CAREFUL 😭.

    So we went in and checked in the hostel so I met the 2 people which I came with in the car - Madhav and Kushagra and we went searching for the ground and on the way we got a DOG following us and would run and jump on us as well 😭 so we distracted it and ran as fast as we could 🗿.

    And then we spent FOUR HOURS finding the C mess which was who knows where and there were 60 students searching for that mess 😭 excluding the 5 PhD students 😭 and it was literally in the one place we ignored because it was inside a girls' hostel area AND IT WAS INSIDE THERE BECAUSE IT IS ACTUALLY A GIRLS' HOSTEL I GUESS 😭.

    So then I ate and it was raining hard so the neighbor of Kushagra was like come let's play cards so my Hindi being so good I said "ha satta khelenge na" (let's play cigarettes 😭) I thought satta/sutta is cards in Hindi lol so then bro taught us cards and we went to our rooms and while we did all this everyone was frantically searching for their roommates for who knows what reason but I was chill and met the guy Sid at like 12 so I got to know he is from Bangalore so we slept.`,
    quote: "Snake warning board as welcome message? BITS Goa really said 'survival mode activated' 🐍",
    color: "from-blue-500 to-cyan-500"
  },
  {
    day: "Day 2",
    title: "Ice Breakers & Goosebumps 🔥",
    emoji: "❄️",
    summary: "Woke up early for scenery (found nothing for 2km 😭). Ice breaker in HOTTEST shirt = sweat waterfall. Main mission: CONNECT WITH CEO SPEAKERS! Anirban Roy's unscripted speech gave everyone goosebumps. Met inspiring Amit Sir who makes 100% profit (too dumb to understand how lol).",
    details: `I woke up early so I could watch the scenery but there was nothing until like 2 kilometers 😭 so I went back and played video games and woke Sid up and we went to the "ice breaker" where I wore the hottest shirt and my whole shirt was drenched at the end 😭.

    And the only reason I came is to connect with the CEOs who gave the talks lol (this was my main mission) then we went to the room where my goodness Anirban Roy sir gave a speech without a script and gave everyone in the room goosebumps.

    Then we heard talks from vice chairman of AICTE and continued to other halls and listened to classes and met Amit sir one of the most inspiring person I met and the talk of the aunties 😂. And I don't know but sir gave us insight on how sir makes 100% profit from his competitors but I am too dumb to understand lol.

    And we ended the day with an activity with PCBs and best session of YEB and we didn't sleep till 4 AM :)`,
    quote: "Anirban Roy really delivered unscripted goosebumps while I was drowning in shirt sweat 💦",
    color: "from-yellow-500 to-orange-500"
  },
  {
    day: "Day 3",
    title: "Rasgulla Patents & Internship Hunting 💡",
    emoji: "🍬",
    summary: "More classes and speeches, but Amit Sir's energy stole the show! In Shalini Ma'am's class, asked if I could patent rasgulla recipe 🗿. Slid into Farheen Sayed Ma'am's DMs for internship (need that dough for college apps 😋). Pretty sure I got ghosted lol. Mentoring with Abhishek Sir was fire!",
    details: `The day continued with classes, speeches and all but the main highlight? Amit sir's speeches and his energy! In Shalini ma'am's class I asked if I could patent rasgulla recipe 🗿.

    And then I asked Farheen Sayed ma'am for an internship because I need that dough for my college application am I right 😋😋 (I think I have been ghosted lol). Mentoring session was fun with Abhishek sir!`,
    quote: "Me asking about rasgulla patents while hunting for internships - priorities? What priorities? 🗿",
    color: "from-teal-500 to-green-500"
  },
  {
    day: "Day 4",
    title: "Goa Exploration (Sort Of) 🏖️",
    emoji: "⛪",
    summary: "WE WENT TO GOAAAAA 🗿🗿 Visited Baby Jesus Church and uhh... wait, that's all we did 😢. Speedrun tourism at its finest!",
    details: `WE WENT TO GOAAAAA 🗿🗿 We went to Baby Jesus and uhh wait... that's all we did 😢

    Honestly, it felt like the shortest Goa experience ever. We barely scratched the surface of what this beautiful place has to offer, but hey, at least we can say we went to Goa!`,
    quote: "Goa trip summary: Baby Jesus Church. That's it. That's the tweet. 😢",
    color: "from-purple-500 to-pink-500"
  },
  {
    day: "Day 5",
    title: "Hackathon Hell & Monster Energy ⚡",
    emoji: "💻",
    summary: "HELL HELL HELL MONSTER MONSTER MONSTER (energy drink) 🔥. Hackathon = GGs 0-10 easy loss. Wasted sleep AND Monster! Had to represent company with 3 products, different systems, different delivery - ALL IN 3 MINUTES! First to pitch when projector setup took 1 MINUTE 😭",
    details: `HELL HELL HELL MONSTER MONSTER MONSTER (energy drink) 🔥 Hackathon GGs 0-10 easy loss wasted my sleep and Monster...

    Imagine representing your company with 3 products with each having different system and customer delivery system IN THREEEEE MINUTES AND YOU'RE THE FIRST PERSON TO PITCH WHERE THE PROJECTOR SETUP TAKES 1 MINUTE...

    It was absolutely chaotic and I felt completely unprepared, but somehow we managed to get through it. The whole experience was a blur of caffeine, panic, and rapid-fire presentations.`,
    quote: "3 products in 3 minutes with broken projector? Challenge impossible level unlocked 💀",
    color: "from-red-600 to-orange-600"
  },
  {
    day: "Day 6",
    title: "VC Meetings & Gala Madness 🎉",
    emoji: "💰",
    summary: "Met Shyam Menon Sir (VC legend) - gonna pitch my kickass startup for ₹69 crore funding 🗿. Thinkerbell Labs CEO's stories + personal data collection ideas = new way of thinking unlocked! My favorite color is now chrome white 🗿. Gala dinner dance floor domination after app dev brainstorming!",
    details: `We met Shyam Menon sir a VC (gonna pitch my kickass startup to you sir be careful my funding req?? it's 69 crore 🗿) and the CEO of Thinkerbell Labs where sir's stories and the idea of personal data collection gave way to my new way of thinking (now my favorite color is chrome white 🗿).

    We danced like hell in the gala dinner right after brainstorming at the app dev activity (my fav parts :)) and I went back home with some friends who are from Hyd as well.

    The whole experience ended on such a high note - from meaningful conversations about entrepreneurship to letting loose on the dance floor. It felt like the perfect culmination of everything we'd learned and experienced over the past few days.`,
    quote: "From ₹69 crore funding dreams to chrome white obsession - what a character arc! 🗿",
    color: "from-indigo-500 to-purple-500"
  }
];

const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-scroll-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};

export const TimelineSection = () => {
  const visibleElements = useScrollAnimation();

  return (
    <section id="timeline" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            The Journey Unfolds
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From random school group messages to ₹69 crore funding dreams. Here's how it all went down, 
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text font-semibold"> unfiltered and chaotic!</span>
          </p>
        </div>

        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 opacity-30 h-full hidden lg:block"></div>

        <div className="space-y-20">
          {timelineData.map((day, index) => (
            <div
              key={day.day}
              data-scroll-animate
              data-index={index}
              className={`transition-all duration-1000 transform ${
                visibleElements.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group ${
                index % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col gap-8">
                    {/* Day Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className={`bg-gradient-to-r ${day.color} text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                        {day.day}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-5xl animate-bounce">{day.emoji}</span>
                          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            {day.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Summary */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
                      <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
                        {day.summary}
                      </p>
                    </div>
                    
                    {/* Detailed Story */}
                    <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                      <div className="text-gray-300 leading-relaxed space-y-6">
                        {day.details.split('\n\n').map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex} className="text-base md:text-lg leading-loose">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="relative border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-8 py-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-r-2xl">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                      <p className="italic text-blue-300 text-xl md:text-2xl font-medium leading-relaxed">
                        "{day.quote}"
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Final Reflection */}
        <div
          data-scroll-animate
          data-index={timelineData.length}
          className={`mt-24 transition-all duration-1000 transform ${
            visibleElements.has(timelineData.length) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <Card className="bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-teal-900/80 border-purple-500/30 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
            <CardContent className="p-12 md:p-16 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                The Real Plot Twist 🎭
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-4xl mx-auto">
                Started with: Random school group message<br/>
                <span className="text-yellow-400 font-semibold">Ended with:</span> Snake warnings, rasgulla patents, ₹69 crore dreams, chrome white obsession, and lifelong memories
              </p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
                Character development level: MAXIMUM 🗿✨
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
