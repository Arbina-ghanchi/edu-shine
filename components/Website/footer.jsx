"use client";
import React from "react";
import {
  Home,
  BookOpen,
  Users,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Award,
  MessageCircle,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter

const Footer = () => {
  const router = useRouter(); // Initialize router

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = "mailto:edushinestudyhub2all@gmail.com";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917990769647", "_blank");
  };

  // Function to handle navigation
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-5 flex items-center">
              <div className="bg-blue-500 p-2 rounded-lg mr-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              Edu-Shine
            </h3>
            <p className="text-gray-300 mb-5 text-sm leading-relaxed">
              Bridging the gap between students and exceptional educators since
              2015. Our mission is to make quality education accessible to all.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-700">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { icon: Home, text: "Home", path: "/" },
                { icon: BookOpen, text: "Courses", path: "/courses" },
                { icon: Users, text: "Our Tutors", path: "/tutors" },
                {
                  icon: Award,
                  text: "Success Stories",
                  path: "/success-stories",
                },
                { icon: Mail, text: "Contact Us", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm group w-full text-left"
                  >
                    <item.icon className="w-4 h-4 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects Offered */}
          <div>
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-700">
              Subjects Offered
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Mathematics",
                "Physics",
                "Chemistry",
                "Biology",
                "English",
                "Computer Science",
                "Economics",
                "Accountancy",
              ].map((subject, index) => (
                <span
                  key={index}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer hover:bg-gray-800 p-2 rounded-lg"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-700">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div
                className="flex items-start cursor-pointer group"
                onClick={() => handleCall("917990769647")}
              >
                <div className="bg-blue-500 p-2 rounded-lg mr-3 mt-1 group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Phone</p>
                  <p className="text-sm group-hover:text-blue-300 transition-colors">
                    +91 7990769647
                    <br />
                    +91 9427392612
                    <br />
                    +91 8780969747
                  </p>
                </div>
              </div>

              <div
                className="flex items-start cursor-pointer group"
                onClick={handleEmail}
              >
                <div className="bg-blue-500 p-2 rounded-lg mr-3 mt-1 group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <p className="text-sm group-hover:text-blue-300 transition-colors break-all">
                    edushinestudyhub2all@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-blue-500 p-2 rounded-lg mr-3 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Address</p>
                  <p className="text-sm group-hover:text-blue-300 transition-colors">
                    Divine Galaxy Duplex, 55, near Chanakya Nagari, Kalali,
                    Vadodara, Gujarat 390012
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-blue-500 p-2 rounded-lg mr-3 mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Operating Hours</p>
                  <p className="text-sm group-hover:text-blue-300 transition-colors">
                    Mon-Sat: 9AM - 7PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* WhatsApp Community Button */}
              <div className="pt-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-3 rounded-xl font-medium transition-all text-sm flex items-center justify-center w-full shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] group"
                >
                  <div className="bg-white/20 p-1 rounded-lg mr-3 group-hover:bg-white/30 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  Join Our WhatsApp Community
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © {new Date().getFullYear()} Edu-Shine. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-5">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "FAQ", path: "/faq" }, // Changed to /faq
                { name: "About Us", path: "/about" },
                { name: "Testimonials", path: "/testomonial" }, // Changed to /testimonials
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
