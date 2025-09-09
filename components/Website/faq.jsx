"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, UserCheck, GraduationCap, Palette, Code, Users, Target, BarChart3, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Faqsection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "How is your tutoring personalized for my child?",
      answer: "We start with a diagnostic test to find learning gaps. Then a dedicated tutor creates a custom plan focusing only on those weak areas.",
      icon: <UserCheck className="w-6 h-6 text-blue-600" />
    },
    {
      id: 2,
      question: "I need a tutor for JEE/NEET. How does 1-on-1 help?",
      answer: "1-on-1 sessions focus entirely on your doubt resolution and weak topics. This is more efficient than large coaching classes where you can get left behind.",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      id: 3,
      question: "Do you cover all school boards like GSEB, CBSE, and ICSE?",
      answer: "Yes, we have specialized tutors for all boards, including Gujarat State Board (GSEB), CBSE, and ICSE, across Vadodara.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />
    },
    {
      id: 4,
      question: "Can we get a tutor for creative subjects like Arts or Music?",
      answer: "Absolutely. We offer personalized lessons for Arts, Craft, Music, and more, tailored to the student's interest and skill level.",
      icon: <Palette className="w-6 h-6 text-blue-600" />
    },
    {
      id: 5,
      question: "Do you provide tutoring for Computer Science and coding?",
      answer: "Yes. We offer 1-on-1 sessions for programming languages like Python and Java, as well as web design, based on your project needs.",
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      id: 6,
      question: "What if the assigned tutor is not a good fit for my child?",
      answer: "We offer a quick and free replacement. Finding the right personality and teaching-style match is crucial for effective learning.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      id: 7,
      question: "Do you help with school-specific entrance exams in Vadodara?",
      answer: "Yes. Our tutors provide targeted prep for entrance exams of local schools, focusing on their specific patterns and requirements.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      id: 8,
      question: "How do you track my child's progress?",
      answer: "Parents receive regular progress updates after sessions. Our academic managers also ensure the custom learning plan is on track.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />
    },
    {
      id: 9,
      question: "Is home tuition available in all areas of Vadodara?",
      answer: "We serve all major areas like Alkapuri, Akota, Manjalpur, and Nizampura. Tutor availability for your specific location is confirmed upon booking.",
      icon: <MapPin className="w-6 h-6 text-blue-600" />
    },
    {
      id: 10,
      question: "How do I begin the process?",
      answer: "Simply contact us. We'll understand your needs and match you with a specialist tutor for a personalized learning journey.",
      icon: <Phone className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our personalized tutoring services in Vadodara.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{faq.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 ml-10 border-t border-gray-100">
                      <p className="text-gray-600 mt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us directly and we'll be happy to answer any specific questions you have about our tutoring services.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}