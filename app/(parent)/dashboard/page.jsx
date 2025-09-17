"use client";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  User,
  BookOpen,
  MapPin,
  Clock,
  DollarSign,
  Monitor,
  Wifi,
  School,
  Target,
  Award,
  Map,
} from "lucide-react";
import { TabNavigation } from "@/components/common/dahboard/Tabnavigation";
import { StudentSelector } from "@/components/common/dahboard/Studentselector";
import { EventCard } from "@/components/common/dahboard/eventcard";
import { FeatureCard } from "@/components/common/dahboard/Featurecard";
import { DashboardHeader } from "@/components/common/dahboard/Header";
import { FeeManagement } from "@/components/common/dahboard/FeeComponent";
import { AssignmentManagement } from "@/components/common/dahboard/Assignment";
import { upcomingEvents } from "./upcomingEvent";
import { tabs } from "./tabData";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { checkMyForm, getMyAllChild } from "@/service/parentFormService";
import { StudentDetailsCard } from "@/components/common/dahboard/SelectedStudent";
import { StudentProfileHeader } from "@/components/common/dahboard/SelectedStudentHeader";

// Student Details Card Component

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
        // Set the first student as selected by default
        if (response.data.data && response.data.data.length > 0) {
          setSelectedStudent(response.data.data[0]);
        }
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

        setMyForm(response.data.data);
      } catch (error) {
        console.error("Error fetching my form:", error);
        router.push("/parent");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchMyForm();
    }
  }, [token, router, user]);

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/parent");
    }
  }, [shouldRedirect, router]);

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
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
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

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content Area */}
        {activeTab === "Fees" ? (
          <FeeManagement />
        ) : activeTab === "Assignments" ? (
          <AssignmentManagement />
        ) : (
          <>
            {selectedStudent && (
              <StudentProfileHeader student={selectedStudent} />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Student Details */}
              <div className="lg:col-span-2">
                {selectedStudent && (
                  <StudentDetailsCard student={selectedStudent} />
                )}

                {/* Quick Stats Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    title="Fee Status"
                    value="Paid"
                    description="All fees up to date"
                    valueColor="text-green-600"
                    icon={<DollarSign className="w-5 h-5" />}
                  />
                  <FeatureCard
                    title="Sessions Completed"
                    value="12"
                    description="This month"
                    valueColor="text-blue-600"
                    icon={<BookOpen className="w-5 h-5" />}
                  />
                  <FeatureCard
                    title="Next Session"
                    value="Tomorrow"
                    description="3:00 PM - 4:30 PM"
                    valueColor="text-purple-600"
                    icon={<Clock className="w-5 h-5" />}
                  />
                </div>
              </div>

              {/* Right Column - Upcoming Events */}
              <div className="space-y-8">
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

                {/* Quick Actions Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Schedule New Session
                    </button>
                    <button className="w-full bg-green-100 hover:bg-green-200 text-green-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      View Progress Report
                    </button>
                    <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Contact Tutor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;
