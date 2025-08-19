"use client";
import React, { useState } from "react";
import {
  Users,
  MessageCircle,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Calendar,
  DollarSign,
  Star,
  UserPlus,
} from "lucide-react";

const ParentDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState("Emma Wilson");
  const [activeTab, setActiveTab] = useState("Overview");

  const students = [
    { name: "Emma Wilson", grade: "10th Grade", id: "emma" },
    { name: "Liam Chen", grade: "11th Grade", id: "liam" },
    { name: "Sophia Rodriguez", grade: "9th Grade", id: "sophia" },
  ];

  const tabs = [
    "Overview",
    "Grades",
    "Assignments",
    "Fees",
    "Reviews",
    "Referrals",
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Average Grade",
      value: "0.0%",
      subtitle: "This semester",
      trend: "+2.5%",
      trendUp: true,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Assignments",
      value: "0/0",
      subtitle: "Completed",
      trend: null,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Attendance Rate",
      value: "100.0%",
      subtitle: "This month",
      trend: "+1.2%",
      trendUp: true,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Messages",
      value: "3",
      subtitle: "From teachers",
      trend: null,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  const upcomingEvents = [
    {
      title: "Parent-Teacher Conference",
      time: "Tomorrow at 3:00 PM",
      icon: <BookOpen className="w-5 h-5" />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      badge: "Tomorrow",
    },
    {
      title: "Science Fair Presentation",
      time: "Friday at 10:00 AM",
      icon: <Calendar className="w-5 h-5" />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      badge: "Friday",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Parent Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Monitor your child's academic journey and stay connected
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">3 Students</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Contact Teacher
            </button>
          </div>
        </div>

        {/* Student Selection */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Select Student</h2>
          <div className="flex gap-4 flex-wrap">
            {students.map((student) => (
              <button
                key={student.id}
                onClick={() => setSelectedStudent(student.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedStudent === student.name
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {student.name} - Grade {student.grade}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}
              >
                <div className={stat.iconColor}>{stat.icon}</div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-600 font-medium">{stat.title}</h3>
                {stat.trend && (
                  <span
                    className={`text-sm font-medium flex items-center gap-1 ${
                      stat.trendUp ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-medium transition-all relative ${
                  activeTab === tab
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Grades */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold">Recent Grades</h2>
              </div>
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-2">No grades available yet</p>
                <p className="text-gray-400 text-sm">
                  Grades will appear here once assignments are graded
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${event.bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <div className={event.iconColor}>{event.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{event.time}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                      {event.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold">Fee Status</h3>
            </div>
            <p className="text-2xl font-bold text-green-600 mb-1">Paid</p>
            <p className="text-gray-500 text-sm">All fees up to date</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Reviews</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">4.8/5</p>
            <p className="text-gray-500 text-sm">Average rating</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold">Referrals</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">2</p>
            <p className="text-gray-500 text-sm">Successful referrals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
