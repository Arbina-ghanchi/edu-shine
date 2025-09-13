"use client";
import React, { useState, useEffect } from "react";
import ProfessionalInfoStep from "./teacherfromComponent/ProfessionalInfoStep";
import SubjectExpertiseStep from "./teacherfromComponent/SubjectExpertiseStep";
import AvailabilityStep from "./teacherfromComponent/AvailabilityStep";
import TuitionPreferencesStep from "./teacherfromComponent/TuitionPreferencesStep";
import AdditionalInfoStep from "./teacherfromComponent/AdditionalInfoStep";
import PersonalInfoStep from "./teacherfromComponent/PersonalInfoStep";
import ProgressBar from "./teacherfromComponent/ProgressBar";
import {
  createTeacherForm,
  getTeacherForm,
} from "@/service/teacherFormService";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export const TeacherForm = () => {
  const { token } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    phone: "",
    address: "",
    gender: "",
    dateOfBirth: "",

    // Professional Information
    highestQualification: "",
    currentProfession: "",
    yearsOfExperience: "",
    teachingCertifications: "",
    languagesSpoken: "",

    // Subject Expertise
    primarySubject: "",
    secondarySubject: "",
    gradeLevelsTaught: "",
    curriculumExpertise: "",
    teachingMethodology: "",

    // Availability
    teachingMode: "",
    availableDays: [],
    availableTimeSlots: "",
    preferredSessionDuration: "",

    // Tuition Preferences
    minimumFee: "",
    preferredPaymentMethod: "",
    travelRadius: "",
    onlineTeachingTools: "",

    // Additional Information
    bio: "",
    teachingPhilosophy: "",
    achievements: "",
    references: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const totalSteps = 6;

  // Fetch existing teacher form data on component mount
  useEffect(() => {
    const fetchTeacherForm = async () => {
      try {
        setIsLoading(true);
        if (!token) {
          alert("Authentication required. Please log in again.");
          return;
        }
        const result = await getTeacherForm(token);
        console.log(result, "check for teacher form");
        if (result.success && result.data) {
          setFormData(result.data);
          setIsEditing(true); // Mark as editing existing form
        }
      } catch (error) {
        console.error("Error fetching teacher form:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeacherForm();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle checkbox array for availableDays
      if (name === "availableDays") {
        setFormData((prev) => {
          const newDays = [...prev.availableDays];
          if (checked) {
            newDays.push(value);
          } else {
            const index = newDays.indexOf(value);
            if (index > -1) {
              newDays.splice(index, 1);
            }
          }
          return { ...prev, availableDays: newDays };
        });
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (!token) {
        alert("Authentication required. Please log in again.");
        return;
      }

      const result = await createTeacherForm(formData, token);

      if (result.success) {
        console.log("Teacher Form submitted successfully:", result.data);
        alert(
          `Thank you for ${
            isEditing ? "updating" : "submitting"
          } your tutor application! ${
            isEditing
              ? "Your changes have been saved."
              : "We will review your application and contact you soon."
          }`
        );
        router.push("/teacher-dashboard");
      } else {
        console.error("Failed to submit form:", result.error);
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Render the current step component
  const renderCurrentStep = () => {
    const commonProps = {
      formData,
      handleInputChange,
    };

    switch (currentStep) {
      case 1:
        return <PersonalInfoStep {...commonProps} />;
      case 2:
        return <ProfessionalInfoStep {...commonProps} />;
      case 3:
        return <SubjectExpertiseStep {...commonProps} />;
      case 4:
        return <AvailabilityStep {...commonProps} />;
      case 5:
        return <TuitionPreferencesStep {...commonProps} />;
      case 6:
        return <AdditionalInfoStep {...commonProps} />;
      default:
        return <PersonalInfoStep {...commonProps} />;
    }
  };

  if (isLoading && currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading your teacher profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 text-center">
              {isEditing ? "Edit Your Teacher Profile" : "Become a Tutor"}
            </h1>
            <p className="text-gray-600 text-center mt-2">
              {isEditing
                ? "Update your teaching profile information"
                : "Complete your application to start teaching"}
            </p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <div className="min-h-[600px]">{renderCurrentStep()}</div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1 || isLoading}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1 || isLoading
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6].map((step) => (
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
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "Loading..." : "Next"}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
              >
                {isLoading
                  ? "Submitting..."
                  : isEditing
                  ? "Update Profile"
                  : "Submit Application"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherForm;
