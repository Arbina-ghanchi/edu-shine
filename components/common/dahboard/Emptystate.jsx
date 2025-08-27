export const EmptyState = ({ icon, title, description }) => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <p className="text-gray-500 mb-2">{title}</p>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );