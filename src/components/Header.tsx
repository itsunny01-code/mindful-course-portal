import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, ArrowRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="w-6 h-6 text-primary" />
          <span className="text-xl font-semibold text-primary">mEndorphin</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/landing-one" className="text-primary/80 hover:text-primary transition-colors">
            Landing One
          </Link>
          <Link to="/landing-two" className="text-primary/80 hover:text-primary transition-colors">
            Landing Two
          </Link>
        </nav>
        <Button className="bg-secondary hover:bg-secondary-dark text-white group">
          Get Started
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </header>
  );
};