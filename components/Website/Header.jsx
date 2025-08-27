import { ChevronDown, BookOpen, Music, Palette, Languages, School, Home, Atom, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const Header = () => {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [joinUsOpen, setJoinUsOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Edu-Shine
            </span>
          </div>  

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setCoursesOpen(!coursesOpen)}
              >
                <span>Boards</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    CBSE
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    GSEB
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    NIOS
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    ICSE
                  </a>
                </div>
              )}
            </div>

            {/* New Curricular Activities Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setActivitiesOpen(!activitiesOpen)}
              >
                <span>Curricular Activities</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activitiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Music className="w-4 h-4 mr-2 text-purple-500" />
                    Music
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Palette className="w-4 h-4 mr-2 text-yellow-500" />
                    Art and Craft
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Languages className="w-4 h-4 mr-2 text-blue-500" />
                    Spoken English
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <School className="w-4 h-4 mr-2 text-green-500" />
                    Entrance coaching for Sainik School, Chhatralaya
                  </a>
                 
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <School className="w-4 h-4 mr-2 text-indigo-500" />
                    JNV (Jawahar Navodaya Vidyalaya)
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Atom className="w-4 h-4 mr-2 text-red-500" />
                    JEE (Engineering)
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Heart className="w-4 h-4 mr-2 text-pink-500" />
                    NEET (Medical)
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setJoinUsOpen(!joinUsOpen)}
              >
                <span>Join Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {joinUsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <a
                    href="/student"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    As Student
                  </a>
                  <a
                    href="/teacher"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    As Teacher
                  </a>
                  <a
                    href="/parent"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    As Parent
                  </a>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/auth")}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};