
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-deepfake-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">DT</span>
            </div>
            <span className="text-xl font-bold">DeepTrust</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-deepfake-700 transition-colors">
              About
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-deepfake-700 transition-colors">
              Features
            </Link>
            <div className="flex space-x-4">
              <Button variant="outline" asChild>
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 md:hidden space-y-4 flex flex-col">
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-deepfake-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-deepfake-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" asChild>
                <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
