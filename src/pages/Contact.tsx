
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-finmate-darkblue">
      <div className="container mx-auto px-4">
        <Navbar />
        
        <div className="flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Reach out to the FinMate team for support or inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
