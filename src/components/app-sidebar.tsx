"use client";

import { Sidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-gray-900 text-white p-5 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav className="space-y-2">
        <Link to="/admin" className="block p-3 hover:bg-gray-800 rounded transition duration-200">
          Dashboard
        </Link>
        <Link to="/admin/users" className="block p-3 hover:bg-gray-800 rounded transition duration-200">
          Users
        </Link>
        <Link to="/admin/reports" className="block p-3 hover:bg-gray-800 rounded transition duration-200">
          Reports
        </Link>
        <Link to="/admin/settings" className="block p-3 hover:bg-gray-800 rounded transition duration-200">
          Settings
        </Link>
      </nav>
    </Sidebar>
  );
}
