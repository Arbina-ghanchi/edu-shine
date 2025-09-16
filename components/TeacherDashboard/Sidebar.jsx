"use client";
import React from "react";
import {
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  BarChart3,
  Settings,
  MessageSquare,
  X,
  FileText,
} from "lucide-react";

const Sidebar = ({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  isMobile,
}) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "students", label: "Students", icon: Users },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "classes", label: "Classes", icon: BookOpen },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
          ${isMobile ? "fixed" : "fixed"} 
          ${isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"}
          w-64 bg-slate-900 text-white h-screen left-0 top-0 overflow-y-auto z-50 transition-transform duration-300 ease-in-out
        `}
      >
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              <div>
                <h1 className="text-lg md:text-xl font-bold">EduDash</h1>
                <p className="text-xs md:text-sm text-slate-400">
                  Teacher Portal
                </p>
              </div>
            </div>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <nav className="space-y-1 md:space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobile) setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 md:px-4 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
