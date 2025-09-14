"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import { getTeacherDetails } from "@/service/adminService";
import Link from "next/link";

const TeacherDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await getTeacherDetails(id);

        if (response.success) {
          setTeacher(response.data.teacherFormDetails);
          setUserDetails(response.data.userDetails);
        } else {
          setError("Failed to load teacher details");
        }
      } catch (err) {
        setError("Error fetching teacher details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-10 text-lg">
          Loading teacher details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-10 text-lg text-red-600">{error}</div>
      </div>
    );
  }

  if (!teacher || !userDetails) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-10 text-lg text-red-600">
          Teacher not found
        </div>
      </div>
    );
  }

  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Head>
        <title>{teacher.fullName} - Teacher Details</title>
      </Head>

      <div className="flex justify-between mb-6">
        <button
          onClick={() => router.back()}
          className="text-blue-500 hover:text-blue-700 text-lg mb-6 transition-colors duration-200"
        >
          ← Back to Dashboard
        </button>

        <Link href={`assign/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Assign Student
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
          {teacher.fullName?.charAt(0).toUpperCase() || "T"}
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {teacher.fullName}
          </h1>
          <p className="text-gray-600 mb-3">{userDetails.email}</p>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800`}
          >
            {userDetails.role}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone
              </label>
              <span className="text-gray-900">
                {teacher.phone || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Address
              </label>
              <span className="text-gray-900">
                {teacher.address || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <span className="text-gray-900">
                {teacher.gender || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date of Birth
              </label>
              <span className="text-gray-900">
                {teacher.dateOfBirth
                  ? new Date(teacher.dateOfBirth).toLocaleDateString()
                  : "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Subject Expertise */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Subject Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Primary Subject
              </label>
              <span className="text-gray-900">
                {teacher.primarySubjects || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Secondary subjects
              </label>
              <span className="text-gray-900">
                {teacher.secondarySubjects || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Years of Experience
              </label>
              <span className="text-gray-900">
                {teacher.yearsOfExperience || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Languages Spoken
              </label>
              <span className="text-gray-900">
                {teacher.languagesSpoken || "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Professional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Highest Qualification
              </label>
              <span className="text-gray-900">
                {teacher.highestQualification || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Profession
              </label>
              <span className="text-gray-900">
                {teacher.currentProfession || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Years of Experience
              </label>
              <span className="text-gray-900">
                {teacher.yearsOfExperience || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Languages Spoken
              </label>
              <span className="text-gray-900">
                {teacher.languagesSpoken || "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Teaching Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Teaching Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Grade Levels Taught
              </label>
              <span className="text-gray-900">
                {teacher.gradeLevelsTaught || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Curriculum Expertise
              </label>
              <span className="text-gray-900">
                {teacher.curriculumExpertise || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Teaching Certifications
              </label>
              <span className="text-gray-900">
                {teacher.teachingCertifications || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Teaching Methodology
              </label>
              <span className="text-gray-900">
                {teacher.teachingMethodology || "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Availability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Teaching Mode
              </label>
              <span className="text-gray-900">
                {teacher.teachingMode || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Available Days
              </label>
              <span className="text-gray-900">
                {teacher.availableDays && teacher.availableDays.length > 0
                  ? teacher.availableDays.join(", ")
                  : "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Available Time Slots
              </label>
              <span className="text-gray-900">
                {teacher.availableTimeSlots || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Preferred Session Duration
              </label>
              <span className="text-gray-900">
                {teacher.preferredSessionDuration || "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Tuition Preferences */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Tuition Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Minimum Fee
              </label>
              <span className="text-gray-900">
                {teacher.minimumFee ? `₹${teacher.minimumFee}` : "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Preferred Payment Method
              </label>
              <span className="text-gray-900">
                {teacher.preferredPaymentMethod || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Travel Radius
              </label>
              <span className="text-gray-900">
                {teacher.travelRadius || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Online Teaching Tools
              </label>
              <span className="text-gray-900">
                {teacher.onlineTeachingTools || "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Additional Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Bio
              </label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                {teacher.bio || "Not provided"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Teaching Philosophy
              </label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                {teacher.teachingPhilosophy || "Not provided"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Achievements
              </label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                {teacher.achievements || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Application Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Application Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Status
              </label>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(
                  teacher.applicationStatus
                )}`}
              >
                {teacher.applicationStatus || "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Created At
              </label>
              <span className="text-gray-900">
                {teacher.createdAt
                  ? new Date(teacher.createdAt).toLocaleDateString()
                  : "Not provided"}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last Updated
              </label>
              <span className="text-gray-900">
                {teacher.updatedAt
                  ? new Date(teacher.updatedAt).toLocaleDateString()
                  : "Not provided"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailsPage;
