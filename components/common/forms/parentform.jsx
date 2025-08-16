
"use client";
import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, BookOpen, Calendar, Clock, Users, Target, Upload, Star, Home, GraduationCap, DollarSign } from 'lucide-react';

export const ParentForm = () => {
  const [formData, setFormData] = useState({
    // Parent Information
    parentName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    address: '',
    occupation: '',
    
    // Student Information
    studentName: '',
    studentAge: '',
    studentGrade: '',
    currentSchool: '',
    studentGender: '',
    
    // Academic Requirements
    subjectsNeeded: '',
    currentAcademicLevel: '',
    specificChallenges: '',
    learningGoals: '',
    previousTutoringExperience: '',
    
    // Tuition Preferences
    preferredMode: '',
    preferredDays: '',
    preferredTime: '',
    sessionDuration: '',
    budgetRange: '',
    
    // Teacher Preferences
    teacherGenderPreference: '',
    teacherExperiencePreference: '',
    teachingStylePreference: '',
    languagePreference: '',
    
    // Logistics
    homeAddress: '',
    willingToTravel: '',
    hasStudyRoom: false,
    internetConnection: '',
    deviceAvailable: '',
    additionalRequirements: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Parent Form submitted:', formData);
    alert('Thank you for registering! We will find suitable teachers for your child and contact you soon.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Parent Registration</h2>
        <span className="text-sm font-medium text-gray-500">Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">Parent Information</h3>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name *</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91 98765 43210"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alternate Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="alternatePhone"
                value={formData.alternatePhone}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Alternate number"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your profession"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Enter your complete address"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">Student Information</h3>
        <p className="text-gray-600">Tell us about your child</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter student's full name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Student Age *</label>
            <input
              type="number"
              name="studentAge"
              value={formData.studentAge}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Age"
              min="3"
              max="25"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Grade/Class *</label>
            <select
              name="studentGrade"
              value={formData.studentGrade}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Grade</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
              <option value="College">College</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
            <select
              name="studentGender"
              value={formData.studentGender}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current School/Institution *</label>
          <input
            type="text"
            name="currentSchool"
            value={formData.currentSchool}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Name of current school or college"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">Academic Requirements</h3>
        <p className="text-gray-600">What subjects and help do you need?</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subjects Needed *</label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="subjectsNeeded"
              value={formData.subjectsNeeded}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="List all subjects you need help with (e.g., Mathematics, Physics, English, Hindi)"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Academic Level *</label>
          <select
            name="currentAcademicLevel"
            value={formData.currentAcademicLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select Level</option>
            <option value="Excellent">Excellent (90%+ marks)</option>
            <option value="Good">Good (75-90% marks)</option>
            <option value="Average">Average (60-75% marks)</option>
            <option value="Below Average">Below Average (40-60% marks)</option>
            <option value="Struggling">Struggling (Below 40%)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Specific Academic Challenges</label>
          <div className="relative">
            <Target className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="specificChallenges"
              value={formData.specificChallenges}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe any specific difficulties your child faces in studies"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Learning Goals *</label>
          <div className="relative">
            <Star className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="learningGoals"
              value={formData.learningGoals}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="What do you want to achieve through tutoring? (e.g., improve grades, exam preparation, concept clarity)"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Previous Tutoring Experience</label>
          <select
            name="previousTutoringExperience"
            value={formData.previousTutoringExperience}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="First Time">First time seeking tuition</option>
            <option value="Previous Good Experience">Had good experience before</option>
            <option value="Previous Bad Experience">Had unsatisfactory experience</option>
            <option value="Currently Taking">Currently taking tuition</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">Tuition Preferences</h3>
        <p className="text-gray-600">When and how would you like the classes?</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Teaching Mode *</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="preferredMode"
                value="Home Tuition"
                checked={formData.preferredMode === 'Home Tuition'}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Home Tuition</div>
                <div className="text-sm text-gray-500">Teacher comes to your home</div>
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="preferredMode"
                value="Online Classes"
                checked={formData.preferredMode === 'Online Classes'}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Online Classes</div>
                <div className="text-sm text-gray-500">Virtual learning sessions</div>
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="preferredMode"
                value="Either"
                checked={formData.preferredMode === 'Either'}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Either</div>
                <div className="text-sm text-gray-500">Open to both options</div>
              </div>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Days *</label>
            <select
              name="preferredDays"
              value={formData.preferredDays}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Days</option>
              <option value="Weekdays Only">Weekdays Only (Mon-Fri)</option>
              <option value="Weekends Only">Weekends Only (Sat-Sun)</option>
              <option value="All Days">All Days (Mon-Sun)</option>
              <option value="Flexible">Flexible Schedule</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Time</option>
              <option value="Morning (6 AM - 12 PM)">Morning (6 AM - 12 PM)</option>
              <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
              <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
              <option value="Night (9 PM - 11 PM)">Night (9 PM - 11 PM)</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Duration *</label>
            <select
              name="sessionDuration"
              value={formData.sessionDuration}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Duration</option>
              <option value="1 Hour">1 Hour</option>
              <option value="1.5 Hours">1.5 Hours</option>
              <option value="2 Hours">2 Hours</option>
              <option value="2.5 Hours">2.5 Hours</option>
              <option value="3 Hours">3 Hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (per month) *</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Budget</option>
                <option value="₹2,000 - ₹5,000">₹2,000 - ₹5,000</option>
                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                <option value="₹10,000 - ₹15,000">₹10,000 - ₹15,000</option>
                <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                <option value="₹25,000+">₹25,000+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">Teacher Preferences</h3>
        <p className="text-gray-600">What kind of teacher are you looking for?</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teacher Gender Preference</label>
            <select
              name="teacherGenderPreference"
              value={formData.teacherGenderPreference}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">No Preference</option>
              <option value="Male">Male Teacher</option>
              <option value="Female">Female Teacher</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience Preference</label>
            <select
              name="teacherExperiencePreference"
              value={formData.teacherExperiencePreference}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">No Preference</option>
              <option value="Fresher">Fresher (0-2 years)</option>
              <option value="Experienced">Experienced (3-10 years)</option>
              <option value="Highly Experienced">Highly Experienced (10+ years)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Style Preference</label>
          <div className="relative">
            <Target className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="teachingStylePreference"
              value={formData.teachingStylePreference}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe the teaching approach you prefer (e.g., patient, interactive, strict, concept-based)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Language Preference</label>
          <input
            type="text"
            name="languagePreference"
            value={formData.languagePreference}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., English, Hindi, Gujarati, or combination"
          />
        </div>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">Logistics & Final Details</h3>
        <p className="text-gray-600">Setup and additional requirements</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Home Address for Tuition</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleInputChange}
              rows={2}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Complete address where tuition will be conducted (if different from above)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Willing to Travel (for teacher's place/center)</label>
            <select
              name="willingToTravel"
              value={formData.willingToTravel}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="Yes, within 2km">Yes, within 2km</option>
              <option value="Yes, within 5km">Yes, within 5km</option>
              <option value="Yes, within 10km">Yes, within 10km</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Internet Connection (for online classes)</label>
            <select
              name="internetConnection"
              value={formData.internetConnection}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="High Speed Broadband">High Speed Broadband</option>
              <option value="Mobile Data">Mobile Data</option>
              <option value="Average Speed">Average Speed</option>
              <option value="Poor Connection">Poor Connection</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Device Available for Online Classes</label>
            <select
              name="deviceAvailable"
              value={formData.deviceAvailable}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="Laptop/Desktop">Laptop/Desktop</option>
              <option value="Tablet">Tablet</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Multiple Devices">Multiple Devices</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasStudyRoom"
                checked={formData.hasStudyRoom}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500 rounded"
              />
              <span className="font-medium text-gray-900">We have a dedicated study room</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
          <textarea
            name="additionalRequirements"
            value={formData.additionalRequirements}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Any special requirements, expectations, or additional information you'd like to share"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• We'll review your requirements and match you with suitable teachers</li>
            <li>• You'll receive teacher profiles within 24-48 hours</li>
            <li>• You can interview and select the teacher of your choice</li>
            <li>• We'll help coordinate the first class and ongoing sessions</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {renderProgressBar()}
          
          <div className="min-h-[600px]">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
            {currentStep === 5 && renderStep5()}
            {currentStep === 6 && renderStep6()}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    step === currentStep
                      ? 'bg-blue-600'
                      : step < currentStep
                      ? 'bg-blue-300'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentForm;