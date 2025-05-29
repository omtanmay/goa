
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { TimelineSection } from "@/components/TimelineSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { TakeawaySection } from "@/components/TakeawaySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            How a Random Message Took Me to BITS Goa
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-300">
            My YEB 2025 Journey 🚀
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
            A student's honest & fun-filled experience at the 7th Young Entrepreneurs Bootcamp
          </p>
          
          <Button 
            onClick={scrollToTimeline}
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Start the Journey
            <ArrowDown className="ml-2 animate-bounce" />
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={32} />
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
