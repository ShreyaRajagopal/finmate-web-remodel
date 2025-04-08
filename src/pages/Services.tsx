
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FinMate</h1>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/services">Services</Link>
            </Button>
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Cash Stash Stats</h3>
            <p>Track and analyze your cash flow with detailed statistics and visualizations.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Money Moves</h3>
            <p>Monitor your investments and financial activities with real-time updates.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Financial Advice</h3>
            <p>Get personalized recommendations to help you achieve your financial goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
