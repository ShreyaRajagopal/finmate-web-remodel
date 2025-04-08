
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Cash Stash Stats",
      description: "Get detailed insights about your spending patterns and financial health with powerful analytics tools.",
      icon: "📊"
    },
    {
      title: "Money Moves",
      description: "Monitor your investment portfolio performance and get recommendations based on market trends.",
      icon: "📈"
    },
    {
      title: "Financial Advice",
      description: "Get personalized financial advice from expert advisors to make better financial decisions.",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen bg-finmate-darkblue">
      <div className="container mx-auto px-4">
        <Navbar />
        
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the comprehensive range of financial services designed to help you take control of your finances
            and achieve your financial goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black bg-opacity-30 rounded-lg p-6 hover:bg-opacity-40 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Button variant="outline" className="text-finmate-blue border-finmate-blue hover:bg-finmate-blue hover:text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your financial future?</h2>
          <Button className="bg-finmate-blue hover:bg-finmate-lightblue text-white px-8 py-6 text-lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
