import { Calendar } from "lucide-react";

const AvailabilityStep = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">Availability</h3>
        <p className="text-gray-600">When are you available for tutoring?</p>
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
                name="teachingMode"
                value="Home Tuition"
                checked={formData.teachingMode === "Home Tuition"}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Home Tuition</div>
                <div className="text-sm text-gray-500">
                  Teach at student's home
                </div>
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="teachingMode"
                value="Online Classes"
                checked={formData.teachingMode === "Online Classes"}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Online Classes</div>
                <div className="text-sm text-gray-500">Virtual teaching</div>
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                name="teachingMode"
                value="Both"
                checked={formData.teachingMode === "Both"}
                onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium">Both</div>
                <div className="text-sm text-gray-500">Home and online</div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Days *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <label key={day} className="flex items-center">
                <input
                  type="checkbox"
                  name="availableDays"
                  value={day}
                  checked={formData.availableDays.includes(day)}
                  onChange={handleInputChange}
                  className="mr-2 text-blue-600 focus:ring-blue-500 rounded"
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Time Slots *
            </label>
            <select
              name="availableTimeSlots"
              value={formData.availableTimeSlots}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Time Slots</option>
              <option value="Morning (6 AM - 12 PM)">
                Morning (6 AM - 12 PM)
              </option>
              <option value="Afternoon (12 PM - 5 PM)">
                Afternoon (12 PM - 5 PM)
              </option>
              <option value="Evening (5 PM - 9 PM)">
                Evening (5 PM - 9 PM)
              </option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Session Duration *
            </label>
            <select
              name="preferredSessionDuration"
              value={formData.preferredSessionDuration}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Duration</option>
              <option value="1 Hour">1 Hour</option>
              <option value="1.5 Hours">1.5 Hours</option>
              <option value="2 Hours">2 Hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStep;
