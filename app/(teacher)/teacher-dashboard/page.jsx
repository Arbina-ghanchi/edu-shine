"use client";
import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Plus,
  FileText,
  Clock,
  Award,
  TrendingUp,
  MessageSquare,
  ChevronDown,
  Filter,
  Download
} from 'lucide-react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState('Mathematics - Grade 10A');

  // Sample data
  const classes = [
    'Mathematics - Grade 10A',
    'Physics - Grade 11B',
    'Chemistry - Grade 12A'
  ];

  const recentActivities = [
    { id: 1, type: 'assignment', title: 'Algebra Quiz submitted by John Doe', time: '2 hours ago' },
    { id: 2, type: 'grade', title: 'Graded Chemistry Lab Report', time: '4 hours ago' },
    { id: 3, type: 'message', title: 'Parent meeting request from Sarah\'s mother', time: '1 day ago' },
    { id: 4, type: 'announcement', title: 'New curriculum guidelines available', time: '2 days ago' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Conference', date: 'Aug 25', time: '2:00 PM' },
    { id: 2, title: 'Math Quiz - Grade 10A', date: 'Aug 27', time: '10:00 AM' },
    { id: 3, title: 'Faculty Meeting', date: 'Aug 30', time: '3:30 PM' }
  ];

  const students = [
    { id: 1, name: 'John Doe', grade: 'A', attendance: 95, lastActive: '2 hours ago' },
    { id: 2, name: 'Jane Smith', grade: 'B+', attendance: 88, lastActive: '1 day ago' },
    { id: 3, name: 'Mike Johnson', grade: 'A-', attendance: 92, lastActive: '3 hours ago' },
    { id: 4, name: 'Sarah Wilson', grade: 'B', attendance: 85, lastActive: '5 hours ago' }
  ];

  const assignments = [
    { id: 1, title: 'Quadratic Equations Worksheet', dueDate: 'Aug 25', submitted: 24, total: 30, status: 'active' },
    { id: 2, title: 'Trigonometry Project', dueDate: 'Aug 30', submitted: 15, total: 30, status: 'active' },
    { id: 3, title: 'Linear Algebra Quiz', dueDate: 'Aug 22', submitted: 30, total: 30, status: 'completed' }
  ];

  const renderSidebar = () => (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-xl font-bold">EduDash</h1>
            <p className="text-sm text-slate-400">Teacher Portal</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'students', label: 'Students', icon: Users },
            { id: 'assignments', label: 'Assignments', icon: FileText },
            { id: 'classes', label: 'Classes', icon: BookOpen },
            { id: 'calendar', label: 'Calendar', icon: Calendar },
            { id: 'messages', label: 'Messages', icon: MessageSquare },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
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

  const renderHeader = () => (
    <div className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-slate-800 capitalize">{activeTab}</h2>
          <div className="relative">
            <select 
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-slate-100 border border-slate-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
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
            T
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
          { title: 'Total Students', value: '124', icon: Users, color: 'blue', change: '+8%' },
          { title: 'Active Assignments', value: '12', icon: FileText, color: 'green', change: '+15%' },
          { title: 'Avg. Grade', value: '87%', icon: Award, color: 'yellow', change: '+3%' },
          { title: 'Attendance Rate', value: '92%', icon: TrendingUp, color: 'purple', change: '+5%' }
        ].map(stat => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
                <p className={`text-sm mt-2 text-${stat.color}-600`}>{stat.change} from last month</p>
              </div>
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Recent Activities</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-slate-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 text-sm">{activity.title}</p>
                  <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Upcoming Events</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700">View Calendar</button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="flex items-center space-x-4 p-3 hover:bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xs text-green-600 font-medium">{event.date.split(' ')[0]}</span>
                  <span className="text-xs text-green-600">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 text-sm font-medium">{event.title}</p>
                  <p className="text-slate-500 text-xs">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Add Student</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-4 font-medium text-slate-700">Student</th>
                <th className="text-left p-4 font-medium text-slate-700">Grade</th>
                <th className="text-left p-4 font-medium text-slate-700">Attendance</th>
                <th className="text-left p-4 font-medium text-slate-700">Last Active</th>
                <th className="text-left p-4 font-medium text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{student.name.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-slate-800">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      student.grade.startsWith('A') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {student.grade}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-slate-600">{student.attendance}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600">{student.lastActive}</td>
                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Create Assignment</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map(assignment => (
          <div key={assignment.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-slate-800">{assignment.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                assignment.status === 'active' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {assignment.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Due Date:</span>
                <span className="font-medium">{assignment.dueDate}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Submissions:</span>
                <span className="font-medium">{assignment.submitted}/{assignment.total}</span>
              </div>
              
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
              <button className="text-slate-600 hover:text-slate-700">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'students': return renderStudents();
      case 'assignments': return renderAssignments();
      case 'classes':
      case 'calendar':
      case 'messages':
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section</h3>
            <p className="text-slate-600">This section is under development. Content will be added soon.</p>
          </div>
        );
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {renderSidebar()}
      <div className="ml-64 flex flex-col">
        {renderHeader()}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;