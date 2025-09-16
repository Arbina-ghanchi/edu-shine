import React from "react";
import { Users, Award, TrendingUp, Clock, FileTextIcon } from "lucide-react";
import { recentActivities } from "./data/recetnActivites";
import { upcomingEvents } from "./data/upcoming";

const OverviewTab = () => {
  const stats = [
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
      icon: FileTextIcon,
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
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RecentActivities activities={recentActivities} />
        <UpcomingEvents events={upcomingEvents} />
      </div>
    </div>
  );
};

const StatCard = ({ stat }) => {
  const { title, value, icon: Icon, color, change } = stat;

  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-slate-600 text-xs md:text-sm">{title}</p>
          <p className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
            {value}
          </p>
          <p
            className={`text-xs md:text-sm mt-2 font-medium ${colorClasses[color].text}`}
          >
            {change} from last month
          </p>
        </div>
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[color].bg}`}
        >
          <Icon
            className={`w-5 h-5 md:w-6 md:h-6 ${colorClasses[color].text}`}
          />
        </div>
      </div>
    </div>
  );
};

const RecentActivities = ({ activities }) => (
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
      {activities.map((activity) => (
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
);

const UpcomingEvents = ({ events }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-slate-800">Upcoming Events</h3>
      <button className="text-blue-600 text-sm hover:text-blue-700">
        View Calendar
      </button>
    </div>
    <div className="space-y-4">
      {events.map((event) => (
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
            <p className="text-slate-800 text-sm font-medium">{event.title}</p>
            <p className="text-slate-500 text-xs">{event.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OverviewTab;
