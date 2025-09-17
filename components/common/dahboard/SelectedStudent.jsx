import { User, Monitor, School, Target, Award, Map } from "lucide-react";

export const StudentDetailsCard = ({ student }) => {
  if (!student) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
        <User className="w-5 h-5 text-blue-600" />
        Student Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 flex items-center gap-2">
            <User className="w-4 h-4" />
            Basic Information
          </h3>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Grade & Age</span>
            <span className="font-medium">
              {student.studentGrade}, {student.studentAge} years
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Gender</span>
            <span className="font-medium">{student.studentGender}</span>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Academic Level</span>
            <span className="font-medium">{student.currentAcademicLevel}</span>
          </div>
        </div>

        {/* School Info */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 flex items-center gap-2">
            <School className="w-4 h-4" />
            School Information
          </h3>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Current School</span>
            <span className="font-medium text-right">
              {student.currentSchool}
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Tutoring Experience</span>
            <span className="font-medium">
              {student.previousTutoringExperience}
            </span>
          </div>
        </div>

        {/* Learning Preferences */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Learning Preferences
          </h3>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Preferred Days</span>
            <span className="font-medium">{student.preferredDays}</span>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Preferred Time</span>
            <span className="font-medium">{student.preferredTime}</span>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Session Duration</span>
            <span className="font-medium">{student.sessionDuration}</span>
          </div>
        </div>

        {/* Technical Setup */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Technical Setup
          </h3>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Device Available</span>
            <span className="font-medium">{student.deviceAvailable}</span>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Internet Connection</span>
            <span className="font-medium">{student.internetConnection}</span>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Has Study Room</span>
            <span className="font-medium">
              {student.hasStudyRoom ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
          <Award className="w-4 h-4" />
          Additional Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Subjects Needed</p>
            <p className="font-medium mt-1">{student.subjectsNeeded}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Learning Goals</p>
            <p className="font-medium mt-1">{student.learningGoals}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Specific Challenges</p>
            <p className="font-medium mt-1">{student.specificChallenges}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Additional Requirements</p>
            <p className="font-medium mt-1">{student.additionalRequirements}</p>
          </div>
        </div>
      </div>

      {/* Location & Budget */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
          <Map className="w-4 h-4" />
          Location & Budget
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Home Address</p>
            <p className="font-medium mt-1">{student.homeAddress}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Willing to Travel</p>
            <p className="font-medium mt-1">{student.willingToTravel}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Budget Range</p>
            <p className="font-medium mt-1 text-green-600">
              {student.budgetRange}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Preferred Mode</p>
            <p className="font-medium mt-1">{student.preferredMode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
