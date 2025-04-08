
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
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

      {/* Hero Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Smart Financial Management For Everyone</h1>
          <p className="text-xl mb-8">
            Take control of your finances with our comprehensive platform. Track expenses, 
            monitor investments, and reach your financial goals faster.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Discover Platform</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
