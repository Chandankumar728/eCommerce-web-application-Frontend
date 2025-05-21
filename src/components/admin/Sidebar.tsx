"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <Button
        className="fixed top-4 left-4 z-50 md:hidden"
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Sidebar Container */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-6 
          shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#e94560]">Control Center</h2>
          {/* Close Button (Mobile) */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-3">
          {[
            // { name: "Overview", path: "/admin" },
            // { name: "User Management", path: "/admin/users" },
            { name: "Analytics", path: "/admin/reports" },
            { name: "Product", path: "/admin/products" },
            { name: "Categories", path: "/admin/category" },
            // { name: "Preferences", path: "/admin/settings" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block p-3 text-gray-300 hover:bg-[#0f3460] hover:text-white rounded-lg transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button (Fixed at Bottom) */}
        <div className="absolute bottom-6 left-6 right-6">
          <Button
            variant="destructive"
            className="w-full flex items-center justify-center gap-2 bg-[#e94560] hover:bg-[#d63447] text-white"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Overlay for Mobile (Click to Close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
