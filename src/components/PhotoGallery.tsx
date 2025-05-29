
import { Card, CardContent } from "@/components/ui/card";

export const PhotoGallery = () => {
  return (
    <section className="py-20 px-6 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Memories Captured
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The moments that made it all worthwhile. (Photos coming soon!)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards for photos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-lg">📸</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Epic Moment #{i}
                </h3>
                <p className="text-gray-400">
                  Another unforgettable memory from YEB 2025
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
