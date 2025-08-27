export const EventCard = ({ title, time, icon, bgColor, iconColor, badge }) => (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
      <div
        className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0`}
      >
        <div className={iconColor}>{icon}</div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>
      <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
        {badge}
      </span>
    </div>
  );