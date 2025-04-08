
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-finmate-darkblue">
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
      </div>
      
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4 opacity-20 p-4">
            <div className="flex flex-col space-y-1">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
