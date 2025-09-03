import { useState, useEffect } from "react";
import {
  Calculator,
  Beaker,
  BookOpen,
  Code,
  ChevronRight,
  Clock,
  Users,
  Star,
  Zap,
  Target,
  Award,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoursesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Mathematics",
      description:
        "Comprehensive math tutoring from basic arithmetic to advanced calculus",
      grade: "Grade 1-12",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Calculator,
      subjects: ["Algebra", "Geometry", "Calculus", "Statistics"],
      students: "2,500+",
      duration: "Year-round",
      color: "blue",
      rating: 4.9,
      features: ["Interactive Lessons", "Problem Solving", "Exam Prep"],
    },
    {
      id: 2,
      title: "Science",
      description: "Physics, Chemistry, and Biology with hands-on experiments",
      grade: "Grade 1-12",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Beaker,
      subjects: ["Physics", "Chemistry", "Biology", "Lab Work"],
      students: "1,800+",
      duration: "Year-round",
      color: "green",
      rating: 4.8,
      features: ["Virtual Labs", "Science Projects", "Research Skills"],
    },
    {
      id: 3,
      title: "English",
      description: "Language arts, literature, and communication skills",
      grade: "Grade 1-12",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: BookOpen,
      subjects: ["Literature", "Grammar", "Writing", "Reading"],
      students: "3,200+",
      duration: "Year-round",
      color: "purple",
      rating: 4.7,
      features: ["Creative Writing", "Debate", "Literary Analysis"],
    },
    {
      id: 4,
      title: "Computer Science",
      description: "Programming, web development, and digital literacy",
      grade: "Grade 1-12",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      icon: Code,
      subjects: ["Python", "JavaScript", "Web Dev", "Data Science"],
      students: "1,200+",
      duration: "Flexible",
      color: "orange",
      rating: 4.9,
      features: ["Coding Projects", "Portfolio Building", "Tech Skills"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.03,
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Mathematical symbols and formulas
  const mathSymbols = [
    "π",
    "∑",
    "∫",
    "√",
    "∞",
    "α",
    "β",
    "θ",
   
    "→",
    "∴",
    "∵",
    "∀",
    "∃",
  ];

  // English letters and punctuation
  const englishLetters = [
    "A",
    "B",
    "?",
    ".",
    ",",
  ];

  // French letters and accents
  const frenchLetters = [
    "À",
    "Â",
    "Æ",
    "œ",
    "ù",
    "û",
    "ü",
    "ÿ",
  ];

  // Science symbols
  const scienceSymbols = [
    "H₂O",
    "CO₂",
    "O₂",
    "NaCl",
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Educational Symbol Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Math symbols floating animation */}
        {mathSymbols.map((symbol, i) => (
          <motion.div
            key={`math-${i}`}
            className="absolute text-blue-400/60 font-mono text-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, -40, -60, -80, -100],
              x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0.8, 0.6, 0.4, 0],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* English letters floating animation */}
        {englishLetters.map((letter, i) => (
          <motion.div
            key={`eng-${i}`}
            className="absolute text-purple-400/50 font-serif text-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, -30, -45, -60, -75],
              x: [0, Math.random() * 15 - 7.5, Math.random() * 15 - 7.5, 0],
              opacity: [0, 1, 0.9, 0.7, 0.5, 0],
              rotate: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            {letter}
          </motion.div>
        ))}

        {/* French letters floating animation */}
        {frenchLetters.map((letter, i) => (
          <motion.div
            key={`fr-${i}`}
            className="absolute text-red-400/50 font-serif text-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, -50, -75, -100, -125],
              x: [0, Math.random() * 25 - 12.5, Math.random() * 25 - 12.5, 0],
              opacity: [0, 1, 0.8, 0.6, 0.4, 0],
              rotate: [0, Math.random() * 15 - 7.5],
            }}
            transition={{
              duration: Math.random() * 12 + 18,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            {letter}
          </motion.div>
        ))}

        {/* Science symbols floating animation */}
        {scienceSymbols.map((symbol, i) => (
          <motion.div
            key={`sci-${i}`}
            className="absolute text-green-500/60 font-mono text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, -60, -90, -120, -150],
              x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
              opacity: [0, 1, 0.7, 0.5, 0.3, 0],
              rotate: [0, Math.random() * 10 - 5],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Header Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg inline-block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Explore Our Course 
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Discover comprehensive curriculum designed to help students excel
              in all subjects with interactive learning experiences
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              const colorMap = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600",
                orange: "from-orange-500 to-orange-600",
              };

              const bgColorMap = {
                blue: "bg-blue-500/10",
                green: "bg-green-500/10",
                purple: "bg-purple-500/10",
                orange: "bg-orange-500/10",
              };

              return (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  className="relative group"
                  onMouseEnter={() => setHoveredCourse(course.id)}
                  onMouseLeave={() => setHoveredCourse(null)}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col"
                  >
                    {/* Image with overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      {/* Course icon */}
                      <div
                        className={`absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 ${
                          bgColorMap[course.color]
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Rating badge */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm font-semibold text-gray-800">
                          {course.rating}
                        </span>
                      </div>

                      {/* Hover effect overlay */}
                      <AnimatePresence>
                        {hoveredCourse === course.id && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4 flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {course.description}
                        </p>
                      </div>

                      {/* Grade Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-block bg-gradient-to-r ${
                            colorMap[course.color]
                          } text-white text-sm font-semibold px-3 py-1 rounded-full`}
                        >
                          {course.grade}
                        </span>
                      </div>

                      {/* Course Stats */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{course.students} students enrolled</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {course.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`mt-auto bg-gradient-to-r ${
                          colorMap[course.color]
                        } text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn`}
                      >
                        <span>Explore Course</span>
                        <motion.div
                          animate={{ x: hoveredCourse === course.id ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      colorMap[course.color]
                    } rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                  ></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                value: "10,000+",
                label: "Happy Students",
                color: "blue",
              },
              {
                icon: Award,
                value: "98%",
                label: "Success Rate",
                color: "green",
              },
              {
                icon: Target,
                value: "50+",
                label: "Expert Teachers",
                color: "purple",
              },
              {
                icon: Heart,
                value: "24/7",
                label: "Support Available",
                color: "orange",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div
                  className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 skew-y-3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have achieved academic excellence
              with our interactive courses
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center justify-center mx-auto">
                <span>Enroll Now</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>

            <motion.p
              className="text-blue-200 mt-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Free trial available for all new students
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
