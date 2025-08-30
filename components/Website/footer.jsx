"use client";
import React from 'react';
import { Home, BookOpen, Users, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-400"/>
              EduMentor
            </h3>
            <p className="text-gray-400 mb-6">
              Bridging the gap between students and exceptional educators since 2015. Our mission is to make quality education accessible to all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Our Tutors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Subjects Offered */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Subjects Offered</h3>
            <div className="grid grid-cols-2 gap-3">
              <span className="text-gray-400 hover:text-white transition-colors">Mathematics</span>
              <span className="text-gray-400 hover:text-white transition-colors">Physics</span>
              <span className="text-gray-400 hover:text-white transition-colors">Chemistry</span>
              <span className="text-gray-400 hover:text-white transition-colors">Biology</span>
              <span className="text-gray-400 hover:text-white transition-colors">English</span>
              <span className="text-gray-400 hover:text-white transition-colors">Computer Science</span>
              <span className="text-gray-400 hover:text-white transition-colors">Economics</span>
              <span className="text-gray-400 hover:text-white transition-colors">Accountancy</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-blue-400" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="hover:text-white transition-colors">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-blue-400" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="hover:text-white transition-colors">contact@edumentor.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-blue-400" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="hover:text-white transition-colors">123 Education Street, Learning District, Mumbai 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 mb-12">
          <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400">Get updates on new courses, teaching tips, and educational resources</p>
              </div>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-l-lg w-full md:w-64 text-white-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} EduMentor. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
            <a href="/testomonial" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;