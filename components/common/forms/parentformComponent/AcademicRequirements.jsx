import { BookOpen, Target, Star } from "lucide-react";

const AcademicRequirements = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Academic Requirements
        </h3>
        <p className="text-gray-600">What subjects and help do you need?</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subjects Needed *
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="subjectsNeeded"
              value={formData.subjectsNeeded}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="List all subjects you need help with (e.g., Mathematics, Physics, English, Hindi)"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Academic Level *
          </label>
          <select
            name="currentAcademicLevel"
            value={formData.currentAcademicLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select Level</option>
            <option value="Excellent">Excellent (90%+ marks)</option>
            <option value="Good">Good (75-90% marks)</option>
            <option value="Average">Average (60-75% marks)</option>
            <option value="Below Average">Below Average (40-60% marks)</option>
            <option value="Struggling">Struggling (Below 40%)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specific Academic Challenges
          </label>
          <div className="relative">
            <Target className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="specificChallenges"
              value={formData.specificChallenges}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe any specific difficulties your child faces in studies"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Learning Goals *
          </label>
          <div className="relative">
            <Star className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="learningGoals"
              value={formData.learningGoals}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="What do you want to achieve through tutoring? (e.g., improve grades, exam preparation, concept clarity)"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Previous Tutoring Experience
          </label>
          <select
            name="previousTutoringExperience"
            value={formData.previousTutoringExperience}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="First Time">First time seeking tuition</option>
            <option value="Previous Good Experience">
              Had good experience before
            </option>
            <option value="Previous Bad Experience">
              Had unsatisfactory experience
            </option>
            <option value="Currently Taking">Currently taking tuition</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AcademicRequirements;
