export const FeatureCard = ({
    icon,
    title,
    value,
    description,
    valueColor = "text-gray-900",
  }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className={`text-2xl font-bold ${valueColor} mb-1`}>{value}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );