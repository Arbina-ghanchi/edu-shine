import { BookOpen, CheckCircle, MessageCircle, TrendingUp } from "lucide-react";

export const stats = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Average Grade",
    value: "0.0%",
    subtitle: "This semester",
    trend: "+2.5%",
    trendUp: true,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Assignments",
    value: "0/0",
    subtitle: "Completed",
    trend: null,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Attendance Rate",
    value: "100.0%",
    subtitle: "This month",
    trend: "+1.2%",
    trendUp: true,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Messages",
    value: "3",
    subtitle: "From teachers",
    trend: null,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];
