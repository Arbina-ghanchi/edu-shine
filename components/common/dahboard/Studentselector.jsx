"use client";
import React from "react";

export const StudentSelector = ({
  students,
  selectedStudent,
  setSelectedStudent,
}) => {
  React.useEffect(() => {
    if (students && students.length > 0 && !selectedStudent) {
      setSelectedStudent(students[0].studentName);
    }
  }, [students, selectedStudent, setSelectedStudent]);

  return (
    <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Select Student</h2>
      <div className="flex gap-4 flex-wrap">
        {students?.map((student) => (
          <button
            key={student._id || student.id}
            onClick={() => setSelectedStudent(student.studentName)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedStudent === student.studentName
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {student.studentName} - Grade {student.studentGrade}
          </button>
        ))}
      </div>
    </div>
  );
};
