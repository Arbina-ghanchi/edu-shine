import { GraduationCap, Award, Languages } from "lucide-react";

const ProfessionalInfoStep = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Professional Information
        </h3>
        <p className="text-gray-600">Your qualifications and experience</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Highest Qualification *
          </label>
          <input
            type="text"
            name="highestQualification"
            value={formData.highestQualification}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., M.Sc Physics, B.Ed, etc."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Profession *
            </label>
            <input
              type="text"
              name="currentProfession"
              value={formData.currentProfession}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., School Teacher, Professor, etc."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Teaching Experience *
            </label>
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teaching Certifications (if any)
          </label>
          <div className="relative">
            <Award className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="teachingCertifications"
              value={formData.teachingCertifications}
              onChange={handleInputChange}
              rows={2}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="List any teaching certifications you hold"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Languages You Can Teach In *
          </label>
          <div className="relative">
            <Languages className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="languagesSpoken"
              value={formData.languagesSpoken}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., English, Hindi, Gujarati"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfoStep;
