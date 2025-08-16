"use client";
import React from 'react';
import { GraduationCap, Award, BookOpen, Languages, Star, MessageSquare, Mail } from 'lucide-react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Mathematics Expert',
      experience: '12+ years',
      qualification: 'Ph.D in Mathematics, IIT Bombay',
      expertise: ['CBSE/ICSE Curriculum', 'Competitive Exams', 'Calculus'],
      bio: 'Specializes in making complex concepts simple with real-world applications',
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      rating: 4.9,
      subjects: ['Algebra', 'Trigonometry', 'Calculus'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya.sharma@example.com'
      }
    },
    {
      id: 2,
      name: 'Prof. Ramesh Patel',
      role: 'Science Mentor',
      experience: '15+ years',
      qualification: 'M.Sc Physics, B.Ed',
      expertise: ['Conceptual Physics', 'Practical Labs', 'Olympiad Training'],
      bio: 'Passionate about experimental learning and scientific inquiry',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4.8,
      subjects: ['Physics', 'Chemistry', 'Science Olympiad'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ramesh.patel@example.com'
      }
    },
    {
      id: 3,
      name: 'Neha Gupta',
      role: 'English Language Specialist',
      experience: '8+ years',
      qualification: 'MA English, Cambridge CELTA',
      expertise: ['IELTS/TOEFL', 'Creative Writing', 'Literature Analysis'],
      bio: 'Focuses on communication skills and critical thinking through literature',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 4.7,
      subjects: ['English Grammar', 'Literature', 'Communication Skills'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'neha.gupta@example.com'
      }
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Coding Instructor',
      experience: '10+ years',
      qualification: 'B.Tech Computer Science, IIT Delhi',
      expertise: ['Python', 'Web Development', 'Competitive Programming'],
      bio: 'Believes in project-based learning to build practical skills',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 4.9,
      subjects: ['Python', 'JavaScript', 'Data Structures'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'vikram.singh@example.com'
      }
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Educators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate teachers dedicated to unlocking every student's potential through personalized learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full flex items-center text-sm font-medium">
                  <Star className="w-4 h-4 mr-1" />
                  {member.rating}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{member.qualification}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{member.experience} experience</span>
                </div>

                <p className="text-gray-700 mb-4">{member.bio}</p>

                <div className="mb-5">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-red-500">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Our Teachers Stand Out</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Top Qualifications</h4>
              <p className="text-gray-600">All teachers hold advanced degrees from prestigious institutions with specialized training</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Proven Results</h4>
              <p className="text-gray-600">Our students show 40% better performance compared to traditional learning methods</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Languages className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Innovative Methods</h4>
              <p className="text-gray-600">Customized teaching approaches tailored to individual learning styles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;