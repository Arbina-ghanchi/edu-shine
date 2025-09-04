import { Home, MapPin } from "lucide-react";

const Logistics = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Logistics & Final Details
        </h3>
        <p className="text-gray-600">Setup and additional requirements</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Home Address for Tuition
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleInputChange}
              rows={2}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Complete address where tuition will be conducted (if different from above)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Willing to Travel (for teacher's place/center)
            </label>
            <select
              name="willingToTravel"
              value={formData.willingToTravel}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="Yes, within 2km">Yes, within 2km</option>
              <option value="Yes, within 5km">Yes, within 5km</option>
              <option value="Yes, within 10km">Yes, within 10km</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Internet Connection (for online classes)
            </label>
            <select
              name="internetConnection"
              value={formData.internetConnection}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="High Speed Broadband">High Speed Broadband</option>
              <option value="Mobile Data">Mobile Data</option>
              <option value="Average Speed">Average Speed</option>
              <option value="Poor Connection">Poor Connection</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Device Available for Online Classes
            </label>
            <select
              name="deviceAvailable"
              value={formData.deviceAvailable}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="Laptop/Desktop">Laptop/Desktop</option>
              <option value="Tablet">Tablet</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Multiple Devices">Multiple Devices</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasStudyRoom"
                checked={formData.hasStudyRoom}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500 rounded"
              />
              <span className="font-medium text-gray-900">
                We have a dedicated study room
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Requirements
          </label>
          <textarea
            name="additionalRequirements"
            value={formData.additionalRequirements}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Any special requirements, expectations, or additional information you'd like to share"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            What happens next?
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              • We'll review your requirements and match you with suitable
              teachers
            </li>
            <li>• You'll receive teacher profiles within 24-48 hours</li>
            <li>• You can interview and select the teacher of your choice</li>
            <li>
              • We'll help coordinate the first class and ongoing sessions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
