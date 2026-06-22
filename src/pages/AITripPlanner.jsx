import AITripForm from "../components/aiTrip/AITripForm";
import { TrainIcon } from "lucide-react";

const AITripPlanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 p-8 md:p-12 text-white">
        <div className="relative z-10 ">
          <div className="inline-flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ NEW AI FEATURE
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Plan Your Complete Trip with AI
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Find trains, buses, hotels, attractions and generate a complete
            day-wise travel itinerary in seconds.
          </p>
          <AITripForm />
        </div>
      </div>
    </section>
  );
};

export default AITripPlanner;
