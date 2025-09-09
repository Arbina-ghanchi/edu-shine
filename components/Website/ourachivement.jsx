import { Users, GraduationCap, Award, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    successRate: 0,
    rating: 0
  });

  const finalValues = {
    students: 5000,
    teachers: 500,
    successRate: 98,
    rating: 4.9
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Animate numbers counting up
    const duration = 7000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        students: Math.round(finalValues.students * progress),
        teachers: Math.round(finalValues.teachers * progress),
        successRate: Math.round(finalValues.successRate * progress),
        rating: (finalValues.rating * progress).toFixed(1)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts({
          students: finalValues.students,
          teachers: finalValues.teachers,
          successRate: finalValues.successRate,
          rating: finalValues.rating
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      icon: Users,
      value: `${counts.students}+`,
      label: 'Students Taught',
      delay: '0ms'
    },
    {
      icon: GraduationCap,
      value: `${counts.teachers}+`,
      label: 'Expert Teachers',
      delay: '100ms'
    },
    {
      icon: Award,
      value: `${counts.successRate}%`,
      label: 'Success Rate',
      delay: '200ms'
    },
    {
      icon: Star,
      value: `${counts.rating}/5`,
      label: 'Average Rating',
      delay: '300ms'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden py-12 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/20 blur-xl"></div>
        <div className="absolute top-20 right-8 md:top-40 md:right-32 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/15 blur-lg"></div>
        <div className="absolute bottom-16 left-1/4 md:bottom-32 w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/25 blur-md"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-20 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Our Achievements
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto px-4 leading-relaxed">
            Numbers that speak for our commitment to educational excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`text-center group transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: achievement.delay }}
              >
                {/* Icon Container */}
                <div className="mb-4 md:mb-6 relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-6 md:group-hover:rotate-12 group-hover:scale-105 md:group-hover:scale-110">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Value */}
                <div className="mb-2 md:mb-4">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white block leading-none group-hover:text-blue-100 transition-colors duration-300">
                    {achievement.value}
                  </span>
                </div>

                {/* Label */}
                <p className="text-base md:text-lg lg:text-xl text-blue-100 font-medium group-hover:text-white transition-colors duration-300">
                  {achievement.label}
                </p>

                {/* Decorative line */}
                <div className="w-10 h-1 md:w-12 md:h-1 bg-white/30 mx-auto mt-3 md:mt-4 rounded-full group-hover:w-12 md:group-hover:w-16 group-hover:bg-white/50 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional decorative elements - hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>
      </div>
    </section>
  );
}