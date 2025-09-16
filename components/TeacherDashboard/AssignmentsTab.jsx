// components/tabs/AssignmentsTab.jsx
import React from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { assignments } from "./data/assignment";

const AssignmentsTab = () => {
  return (
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
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

const AssignmentCard = ({ assignment }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
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

    <p className="text-slate-600 text-sm mb-4">{assignment.description}</p>

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
            width: `${(assignment.submitted / assignment.total) * 100}%`,
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
);

export default AssignmentsTab;
