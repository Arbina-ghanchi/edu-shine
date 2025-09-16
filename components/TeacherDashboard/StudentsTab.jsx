// components/tabs/StudentsTab.jsx
import React from "react";
import { Plus, Filter, Download, Edit } from "lucide-react";
import { students } from "./data/student";

const StudentsTab = ({ classes, selectedClass }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div> */}
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
                <StudentRow key={student.id} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StudentRow = ({ student }) => (
  <tr className="border-b border-slate-100 hover:bg-slate-50">
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
);

export default StudentsTab;
