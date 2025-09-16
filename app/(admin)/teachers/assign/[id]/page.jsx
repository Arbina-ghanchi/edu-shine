"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAllStudent, getTeacherDetails } from "@/service/adminService";
import {
  createAssignmentTeacher,
  getAssignmentTeacher,
} from "@/service/teacherAssing.service";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [students, setStudents] = useState({ users: [], studentForms: [] });
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [existingAssignment, setExistingAssignment] = useState(null);
  const [formData, setFormData] = useState({
    teacherId: id,
    teacherAssigned: id,
    subject: "",
    teachingMedium: "Home Tuition",
    endDate: "",
    status: "Active",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [fetchingAssignment, setFetchingAssignment] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [studentsLoaded, setStudentsLoaded] = useState(false);

  // Fetch teacher details
  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        setLoading(true);
        const response = await getTeacherDetails(id);

        if (response.success) {
          const teacherData = response.data.teacherFormDetails;
          setTeacher(teacherData);
          setUserDetails(response.data.userDetails);

          // Pre-fill form data based on teacher details
          setFormData((prev) => ({
            ...prev,
            subject: teacherData.primarySubjects || "",
            teachingMedium: teacherData?.teachingMode,
            teacherAssigned: id,
          }));
        } else {
          setError("Failed to load teacher details");
        }
      } catch (err) {
        setError("Error fetching teacher details");
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherDetails();
  }, [id]);

  // Fetch available students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await getAllStudent();

        if (response.success) {
          setStudents(response.data);
          setStudentsLoaded(true);
        } else {
          setError("Failed to fetch students");
        }
      } catch (err) {
        setError("Error fetching students");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Fetch existing assignment when teacherId and subject are available AND students are loaded
  useEffect(() => {
    const fetchExistingAssignment = async () => {
      if (!formData.teacherId || !formData.subject || !studentsLoaded) return;

      try {
        setFetchingAssignment(true);
        const response = await getAssignmentTeacher(
          formData.teacherId,
          formData.subject
        );

        // Check the response structure based on your example
        if (response.success && response.data) {
          // The assignment data is directly in response.data
          const assignmentData = response.data.data;
          if (assignmentData && assignmentData.studentIds) {
            setExistingAssignment(assignmentData);

            setFormData((prev) => ({
              ...prev,
              teachingMedium:
                assignmentData.teachingMedium || prev.teachingMedium,
              status: assignmentData.status || prev.status,
              notes: assignmentData.notes || prev.notes,
            }));

            // FIXED: Pre-select students using studentIds array
            if (Array.isArray(assignmentData.studentIds)) {
              // Since studentIds are already strings in your API response, just convert to ensure consistency
              const studentIds = assignmentData.studentIds.map((id) =>
                String(id)
              );
              setSelectedStudents(studentIds);
            }
          }
        }
      } catch (err) {
      } finally {
        setFetchingAssignment(false);
      }
    };

    fetchExistingAssignment();
  }, [formData.teacherId, formData.subject, studentsLoaded]);

  const findStudentForm = (userId) => {
    return students.studentForms?.find((form) => form.userId === userId) || {};
  };

  const handleStudentSelection = (studentId) => {
    const normalizedId = String(studentId);

    if (selectedStudents.includes(normalizedId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== normalizedId));
    } else {
      setSelectedStudents([...selectedStudents, normalizedId]);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate form
    if (selectedStudents.length === 0) {
      setError("Please select at least one student");
      return;
    }

    if (!formData.subject || !formData.teacherAssigned) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // Prepare assignment data according to your controller expectations
      const assignmentData = {
        teacherId: formData.teacherId,
        studentIds: selectedStudents,
        teacherAssigned: formData.teacherAssigned,
        subject: formData.subject,
        teachingMedium: formData.teachingMedium,
        status: formData.status,
        notes: formData.notes,
      };

      // Use your service function
      const response = await createAssignmentTeacher(assignmentData);

      // The service already returns parsed JSON, no need for response.json()
      if (response.success) {
        setSuccess(
          existingAssignment
            ? "Assignment updated successfully!"
            : "Assignment created successfully!"
        );

        // Reset form
        setSelectedStudents([]);
        setFormData({
          teacherId: id,
          teacherAssigned: id,
          subject: teacher.primarySubjects || "",
          teachingMedium: teacher.teachingMode,
          endDate: "",
          status: "Active",
          notes: "",
        });

        // Clear existing assignment data
        setExistingAssignment(null);

        // Redirect after success
        setTimeout(() => {
          router.push("/admin");
        }, 2000);
      } else {
        setError(response.error || "Failed to create assignment");
      }
    } catch (err) {
      setError("Error creating assignment");
    } finally {
      setLoading(false);
    }
  };

  // Create an array of the teacher's subjects
  const teacherSubjects = [];
  if (teacher.primarySubjects) {
    teacherSubjects.push(teacher.primarySubjects);
  }
  if (
    teacher.secondarySubjects &&
    teacher.secondarySubjects !== teacher.primarySubjects
  ) {
    teacherSubjects.push(teacher.secondarySubjects);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {existingAssignment
                ? "Edit Assignment"
                : "Assign Students to Teacher"}
            </h1>
            <button
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back
            </button>
          </div>

          {/* Teacher Info Card */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              Teacher Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {teacher.fullName || "N/A"}
              </p>
              <p>
                <span className="font-medium">Subjects:</span>{" "}
                {teacher.primarySubjects}{" "}
                {teacher.secondarySubjects && `, ${teacher.secondarySubjects}`}
              </p>
              <p>
                <span className="font-medium">Teaching Mode:</span>{" "}
                {teacher.teachingMode || "N/A"}
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {teacher.yearsOfExperience || "N/A"}
              </p>
            </div>
          </div>

          {/* Existing Assignment Info */}
          {existingAssignment && (
            <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                Existing Assignment Found
              </h2>
              <p className="text-sm text-yellow-700">
                An assignment already exists for this teacher and subject. You
                are now editing the existing assignment.
              </p>
              <p className="text-xs text-yellow-600 mt-2">
                {existingAssignment.assignedStudentCount} student(s) already
                assigned
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teacher ID (Assigned) *
                </label>
                <input
                  type="text"
                  name="teacherAssigned"
                  value={formData.teacherAssigned}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none disabled:opacity-50 focus:ring-2 focus:ring-blue-500"
                  required
                  disabled
                />
                <p className="text-xs text-gray-500 mt-1">
                  This should be the teacher's user ID
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a subject</option>
                  {teacherSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject} (Teacher's Specialty)
                    </option>
                  ))}
                </select>
                {teacher.primarySubjects && (
                  <p className="text-xs text-blue-600 mt-1">
                    Teacher specializes in: {teacher.primarySubjects}
                    {teacher.secondarySubjects &&
                      `, ${teacher.secondarySubjects}`}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teaching Medium
                </label>
                <select
                  disabled
                  name="teachingMedium"
                  value={formData.teachingMedium}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 disabled:opacity-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Home Tuition">Home Tuition</option>
                  <option value="Online">Online</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
                {teacher.teachingMode && (
                  <p className="text-xs text-blue-600 mt-1">
                    Teacher prefers: {teacher.teachingMode}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add any additional notes about this assignment"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Students *
                {fetchingAssignment && (
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-blue-700 flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Checking for existing assignments...
                    </p>
                  </div>
                )}
              </label>

              {loading ? (
                <div className="text-center py-4">Loading students...</div>
              ) : students.users?.length === 0 ? (
                <div className="text-center py-4 text-gray-500">
                  No students available
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto p-2 border border-gray-200 rounded-md">
                  {students.users?.map((student) => {
                    const studentForm = findStudentForm(student._id);
                    const isSelected = selectedStudents.includes(
                      String(student._id)
                    );

                    return (
                      <div
                        key={student._id}
                        className={`flex p-3 rounded-md cursor-pointer ${
                          isSelected
                            ? "bg-blue-100 border border-blue-300"
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                        }`}
                        onClick={() => handleStudentSelection(student._id)}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleStudentSelection(student._id)}
                          className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 mt-1"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-gray-900">
                              {student.fullName}
                            </p>
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                              {studentForm.studentGrade || "N/A"}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {student.email}
                          </p>

                          {/* Student Form Details */}
                          {studentForm &&
                            Object.keys(studentForm).length > 0 && (
                              <div className="mt-2 pt-2 border-t border-gray-200">
                                <p className="text-xs">
                                  <span className="font-medium">
                                    Subjects Needed:
                                  </span>{" "}
                                  {studentForm.subjectsNeeded ||
                                    "Not specified"}
                                </p>
                                <p className="text-xs">
                                  <span className="font-medium">
                                    Preferred Time:
                                  </span>{" "}
                                  {studentForm.preferredTime || "Not specified"}
                                </p>
                                <p className="text-xs">
                                  <span className="font-medium">
                                    Session Duration:
                                  </span>{" "}
                                  {studentForm.sessionDuration ||
                                    "Not specified"}
                                </p>
                                <p className="text-xs">
                                  <span className="font-medium">
                                    Learning Mode:
                                  </span>{" "}
                                  {studentForm.preferredMode || "Not specified"}
                                </p>
                              </div>
                            )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">
                {selectedStudents.length} student(s) selected
              </p>
              {selectedStudents.length > 0 && (
                <div className="mt-3 p-3 bg-blue-50 rounded-md">
                  <h3 className="text-sm font-medium text-blue-800 mb-2">
                    Selected Students Details:
                  </h3>
                  {selectedStudents.map((studentId) => {
                    const student = students.users?.find(
                      (s) => s._id === studentId
                    );
                    const studentForm = findStudentForm(studentId);
                    return (
                      <div key={studentId} className="mb-2 last:mb-0 text-xs">
                        <p className="font-medium">{student?.fullName}:</p>
                        <p>
                          Subjects Needed:{" "}
                          {studentForm?.subjectsNeeded || "Not specified"}
                        </p>
                        <p>
                          Preferred Time:{" "}
                          {studentForm?.preferredTime || "Not specified"}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading
                  ? existingAssignment
                    ? "Updating Assignment..."
                    : "Creating Assignment..."
                  : existingAssignment
                  ? "Update Assignment"
                  : "Create Assignment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
