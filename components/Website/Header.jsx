import {
  ChevronDown,
  BookOpen,
  Music,
  Palette,
  Languages,
  School,
  Atom,
  Heart,
  GraduationCap,
  HelpCircle,
  Users,
  Trophy,
  Contact,
  Book,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const isDropdownOpen = (dropdownName) => {
    return activeDropdown === dropdownName;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (activeDropdown) setActiveDropdown(null);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
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

          {/* Desktop Navigation */}
          <nav
            ref={dropdownRef}
            className="hidden md:flex items-center space-x-4 lg:space-x-8"
          >
            {/* Curricular Activities Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base"
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

            {/* More Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base"
                onClick={() => toggleDropdown("more")}
              >
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen("more") && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                  <a
                    href="/Courses/CoursesPage"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Book className="w-4 h-4 mr-2 text-blue-500" />
                    Explore Our Courses
                  </a>
                  <a
                    href="/success-stories"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                    Why Choose Edu-Shine
                  </a>
                  <a
                    href="/our-tutors"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    Our Achievements
                  </a>
                  <a
                    href="/contact-us"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Contact className="w-4 h-4 mr-2 text-purple-500" />
                    Get In Touch
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <a
                    href="/about"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <HelpCircle className="w-4 h-4 mr-2 text-gray-500" />
                    Help & Support
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

            {/* Desktop Buttons */}
            <button
              onClick={() => router.push("/become-tutor")}
              className="hidden lg:flex items-center space-x-2 px-3 py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50/70 rounded-lg transition-all duration-200 font-medium border border-indigo-200 hover:border-indigo-300 text-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Become a Teacher</span>
            </button>

            <button
              onClick={() => router.push("/help-support")}
              className="hidden lg:flex items-center space-x-2 px-3 py-2 text-green-600 hover:text-green-700 hover:bg-green-50/70 rounded-lg transition-all duration-200 font-medium border border-green-200 hover:border-green-300 text-sm"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Help & Support</span>
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/auth");
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              Login/sign-up
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-blue-100 shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {/* Curricular Activities Mobile Accordion */}
              <div>
                <button
                  className="flex justify-between items-center w-full px-3 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
                  onClick={() => toggleDropdown("mobile-activities")}
                >
                  <span className="font-medium">Curricular Activities</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen("mobile-activities") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen("mobile-activities") && (
                  <div className="pl-6 pr-3 pb-2 space-y-1">
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Music className="w-4 h-4 mr-2 text-purple-500" />
                      Music
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Palette className="w-4 h-4 mr-2 text-yellow-500" />
                      Art and Craft
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Languages className="w-4 h-4 mr-2 text-blue-500" />
                      Spoken English
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <School className="w-4 h-4 mr-2 text-green-500" />
                      Sainik School Coaching
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <School className="w-4 h-4 mr-2 text-indigo-500" />
                      JNV Preparation
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Atom className="w-4 h-4 mr-2 text-red-500" />
                      JEE (Engineering)
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Heart className="w-4 h-4 mr-2 text-pink-500" />
                      NEET (Medical)
                    </a>
                  </div>
                )}
              </div>

              {/* More Options Mobile Accordion */}
              <div>
                <button
                  className="flex justify-between items-center w-full px-3 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
                  onClick={() => toggleDropdown("mobile-more")}
                >
                  <span className="font-medium">More Options</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen("mobile-more") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen("mobile-more") && (
                  <div className="pl-6 pr-3 pb-2 space-y-1">
                    <button
                      onClick={() => handleNavigation("/Courses/CoursesPage")}
                      className="flex items-center w-full px-3 py-2 text-left text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Book className="w-4 h-4 mr-2 text-blue-500" />
                      Explore Our Courses
                    </button>
                    <button
                      onClick={() => handleNavigation("/success-stories")}
                      className="flex items-center w-full px-3 py-2 text-left text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                      Why Choose Edu-Shine
                    </button>
                    <button
                      onClick={() => handleNavigation("/our-tutors")}
                      className="flex items-center w-full px-3 py-2 text-left text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Users className="w-4 h-4 mr-2 text-green-500" />
                      Our Achievements
                    </button>
                    <button
                      onClick={() => handleNavigation("/contact-us")}
                      className="flex items-center w-full px-3 py-2 text-left text-gray-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Contact className="w-4 h-4 mr-2 text-purple-500" />
                      Get In Touch
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Links */}
              <button
                onClick={() => handleNavigation("/become-tutor")}
                className="flex items-center w-full px-3 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                <GraduationCap className="w-5 h-5 mr-2 text-indigo-500" />
                Become a Teacher
              </button>

              <button
                onClick={() => handleNavigation("/help-support")}
                className="flex items-center w-full px-3 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                <HelpCircle className="w-5 h-5 mr-2 text-green-500" />
                Help & Support
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
