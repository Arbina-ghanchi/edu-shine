import { Briefcase } from "lucide-react";

const AdditionalInfoStep = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Additional Information
        </h3>
        <p className="text-gray-600">Help students get to know you better</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio/Introduction *
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Write a brief introduction about yourself"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teaching Philosophy
          </label>
          <textarea
            name="teachingPhilosophy"
            value={formData.teachingPhilosophy}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Describe your teaching philosophy and approach"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notable Achievements
          </label>
          <textarea
            name="achievements"
            value={formData.achievements}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Any academic or teaching achievements you'd like to highlight"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            References (if any)
          </label>
          <textarea
            name="references"
            value={formData.references}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="You can provide references from previous employers or students"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            What happens next?
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• We'll review your application and verify your credentials</li>
            <li>• You'll receive student requests matching your profile</li>
            <li>
              • You can accept or decline requests based on your availability
            </li>
            <li>• We'll help coordinate the first class and handle payments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoStep;
