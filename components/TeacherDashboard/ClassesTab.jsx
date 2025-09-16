// components/tabs/ClassesTab.jsx
import React from "react";
import { Plus, Edit, Calendar, BookOpen, Users, Clock } from "lucide-react";

const ClassesTab = ({ assignments }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {assignments && assignments.length > 0 ? (
          assignments.map((assignment) => (
            <ClassCard key={assignment._id} assignment={assignment} />
          ))
        ) : (
          <p className="text-slate-600">No classes found</p>
        )}
      </div>
    </div>
  );
};

const ClassCard = ({ assignment }) => {
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-800 text-lg">
            {assignment.subject}
          </h3>
          <p className="text-slate-600 text-sm capitalize">
            {assignment.teachingMedium.toLowerCase()}
          </p>
        </div>
        <BookOpen className="w-6 h-6 text-blue-600" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 text-slate-500 mr-2" />
          <span className="text-slate-600">Started:</span>
          <span className="font-medium ml-1">
            {formatDate(assignment.startDate)}
          </span>
        </div>

        <div className="flex items-center text-sm">
          <Users className="w-4 h-4 text-slate-500 mr-2" />
          <span className="text-slate-600">Students:</span>
          <span className="font-medium ml-1">
            {assignment.studentId.length}
          </span>
        </div>

        <div className="flex items-center text-sm">
          <span className="text-slate-600">Status:</span>
          <span
            className={`font-medium ml-1 px-2 py-1 rounded-full text-xs ${
              assignment.status === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {assignment.status}
          </span>
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
};

export default ClassesTab;
