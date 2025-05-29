
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { TimelineSection } from "@/components/TimelineSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { TakeawaySection } from "@/components/TakeawaySection";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-blue-500/10"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Sparkles className="text-yellow-400 w-12 h-12 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent leading-tight">
              How a Random Message
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Took Me to BITS Goa
            </h2>
            
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
              <span className="text-3xl">🚀</span>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded"></div>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-semibold text-gray-200 leading-relaxed">
              My YEB 2025 Journey
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              A student's honest, chaotic, and fun-filled experience at the 
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text font-semibold"> 7th Young Entrepreneurs Bootcamp</span>
            </p>
            
            <div className="pt-8">
              <Button 
                onClick={scrollToTimeline}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 group"
              >
                Start the Journey
                <ArrowDown className="ml-3 group-hover:animate-bounce transition-transform duration-300" size={24} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="text-gray-400 animate-bounce" size={32} />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Takeaway Section */}
      <TakeawaySection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
