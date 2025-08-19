import { GraduationCap, User, Users } from "lucide-react";

export const roles = [
  {
    id: "teacher",
    title: "Teacher",
    description: "Manage classes and student progress",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
  },
  {
    id: "student",
    title: "Student",
    description: "Access courses and assignments",
    icon: User,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
  },
  {
    id: "parent",
    title: "Parent",
    description: "Monitor child's academic progress",
    icon: Users,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700",
  },
];
