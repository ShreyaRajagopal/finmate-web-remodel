
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-finmate-darkblue">
      <div className="container mx-auto px-4">
        <Navbar />
        
        <div className="flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Learn more about the FinMate team and our mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
