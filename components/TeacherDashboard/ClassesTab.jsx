// components/tabs/ClassesTab.jsx
import React from "react";
import { Plus, Edit, Calendar, BookOpen } from "lucide-react";

const ClassesTab = ({ classes }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            <Plus className="w-4 h-4" />
            <span>Add Class</span>
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {classes &&
          classes?.map((classItem, index) => {
            const scheduleItem = classSchedule[index] || {};
            return (
              <ClassCard
                key={classItem}
                classItem={classItem}
                scheduleItem={scheduleItem}
                index={index}
              />
            );
          })}
      </div> */}
    </div>
  );
};

const ClassCard = ({ classItem, scheduleItem, index }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
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
        <span className="font-medium">{scheduleItem.time || "TBD"}</span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600">Room:</span>
        <span className="font-medium">{scheduleItem.room || "TBD"}</span>
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

export default ClassesTab;
