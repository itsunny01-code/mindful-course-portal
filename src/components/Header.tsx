import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 7558 483 424</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/testimonials" className="hover:text-gray-300">Testimonials</Link>
            <Link to="/why-endorphin" className="hover:text-gray-300">Why Endorphin</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact us</Link>
            <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700">
              Register Now
            </Button>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/61c139c1-0630-44a1-88c7-86367a0fb9af.png" alt="Endorphin Logo" className="h-12" />
            </Link>
            <div className="flex items-center gap-8">
              <Link to="/courses" className="hover:text-gray-300">COURSES</Link>
              <Link to="/maarg" className="hover:text-gray-300">MAARG</Link>
              <Link to="/career-counselling" className="hover:text-gray-300">CAREER COUNSELLING</Link>
              <Link to="/certified-professionals" className="hover:text-gray-300">CERTIFIED PROFESSIONALS</Link>
              <Link to="/trainers" className="hover:text-gray-300">TRAINERS</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;