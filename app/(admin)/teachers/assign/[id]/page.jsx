"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAllStudent, getTeacherDetails } from "@/service/adminService";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [students, setStudents] = useState({ users: [], studentForms: [] });
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [formData, setFormData] = useState({
    teacherId: id,
    teacherAssigned: "",
    subject: "",
    teachingMedium: "Offline",
    endDate: "",
    status: "Active",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to map teacher's teaching mode to form teaching medium
  const mapTeachingModeToMedium = (teachingMode) => {
    switch (teachingMode) {
      case "Online":
        return "Online";
      case "Home Tuition":
        return "Offline";
      case "Both":
        return "Hybrid";
      default:
        return "Offline";
    }
  };

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
            teachingMedium: mapTeachingModeToMedium(teacherData.teachingMode),
          }));
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

  // Fetch available students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await getAllStudent();

        if (response.success) {
          setStudents(response.data);
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

  // Find student form data by user ID
  const findStudentForm = (userId) => {
    return students.studentForms?.find((form) => form.userId === userId) || {};
  };

  const handleStudentSelection = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
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
      const assignmentData = {
        ...formData,
        studentIds: selectedStudents,
      };

      const response = await fetch("/api/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignmentData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Assignment created successfully!");
        // Reset form
        setSelectedStudents([]);
        setFormData({
          teacherId: id,
          teacherAssigned: "",
          subject: teacher.primarySubjects || "",
          teachingMedium: mapTeachingModeToMedium(teacher.teachingMode),
          endDate: "",
          status: "Active",
          notes: "",
        });

        // Redirect after success
        setTimeout(() => {
          router.push("/dashboard/assignments");
        }, 2000);
      } else {
        setError(data.message || "Failed to create assignment");
      }
    } catch (err) {
      setError("Error creating assignment");
      console.error(err);
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
              Assign Students to Teacher
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
                  Teacher Assigned (User ID) *
                </label>
                <input
                  type="text"
                  name="teacherAssigned"
                  value={formData.teacherId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled
                />
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
                <input
                  name="teachingMedium"
                  value={teacher.teachingMode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  disabled
                />

                {teacher.teachingMode && (
                  <p className="text-xs text-blue-600 mt-1">
                    Teacher prefers: {teacher.teachingMode}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teaching Batch
                </label>
                <input
                  name="teachingMedium"
                  value={teacher.availableTimeSlots}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  disabled
                />
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
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Students *
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
                    return (
                      <div
                        key={student._id}
                        className={`flex p-3 rounded-md cursor-pointer ${
                          selectedStudents.includes(student._id)
                            ? "bg-blue-100 border border-blue-300"
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                        }`}
                        onClick={() => handleStudentSelection(student._id)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedStudents.includes(student._id)}
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
                {loading ? "Creating Assignment..." : "Create Assignment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
