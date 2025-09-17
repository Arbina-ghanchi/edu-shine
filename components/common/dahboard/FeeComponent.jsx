// components/common/dahboard/Feemanagement.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  DollarSign,
  Calendar,
  Bell,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Search,
} from "lucide-react";

export const FeeManagement = () => {
  const [feeRecords, setFeeRecords] = useState([
    {
      id: 1,
      month: "January 2024",
      amount: "$250.00",
      dueDate: "2024-01-05",
      status: "paid",
      paidDate: "2024-01-03",
      transactionId: "TX0012345",
    },
    {
      id: 2,
      month: "February 2024",
      amount: "$250.00",
      dueDate: "2024-02-05",
      status: "paid",
      paidDate: "2024-02-02",
      transactionId: "TX0012346",
    },
    {
      id: 3,
      month: "March 2024",
      amount: "$250.00",
      dueDate: "2024-03-05",
      status: "paid",
      paidDate: "2024-03-01",
      transactionId: "TX0012347",
    },
    {
      id: 4,
      month: "April 2024",
      amount: "$250.00",
      dueDate: "2024-04-05",
      status: "pending",
      paidDate: null,
      transactionId: null,
    },
    {
      id: 5,
      month: "May 2024",
      amount: "$250.00",
      dueDate: "2024-05-05",
      status: "upcoming",
      paidDate: null,
      transactionId: null,
    },
  ]);

  const [filteredRecords, setFilteredRecords] = useState(feeRecords);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let result = feeRecords;

    if (filter !== "all") {
      result = result.filter((record) => record.status === filter);
    }

    if (searchTerm) {
      result = result.filter(
        (record) =>
          record.month.toLowerCase().includes(searchTerm.toLowerCase()) ||
          record.amount.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRecords(result);
  }, [filter, searchTerm, feeRecords]);

  const payFee = (id) => {
    setFeeRecords((prev) =>
      prev.map((record) =>
        record.id === id
          ? {
              ...record,
              status: "paid",
              paidDate: new Date().toISOString().split("T")[0],
              transactionId: `TX${Math.floor(
                1000000 + Math.random() * 9000000
              )}`,
            }
          : record
      )
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "paid":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Paid
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      case "upcoming":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Calendar className="w-3 h-3 mr-1" />
            Upcoming
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Overdue
          </span>
        );
    }
  };

  const today = new Date();
  const isFirstOfMonth = today.getDate() === 1;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold">Fee Management</h2>
        {isFirstOfMonth && (
          <span className="ml-auto inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <Bell className="w-4 h-4 mr-1" />
            Payment Due Today
          </span>
        )}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-blue-800">Total Paid</div>
          <div className="text-2xl font-bold text-blue-900">750.00</div>
          <div className="text-xs text-blue-600">Last 3 months</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-yellow-800">Pending</div>
          <div className="text-2xl font-bold text-yellow-900">250.00</div>
          <div className="text-xs text-yellow-600">Due in 5 days</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-green-800">Upcoming</div>
          <div className="text-2xl font-bold text-green-900">250.00</div>
          <div className="text-xs text-green-600">Due next month</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "all"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("paid")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "paid"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Paid
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "upcoming"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Upcoming
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search fees..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Fees Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Due Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecords.map((fee) => (
              <tr key={fee.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {fee.month}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {fee.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {fee.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {getStatusBadge(fee.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {fee.status === "paid" ? (
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <Download className="w-4 h-4 mr-1" />
                      Receipt
                    </button>
                  ) : (
                    <button
                      onClick={() => payFee(fee.id)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredRecords.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No fee records found
          </div>
        )}
      </div>

      {/* Calendar Reminder Section */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center">
          <Bell className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-blue-800">
            Calendar Reminders
          </h3>
        </div>
        <p className="mt-2 text-sm text-blue-700">
          Fees are due on the 1st of every month. You'll receive a notification
          3 days before the due date.
          {isFirstOfMonth && (
            <span className="font-semibold">
              {" "}
              Today is the 1st - payment is due!
            </span>
          )}
        </p>
        <button className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200">
          Add to Calendar
        </button>
      </div>
    </div>
  );
};
