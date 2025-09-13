import { DollarSign, Monitor } from "lucide-react";

const TuitionPreferencesStep = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Tuition Preferences
        </h3>
        <p className="text-gray-600">Your expectations and requirements</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Expected Fee (per hour) *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="minimumFee"
                value={formData.minimumFee}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="₹"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Payment Method *
            </label>
            <select
              name="preferredPaymentMethod"
              value={formData.preferredPaymentMethod}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="UPI">UPI</option>
              <option value="Cheque">Cheque</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Travel Radius (for home tuition)
            </label>
            <select
              name="travelRadius"
              value={formData.travelRadius}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="Up to 2 km">Up to 2 km</option>
              <option value="Up to 5 km">Up to 5 km</option>
              <option value="Up to 10 km">Up to 10 km</option>
              <option value="Beyond 10 km">Beyond 10 km</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Online Teaching Tools
            </label>
            <div className="relative">
              <Monitor className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="onlineTeachingTools"
                value={formData.onlineTeachingTools}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Zoom, Google Meet, etc."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionPreferencesStep;
