"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "./parentformComponent/progressiveBar";
import ParentInfo from "./parentformComponent/ParentInfo";
import TeacherPreferences from "./parentformComponent/TeacherPreferences";
import { createForm, getParentForm } from "@/service/parentFormService";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export const ParentForm = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Parent Information
    parentName: "",
    phone: "",
    alternatePhone: "",
    address: "",
    occupation: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const totalSteps = 1;

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
        if (!formData.parentName)
          newErrors.parentName = "Parent name is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.address) newErrors.address = "Address is required";
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
        const result = await createForm(formData, token);
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
              <ParentInfo
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}
          </div>

          <div className="flex justify-end items-center mt-8 pt-6 border-t border-gray-200">
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

export default ParentForm;
