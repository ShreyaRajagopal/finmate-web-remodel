
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-10">
      <div className="flex items-center">
        <div className="bg-finmate-blue rounded-full w-10 h-10 flex items-center justify-center mr-3">
          <span className="text-white font-bold text-lg">F</span>
        </div>
        <Link to="/" className="text-white text-xl font-bold">FinMate</Link>
      </div>
      
      <div className="hidden md:flex space-x-8 text-gray-300">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/services" className="hover:text-white">Services</Link>
        <Link to="/how-it-works" className="hover:text-white">How it works</Link>
        <Link to="/about" className="hover:text-white">About us</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </div>
      
      <div className="flex space-x-3">
        <Button variant="ghost" className="text-white">Login</Button>
        <Button className="bg-finmate-blue hover:bg-finmate-lightblue text-white">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
