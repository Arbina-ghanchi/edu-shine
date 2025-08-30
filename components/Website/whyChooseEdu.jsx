import { Check, Star } from "lucide-react";
import React from "react";

const WhyChooseEdu = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Edu-Shine?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Trusted learning support beyond the classroom — from school subjects
            to competitive exam preparation for JEE & NEET, across all major
            boards including CBSE, ICSE, GSEB, and NIOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-blue-500 rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-500" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Verified Teachers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All our teachers undergo rigorous background checks and
                interviews
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    250+ Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 border-2 border-purple-500 rounded-full"></div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customized learning plans tailored to each student's needs
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    AI-Powered Plans
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 border-2 border-orange-500 rounded-full"></div>
                    <div className="absolute top-0.5 left-1.5 w-0.5 h-1.5 bg-orange-500"></div>
                    <div className="absolute top-1.5 left-1.5 w-1 h-0.5 bg-orange-500"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Book sessions at your convenience with easy rescheduling options
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    24/7 Booking
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 border-2 border-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Progress Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time progress monitoring with detailed performance reports
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Live Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-medium">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span>Trusted by 10,000+ families worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEdu;
