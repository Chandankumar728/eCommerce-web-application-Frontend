import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  User,
  ShoppingCart,
  LogOut,
  Settings,
} from "lucide-react";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userDetails = user?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [logo, setLogo] = useState("Ecommerce");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {logo ? (
            <h1 className="text-xl font-bold text-gray-800">{logo}</h1>
          ) : (
            <img src={logo} alt="logo" className="w-24 h-auto" />
          )}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/client"
            className="text-gray-700 hover:text-black font-medium"
          >
            Home
          </Link>
          <Link
            to="/client/products"
            className="text-gray-700 hover:text-black font-medium"
          >
            Products
          </Link>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <User size={20} />
              <ChevronDown size={16} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-md z-50">
                <div className="px-4 py-3 border-b">
                  <p className="font-semibold">{userDetails?.name}</p>
                  <p className="text-sm text-gray-500">{userDetails?.email}</p>
                </div>
                {/* <Link
                  to="/client/profile"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  <Settings size={16} className="mr-2" /> Profile Settings
                </Link> */}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm text-left"
                >
                  <LogOut size={16} className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-black focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Slide Down */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-6 py-4 space-y-4">
          <Link
            to="/client"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/client/products"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-black"
          >
            Products
          </Link>

          {/* Mobile Profile Dropdown */}
          <div>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <User size={20} />
              <span>Profile</span>
              <ChevronDown size={16} />
            </button>
            {isProfileOpen && (
              <div className="mt-2 bg-gray-50 border rounded-lg">
                <div className="px-4 py-2 border-b text-sm">
                  <p className="font-semibold">{userDetails?.name}</p>
                  <p className="text-gray-500">{userDetails?.email}</p>
                </div>
                {/* <Link
                  to="/client/profile"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile Settings
                </Link> */}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
