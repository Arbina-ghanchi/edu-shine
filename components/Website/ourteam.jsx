"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Languages, Star, MessageSquare, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const OurTeam = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const featuredTeamMembers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Mathematics Expert",
      experience: "12+ years",
      qualification: "Ph.D in Mathematics, IIT Bombay",
      expertise: ["CBSE/ICSE Curriculum", "Competitive Exams", "Calculus"],
      bio: "Specializes in making complex concepts simple with real-world applications",
      image: "https://i.pinimg.com/736x/99/3c/cd/993ccdca5518b21bfea24052dadb3095.jpg",
      rating: 4.9,
      subjects: ["Algebra", "Trigonometry", "Calculus"],
      social: { linkedin: "#", twitter: "#", email: "priya.sharma@example.com" },
    },
    {
      id: 2,
      name: "Prof. Ramesh Patel",
      role: "Science Mentor",
      experience: "15+ years",
      qualification: "M.Sc Physics, B.Ed",
      expertise: ["Conceptual Physics", "Practical Labs", "Olympiad Training"],
      bio: "Passionate about experimental learning and scientific inquiry",
      image: "https://i.pinimg.com/736x/99/3c/cd/993ccdca5518b21bfea24052dadb3095.jpg",
      rating: 4.8,
      subjects: ["Physics", "Chemistry", "Science Olympiad"],
      social: { linkedin: "#", twitter: "#", email: "ramesh.patel@example.com" },
    },
    {
      id: 3,
      name: "Neha Gupta",
      role: "English Language Specialist",
      experience: "8+ years",
      qualification: "MA English, Cambridge CELTA",
      expertise: ["IELTS/TOEFL", "Creative Writing", "Literature Analysis"],
      bio: "Focuses on communication skills and critical thinking through literature",
      image: "https://i.pinimg.com/736x/99/3c/cd/993ccdca5518b21bfea24052dadb3095.jpg",
      rating: 4.7,
      subjects: ["English Grammar", "Literature", "Communication Skills"],
      social: { linkedin: "#", twitter: "#", email: "neha.gupta@example.com" },
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Coding Instructor",
      experience: "10+ years",
      qualification: "B.Tech Computer Science, IIT Delhi",
      expertise: ["Python", "Web Development", "Competitive Programming"],
      bio: "Believes in project-based learning to build practical skills",
      image: "https://i.pinimg.com/736x/99/3c/cd/993ccdca5518b21bfea24052dadb3095.jpg",
      rating: 4.9,
      subjects: ["Python", "JavaScript", "Data Structures"],
      social: { linkedin: "#", twitter: "#", email: "vikram.singh@example.com" },
    },
  ];

  // Generate 250 teacher profiles with varied data
  const allTeachers = Array.from({ length: 250 }, (_, i) => {
    const subjects = [
      ["Math", "Algebra", "Calculus"],
      ["Physics", "Chemistry", "Science"],
      ["English", "Literature", "Grammar"],
      ["History", "Geography", "Civics"],
      ["Computer Science", "Programming", "AI"],
      ["Biology", "Botany", "Zoology"],
      ["Economics", "Business", "Finance"],
      ["Art", "Music", "Drama"]
    ];
    
    const names = [
      "Aarav Sharma", "Ananya Patel", "Vihaan Kumar", "Saanvi Singh", "Advait Joshi",
      "Diya Reddy", "Ishaan Gupta", "Myra Desai", "Vivaan Malhotra", "Anika Agarwal",
      "Arjun Mehta", "Pooja Choudhury", "Reyansh Trivedi", "Aahana Bhatt", "Mohit Kapoor",
      "Sneha Menon", "Krishna Iyer", "Navya Nair", "Rohan Sengupta", "Tara Krishnan"
    ];
    
    const roles = [
      "Subject Expert", "Senior Educator", "Curriculum Specialist", "Exam Coach",
      "Learning Strategist", "Concept Developer", "Academic Mentor", "Study Guide"
    ];
    
    const qualifications = [
      "Ph.D Education", "M.Ed with Distinction", "B.Ed, M.A", "M.Sc, B.Ed",
      "Post Graduate Diploma", "Doctorate in Education", "Double Masters", "Gold Medalist"
    ];
    
    const subjectSet = subjects[i % subjects.length];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    const randomQualification = qualifications[Math.floor(Math.random() * qualifications.length)];
    
    return {
      id: i + 5,
      name: randomName,
      role: `${subjectSet[0]} ${randomRole}`,
      experience: `${5 + (i % 20)}+ years`,
      qualification: randomQualification,
      expertise: [subjectSet[0], subjectSet[1], subjectSet[2]],
      bio: "Dedicated educator focused on student success and conceptual understanding",
      image: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
      rating: (4.5 + (Math.random() * 0.5)).toFixed(1),
      subjects: subjectSet,
      social: { linkedin: "#", twitter: "#", email: `teacher${i}@example.com` },
    };
  });

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 300 : 400;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 300 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Educators
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Passionate teachers dedicated to unlocking every student's potential through personalized learning
          </p>
        </motion.div>

        {/* Featured Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredTeamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image */}
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-200 text-sm">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full flex items-center text-xs sm:text-sm font-medium">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {member.rating}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  <span className="text-xs sm:text-sm text-gray-600">{member.qualification}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  <span className="text-xs sm:text-sm text-gray-600">{member.experience} experience</span>
                </div>

                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                <div className="mb-4 sm:mb-5">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-600">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-red-500">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Message
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Teachers Horizontal Scroll Section */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Explore Our 250+ Expert Teachers
            </h3>
            <div className="flex space-x-2 self-end sm:self-auto">
              <button 
                onClick={scrollLeft}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-6 gap-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allTeachers.map((teacher) => (
              <div 
                key={teacher.id} 
                className="flex-shrink-0 w-56 sm:w-64 bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-36 sm:h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <h4 className="text-white font-semibold text-sm truncate">{teacher.name}</h4>
                    <p className="text-blue-200 text-xs truncate">{teacher.role}</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full flex items-center text-xs font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    {teacher.rating}
                  </div>
                </div>
                
                <div className="p-3 sm:p-4">
                  <div className="flex items-center mb-2">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-1" />
                    <span className="text-xs text-gray-600">{teacher.experience}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {teacher.subjects.slice(0, 2).map((subject, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                    {teacher.subjects.length > 2 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        +{teacher.subjects.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Stand Out Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
            Why Our Teachers Stand Out
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                title: "Top Qualifications",
                desc: "All teachers hold advanced degrees from prestigious institutions with specialized training",
              },
              {
                icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                title: "Proven Results",
                desc: "Our students show 40% better performance compared to traditional learning methods",
              },
              {
                icon: <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                title: "Innovative Methods",
                desc: "Customized teaching approaches tailored to individual learning styles",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  {item.icon}
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default OurTeam;