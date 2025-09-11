"use client";
import { useAuth } from "@/context/AuthContext";
import { MessageCircle, Users, Edit, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const DashboardHeader = ({ students }) => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {user && user?.role == "parent" ? "Parent" : "Student"} Dashboard
        </h1>

        {user && user?.role == "parent" ? (
          <p className="text-gray-600 text-lg">
            Monitor your child's academic journey and stay connected
          </p>
        ) : (
          <p className="text-gray-600 text-lg">
            Monitor your academic journey and stay connected
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        {user && user?.role == "parent" ? (
          <>
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">
                {students?.length} Students
              </span>
            </div>
            <button
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              onClick={() => router.push("/parent")}
            >
              <Edit className="w-5 h-5" />
              Edit My details
            </button>
            <button
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              onClick={() => router.push("/student-form")}
            >
              <Plus className="w-5 h-5" />
              Add Child
            </button>
          </>
        ) : null}

        <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Contact Teacher
        </button>
      </div>
    </div>
  );
};
