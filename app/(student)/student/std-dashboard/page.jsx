"use client";
import React, { useState } from "react";
import {
  User,
  BookOpen,
  GraduationCap,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  Search,
  FileText,
  Clock,
  Award,
  TrendingUp,
  MessageSquare,
  ChevronDown,
  Target,
  CheckCircle,
  AlertCircle,
  Star,
  Download,
  Play,
  CalendarX,
  Plus,
  Eye,
  Edit,
  X,
} from "lucide-react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveForm, setLeaveForm] = useState({
    type: "",
    fromDate: "",
    toDate: "",
    reason: "",
    description: "",
  });

  // Handle leave form submission
  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    // Add your API call here to submit the leave application
    setShowLeaveModal(false);
    setLeaveForm({
      type: "",
      fromDate: "",
      toDate: "",
      reason: "",
      description: "",
    });
  };

  // Handle leave form field changes
  const handleLeaveFormChange = (field, value) => {
    setLeaveForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Sample data
  const subjects = [
    { name: "Mathematics", grade: "A", progress: 85, color: "blue" },
    { name: "Physics", grade: "B+", progress: 78, color: "green" },
    { name: "Chemistry", grade: "A-", progress: 92, color: "purple" },
    { name: "English", grade: "B", progress: 74, color: "yellow" },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "assignment",
      title: "Submitted Algebra Quiz",
      time: "2 hours ago",
      status: "completed",
    },
    {
      id: 2,
      type: "grade",
      title: "Received grade for Chemistry Lab",
      time: "4 hours ago",
      status: "graded",
    },
    {
      id: 3,
      type: "announcement",
      title: "New assignment posted in Physics",
      time: "1 day ago",
      status: "new",
    },
    {
      id: 4,
      type: "reminder",
      title: "Math test tomorrow at 10 AM",
      time: "1 day ago",
      status: "urgent",
    },
  ];

  const upcomingSchedule = [
    {
      id: 1,
      subject: "Mathematics",
      type: "Test",
      date: "Aug 25",
      time: "10:00 AM",
      room: "Room 201",
    },
    {
      id: 2,
      subject: "Physics",
      type: "Lab",
      date: "Aug 26",
      time: "2:00 PM",
      room: "Lab 1",
    },
    {
      id: 3,
      subject: "English",
      type: "Presentation",
      date: "Aug 28",
      time: "11:30 AM",
      room: "Room 105",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Quadratic Equations Problem Set",
      subject: "Mathematics",
      dueDate: "Aug 25",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Physics Lab Report",
      subject: "Physics",
      dueDate: "Aug 27",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: 3,
      title: "Chemistry Molecular Structure",
      subject: "Chemistry",
      dueDate: "Aug 30",
      status: "not-started",
      priority: "low",
    },
    {
      id: 4,
      title: "English Essay - Shakespeare",
      subject: "English",
      dueDate: "Aug 22",
      status: "submitted",
      priority: "completed",
    },
  ];

  const leaveApplications = [
    {
      id: 1,
      type: "Sick Leave",
      fromDate: "2025-08-22",
      toDate: "2025-08-23",
      reason: "Fever and cold",
      status: "approved",
      appliedDate: "2025-08-20",
      approvedBy: "Mr. Johnson",
    },
    {
      id: 2,
      type: "Personal Leave",
      fromDate: "2025-08-15",
      toDate: "2025-08-15",
      reason: "Family function",
      status: "approved",
      appliedDate: "2025-08-12",
      approvedBy: "Mrs. Smith",
    },
    {
      id: 3,
      type: "Medical Leave",
      fromDate: "2025-08-25",
      toDate: "2025-08-26",
      reason: "Doctor appointment",
      status: "pending",
      appliedDate: "2025-08-20",
      approvedBy: null,
    },
    {
      id: 4,
      type: "Emergency Leave",
      fromDate: "2025-08-10",
      toDate: "2025-08-10",
      reason: "Family emergency",
      status: "rejected",
      appliedDate: "2025-08-09",
      approvedBy: "Mr. Johnson",
      rejectionReason: "Insufficient documentation",
    },
  ];

  // Add missing grades data
  const grades = [
    {
      subject: "Mathematics",
      assignments: [
        { name: "Algebra Quiz", grade: "A", score: "95/100", date: "Aug 15" },
        { name: "Calculus Test", grade: "A-", score: "90/100", date: "Aug 10" },
        {
          name: "Geometry Assignment",
          grade: "B+",
          score: "88/100",
          date: "Aug 5",
        },
      ],
    },
    {
      subject: "Physics",
      assignments: [
        { name: "Mechanics Lab", grade: "B+", score: "87/100", date: "Aug 14" },
        { name: "Optics Test", grade: "A-", score: "91/100", date: "Aug 8" },
      ],
    },
    {
      subject: "Chemistry",
      assignments: [
        {
          name: "Organic Chemistry Quiz",
          grade: "A",
          score: "96/100",
          date: "Aug 16",
        },
        { name: "Lab Report", grade: "A-", score: "92/100", date: "Aug 9" },
      ],
    },
    {
      subject: "English",
      assignments: [
        { name: "Essay Writing", grade: "B+", score: "89/100", date: "Aug 12" },
        {
          name: "Literature Analysis",
          grade: "B",
          score: "85/100",
          date: "Aug 7",
        },
      ],
    },
  ];

  const leaveTypes = [
    "Sick Leave",
    "Personal Leave",
    "Medical Leave",
    "Emergency Leave",
    "Festival Leave",
    "Other",
  ];

  const renderSidebar = () => (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-xl font-bold">EduDash</h1>
            <p className="text-sm text-slate-400">Student Portal</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { id: "overview", label: "Dashboard", icon: BarChart3 },
            { id: "assignments", label: "Assignments", icon: FileText },
            { id: "grades", label: "Grades", icon: Award },
            { id: "schedule", label: "Schedule", icon: Calendar },
            { id: "leave", label: "Leave Applications", icon: CalendarX },
            { id: "subjects", label: "Subjects", icon: BookOpen },
            { id: "messages", label: "Messages", icon: MessageSquare },
            { id: "profile", label: "Profile", icon: User },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  const renderLeaveModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        showLeaveModal ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800">
            Apply for Leave
          </h3>
          <button
            onClick={() => setShowLeaveModal(false)}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleLeaveSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Leave Type
            </label>
            <select
              value={leaveForm.type}
              onChange={(e) => handleLeaveFormChange("type", e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select leave type</option>
              {leaveTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                From Date
              </label>
              <input
                type="date"
                value={leaveForm.fromDate}
                onChange={(e) =>
                  handleLeaveFormChange("fromDate", e.target.value)
                }
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                To Date
              </label>
              <input
                type="date"
                value={leaveForm.toDate}
                onChange={(e) =>
                  handleLeaveFormChange("toDate", e.target.value)
                }
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Reason
            </label>
            <input
              type="text"
              value={leaveForm.reason}
              onChange={(e) => handleLeaveFormChange("reason", e.target.value)}
              placeholder="Brief reason for leave"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Description
            </label>
            <textarea
              value={leaveForm.description}
              onChange={(e) =>
                handleLeaveFormChange("description", e.target.value)
              }
              placeholder="Detailed description (optional)"
              rows="3"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => setShowLeaveModal(false)}
              className="flex-1 border border-slate-300 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderLeaveApplications = () => (
    <div className="space-y-6">
      {/* Header with Apply Leave Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Leave Applications
          </h3>
          <p className="text-sm text-slate-600">
            Manage your leave requests and view application history
          </p>
        </div>
        <button
          onClick={() => setShowLeaveModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Apply for Leave</span>
        </button>
      </div>

      {/* Leave Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {
                  leaveApplications.filter((app) => app.status === "approved")
                    .length
                }
              </p>
              <p className="text-sm text-slate-600">Approved</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {
                  leaveApplications.filter((app) => app.status === "pending")
                    .length
                }
              </p>
              <p className="text-sm text-slate-600">Pending</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <X className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {
                  leaveApplications.filter((app) => app.status === "rejected")
                    .length
                }
              </p>
              <p className="text-sm text-slate-600">Rejected</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CalendarX className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {leaveApplications.length}
              </p>
              <p className="text-sm text-slate-600">Total Applied</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Applications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h4 className="font-semibold text-slate-800">Recent Applications</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-4 font-medium text-slate-700">
                  Type
                </th>
                <th className="text-left p-4 font-medium text-slate-700">
                  Duration
                </th>
                <th className="text-left p-4 font-medium text-slate-700">
                  Reason
                </th>
                <th className="text-left p-4 font-medium text-slate-700">
                  Status
                </th>
                <th className="text-left p-4 font-medium text-slate-700">
                  Applied Date
                </th>
                <th className="text-left p-4 font-medium text-slate-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {leaveApplications.map((application) => (
                <tr
                  key={application.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="p-4">
                    <div className="font-medium text-slate-800">
                      {application.type}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-slate-600">
                      {new Date(application.fromDate).toLocaleDateString()} -{" "}
                      {new Date(application.toDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-slate-600 max-w-xs truncate">
                      {application.reason}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        application.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : application.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {application.status.charAt(0).toUpperCase() +
                        application.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    {new Date(application.appliedDate).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      {application.status === "pending" && (
                        <button className="text-slate-600 hover:text-slate-700">
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
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

  const renderHeader = () => (
    <div className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-slate-800 capitalize">
            {activeTab === "overview" ? "Dashboard" : activeTab}
          </h2>
          <div className="text-sm text-slate-600">Welcome back, John Doe!</div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="relative p-2 text-slate-600 hover:text-slate-800">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Overall GPA",
            value: "3.7",
            icon: Award,
            color: "blue",
            change: "+0.2",
          },
          {
            title: "Pending Tasks",
            value: "5",
            icon: FileText,
            color: "orange",
            change: "-2",
          },
          {
            title: "Attendance",
            value: "94%",
            icon: CheckCircle,
            color: "green",
            change: "+3%",
          },
          {
            title: "Course Progress",
            value: "78%",
            icon: TrendingUp,
            color: "purple",
            change: "+12%",
          },
        ].map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">
                  {stat.value}
                </p>
                <p
                  className={`text-sm mt-2 ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "orange"
                      ? "text-orange-600"
                      : stat.color === "green"
                      ? "text-green-600"
                      : "text-purple-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
              <div
                className={`w-12 h-12 ${
                  stat.color === "blue"
                    ? "bg-blue-100"
                    : stat.color === "orange"
                    ? "bg-orange-100"
                    : stat.color === "green"
                    ? "bg-green-100"
                    : "bg-purple-100"
                } rounded-lg flex items-center justify-center`}
              >
                <stat.icon
                  className={`w-6 h-6 ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "orange"
                      ? "text-orange-600"
                      : stat.color === "green"
                      ? "text-green-600"
                      : "text-purple-600"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Progress */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Subject Progress
          </h3>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 ${
                      subject.color === "blue"
                        ? "bg-blue-100"
                        : subject.color === "green"
                        ? "bg-green-100"
                        : subject.color === "purple"
                        ? "bg-purple-100"
                        : "bg-yellow-100"
                    } rounded-lg flex items-center justify-center`}
                  >
                    <BookOpen
                      className={`w-5 h-5 ${
                        subject.color === "blue"
                          ? "text-blue-600"
                          : subject.color === "green"
                          ? "text-green-600"
                          : subject.color === "purple"
                          ? "text-purple-600"
                          : "text-yellow-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">
                      {subject.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      Current Grade: {subject.grade}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-slate-200 rounded-full h-2">
                    <div
                      className={`${
                        subject.color === "blue"
                          ? "bg-blue-600"
                          : subject.color === "green"
                          ? "bg-green-600"
                          : subject.color === "purple"
                          ? "bg-purple-600"
                          : "bg-yellow-600"
                      } h-2 rounded-full`}
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {subject.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
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
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.status === "urgent"
                      ? "bg-red-100"
                      : activity.status === "completed"
                      ? "bg-green-100"
                      : activity.status === "graded"
                      ? "bg-blue-100"
                      : "bg-yellow-100"
                  }`}
                >
                  {activity.status === "urgent" ? (
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  ) : activity.status === "completed" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : activity.status === "graded" ? (
                    <Star className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Clock className="w-4 h-4 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 text-sm">{activity.title}</p>
                  <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800">
            Upcoming Schedule
          </h3>
          <button className="text-blue-600 text-sm hover:text-blue-700">
            View Calendar
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingSchedule.map((event) => (
            <div
              key={event.id}
              className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-blue-600">
                  {event.subject}
                </span>
                <span className="text-xs text-slate-500">{event.room}</span>
              </div>
              <h4 className="font-medium text-slate-800 mb-2">{event.type}</h4>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {["all", "pending", "in-progress", "submitted"].map((status) => (
              <button
                key={status}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  status === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">
                  {assignment.title}
                </h3>
                <p className="text-sm text-slate-600">{assignment.subject}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  assignment.status === "pending"
                    ? "bg-red-100 text-red-700"
                    : assignment.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : assignment.status === "submitted"
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {assignment.status.replace("-", " ")}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Due Date:</span>
                <span className="font-medium">{assignment.dueDate}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Priority:</span>
                <span
                  className={`font-medium ${
                    assignment.priority === "high"
                      ? "text-red-600"
                      : assignment.priority === "medium"
                      ? "text-yellow-600"
                      : assignment.priority === "low"
                      ? "text-green-600"
                      : "text-slate-600"
                  }`}
                >
                  {assignment.priority.charAt(0).toUpperCase() +
                    assignment.priority.slice(1)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {assignment.status === "submitted" ? (
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Submitted</span>
                </button>
              ) : (
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                  <Play className="w-4 h-4" />
                  <span>Start Work</span>
                </button>
              )}
              <button className="text-slate-600 hover:text-slate-700">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">
          Grade Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="text-center p-4 bg-slate-50 rounded-lg"
            >
              <div
                className={`w-16 h-16 ${
                  subject.color === "blue"
                    ? "bg-blue-100"
                    : subject.color === "green"
                    ? "bg-green-100"
                    : subject.color === "purple"
                    ? "bg-purple-100"
                    : "bg-yellow-100"
                } rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <span
                  className={`text-2xl font-bold ${
                    subject.color === "blue"
                      ? "text-blue-600"
                      : subject.color === "green"
                      ? "text-green-600"
                      : subject.color === "purple"
                      ? "text-purple-600"
                      : "text-yellow-600"
                  }`}
                >
                  {subject.grade.charAt(0)}
                </span>
              </div>
              <h4 className="font-medium text-slate-800">{subject.name}</h4>
              <p className="text-sm text-slate-600">{subject.grade}</p>
            </div>
          ))}
        </div>
      </div>

      {grades.map((subject) => (
        <div
          key={subject.subject}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            {subject.subject}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left p-4 font-medium text-slate-700">
                    Assignment
                  </th>
                  <th className="text-left p-4 font-medium text-slate-700">
                    Grade
                  </th>
                  <th className="text-left p-4 font-medium text-slate-700">
                    Score
                  </th>
                  <th className="text-left p-4 font-medium text-slate-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {subject.assignments.map((assignment, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium text-slate-800">
                      {assignment.name}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          assignment.grade.startsWith("A")
                            ? "bg-green-100 text-green-700"
                            : assignment.grade.startsWith("B")
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {assignment.grade}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{assignment.score}</td>
                    <td className="p-4 text-slate-600">{assignment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "assignments":
        return renderAssignments();
      case "grades":
        return renderGrades();
      case "leave":
        return renderLeaveApplications();
      case "schedule":
      case "subjects":
      case "messages":
      case "profile":
      case "settings":
        return (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h3>
            <p className="text-slate-600">
              This section is under development. Content will be added soon.
            </p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {renderSidebar()}
      <div className="ml-64 flex flex-col">
        {renderHeader()}
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
      {renderLeaveModal()}
    </div>
  );
};

export default StudentDashboard;
