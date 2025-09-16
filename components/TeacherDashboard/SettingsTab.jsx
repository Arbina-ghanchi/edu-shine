// components/tabs/SettingsTab.jsx
import React from "react";

const SettingsTab = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileSettings user={user} />
        <NotificationSettings />
        <AccountActions />
      </div>
    </div>
  );
};

const ProfileSettings = ({ user }) => (
  <div className="lg:col-span-2 space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">
        Profile Information
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={user?.name || "Teacher Name"}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={user?.email || "teacher@example.com"}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Role
          </label>
          <input
            type="text"
            value={user?.role || "teacher"}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 capitalize"
            readOnly
          />
        </div>
      </div>
    </div>

    <NotificationSettings />
  </div>
);

const NotificationSettings = () => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <h3 className="text-lg font-semibold text-slate-800 mb-6">
      Notification Preferences
    </h3>
    <div className="space-y-4">
      {[
        "Email notifications for new assignments",
        "SMS notifications for urgent messages",
        "Desktop notifications for calendar events",
        "Weekly summary reports",
      ].map((setting, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-sm text-slate-700">{setting}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              defaultChecked={index % 2 === 0}
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      ))}
    </div>
  </div>
);

const AccountActions = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Account Actions
      </h3>
      <div className="space-y-3">
        <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
          Save Changes
        </button>
        <button className="w-full px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 text-sm">
          Change Password
        </button>
        <button className="w-full px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm">
          Deactivate Account
        </button>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">System Info</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-600">Version:</span>
          <span className="font-medium">v2.1.0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Last Login:</span>
          <span className="font-medium">Today, 9:30 AM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Data Usage:</span>
          <span className="font-medium">124 MB</span>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsTab;
