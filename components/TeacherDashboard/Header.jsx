// components/Header.jsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Search, Bell, Menu, User } from "lucide-react";

const Header = ({
  activeTab,
  selectedClass,
  setSelectedClass,
  classes,
  sidebarOpen,
  setSidebarOpen,
  isMobile,
  user,
}) => {
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/");
  };

  return (
    <div className="bg-white shadow-sm border-b border-slate-200 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 capitalize">
            {activeTab}
          </h2>
          {activeTab !== "settings" && activeTab !== "calendar" && (
            <div className="relative hidden sm:block">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {classes &&
                  classes?.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 relative">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          <button className="md:hidden p-2 text-slate-600 hover:text-slate-800">
            <Search className="w-5 h-5" />
          </button>

          <button className="relative p-2 text-slate-600 hover:text-slate-800">
            <Bell className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <div
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
              onMouseEnter={() => setShowProfile(true)}
            >
              {user?.name?.charAt(0) || "T"}
            </div>

            <div
              className={`absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg p-4 z-50 transition-opacity duration-200 ${
                showProfile ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <h3 className="font-semibold text-slate-800">
                {user?.name || "Teacher Name"}
              </h3>
              <p className="text-slate-500 text-sm">
                {user?.email || "teacher@example.com"}
              </p>
              <p className="text-slate-500 text-sm capitalize mt-1">
                Role: {user?.role || "teacher"}
              </p>
              <hr className="my-3" />
              <button
                onClick={() => router.push("/profile")}
                className="w-full px-4 py-2 text-left text-blue-600 hover:bg-blue-50 rounded-lg font-medium mb-2"
              >
                View Profile
              </button>
              <button
                onClick={() => router.push("/teacher")}
                className="w-full px-4 py-2 text-left text-blue-600 hover:bg-blue-50 rounded-lg font-medium mb-2"
              >
                Edit my form submitted
              </button>
              <button
                onClick={logout}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeTab !== "settings" && activeTab !== "calendar" && (
        <div className="mt-4 sm:hidden">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {classes &&
              classes?.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Header;
