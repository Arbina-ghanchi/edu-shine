"use client";
import { Play, Check, Star, TrendingUp } from "lucide-react";

export const MainPage = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Premium
                </span>
                <br />
                <span className="text-gray-900">Home Tutoring</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Connect with verified, expert teachers for personalized
                one-on-one learning at home. Experience the future of education
                with our AI-powered learning platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Start Learning Today</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">→</span>
                </div>
              </button>

              <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all">
                  <Play className="w-5 h-5 text-blue-600 ml-1" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Verified Teachers
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Flexible Scheduling
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Progress Tracking
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 shadow-2xl">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Students learning together with laptops and books"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>

                {/* Floating learning indicator */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">
                      Live Session
                    </span>
                  </div>
                </div>

                {/* Course progress indicator */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs text-gray-600 mb-1">
                    Today's Progress
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-700 mt-1">
                    75% Complete
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      4.9/5
                    </div>
                    <div className="text-sm text-gray-500">Student Rating</div>
                  </div>
                </div>

                {/* Mini rating stars */}
                <div className="flex items-center mt-2 space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${
                        star <= 4
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">
                    2,847 reviews
                  </span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    95% Success Rate
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
              </div>

              {/* Active Students Card */}
              <div className="absolute top-1/4 -right-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b6fd?ixlib=rb-4.0.3&w=32&h=32&fit=crop&crop=face"
                      alt="Student"
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=32&h=32&fit=crop&crop=face"
                      alt="Student"
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=32&h=32&fit=crop&crop=face"
                      alt="Student"
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white font-semibold">
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  1,250+ active students
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 -right-2 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
            <div className="absolute bottom-1/4 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
};
