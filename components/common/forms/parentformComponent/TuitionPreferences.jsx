import { Clock, DollarSign } from "lucide-react";

const TuitionPreferences = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">
          Tuition Preferences
        </h3>
        <p className="text-gray-600">
          When and how would you like the classes?
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Teaching Mode *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="preferredMode"
                value="Home Tuition"
                checked={formData.preferredMode === "Home Tuition"}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Home Tuition</div>
                <div className="text-sm text-gray-500">
                  Teacher comes to your home
                </div>
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="preferredMode"
                value="Online Classes"
                checked={formData.preferredMode === "Online Classes"}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Online Classes</div>
                <div className="text-sm text-gray-500">
                  Virtual learning sessions
                </div>
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="preferredMode"
                value="Either"
                checked={formData.preferredMode === "Either"}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Either</div>
                <div className="text-sm text-gray-500">
                  Open to both options
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Days *
            </label>
            <select
              name="preferredDays"
              value={formData.preferredDays}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Days</option>
              <option value="Weekdays Only">Weekdays Only (Mon-Fri)</option>
              <option value="Weekends Only">Weekends Only (Sat-Sun)</option>
              <option value="All Days">All Days (Mon-Sun)</option>
              <option value="Flexible">Flexible Schedule</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time *
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Time</option>
              <option value="Morning (6 AM - 12 PM)">
                Morning (6 AM - 12 PM)
              </option>
              <option value="Afternoon (12 PM - 5 PM)">
                Afternoon (12 PM - 5 PM)
              </option>
              <option value="Evening (5 PM - 9 PM)">
                Evening (5 PM - 9 PM)
              </option>
              <option value="Night (9 PM - 11 PM)">Night (9 PM - 11 PM)</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Session Duration *
            </label>
            <select
              name="sessionDuration"
              value={formData.sessionDuration}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Duration</option>
              <option value="1 Hour">1 Hour</option>
              <option value="1.5 Hours">1.5 Hours</option>
              <option value="2 Hours">2 Hours</option>
              <option value="2.5 Hours">2.5 Hours</option>
              <option value="3 Hours">3 Hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range (per month) *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Budget</option>
                <option value="₹2,000 - ₹5,000">₹2,000 - ₹5,000</option>
                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                <option value="₹10,000 - ₹15,000">₹10,000 - ₹15,000</option>
                <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                <option value="₹25,000+">₹25,000+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionPreferences;
