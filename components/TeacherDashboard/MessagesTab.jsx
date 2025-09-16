// components/tabs/MessagesTab.jsx
import React from "react";
import { Send, User } from "lucide-react";
import { messages } from "./data/message";

const MessagesTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            <Send className="w-4 h-4" />
            <span>New Message</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MessagesList messages={messages} />
        <MessageStats messages={messages} />
      </div>
    </div>
  );
};

const MessagesList = ({ messages }) => (
  <div className="lg:col-span-2">
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-4 md:p-6 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800">Messages</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </div>
  </div>
);

const MessageItem = ({ message }) => (
  <div
    className={`p-4 md:p-6 hover:bg-slate-50 cursor-pointer ${
      message.unread ? "bg-blue-50" : ""
    }`}
  >
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
        <User className="w-5 h-5 text-slate-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p
            className={`font-medium text-sm ${
              message.unread ? "text-slate-900" : "text-slate-700"
            }`}
          >
            {message.from}
          </p>
          <span className="text-xs text-slate-500">{message.time}</span>
        </div>
        <p
          className={`text-sm ${
            message.unread ? "font-medium text-slate-800" : "text-slate-600"
          }`}
        >
          {message.subject}
        </p>
        {message.unread && (
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
        )}
      </div>
    </div>
  </div>
);

const MessageStats = ({ messages }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Message Stats
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-600 text-sm">Unread</span>
          <span className="font-semibold text-red-600">
            {messages.filter((m) => m.unread).length}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600 text-sm">Total</span>
          <span className="font-semibold">{messages.length}</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Quick Filters
      </h3>
      <div className="space-y-2">
        <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
          All Messages
        </button>
        <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
          Unread
        </button>
        <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
          From Parents
        </button>
        <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
          From Students
        </button>
      </div>
    </div>
  </div>
);

export default MessagesTab;
