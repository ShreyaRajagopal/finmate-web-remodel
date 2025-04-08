
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#0a1129] text-white">
      {/* Navbar */}
      <nav className="py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <h1 className="text-2xl font-bold">FinMate</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/services" className="hover:text-blue-400">Services</Link>
            <Link to="#" className="hover:text-blue-400">How it works</Link>
            <Link to="#" className="hover:text-blue-400">About us</Link>
            <Link to="#" className="hover:text-blue-400">Contact</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white">Login</Button>
            <Button className="bg-blue-500 hover:bg-blue-600">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <div className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#11193f] p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Cash Stash Stats</h3>
            <p className="text-gray-300">Track and analyze your cash flow with detailed statistics and visualizations.</p>
          </div>
          <div className="bg-[#11193f] p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Money Moves</h3>
            <p className="text-gray-300">Monitor your investments and financial activities with real-time updates.</p>
          </div>
          <div className="bg-[#11193f] p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Financial Advice</h3>
            <p className="text-gray-300">Get personalized recommendations to help you achieve your financial goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
