
import { Card, CardContent } from "@/components/ui/card";

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
                  
                  {/* Detailed Story */}
                  <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      {day.details.split('\n\n').map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-sm md:text-base">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
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
