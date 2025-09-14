"use client";
import React, { useEffect, useState } from "react";
import {
  BookOpen,
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
import { upcomingEvents } from "./upcomingEvent";
import { stats } from "./statsData";
import { tabs } from "./tabData";
import { students } from "./studentData";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { checkMyForm, getMyAllChild } from "@/service/parentFormService";

const ParentDashboard = () => {
  const { user, token } = useAuth();
  const [myForm, setMyForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const router = useRouter();
  const [studentForm, setStudentForm] = useState(null);

  useEffect(() => {
    const fetchStudentForm = async () => {
      setLoading(true);
      try {
        const response = await getMyAllChild(token);

        setStudentForm(response.data.data);
      } catch (error) {
        console.error("Error fetching student form:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchStudentForm();
    }
  }, [token, router]);

  useEffect(() => {
    const fetchMyForm = async () => {
      setLoading(true);
      try {
        const response = await checkMyForm(token);

        // ✅ Handle nested data properly
        if (
          !response ||
          !response.success ||
          !response.data ||
          !Array.isArray(response.data.data) ||
          response.data.data.length === 0
        ) {
          if (user?.role === "parent") {
            router.push("/parent");
          }
          return;
        }

        // ✅ Set form data correctly
        setMyForm(response.data.data);
      } catch (error) {
        console.error("Error fetching my form:", error);
        router.push("/parent"); // fallback redirect
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchMyForm();
    }
  }, [token, router]);

  // Separate useEffect for redirect
  useEffect(() => {
    if (shouldRedirect) {
      router.push("/parent");
    }
  }, [shouldRedirect, router]);

  // Prevent rendering if redirecting
  if (shouldRedirect) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to form...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6"></div>
        <DashboardHeader students={studentForm} />
        {user?.role === "parent" && (
          <StudentSelector
            students={studentForm}
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
          />
        )}
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
        ) : activeTab === "Reviews" ? (
          <ReviewManagement />
        ) : activeTab === "Grades" ? (
          <GradeManagement />
        ) : activeTab === "Assignments" ? (
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
