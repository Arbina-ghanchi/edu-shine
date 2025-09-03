"use client";
import React from 'react';
import { Home, BookOpen, Users, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center">
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-2 text-blue-400"/>
              Edu-Shine
            </h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
              Bridging the gap between students and exceptional educators since 2015. Our mission is to make quality education accessible to all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <Home className="w-4 h-4 mr-2 flex-shrink-0" />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                  Our Tutors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Subjects Offered */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Subjects Offered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Mathematics</span>
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Physics</span>
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Chemistry</span>
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Biology</span>
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">English</span>
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Computer Science</span>
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Economics</span>
              <span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Accountancy</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contact Information</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                  <p className="hover:text-white transition-colors text-sm md:text-base">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Email</p>
                  <p className="hover:text-white transition-colors text-sm md:text-base break-all">contact@edu-shine.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Address</p>
                  <p className="hover:text-white transition-colors text-sm md:text-base">123 Education Street, Learning District, Mumbai 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 md:mt-16 mb-8 md:mb-12">
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-lg md:text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400 text-sm md:text-base">Get updates on new courses, teaching tips, and educational resources</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-0 w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg sm:rounded-r-none sm:rounded-l-lg w-full sm:w-64 lg:w-72 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-medium transition-colors text-sm md:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left text-xs md:text-sm">
              © {new Date().getFullYear()} Edu-Shine. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">About Us</a>
              <a href="/testimonial" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Testimonials</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;