import {
  Train,
  Bus,
  Hotel,
  MapPinned,
  Calendar,
  Users,
  CloudSun,
  Map,
} from "lucide-react";

import DownloadPDF from "./DownloadPDF";

const TripResult = ({ plan }) => {
  const cardClass =
    "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition";

  return (
    <div
      id="trip-plan"
      className="mt-10 bg-white rounded-3xl shadow-2xl p-8 text-slate-900"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <MapPinned className="text-blue-600" />
          <h2 className="text-3xl font-extrabold">
            Smart Travel Plan
          </h2>
        </div>

        <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
          Ready To Travel
        </div>
      </div>

      <div id="pdf-content">
        {/* Recommendation Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className={cardClass}>
            <Train className="text-blue-600 mb-4" size={28} />
            <h3 className="font-bold text-lg">Recommended Train</h3>
            <p className="mt-2 text-slate-700">{plan.train}</p>
            <p className="text-blue-700 font-semibold mt-1">
              {plan.trainFare}
            </p>
          </div>

          <div className={cardClass}>
            <Bus className="text-green-600 mb-4" size={28} />
            <h3 className="font-bold text-lg">Alternative Bus</h3>
            <p className="mt-2 text-slate-700">{plan.bus}</p>
            <p className="text-green-700 font-semibold mt-1">
              {plan.busFare}
            </p>
          </div>

          <div className={cardClass}>
            <Hotel className="text-orange-600 mb-4" size={28} />
            <h3 className="font-bold text-lg">Hotel Suggestion</h3>
            <p className="mt-2 text-slate-700">{plan.hotel}</p>
            <p className="text-orange-700 font-semibold mt-1">
              {plan.hotelPrice}
            </p>
          </div>
        </div>

        {/* Budget Banner */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-8 text-white">
          <p className="text-blue-100 text-sm uppercase tracking-wider">
            Estimated Trip Cost
          </p>

          <h3 className="text-5xl font-extrabold mt-2">
            {plan.totalCost}
          </h3>

          <p className="mt-3 text-blue-100">
            Includes travel, accommodation and local expenses.
          </p>
        </div>

        {/* Trip Summary */}
        <div className="mt-8 border border-slate-200 rounded-3xl p-6">
          <h3 className="font-bold text-xl mb-6">
            Trip Summary
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <Calendar className="text-blue-600 mb-2" />
              <p className="text-slate-500 text-sm">Duration</p>
              <p className="font-semibold">
                {plan.duration || "3 Days / 2 Nights"}
              </p>
            </div>

            <div>
              <Users className="text-orange-600 mb-2" />
              <p className="text-slate-500 text-sm">Travelers</p>
              <p className="font-semibold">
                {plan.travelers || 2}
              </p>
            </div>

            <div>
              <CloudSun className="text-yellow-500 mb-2" />
              <p className="text-slate-500 text-sm">Weather</p>
              <p className="font-semibold">
                {plan.weather || "22°C - 30°C"}
              </p>
            </div>

            <div>
              <Map className="text-green-600 mb-2" />
              <p className="text-slate-500 text-sm">Best Season</p>
              <p className="font-semibold">
                {plan.bestSeason || "Oct - Feb"}
              </p>
            </div>
          </div>
        </div>

        {/* Attractions */}
        <div className="mt-8 border border-slate-200 rounded-3xl p-6">
          <h3 className="font-bold text-xl mb-5">
            Top Attractions
          </h3>

          <div className="flex flex-wrap gap-3">
            {(plan.attractions || [
              "City Palace",
              "Historic Fort",
              "Lake View Point",
              "Local Market",
            ]).map((place, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
              >
                {place}
              </span>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div className="mt-8 border border-slate-200 rounded-3xl p-6">
          <h3 className="font-bold text-xl mb-6">
            Day Wise Itinerary
          </h3>

          <div className="space-y-6">
            {plan.itinerary?.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full" />

                  {index !== plan.itinerary.length - 1 && (
                    <div className="w-0.5 h-16 bg-orange-200" />
                  )}
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Day {index + 1}
                  </p>

                  <p className="text-slate-600 mt-1">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8 flex justify-end">
          <DownloadPDF plan={plan} />
        </div>
      </div>
    </div>
  );
};

export default TripResult;