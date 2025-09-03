// components/common/dashboard/AssignmentManagement.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  ClipboardList,
  Calendar,
  Search,
  Filter,
  Download,
  ChevronDown,
  ChevronUp,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  BookOpen,
} from "lucide-react";

export const AssignmentManagement = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      course: "Mathematics 101",
      title: "Algebra Problem Set",
      type: "Problem Set",
      dueDate: "2024-03-20",
      status: "Submitted",
      points: 45,
      maxPoints: 50,
      submittedDate: "2024-03-19",
      teacher: "Dr. Johnson",
    },
    {
      id: 2,
      course: "Physics 201",
      title: "Kinematics Lab Report",
      type: "Lab Report",
      dueDate: "2024-03-18",
      status: "Graded",
      points: 38,
      maxPoints: 40,
      submittedDate: "2024-03-17",
      teacher: "Prof. Chen",
    },
    {
      id: 3,
      course: "Literature 150",
      title: "Shakespeare Essay Analysis",
      type: "Essay",
      dueDate: "2024-03-22",
      status: "Not Started",
      points: 0,
      maxPoints: 100,
      submittedDate: null,
      teacher: "Dr. Williams",
    },
    {
      id: 4,
      course: "History 210",
      title: "World War II Research Paper",
      type: "Research Paper",
      dueDate: "2024-03-25",
      status: "In Progress",
      points: 0,
      maxPoints: 100,
      submittedDate: null,
      teacher: "Prof. Brown",
    },
    {
      id: 5,
      course: "Chemistry 101",
      title: "Periodic Table Quiz",
      type: "Quiz",
      dueDate: "2024-03-15",
      status: "Missing",
      points: 0,
      maxPoints: 20,
      submittedDate: null,
      teacher: "Dr. Martinez",
    },
    {
      id: 6,
      course: "Mathematics 101",
      title: "Calculus Derivatives Worksheet",
      type: "Worksheet",
      dueDate: "2024-03-28",
      status: "Not Started",
      points: 0,
      maxPoints: 30,
      submittedDate: null,
      teacher: "Dr. Johnson",
    },
  ]);

  const [filteredAssignments, setFilteredAssignments] = useState(assignments);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("dueDate");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCourse, setSelectedCourse] = useState("all");

  // Get unique courses for filter
  const courses = ["all", ...new Set(assignments.map(assignment => assignment.course))];

  useEffect(() => {
    let result = assignments;

    // Apply course filter
    if (selectedCourse !== "all") {
      result = result.filter((assignment) => assignment.course === selectedCourse);
    }

    // Apply status filter
    if (filter !== "all") {
      result = result.filter((assignment) => assignment.status === filter);
    }

    // Apply search
    if (searchTerm) {
      result = result.filter(
        (assignment) =>
          assignment.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          assignment.teacher.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "dueDate") {
        return sortOrder === "asc" 
          ? new Date(a.dueDate) - new Date(b.dueDate) 
          : new Date(b.dueDate) - new Date(a.dueDate);
      } else if (sortBy === "title") {
        return sortOrder === "asc" 
          ? a.title.localeCompare(b.title) 
          : b.title.localeCompare(a.title);
      } else if (sortBy === "course") {
        return sortOrder === "asc" 
          ? a.course.localeCompare(b.course) 
          : b.course.localeCompare(a.course);
      }
      return 0;
    });

    setFilteredAssignments(result);
  }, [filter, searchTerm, assignments, sortBy, sortOrder, selectedCourse]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const getStatusBadge = (status) => {
    if (status === "Submitted") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Submitted
        </span>
      );
    } else if (status === "Graded") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Graded
        </span>
      );
    } else if (status === "In Progress") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          In Progress
        </span>
      );
    } else if (status === "Not Started") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Not Started
        </span>
      );
    } else if (status === "Missing") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Missing
        </span>
      );
    }
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  const getDueDateColor = (dueDate, status) => {
    if (status === "Graded" || status === "Submitted") return "text-gray-500";
    
    const daysUntilDue = getDaysUntilDue(dueDate);
    if (daysUntilDue < 0) return "text-red-600";
    if (daysUntilDue <= 2) return "text-red-600";
    if (daysUntilDue <= 5) return "text-yellow-600";
    return "text-green-600";
  };

  const getDueDateText = (dueDate, status) => {
    if (status === "Graded" || status === "Submitted") {
      return `Due: ${new Date(dueDate).toLocaleDateString()}`;
    }
    
    const daysUntilDue = getDaysUntilDue(dueDate);
    if (daysUntilDue < 0) {
      return `Overdue by ${Math.abs(daysUntilDue)} days`;
    } else if (daysUntilDue === 0) {
      return "Due today";
    } else if (daysUntilDue === 1) {
      return "Due tomorrow";
    } else {
      return `Due in ${daysUntilDue} days`;
    }
  };

  const calculateCompletion = () => {
    const total = assignments.length;
    const completed = assignments.filter(a => a.status === "Graded" || a.status === "Submitted").length;
    return total > 0 ? (completed / total) * 100 : 0;
  };

  const SortIcon = ({ column }) => {
    if (sortBy !== column) return <ChevronDown className="w-4 h-4 opacity-50" />;
    return sortOrder === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  const completionPercentage = calculateCompletion();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Assignment Management</h2>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-blue-800">Total Assignments</div>
          <div className="text-2xl font-bold text-blue-900">{assignments.length}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-green-800">Completed</div>
          <div className="text-2xl font-bold text-green-900">
            {assignments.filter((a) => a.status === "Graded" || a.status === "Submitted").length}
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-yellow-800">In Progress</div>
          <div className="text-2xl font-bold text-yellow-900">
            {assignments.filter((a) => a.status === "In Progress").length}
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-red-800">Missing</div>
          <div className="text-2xl font-bold text-red-900">
            {assignments.filter((a) => a.status === "Missing").length}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-3 py-1.5 text-sm rounded-md border border-gray-300 bg-white"
          >
            {courses.map((course) => (
              <option key={course} value={course}>
                {course === "all" ? "All Courses" : course}
              </option>
            ))}
          </select>
          
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "all"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Not Started")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "Not Started"
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Not Started
          </button>
          <button
            onClick={() => setFilter("In Progress")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "In Progress"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilter("Submitted")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "Submitted"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Submitted
          </button>
          <button
            onClick={() => setFilter("Graded")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "Graded"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Graded
          </button>
          <button
            onClick={() => setFilter("Missing")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "Missing"
                ? "bg-red-100 text-red-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Missing
          </button>
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search assignments or courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="w-4 h-4 mr-1" />
            Export
          </button>
        </div>
      </div>

      {/* Assignments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("course")}
              >
                <div className="flex items-center">
                  Course
                  <SortIcon column="course" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("title")}
              >
                <div className="flex items-center">
                  Assignment
                  <SortIcon column="title" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Points
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("dueDate")}
              >
                <div className="flex items-center">
                  Due Date
                  <SortIcon column="dueDate" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Teacher
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAssignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {assignment.course}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.status === "Graded" || assignment.status === "Submitted" ? (
                    <span className="font-medium">
                      {assignment.points}/{assignment.maxPoints}
                    </span>
                  ) : (
                    <span className="text-gray-400">{assignment.maxPoints} points</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                    <span className={`text-sm font-medium ${getDueDateColor(assignment.dueDate, assignment.status)}`}>
                      {getDueDateText(assignment.dueDate, assignment.status)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {getStatusBadge(assignment.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.teacher}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAssignments.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No assignments found
          </div>
        )}
      </div>

      {/* Assignment Progress */}
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Assignment Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Completion Status</h4>
            <div className="bg-white p-4 rounded-lg shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Overall Completion</span>
                <span className="text-lg font-bold text-blue-600">{completionPercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Not Started</span>
                  <span className="text-xs font-medium">
                    {assignments.filter(a => a.status === "Not Started").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">In Progress</span>
                  <span className="text-xs font-medium">
                    {assignments.filter(a => a.status === "In Progress").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Submitted</span>
                  <span className="text-xs font-medium">
                    {assignments.filter(a => a.status === "Submitted").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Graded</span>
                  <span className="text-xs font-medium">
                    {assignments.filter(a => a.status === "Graded").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Missing</span>
                  <span className="text-xs font-medium">
                    {assignments.filter(a => a.status === "Missing").length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Upcoming Deadlines</h4>
            <div className="bg-white p-4 rounded-lg shadow-xs">
              {assignments
                .filter(a => a.status !== "Graded" && a.status !== "Submitted" && a.status !== "Missing")
                .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                .slice(0, 3)
                .map(assignment => (
                  <div key={assignment.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <div className="text-sm font-medium">{assignment.title}</div>
                      <div className="text-xs text-gray-500">{assignment.course}</div>
                    </div>
                    <div className={`text-sm font-medium ${getDueDateColor(assignment.dueDate, assignment.status)}`}>
                      {getDueDateText(assignment.dueDate, assignment.status)}
                    </div>
                  </div>
                ))
              }
              {assignments.filter(a => a.status !== "Graded" && a.status !== "Submitted" && a.status !== "Missing").length === 0 && (
                <div className="text-center py-4 text-gray-500 text-sm">
                  No upcoming deadlines
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};