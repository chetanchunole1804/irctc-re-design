import { useState } from "react";
import { Sparkles, CalendarDays } from "lucide-react";
import AIThinking from "./AIThinking";
import TripResult from "./TripResult";

const AITripForm = () => {
  const [loading, setLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState(null);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    travelers: 1,
    budget: "",
    tripType: "Family",
    preferences: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePlan = async (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setTripPlan({
        train: "Vande Bharat Express",
        trainFare: "₹1,450",
        bus: "Sleeper Coach Alternative",
        busFare: "₹1,100",
        hotel: "Grand Palace Hotel",
        hotelPrice: "₹2,500/night",
        totalCost: "₹10,000",
        destination: formData.to,
        source: formData.from,
        travelers: formData.travelers,
        tripType: formData.tripType,
        departureDate: formData.departureDate,
        returnDate: formData.returnDate,
        duration: "3 Days / 2 Nights",
        bestSeason: "October - February",
        weather: "22°C - 30°C",
        attractions: [
          "City Palace",
          "Local Market",
          "Historic Fort",
          "Lake View Point",
        ],
        itinerary: [
          "Arrival & Check-in",
          "Local Sightseeing",
          "Shopping & Return",
        ],
      });

      setLoading(false);
    }, 3000);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="mt-10 text-white">
      <div
        className="
          max-w-5xl mx-auto
          rounded-3xl
          p-8
          bg-white/10
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        <form onSubmit={generatePlan} className="grid md:grid-cols-2 gap-5">
          <input
            name="from"
            placeholder="From City"
            onChange={handleChange}
            className="
              h-14
              w-full
              rounded-xl
              bg-white/15
              backdrop-blur-md
              border
              border-white/20
              px-4
              text-white
              placeholder:text-slate-200
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/20
              outline-none
              transition-all
              "
          />

          <input
            name="to"
            placeholder="Destination"
            onChange={handleChange}
            className="
              h-14
              w-full
              rounded-xl
              bg-white/15
              backdrop-blur-md
              border
              border-white/20
              px-4
              text-white
              placeholder:text-slate-200
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/20
              outline-none
              transition-all
              "
          />

          <div className="relative">
            <input
              type="date"
              min={today}
              name="departureDate"
              onChange={handleChange}
              className="
              h-14
              w-full
              rounded-xl
              bg-white/15
              backdrop-blur-md
                border
                border-white/20
                px-4
                text-white
                placeholder:text-slate-200
                focus:border-orange-400
                focus:ring-4
                focus:ring-orange-400/20
                outline-none
                transition-all
              "
            />
            <CalendarDays
              size={20}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-orange-400
                pointer-events-none
              "
            />
          </div>
          <div className="relative">
            <input
              type="date"
              min={formData.departureDate || today}
              name="returnDate"
              onChange={handleChange}
              className="
              h-14
              w-full
              rounded-xl
              bg-white/15
              backdrop-blur-md
              border
              border-white/20
              px-4
              text-white
              placeholder:text-slate-200
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/20
              outline-none
              transition-all
            "
            />
            <CalendarDays
              size={20}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-orange-400
                pointer-events-none
              "
            />
          </div>

          <select
            name="budget"
            onChange={handleChange}
            className="
              h-14
              w-full
              rounded-xl
              bg-white/15
              backdrop-blur-md
              border
              border-white/20
              px-4
              text-white
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/20
              outline-none
              transition-all
            "
          >
            <option className="text-black">Budget</option>
            <option className="text-black">₹5k - ₹10k</option>
            <option className="text-black">₹10k - ₹25k</option>
            <option className="text-black">₹25k+</option>
          </select>

          <select
            name="tripType"
            onChange={handleChange}
            className="
              h-14
              w-full
              rounded-xl
              bg-white/15
              backdrop-blur-md
              border
              border-white/20
              px-4
              text-white
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/20
              outline-none
              transition-all
"
          >
            <option className="text-black">Family</option>
            <option className="text-black">Solo</option>
            <option className="text-black">Couple</option>
            <option className="text-black">Friends</option>
          </select>

          <textarea
            name="preferences"
            rows={4}
            placeholder="Preferences (mountains, temples, beaches...)"
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              bg-white/15
              backdrop-blur-md
              border
              border-white/20
              px-4
              py-3
              text-white
              placeholder:text-slate-200
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/20
              outline-none
              transition-all
            "
          />

          <button
            type="submit"
            className="
              md:col-span-2
              h-14
              rounded-xl
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              shadow-lg
              hover:shadow-xl
              hover:scale-[1.02]
              transition-all
            "
          >
            <Sparkles size={18} />
            Generate AI Trip Plan
          </button>
        </form>
      </div>

      {loading && <AIThinking />}

      {tripPlan && <TripResult plan={tripPlan} />}
    </div>
  );
};

export default AITripForm;
