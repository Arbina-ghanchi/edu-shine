import { User } from "lucide-react";

export const StudentProfileHeader = ({ student }) => {
  if (!student) return null;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-lg mb-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <User className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{student.studentName}</h1>
          <p className="opacity-90">
            {student.studentGrade} • {student.studentAge} years •{" "}
            {student.studentGender}
          </p>
        </div>
      </div>
    </div>
  );
};
