import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react"; // Add icons or choose any other ones.

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Company Name</h3>
            <p className="text-sm">© 2025 All rights reserved.</p>
          </div>

          <div className="flex space-x-6 justify-center md:justify-end">
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition duration-200">
              About Us
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition duration-200">
              Contact
            </Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition duration-200">
              Terms of Service
            </Link>
          </div>

          <div className="flex space-x-6 justify-center md:justify-start">
            <Button
              variant="link"
              className="text-gray-400 hover:text-white transition duration-200"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="link"
              className="text-gray-400 hover:text-white transition duration-200"
              onClick={() => window.open("https://twitter.com", "_blank")}
            >
              <Twitter className="h-6 w-6" />
            </Button>
            <Button
              variant="link"
              className="text-gray-400 hover:text-white transition duration-200"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
