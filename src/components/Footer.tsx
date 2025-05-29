
import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <Separator className="mb-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Thanks for reading my YEB journey! 🙏
            </h3>
            <p className="text-gray-400">
              Built with Monster energy and no sleep 😎
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-blue-400" size={24} />
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-500">
            © 2025 YEB Chronicles. Made with ❤️ and lots of caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
};
