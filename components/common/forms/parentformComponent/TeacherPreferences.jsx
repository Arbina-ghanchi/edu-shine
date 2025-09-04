import { Users, Target } from "lucide-react";

const TeacherPreferences = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Teacher Preferences
        </h3>
        <p className="text-gray-600">
          What kind of teacher are you looking for?
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teacher Gender Preference
            </label>
            <select
              name="teacherGenderPreference"
              value={formData.teacherGenderPreference}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">No Preference</option>
              <option value="Male">Male Teacher</option>
              <option value="Female">Female Teacher</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience Preference
            </label>
            <select
              name="teacherExperiencePreference"
              value={formData.teacherExperiencePreference}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">No Preference</option>
              <option value="Fresher">Fresher (0-2 years)</option>
              <option value="Experienced">Experienced (3-10 years)</option>
              <option value="Highly Experienced">
                Highly Experienced (10+ years)
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teaching Style Preference
          </label>
          <div className="relative">
            <Target className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="teachingStylePreference"
              value={formData.teachingStylePreference}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe the teaching approach you prefer (e.g., patient, interactive, strict, concept-based)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Language Preference
          </label>
          <input
            type="text"
            name="languagePreference"
            value={formData.languagePreference}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., English, Hindi, Gujarati, or combination"
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherPreferences;
