import { BookOpen, Bookmark, Target } from "lucide-react";

const SubjectExpertiseStep = ({ formData, handleInputChange }) => {
  // List of common subjects (can be expanded as needed)
  const subjectOptions = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Computer Science",
    "Economics",
    "Business Studies",
    "Psychology",
    "Sociology",
    "Art",
    "Music",
    "Physical Education",
    "Foreign Languages",
    "Political Science",
    "Environmental Science",
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Subject Expertise
        </h3>
        <p className="text-gray-600">What subjects and levels can you teach?</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Subject *
          </label>
          <div className="relative">
            <Bookmark className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <select
              name="primarySubject"
              value={formData.primarySubject || ""}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              required
            >
              <option value="">Select your primary subject</option>
              {subjectOptions.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Secondary Subject (Optional)
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <select
              name="secondarySubject"
              value={formData.secondarySubjects || ""}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="">Select your secondary subject (optional)</option>
              {subjectOptions.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Grade Levels You Can Teach *
          </label>
          <select
            name="gradeLevelsTaught"
            value={formData.gradeLevelsTaught || ""}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select Grade Levels</option>
            <option value="Primary (1-5)">Primary (1-5)</option>
            <option value="Middle School (6-8)">Middle School (6-8)</option>
            <option value="High School (9-10)">High School (9-10)</option>
            <option value="Higher Secondary (11-12)">
              Higher Secondary (11-12)
            </option>
            <option value="College/University">College/University</option>
            <option value="All Levels">All Levels</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Curriculum Expertise *
          </label>
          <select
            name="curriculumExpertise"
            value={formData.curriculumExpertise || ""}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select Curriculum</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
            <option value="IGCSE">IGCSE</option>
            <option value="IB">IB</option>
            <option value="Multiple">Multiple</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teaching Methodology
          </label>
          <div className="relative">
            <Target className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="teachingMethodology"
              value={formData.teachingMethodology || ""}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe your teaching approach and methodology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectExpertiseStep;
