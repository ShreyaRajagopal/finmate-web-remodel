
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvoiceTable from "@/components/InvoiceTable";
import Calendar from "@/components/Calendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-finmate-darkblue">
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <InvoiceTable />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Calendar />
            <div className="mt-8">
              <img 
                src="/lovable-uploads/9cae9a44-0494-4380-82e1-f525b76c64cb.png" 
                alt="Building perspective" 
                className="rounded-lg max-w-full h-auto"
              />
              <img 
                src="/lovable-uploads/3dc82471-ed33-452d-af9d-ae334275b365.png" 
                alt="Modern architecture" 
                className="rounded-lg max-w-full h-auto mt-8"
              />
            </div>
          </div>
        </div>
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
