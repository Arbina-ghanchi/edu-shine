import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle, Send, User, BookOpen } from 'lucide-react';

export default function GetInTouchPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const contactMethods = [
    {
      id: 1,
      title: "Call Us",
      subtitle: "Available 24/7 for support",
      detail: "+1 (555) 123-4567",
      icon: Phone,
      action: "tel:+15551234567",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Email Us",
      subtitle: "Send us your queries",
      detail: "info@edu-shine.com",
      icon: Mail,
      action: "mailto:info@edu-shine.com",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Visit Us",
      subtitle: "Our main office",
      detail: "123 Education St, Learning City",
      icon: MapPin,
      action: "#",
      color: "from-amber-400 to-amber-600"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="header"
            data-animate
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Have questions? We're here to help you get started on your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="contact-methods"
            data-animate
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible['contact-methods'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className={`relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                    isVisible['contact-methods'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => {
                    if (method.action.startsWith('tel:') || method.action.startsWith('mailto:')) {
                      window.location.href = method.action;
                    }
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  <div className="relative bg-white p-4 sm:p-6 md:p-8 h-full group-hover:bg-opacity-90 transition-all duration-500">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6 relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="mb-3 sm:mb-4 relative z-10">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-white transition-colors duration-500">
                        {method.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-100 transition-colors duration-500">
                        {method.subtitle}
                      </p>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg group-hover:text-white transition-colors duration-500 break-all sm:break-normal">
                        {method.detail}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500 transform translate-x-0 group-hover:translate-x-2 relative z-10">
                      <span className="text-xs sm:text-sm font-medium mr-2">
                        {method.title === "Call Us" ? "Call now" : method.title === "Email Us" ? "Send email" : "Get directions"}
                      </span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div 
            id="form-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
              isVisible['form-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Send Us a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Message</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div
            id="contact-form"
            data-animate
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${
              isVisible['contact-form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md group-hover:scale-[1.01]"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md group-hover:scale-[1.01]"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Subject *
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md group-hover:scale-[1.01]"
                  placeholder="What's this about?"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Message *
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:shadow-md group-hover:scale-[1.01] sm:rows-6"
                  placeholder="Tell us more about what you need help with..."
                />
              </div>
            </div>

            <div className="text-center pt-2 sm:pt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:shadow-xl transition-all duration-300 shadow-lg group relative overflow-hidden transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="cta-section"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-20 sm:w-40 h-20 sm:h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 bg-white/10 rounded-full blur-xl"></div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 relative z-10 text-center">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto relative z-10 text-center">
                Join thousands of students who have transformed their academic performance with our expert guidance
              </p>
              <div className="text-center">
                <button 
                  onClick={() => alert('Redirecting to course enrollment!')}
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold text-sm sm:text-base rounded-lg hover:bg-gray-100 shadow-lg group relative z-10 overflow-hidden transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-white/90 group-hover:bg-white transition-all duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    <span>Start Your Learning Journey</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div 
            id="info-section"
            data-animate
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 ${
              isVisible['info-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { icon: Clock, title: "Quick Response", desc: "We respond within 2 hours" },
              { icon: Phone, title: "24/7 Support", desc: "Always here when you need us" },
              { icon: MessageCircle, title: "Expert Guidance", desc: "Professional educational advice" },
              { icon: BookOpen, title: "Free Consultation", desc: "Initial assessment at no cost" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`text-center bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                    isVisible['info-section'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => alert(`Learn more about ${item.title}!`)}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-inner">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}