import React, { useState, useEffect } from "react";
import { Plus, Filter, Download, Edit, Search } from "lucide-react";

const StudentsTab = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  // Filter students based on search term
  useEffect(() => {
    if (students && students.length > 0) {
      const filtered = students?.filter(
        (student) =>
          student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  }, [students, searchTerm]);

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-6 p-4 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Students</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-medium text-gray-700 text-sm">
                  Student
                </th>
                <th className="text-left p-4 font-medium text-gray-700 text-sm">
                  Email
                </th>
                <th className="text-left p-4 font-medium text-gray-700 text-sm">
                  Role
                </th>
                <th className="text-left p-4 font-medium text-gray-700 text-sm">
                  Joined Date
                </th>
                <th className="text-left p-4 font-medium text-gray-700 text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <StudentRow
                    key={student._id}
                    student={student}
                    formatDate={formatDate}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-8 text-gray-500">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StudentRow = ({ student, formatDate }) => (
  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
    <td className="p-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-blue-600 font-semibold text-sm">
            {student.fullName.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <span className="font-medium text-gray-800 text-sm block">
            {student.fullName}
          </span>
          <span className="text-gray-500 text-xs">
            ID: {student._id.substring(0, 8)}...
          </span>
        </div>
      </div>
    </td>
    <td className="p-4 text-gray-700 text-sm">{student.email}</td>
    <td className="p-4">
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
        {student.role}
      </span>
    </td>
    <td className="p-4 text-gray-600 text-sm">
      {formatDate(student.createdAt)}
    </td>
    <td className="p-4">
      <div className="flex items-center space-x-2">
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm px-2 py-1 rounded hover:bg-blue-50 transition-colors">
          View
        </button>
        <button className="text-gray-600 hover:text-gray-800 p-2 rounded hover:bg-gray-100 transition-colors">
          <Edit className="w-4 h-4" />
        </button>
      </div>
    </td>
  </tr>
);

export default StudentsTab;
