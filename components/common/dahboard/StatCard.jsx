import { TrendingUp } from "lucide-react";

export const StatCard = ({
  icon,
  title,
  value,
  subtitle,
  trend,
  trendUp,
  bgColor,
  iconColor,
}) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div
      className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center mb-4`}
    >
      <div className={iconColor}>{icon}</div>
    </div>
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      {trend && (
        <span
          className={`text-sm font-medium flex items-center gap-1 ${
            trendUp ? "text-green-600" : "text-red-600"
          }`}
        >
          <TrendingUp className="w-3 h-3" />
          {trend}
        </span>
      )}
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-gray-500 text-sm">{subtitle}</div>
  </div>
);
