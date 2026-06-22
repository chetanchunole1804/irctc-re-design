import { useState } from "react";
import { Sparkles } from "lucide-react";
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

  return (
    <div className="mt-10 text-slate-900">
      <div
        className="
          max-w-5xl mx-auto
          bg-white
          border border-slate-200
          shadow-2xl
          rounded-3xl
          p-8
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
border
border-slate-200
px-4
text-slate-700
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
outline-none
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
border
border-slate-200
px-4
text-slate-700
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
outline-none
"
          />

          <input
            type="date"
            name="departureDate"
            onChange={handleChange}
            className="
h-14
w-full
rounded-xl
border
border-slate-200
px-4
text-slate-700
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
outline-none
"
          />

          <input
            type="date"
            name="returnDate"
            onChange={handleChange}
            className="
h-14
w-full
rounded-xl
border
border-slate-200
px-4
text-slate-700
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
outline-none
"
          />

          <select
            name="budget"
            onChange={handleChange}
            className="
h-14
w-full
rounded-xl
border
border-slate-200
px-4
text-slate-700
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
outline-none
"
          >
            <option>Budget</option>
            <option>₹5k - ₹10k</option>
            <option>₹10k - ₹25k</option>
            <option>₹25k+</option>
          </select>

          <select
            name="tripType"
            onChange={handleChange}
            className="
h-14
w-full
rounded-xl
border
border-slate-200
px-4
text-slate-700
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
outline-none
"
          >
            <option>Family</option>
            <option>Solo</option>
            <option>Couple</option>
            <option>Friends</option>
          </select>

          <textarea
            name="preferences"
            rows={4}
            placeholder="Preferences (mountains, temples, beaches...)"
            onChange={handleChange}
            className="
            rounded-xl
            w-full
            border-slate-200
            border
 px-4
py-3
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
outline-none
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
