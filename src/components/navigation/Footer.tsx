
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-deepfake-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">DT</span>
              </div>
              <span className="text-xl font-bold">DeepTrust</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Advanced AI-powered deepfake detection for all your authentication needs.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-deepfake-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-deepfake-700 transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-deepfake-700 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-deepfake-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-deepfake-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} DeepTrust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
