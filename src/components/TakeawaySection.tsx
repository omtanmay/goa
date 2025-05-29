
import { Card, CardContent } from "@/components/ui/card";

export const TakeawaySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          The Real Takeaway
        </h2>
        
        <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 mb-12">
          <CardContent className="p-12">
            <blockquote className="text-2xl md:text-4xl font-bold text-white leading-relaxed">
              "I joined YEB for fun… and left with vision, clarity, inspiration, and connections."
            </blockquote>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                🧠 What I Learned
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Entrepreneurship isn't just about money</li>
                <li>• Network effect is real and powerful</li>
                <li>• Sometimes the best ideas come at 3 AM</li>
                <li>• Coffee consumption has no limits</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                🚀 What's Next
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Building something meaningful</li>
                <li>• Staying connected with the YEB family</li>
                <li>• Applying everything I learned</li>
                <li>• Maybe attending YEB 2026? 👀</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
