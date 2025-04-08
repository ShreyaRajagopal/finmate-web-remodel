
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ArrowRight } from "lucide-react";

const lineData = [
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 4200 },
  { month: 'Apr', value: 3800 },
  { month: 'May', value: 3600 },
  { month: 'Jun', value: 3900 },
  { month: 'Jul', value: 3700 },
  { month: 'Aug', value: 5200 }
];

const barData = [
  { month: 'Feb', value: 4500 },
  { month: 'Mar', value: 5200 },
  { month: 'Apr', value: 4200 },
  { month: 'May', value: 5000 },
  { month: 'Jun', value: 4700 },
  { month: 'Jul', value: 5300 },
  { month: 'Aug', value: 5100 }
];

const Index = () => {
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

      {/* Hero Section with Stats */}
      <div className="container mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-block bg-blue-500/20 text-blue-400 rounded-full px-4 py-1 mb-8">
              WELCOME
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              All you need <span className="text-blue-400">to deal</span> with your finances <span className="text-blue-400">in one place</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Take control of your financial journey with intuitive tools and 
              personalized insights designed to help you achieve your 
              financial goals.
            </p>
            
            <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600 px-6">
              <Link to="/services">
                Discover Platform
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
          
          {/* Right Stats Cards */}
          <div className="w-full md:w-auto flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Revenue Card */}
              <div className="bg-[#11193f] p-6 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-gray-300">Total Revenue</h3>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-bold">$15,231.89</span>
                </div>
                <div className="mb-4">
                  <span className="text-green-500 text-sm">+20.1% from last month</span>
                </div>
                <div className="h-32">
                  <ChartContainer config={{ data: {} }}>
                    <LineChart data={lineData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                      <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ fill: '#4F46E5', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ChartContainer>
                </div>
              </div>
              
              {/* Subscriptions Card */}
              <div className="bg-[#11193f] p-6 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-gray-300">Subscriptions</h3>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-bold">+2350</span>
                </div>
                <div className="mb-4">
                  <span className="text-green-500 text-sm">+180.1% from last month</span>
                </div>
                <div className="h-32">
                  <ChartContainer config={{ data: {} }}>
                    <BarChart data={barData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                      <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="value" fill="#818CF8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
