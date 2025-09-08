"use client";
import AcademicRequirements from "@/components/common/forms/parentformComponent/AcademicRequirements";
import Logistics from "@/components/common/forms/parentformComponent/Logistics";
import StudentInfo from "@/components/common/forms/parentformComponent/StudentInfo";
import TuitionPreferences from "@/components/common/forms/parentformComponent/TuitionPreferences";
import ProgressBar from "@/components/common/forms/parentformComponent/progressiveBar";
import { useAuth } from "@/context/AuthContext";
import { createStudentForm } from "@/service/parentFormService";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Student Information
    studentName: "",
    studentAge: "",
    studentGrade: "",
    currentSchool: "",
    studentGender: "",

    // Academic Requirements
    subjectsNeeded: "",
    currentAcademicLevel: "",
    specificChallenges: "",
    learningGoals: "",
    previousTutoringExperience: "",

    // Tuition Preferences
    preferredMode: "",
    preferredDays: "",
    preferredTime: "",
    sessionDuration: "",
    budgetRange: "",

    // Logistics
    homeAddress: "",
    willingToTravel: "",
    hasStudyRoom: false,
    internetConnection: "",
    deviceAvailable: "",
    additionalRequirements: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const totalSteps = 4;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when field is updated
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.studentName)
          newErrors.studentName = "Student name is required";
        if (!formData.studentAge)
          newErrors.studentAge = "Student age is required";
        if (!formData.studentGrade)
          newErrors.studentGrade = "Student grade is required";
        if (!formData.currentSchool)
          newErrors.currentSchool = "Current school is required";
        if (!formData.studentGender)
          newErrors.studentGender = "Student gender is required";
        break;
      case 2:
        if (!formData.subjectsNeeded)
          newErrors.subjectsNeeded = "Subjects needed is required";
        if (!formData.currentAcademicLevel)
          newErrors.currentAcademicLevel = "Academic level is required";
        if (!formData.learningGoals)
          newErrors.learningGoals = "Learning goals are required";
        break;
      case 3:
        if (!formData.preferredMode)
          newErrors.preferredMode = "Preferred mode is required";
        if (!formData.preferredDays)
          newErrors.preferredDays = "Preferred days are required";
        if (!formData.preferredTime)
          newErrors.preferredTime = "Preferred time is required";
        if (!formData.sessionDuration)
          newErrors.sessionDuration = "Session duration is required";
        if (!formData.budgetRange)
          newErrors.budgetRange = "Budget range is required";
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      try {
        const result = await createStudentForm(formData, token);
        if (result.success) {
          alert(
            "Thank you for registering! We will find suitable teachers for your child and contact you soon."
          );
          router.push("/dashboard");
        } else {
          alert(`Submission failed: ${result.error}`);
        }
      } catch (error) {
        alert("An error occurred while submitting the form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("⚠️ Validation failed for step:", currentStep);
    }
  };

  useEffect(() => {
    const fetchParentForm = async () => {
      if (!token) return;
      try {
        const result = await getParentForm(token);
        if (result.success && result.data?.data) {
          setFormData((prev) => ({
            ...prev,
            ...result.data.data,
          }));
        }
      } catch (error) {
        console.error("Error fetching parent form:", error);
      }
    };

    fetchParentForm();
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            title="Parent Registration"
          />

          <div className="min-h-[600px]">
            {currentStep === 1 && (
              <StudentInfo
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}
            {currentStep === 2 && (
              <AcademicRequirements
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}
            {currentStep === 3 && (
              <TuitionPreferences
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}
            {currentStep === 4 && (
              <Logistics
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    step === currentStep
                      ? "bg-blue-600"
                      : step < currentStep
                      ? "bg-blue-300"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
