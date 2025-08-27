export const StudentSelector = ({ students, selectedStudent, setSelectedStudent }) => (
    <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Select Student</h2>
      <div className="flex gap-4 flex-wrap">
        {students.map((student) => (
          <button
            key={student.id}
            onClick={() => setSelectedStudent(student.name)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedStudent === student.name
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {student.name} - Grade {student.grade}
          </button>
        ))}
      </div>
    </div>
  );