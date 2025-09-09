import {
  ChevronDown,
  BookOpen,
  Music,
  Palette,
  Languages,
  School,
  Home,
  Atom,
  Heart,
  User,
  Phone,
  Info,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Star,
  Users,
  Target,
  MapPin,
  Mail,
  Book,
  Trophy,
  Contact,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const isDropdownOpen = (dropdownName) => {
    return activeDropdown === dropdownName;
  };

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

          <nav
            ref={dropdownRef}
            className="hidden md:flex items-center space-x-8"
          >
            {/* Boards Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown("boards")}
              >
                <span>Boards</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen("boards") && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
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
                    IB
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    IGCSE
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
                    ICSE
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
                    OTHER
                  </a>
                </div>
              )}
            </div>

            {/* Curricular Activities Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown("activities")}
              >
                <span>Curricular Activities</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen("activities") && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
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

            {/* Join Us Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown("joinus")}
              >
                <span>Join Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen("joinus") && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
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

            {/* More Dropdown - Updated with your specific pages */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown("more")}
              >
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen("more") && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                  {/* Courses Section */}
                  <a
                    href="/Courses/CoursesPage"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Book className="w-4 h-4 mr-2 text-blue-500" />
                    Explore Our Courses
                  </a>
                  
                  {/* Success Stories Section */}
                  <a
                    href="/success-stories"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                    Success Stories
                  </a>
                  
                  {/* Our Tutors Section */}
                  <a
                    href="/our-tutors"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    Our Tutors
                  </a>
                  
                  {/* Contact Us Section */}
                  <a
                    href="/contact-us"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Contact className="w-4 h-4 mr-2 text-purple-500" />
                    Contact Us
                  </a>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-100 my-1"></div>
                  
                  {/* Additional Links */}
                  <a
                    href="/about"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Info className="w-4 h-4 mr-2 text-gray-500" />
                    About Us
                  </a>
                  <a
                    href="/become-tutor"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <GraduationCap className="w-4 h-4 mr-2 text-indigo-500" />
                    Become a Tutor
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