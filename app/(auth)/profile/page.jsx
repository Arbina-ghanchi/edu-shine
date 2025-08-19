"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import authService from "@/service/authService";
import {
  User,
  Mail,
  Book,
  Calendar,
  Edit3,
  Trash2,
  Shield,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { user, token, logout } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await authService.getProfile(token);
      console.log(result, "result");
      if (result.success) {
        setProfileData(result.data.data.user);
      } else {
        setError(
          result.message || result.error?.message || "Failed to fetch profile"
        );
      }
    } catch (err) {
      console.error("Profile fetch error:", err);
      setError(err.response?.data?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword) {
      setDeleteError("Please enter your password");
      return;
    }

    try {
      setDeleteLoading(true);
      setDeleteError("");

      // You'll need to add this method to your authService
      const response = await authService.deleteAccount(token, deletePassword);

      if (response.success) {
        setSuccess("Account deleted successfully");
        setTimeout(() => {
          logout();
        }, 2000);
      } else {
        setDeleteError(response.error.message || "Failed to delete account");
      }
    } catch (err) {
      setDeleteError("An unexpected error occurred");
    } finally {
      setDeleteLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <AlertTriangle className="mx-auto text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchProfile}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}

        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32">
            <button onClick={() => router.back()} className="text-white m-2">
              <ArrowLeft className="text-white" size={24} />
            </button>
          </div>
          <div className="px-6 pb-6 -mt-16">
            <div className="flex items-end justify-between">
              <div className="flex items-end">
                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                    <User size={64} className="text-blue-500" />
                  </div>
                </div>
                <div className="ml-6 mb-0">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {profileData?.fullName || user?.fullName}
                  </h1>
                  <p className="text-gray-600 flex items-center mt-1">
                    <Mail size={16} className="mr-2" />
                    {profileData?.email || user?.email}
                  </p>
                </div>
              </div>
              <button className="flex items-center text-red-600 hover:text-red-800 transition-colors">
                <Edit3 size={18} className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <User className="mr-2" size={20} />
              Personal Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <p className="mt-1 text-gray-900">{profileData?.fullName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <p className="mt-1 text-gray-900">{profileData?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Role
                </label>
                <p className="mt-1 text-gray-900 capitalize">
                  {profileData?.role}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Book className="mr-2" size={20} />
              Additional Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Description
                </label>
                <p className="mt-1 text-gray-900">
                  {profileData?.description || "No description provided"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Member Since
                </label>
                <p className="mt-1 text-gray-900 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {formatDate(profileData?.createdAt)}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Last Updated
                </label>
                <p className="mt-1 text-gray-900 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {formatDate(profileData?.updatedAt)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
            <Shield className="mr-2" size={20} />
            Danger Zone
          </h2>
          <p className="text-gray-600 mb-4">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-md flex items-center transition-colors"
          >
            <Trash2 size={18} className="mr-2" />
            Delete Account
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
              <AlertTriangle className="mr-2" size={24} />
              Delete Your Account?
            </h3>
            <p className="text-gray-600 mb-4">
              This action cannot be undone. This will permanently delete your
              account and remove all data from our servers.
            </p>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your password to confirm:
              </label>
              <input
                type="password"
                id="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your password"
              />
              {deleteError && (
                <p className="text-red-500 text-sm mt-2">{deleteError}</p>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeletePassword("");
                  setDeleteError("");
                }}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                disabled={deleteLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={deleteLoading}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center transition-colors disabled:opacity-50"
              >
                {deleteLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={18} className="mr-2" />
                    Delete Account
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
