"use client";
import React, { useState } from "react";
import {
  MessageCircle,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Calendar,
  DollarSign,
  Star,
  UserPlus,
} from "lucide-react";
import { StatCard } from "@/components/common/dahboard/StatCard";
import { TabNavigation } from "@/components/common/dahboard/Tabnavigation";
import { StudentSelector } from "@/components/common/dahboard/Studentselector";
import { EventCard } from "@/components/common/dahboard/eventcard";
import { FeatureCard } from "@/components/common/dahboard/Featurecard";
import { DashboardHeader } from "@/components/common/dahboard/Header";
import { EmptyState } from "@/components/common/dahboard/Emptystate";
import { FeeManagement } from "@/components/common/dahboard/FeeComponent";
import { ReviewManagement } from "@/components/common/dahboard/Review";
import { GradeManagement } from "@/components/common/dahboard/GradeManagemnt";
import { AssignmentManagement } from "@/components/common/dahboard/Assignment";

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
        <DashboardHeader />

        <StudentSelector
          students={students}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              trend={stat.trend}
              trendUp={stat.trendUp}
              bgColor={stat.bgColor}
              iconColor={stat.iconColor}
            />
          ))}
        </div>

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content Area */}
        {activeTab === "Fees" ? (
          <FeeManagement />
        ) : 
        activeTab === "Reviews" ? (
          <ReviewManagement />
        ) : 
        activeTab === "Grades" ? (
          <GradeManagement />
        ) : 
        activeTab === "Assignments" ? (
          <AssignmentManagement />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Grades */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl font-semibold">Recent Grades</h2>
                  </div>
                  <EmptyState
                    icon={<BookOpen className="w-8 h-8 text-gray-400" />}
                    title="No grades available yet"
                    description="Grades will appear here once assignments are graded"
                  />
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
                      <EventCard
                        key={index}
                        title={event.title}
                        time={event.time}
                        icon={event.icon}
                        bgColor={event.bgColor}
                        iconColor={event.iconColor}
                        badge={event.badge}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                }
                title="Fee Status"
                value="Paid"
                description="All fees up to date"
                valueColor="text-green-600"
              />

              <FeatureCard
                icon={
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                }
                title="Reviews"
                value="4.8/5"
                description="Average rating"
              />

              <FeatureCard
                icon={
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-purple-600" />
                  </div>
                }
                title="Referrals"
                value="2"
                description="Successful referrals"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;
