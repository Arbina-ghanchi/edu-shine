// components/tabs/CalendarTab.jsx
import React from "react";
import { ChevronDown, Plus, Calendar } from "lucide-react";
import { classSchedule } from "./data/classSchedule";

const CalendarTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CalendarWidget />

        <div className="space-y-6">
          <TodaysSchedule schedule={classSchedule} />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

const CalendarWidget = () => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800">August 2024</h3>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg">
              <ChevronDown className="w-4 h-4 rotate-90" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg">
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="p-3 text-center text-sm font-medium text-slate-600"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: 35 }, (_, i) => {
            const dayNum = i - 4;
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
  );
};

const TodaysSchedule = ({ schedule }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">
      Today's Schedule
    </h3>
    <div className="space-y-3">
      {schedule.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"
        >
          <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-slate-800 text-sm">{item.subject}</p>
            <p className="text-slate-600 text-xs">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const QuickActions = () => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
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
);

export default CalendarTab;
