
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SavingsContributionChart } from "@/components/SavingsContributionChart";

const CashStashStats = () => {
  const [savingsAmount, setSavingsAmount] = useState<string>("");
  const [contributions, setContributions] = useState<{[key: string]: number}>(generateRandomContributions());

  const handleAddContribution = () => {
    if (!savingsAmount || isNaN(Number(savingsAmount))) return;
    
    // Get today's date in format "YYYY-MM-DD"
    const today = new Date().toISOString().split('T')[0];
    
    // Add or update contribution for today
    setContributions(prev => ({
      ...prev,
      [today]: Number(savingsAmount)
    }));
    
    // Clear input
    setSavingsAmount("");
  };

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

      {/* Cash Stash Stats Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="mb-12">
          <Link to="/services" className="text-blue-400 hover:underline mb-4 inline-flex items-center">
            ← Back to Services
          </Link>
          <h1 className="text-4xl font-bold mt-4">Cash Stash Stats</h1>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Track your saving habits over time with our contribution chart. Add your daily savings
            to see how your habits stack up over the months.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-[#11193f] p-6 rounded-xl mb-8 max-w-md">
          <h3 className="text-xl font-medium mb-4">Add Today's Savings</h3>
          <div className="flex gap-4">
            <Input
              type="number"
              value={savingsAmount}
              onChange={(e) => setSavingsAmount(e.target.value)}
              placeholder="Enter amount"
              className="bg-[#0a1129] border-gray-700 text-white"
            />
            <Button 
              onClick={handleAddContribution} 
              className="bg-blue-500 hover:bg-blue-600"
            >
              Add
            </Button>
          </div>
        </div>

        {/* Contribution Chart */}
        <div className="bg-[#11193f] p-6 rounded-xl">
          <h3 className="text-xl font-medium mb-6">Your Savings This Year</h3>
          <SavingsContributionChart contributions={contributions} />
        </div>
      </div>
    </div>
  );
};

// Helper function to generate random contributions for demo
function generateRandomContributions() {
  const contributions: {[key: string]: number} = {};
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // Generate some random data for the past year
  for (let i = 0; i < 40; i++) {
    const randomDay = new Date(
      currentYear,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    );
    
    const dateKey = randomDay.toISOString().split('T')[0];
    const amount = Math.floor(Math.random() * 100) + 5; // Random amount between 5 and 105
    
    contributions[dateKey] = amount;
  }
  
  return contributions;
}

export default CashStashStats;
