// components/common/dashboard/GradeManagement.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  BookOpen,
  Calendar,
  Search,
  Filter,
  Download,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Target,
  AlertCircle,
} from "lucide-react";

export const GradeManagement = () => {
  const [grades, setGrades] = useState([
    {
      id: 1,
      course: "Mathematics 101",
      assignment: "Algebra Quiz",
      type: "Quiz",
      score: 92,
      maxScore: 100,
      weight: 15,
      date: "2024-03-15",
      status: "Graded",
      teacher: "Dr. Johnson",
    },
    {
      id: 2,
      course: "Physics 201",
      assignment: "Kinematics Lab Report",
      type: "Lab",
      score: 85,
      maxScore: 100,
      weight: 20,
      date: "2024-03-10",
      status: "Graded",
      teacher: "Prof. Chen",
    },
    {
      id: 3,
      course: "Literature 150",
      assignment: "Shakespeare Essay",
      type: "Essay",
      score: 78,
      maxScore: 100,
      weight: 25,
      date: "2024-03-05",
      status: "Graded",
      teacher: "Dr. Williams",
    },
    {
      id: 4,
      course: "History 210",
      assignment: "World War II Exam",
      type: "Exam",
      score: 88,
      maxScore: 100,
      weight: 30,
      date: "2024-02-28",
      status: "Graded",
      teacher: "Prof. Brown",
    },
    {
      id: 5,
      course: "Chemistry 101",
      assignment: "Periodic Table Quiz",
      type: "Quiz",
      score: 0,
      maxScore: 100,
      weight: 10,
      date: "2024-03-20",
      status: "Missing",
      teacher: "Dr. Martinez",
    },
  ]);

  const [filteredGrades, setFilteredGrades] = useState(grades);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedCourse, setSelectedCourse] = useState("all");

  // Get unique courses for filter
  const courses = ["all", ...new Set(grades.map(grade => grade.course))];

  useEffect(() => {
    let result = grades;

    // Apply course filter
    if (selectedCourse !== "all") {
      result = result.filter((grade) => grade.course === selectedCourse);
    }

    // Apply status filter
    if (filter !== "all") {
      result = result.filter((grade) => grade.status === filter);
    }

    // Apply search
    if (searchTerm) {
      result = result.filter(
        (grade) =>
          grade.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          grade.assignment.toLowerCase().includes(searchTerm.toLowerCase()) ||
          grade.teacher.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc" 
          ? new Date(a.date) - new Date(b.date) 
          : new Date(b.date) - new Date(a.date);
      } else if (sortBy === "score") {
        return sortOrder === "asc" ? a.score - b.score : b.score - a.score;
      } else if (sortBy === "course") {
        return sortOrder === "asc" 
          ? a.course.localeCompare(b.course) 
          : b.course.localeCompare(a.course);
      }
      return 0;
    });

    setFilteredGrades(result);
  }, [filter, searchTerm, grades, sortBy, sortOrder, selectedCourse]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const calculateGradePercentage = (score, maxScore) => {
    return maxScore > 0 ? (score / maxScore) * 100 : 0;
  };

  const getGradeColor = (percentage) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    if (percentage >= 70) return "text-yellow-600";
    if (percentage >= 60) return "text-orange-600";
    return "text-red-600";
  };

  const getStatusBadge = (status) => {
    if (status === "Graded") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Graded
        </span>
      );
    } else if (status === "Missing") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Missing
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Pending
        </span>
      );
    }
  };

  const calculateAverageGrade = () => {
    const gradedAssignments = grades.filter(grade => grade.status === "Graded");
    if (gradedAssignments.length === 0) return 0;
    
    const totalWeightedScore = gradedAssignments.reduce((sum, grade) => {
      const percentage = calculateGradePercentage(grade.score, grade.maxScore);
      return sum + (percentage * grade.weight / 100);
    }, 0);
    
    const totalWeight = gradedAssignments.reduce((sum, grade) => sum + grade.weight, 0);
    
    return totalWeight > 0 ? (totalWeightedScore / totalWeight) : 0;
  };

  const SortIcon = ({ column }) => {
    if (sortBy !== column) return <ChevronDown className="w-4 h-4 opacity-50" />;
    return sortOrder === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  const averageGrade = calculateAverageGrade();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Grade Management</h2>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-blue-800">Average Grade</div>
          <div className="text-2xl font-bold text-blue-900">
            {averageGrade.toFixed(1)}%
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-green-800">Completed</div>
          <div className="text-2xl font-bold text-green-900">
            {grades.filter((g) => g.status === "Graded").length}
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-yellow-800">Pending</div>
          <div className="text-2xl font-bold text-yellow-900">
            {grades.filter((g) => g.status !== "Graded" && g.status !== "Missing").length}
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-red-800">Missing</div>
          <div className="text-2xl font-bold text-red-900">
            {grades.filter((g) => g.status === "Missing").length}
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
            onClick={() => setFilter("Pending")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Pending
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

      {/* Grades Table */}
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
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Assignment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("score")}
              >
                <div className="flex items-center">
                  Score
                  <SortIcon column="score" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Weight
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">
                  Date
                  <SortIcon column="date" />
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
            {filteredGrades.map((grade) => {
              const percentage = calculateGradePercentage(grade.score, grade.maxScore);
              return (
                <tr key={grade.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {grade.course}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grade.assignment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grade.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${getGradeColor(percentage)}`}>
                        {grade.score}/{grade.maxScore} ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grade.weight}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                      {grade.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {getStatusBadge(grade.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grade.teacher}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredGrades.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No grades found
          </div>
        )}
      </div>

      {/* Grade Summary */}
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Grade Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Overall Performance</h4>
            <div className="bg-white p-4 rounded-lg shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Current Average</span>
                <span className="text-lg font-bold text-blue-600">{averageGrade.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${averageGrade}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Grade Distribution</h4>
            <div className="bg-white p-4 rounded-lg shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">A (90-100%)</span>
                <span className="text-xs font-medium">
                  {grades.filter(g => g.status === "Graded" && calculateGradePercentage(g.score, g.maxScore) >= 90).length}
                </span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">B (80-89%)</span>
                <span className="text-xs font-medium">
                  {grades.filter(g => g.status === "Graded" && calculateGradePercentage(g.score, g.maxScore) >= 80 && calculateGradePercentage(g.score, g.maxScore) < 90).length}
                </span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">C (70-79%)</span>
                <span className="text-xs font-medium">
                  {grades.filter(g => g.status === "Graded" && calculateGradePercentage(g.score, g.maxScore) >= 70 && calculateGradePercentage(g.score, g.maxScore) < 80).length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Below 70%</span>
                <span className="text-xs font-medium">
                  {grades.filter(g => g.status === "Graded" && calculateGradePercentage(g.score, g.maxScore) < 70).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};