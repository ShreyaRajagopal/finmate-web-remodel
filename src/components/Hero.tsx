
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatCard from "./StatCard";

const Hero = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block bg-blue-900 bg-opacity-30 rounded-full px-4 py-1">
            <span className="flex items-center text-finmate-blue">
              <span className="bg-finmate-blue rounded-full w-2 h-2 mr-2"></span>
              WELCOME
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            All you need <span className="text-finmate-blue">to deal</span> with your <span className="text-finmate-blue">finances in one place</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-xl">
            Take control of your financial journey with intuitive tools and personalized insights designed to help you achieve your financial goals.
          </p>
          
          <div className="pt-6">
            <Link to="/services">
              <Button className="bg-finmate-blue hover:bg-finmate-lightblue text-white px-8 py-6 text-lg">
                Discover Platform
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard 
            title="Total Revenue" 
            value="$15,231.89"
            change="20.1%" 
            isPositive={true}
          >
            <div className="h-24">
              <svg viewBox="0 0 200 100" className="text-finmate-blue">
                <path
                  d="M0,50 C20,30 40,60 60,40 C80,20 100,40 120,30 C140,20 160,40 180,30 C200,20 220,40 240,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="60" cy="40" r="4" fill="currentColor" />
                <circle cx="120" cy="30" r="4" fill="currentColor" />
                <circle cx="180" cy="30" r="4" fill="currentColor" />
              </svg>
            </div>
            <div className="flex justify-between text-gray-400 text-sm mt-2">
              <span>Feb</span>
              <span>Apr</span>
              <span>Jun</span>
              <span>Aug</span>
            </div>
          </StatCard>
          
          <StatCard 
            title="Subscriptions" 
            value="+2350"
            change="180.1%" 
            isPositive={true}
          >
            <div className="h-24 flex items-end space-x-2">
              <div className="bg-finmate-blue bg-opacity-50 h-12 w-full rounded-sm"></div>
              <div className="bg-finmate-blue bg-opacity-50 h-16 w-full rounded-sm"></div>
              <div className="bg-finmate-blue bg-opacity-50 h-10 w-full rounded-sm"></div>
              <div className="bg-finmate-blue bg-opacity-50 h-14 w-full rounded-sm"></div>
              <div className="bg-finmate-blue bg-opacity-50 h-8 w-full rounded-sm"></div>
              <div className="bg-finmate-blue bg-opacity-50 h-12 w-full rounded-sm"></div>
              <div className="bg-finmate-blue bg-opacity-50 h-20 w-full rounded-sm"></div>
            </div>
            <div className="flex justify-between text-gray-400 text-sm mt-2">
              <span>Feb</span>
              <span>Apr</span>
              <span>Jun</span>
              <span>Aug</span>
            </div>
          </StatCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;
