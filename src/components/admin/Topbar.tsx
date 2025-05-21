// @ts-ignore
// @ts-nocheck

import { UserCog } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility on click
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <UserCog />
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div>

      {/* Navigation and User Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon */}
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <i className="fas fa-bell"></i>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            onClick={toggleDropdown} // Toggle dropdown on button click
          >
            <UserCog />
            <span className="hidden md:block">Admin</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg border border-gray-300">
              <ul>
                {/* <Link to={'/admin/settings'} ><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile Settings</li></Link> */}
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
