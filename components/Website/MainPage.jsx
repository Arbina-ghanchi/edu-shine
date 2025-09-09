"use client";
import { Play, Check, Star, TrendingUp, X } from "lucide-react";
import { useState, useEffect } from "react";

// Video Modal Component
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // List of educational demo videos
  const demoVideos = [
    "https://www.youtube.com/embed/9M4tdMsg3ts", // Educational technology
    "https://www.youtube.com/embed/7KMM387HNQk", // Online learning
    "https://www.youtube.com/embed/7_XI7tvO4hY", // Tutoring demo
    "https://www.youtube.com/embed/7KbY6Zg0q2c", // Teaching techniques
    "https://www.youtube.com/embed/9M4tdMsg3ts", // Digital classroom
  ];

  // Select a random video from the list
  const randomVideo = demoVideos[Math.floor(Math.random() * demoVideos.length)];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-fadeIn p-4">
      <div className="relative w-full max-w-4xl mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 md:-top-12 text-white hover:text-gray-300 transition-colors z-10 bg-gray-800 rounded-full p-1"
          aria-label="Close video"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={randomVideo}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Educational Demo Video"
          />
        </div>
      </div>
    </div>
  );
};

export const MainPage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fadeInUp order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"  >
                  Premium
                </span>
                <br />
                <span className="text-gray-900">Home Tutoring</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                Wherever you are — at home or online — your journey toward
                brighter results begins here. Edu-Shine brings together trusted
                tutors and innovative methods to guide every learner — from
                daily to advanced topics.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Book Appointment</span>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">→</span>
                </div>
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group mt-4 sm:mt-0 justify-center sm:justify-start"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-blue-600 ml-0.5" />
                </div>
                <span className="font-medium">Personalize My Learning</span>
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  Verified Teachers
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  Flexible Scheduling
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  Progress Tracking
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fadeInRight order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl md:shadow-2xl">
              {/* Main Image */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] mb-4 md:mb-6 shadow-lg">
                <img
                  src="https://i.pinimg.com/736x/9a/ea/95/9aea952ee0f09bf5af0d4f076c3148c4.jpg"
                  alt="Students learning together with laptops and books"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>

                {/* Floating learning indicator */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/95 backdrop-blur-sm rounded-lg p-1.5 md:p-2 shadow">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">
                      Live Session
                    </span>
                  </div>
                </div>

                {/* Course progress indicator */}
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow">
                  <div className="text-xs text-gray-600 mb-1">
                    Today's Progress
                  </div>
                  <div className="w-16 md:w-24 h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-700 mt-0.5 md:mt-1">
                    75% Complete
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-lg border border-gray-100 backdrop-blur-sm max-w-[70%] md:max-w-none">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg md:rounded-xl flex items-center justify-center shadow">
                    <Star className="w-4 h-4 md:w-6 md:h-6 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-gray-900">
                      4.9/5
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">Student Rating</div>
                  </div>
                </div>

                {/* Mini rating stars */}
                <div className="flex items-center mt-1 md:mt-2 space-x-0.5 md:space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 ${
                        star <= 4
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1 md:ml-2">
                    2,847 reviews
                  </span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white rounded-lg md:rounded-xl p-2 md:p-4 shadow border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <TrendingUp className="w-3 h-3 md:w-5 md:h-5 text-green-500" />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">
                    95% Success Rate
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5 md:mt-1">Last 30 days</div>
              </div>

              {/* Active Students Card - Only show on larger screens */}
              {!isMobile && (
                <div className="absolute top-1/4 -right-6 md:-right-8 bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="flex -space-x-1 md:-space-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b6fd?ixlib=rb-4.0.3&w=32&h=32&fit=crop&crop=face"
                        alt="Student"
                        className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=32&h=32&fit=crop&crop=face"
                        alt="Student"
                        className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=32&h=32&fit=crop&crop=face"
                        alt="Student"
                        className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white"
                      />
                      <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-white font-semibold">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5 md:mt-1">
                    1,250+ active students
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements - Only show on larger screens */}
            {!isMobile && (
              <>
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 -right-2 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                <div className="absolute bottom-1/4 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-300"></div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Background Decorations - Only show on larger screens */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </main>
  );
};