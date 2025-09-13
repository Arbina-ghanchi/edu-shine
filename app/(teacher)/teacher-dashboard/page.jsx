"use client";
import React, { useState, useEffect } from "react";
import {
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  FileText,
  Clock,
  Award,
  TrendingUp,
  MessageSquare,
  ChevronDown,
  Filter,
  Download,
  Menu,
  X,
  Edit,
  Trash2,
  Send,
  User,
} from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { recentActivities } from "./recetnActivites";
import { upcomingEvents } from "./upcoming";
import { classSchedule } from "./classSchedule";
import { students } from "./student";
import { assignments } from "./assignment";
import { messages } from "./message";
import { useAuth } from "@/context/AuthContext";
import { getTeacherForm } from "@/service/teacherFormService";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedClass, setSelectedClass] = useState("Mathematics - Grade 10A");
  const [showProfile, setShowProfile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const { user: teacher, token } = useAuth();
  const [myForm, setMyForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMyForm = async () => {
      setLoading(true);
      try {
        const response = await getTeacherForm(token);

        if (response && response.success && response.data) {
          const formData = response.data;

          const hasFormData = formData && Object.keys(formData).length > 0;

          if (hasFormData) {
            setMyForm(formData);
          } else {
            console.log("No form data found, redirecting to teacher form...");
            if (teacher?.role === "teacher") {
              router.push("/teacher");
            }
          }
        } else {
          if (teacher?.role === "teacher") {
            router.push("/teacher");
          }
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    if (token && teacher?.role === "teacher") {
      fetchMyForm();
    }
  }, [token, teacher, router]);
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mock user data
  const user = {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@school.edu",
    role: "teacher",
    avatar: null,
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/");
  };

  // Sample data
  const classes = [
    "Mathematics - Grade 10A",
    "Physics - Grade 11B",
    "Chemistry - Grade 12A",
  ];

  const renderSidebar = () => (
    <>
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        ${isMobile ? "fixed" : "fixed"} 
        ${isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"}
        w-64 bg-slate-900 text-white h-screen left-0 top-0 overflow-y-auto z-50 transition-transform duration-300 ease-in-out
      `}
      >
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              <div>
                <h1 className="text-lg md:text-xl font-bold">EduDash</h1>
                <p className="text-xs md:text-sm text-slate-400">
                  Teacher Portal
                </p>
              </div>
            </div>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <nav className="space-y-1 md:space-y-2">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "students", label: "Students", icon: Users },
              { id: "assignments", label: "Assignments", icon: FileText },
              { id: "classes", label: "Classes", icon: BookOpen },
              { id: "calendar", label: "Calendar", icon: Calendar },
              { id: "messages", label: "Messages", icon: MessageSquare },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobile) setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 md:px-4 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );

  const renderHeader = () => (
    <div className="bg-white shadow-sm border-b border-slate-200 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 capitalize">
            {activeTab}
          </h2>
          {activeTab !== "settings" && activeTab !== "calendar" && (
            <div className="relative hidden sm:block">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Right side: search, bell, profile */}
        <div className="flex items-center space-x-2 md:space-x-4 relative">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          <button className="md:hidden p-2 text-slate-600 hover:text-slate-800">
            <Search className="w-5 h-5" />
          </button>

          <button className="relative p-2 text-slate-600 hover:text-slate-800">
            <Bell className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <div
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
              onMouseEnter={() => setShowProfile(true)}
            >
              {user?.name?.charAt(0) || "T"}
            </div>

            {/* Dropdown */}
            <div
              className={`absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg p-4 z-50 transition-opacity duration-200 ${
                showProfile ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <h3 className="font-semibold text-slate-800">
                {user?.name || "Teacher Name"}
              </h3>
              <p className="text-slate-500 text-sm">
                {user?.email || "teacher@example.com"}
              </p>
              <p className="text-slate-500 text-sm capitalize mt-1">
                Role: {user?.role || "teacher"}
              </p>
              <hr className="my-3" />
              <button
                onClick={() => router.push("/profile")}
                className="w-full px-4 py-2 text-left text-blue-600 hover:bg-blue-50 rounded-lg font-medium mb-2"
              >
                View Profile
              </button>
              <button
                onClick={logout}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile class selector */}
      {activeTab !== "settings" && activeTab !== "calendar" && (
        <div className="mt-4 sm:hidden">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          {
            title: "Total Students",
            value: "124",
            icon: Users,
            color: "blue",
            change: "+8%",
          },
          {
            title: "Active Assignments",
            value: "12",
            icon: FileText,
            color: "green",
            change: "+15%",
          },
          {
            title: "Avg. Grade",
            value: "87%",
            icon: Award,
            color: "yellow",
            change: "+3%",
          },
          {
            title: "Attendance Rate",
            value: "92%",
            icon: TrendingUp,
            color: "purple",
            change: "+5%",
          },
        ].map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-slate-600 text-xs md:text-sm">
                  {stat.title}
                </p>
                <p className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                  {stat.value}
                </p>
                <p
                  className={`text-xs md:text-sm mt-2 font-medium ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "green"
                      ? "text-green-600"
                      : stat.color === "yellow"
                      ? "text-yellow-600"
                      : "text-purple-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  stat.color === "blue"
                    ? "bg-blue-100"
                    : stat.color === "green"
                    ? "bg-green-100"
                    : stat.color === "yellow"
                    ? "bg-yellow-100"
                    : "bg-purple-100"
                }`}
              >
                <stat.icon
                  className={`w-5 h-5 md:w-6 md:h-6 ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "green"
                      ? "text-green-600"
                      : stat.color === "yellow"
                      ? "text-yellow-600"
                      : "text-purple-600"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Recent Activities
            </h3>
            <button className="text-blue-600 text-sm hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 hover:bg-slate-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-800 text-sm">{activity.title}</p>
                  <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Upcoming Events
            </h3>
            <button className="text-blue-600 text-sm hover:text-blue-700">
              View Calendar
            </button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center space-x-4 p-3 hover:bg-slate-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs text-green-600 font-medium">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-xs text-green-600">
                    {event.date.split(" ")[1]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-800 text-sm font-medium">
                    {event.title}
                  </p>
                  <p className="text-slate-500 text-xs">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            <Plus className="w-4 h-4" />
            <span>Add Student</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 md:p-4 font-medium text-slate-700 text-sm">
                  Student
                </th>
                <th className="text-left p-3 md:p-4 font-medium text-slate-700 text-sm">
                  Grade
                </th>
                <th className="text-left p-3 md:p-4 font-medium text-slate-700 text-sm">
                  Attendance
                </th>
                <th className="text-left p-3 md:p-4 font-medium text-slate-700 text-sm hidden md:table-cell">
                  Last Active
                </th>
                <th className="text-left p-3 md:p-4 font-medium text-slate-700 text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="p-3 md:p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">
                          {student.name.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="font-medium text-slate-800 text-sm block">
                          {student.name}
                        </span>
                        <span className="text-slate-500 text-xs md:hidden">
                          {student.lastActive}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 md:p-4">
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                        student.grade.startsWith("A")
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {student.grade}
                    </span>
                  </td>
                  <td className="p-3 md:p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 md:w-20 bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-xs md:text-sm text-slate-600">
                        {student.attendance}%
                      </span>
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-slate-600 text-sm hidden md:table-cell">
                    {student.lastActive}
                  </td>
                  <td className="p-3 md:p-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View
                      </button>
                      <button className="text-slate-500 hover:text-slate-700">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            <Plus className="w-4 h-4" />
            <span>Create Assignment</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-slate-800 text-sm md:text-base">
                {assignment.title}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                  assignment.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {assignment.status}
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-4">
              {assignment.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Due Date:</span>
                <span className="font-medium">{assignment.dueDate}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Submissions:</span>
                <span className="font-medium">
                  {assignment.submitted}/{assignment.total}
                </span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (assignment.submitted / assignment.total) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View Details
              </button>
              <div className="flex items-center space-x-2">
                <button className="text-slate-600 hover:text-slate-700">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderClasses = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            <Plus className="w-4 h-4" />
            <span>Add Class</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {classes.map((classItem, index) => {
          const scheduleItem = classSchedule[index] || {};
          return (
            <div
              key={classItem}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg">
                    {scheduleItem.subject || classItem.split(" - ")[0]}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {scheduleItem.grade || classItem.split(" - ")[1]}
                  </p>
                </div>
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Time:</span>
                  <span className="font-medium">
                    {scheduleItem.time || "TBD"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Room:</span>
                  <span className="font-medium">
                    {scheduleItem.room || "TBD"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Students:</span>
                  <span className="font-medium">{30 - index * 2}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View Details
                </button>
                <div className="flex items-center space-x-2">
                  <button className="text-slate-600 hover:text-slate-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-slate-600 hover:text-slate-700">
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCalendar = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Widget */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800">
                August 2024
              </h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                  <ChevronDown className="w-4 h-4 rotate-90" />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="p-3 text-center text-sm font-medium text-slate-600"
                >
                  {day}
                </div>
              ))}

              {/* Calendar days - simplified for demo */}
              {Array.from({ length: 35 }, (_, i) => {
                const dayNum = i - 4; // Adjust for month start
                const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                const hasEvent = [15, 22, 25, 30].includes(dayNum);

                return (
                  <div
                    key={i}
                    className={`p-2 md:p-3 text-center text-sm rounded-lg cursor-pointer transition-colors ${
                      isCurrentMonth
                        ? hasEvent
                          ? "bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200"
                          : "text-slate-800 hover:bg-slate-100"
                        : "text-slate-300"
                    }`}
                  >
                    {isCurrentMonth ? dayNum : ""}
                    {hasEvent && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mt-1"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Today's Schedule
            </h3>
            <div className="space-y-3">
              {classSchedule.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-800 text-sm">
                      {item.subject}
                    </p>
                    <p className="text-slate-600 text-xs">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                <Plus className="w-4 h-4" />
                <span>Schedule Event</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm">
                <Calendar className="w-4 h-4" />
                <span>View Full Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            <Send className="w-4 h-4" />
            <span>New Message</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-4 md:p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800">Messages</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 md:p-6 hover:bg-slate-50 cursor-pointer ${
                    message.unread ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p
                          className={`font-medium text-sm ${
                            message.unread ? "text-slate-900" : "text-slate-700"
                          }`}
                        >
                          {message.from}
                        </p>
                        <span className="text-xs text-slate-500">
                          {message.time}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          message.unread
                            ? "font-medium text-slate-800"
                            : "text-slate-600"
                        }`}
                      >
                        {message.subject}
                      </p>
                      {message.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Message Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 text-sm">Unread</span>
                <span className="font-semibold text-red-600">
                  {messages.filter((m) => m.unread).length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 text-sm">Total</span>
                <span className="font-semibold">{messages.length}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Quick Filters
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
                All Messages
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
                Unread
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
                From Parents
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
                From Students
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Profile Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={user.role}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 capitalize"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {[
                "Email notifications for new assignments",
                "SMS notifications for urgent messages",
                "Desktop notifications for calendar events",
                "Weekly summary reports",
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{setting}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={index % 2 === 0}
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Account Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                Save Changes
              </button>
              <button className="w-full px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 text-sm">
                Change Password
              </button>
              <button className="w-full px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm">
                Deactivate Account
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              System Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Version:</span>
                <span className="font-medium">v2.1.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Last Login:</span>
                <span className="font-medium">Today, 9:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Data Usage:</span>
                <span className="font-medium">124 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "students":
        return renderStudents();
      case "assignments":
        return renderAssignments();
      case "classes":
        return renderClasses();
      case "calendar":
        return renderCalendar();
      case "messages":
        return renderMessages();
      case "settings":
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {renderSidebar()}
      <div
        className={`${
          isMobile ? "ml-0" : "md:ml-64"
        } flex flex-col min-h-screen`}
      >
        {renderHeader()}
        <main className="flex-1 p-4 md:p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
