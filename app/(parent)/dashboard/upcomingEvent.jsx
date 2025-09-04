import { BookOpen, Calendar } from "lucide-react";

export const upcomingEvents = [
  {
    title: "Parent-Teacher Conference",
    time: "Tomorrow at 3:00 PM",
    icon: <BookOpen className="w-5 h-5" />,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "Tomorrow",
  },
  {
    title: "Science Fair Presentation",
    time: "Friday at 10:00 AM",
    icon: <Calendar className="w-5 h-5" />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    badge: "Friday",
  },
];
