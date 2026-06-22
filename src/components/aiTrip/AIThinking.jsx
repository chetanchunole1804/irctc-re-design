import { Sparkles, CheckCircle2 } from "lucide-react";

const AIThinking = () => {
  const steps = [
    "Searching best trains",
    "Finding hotels",
    "Calculating budget",
    "Generating itinerary",
  ];

  return (
    <div className="mt-10">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-5">
            AI is Planning Your Journey
          </h3>

          <p className="text-slate-500 mt-2">
            Please wait while we prepare your smart travel plan
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-50"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 animate-pulse" />
              <span className="text-slate-700">{step}...</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIThinking;