import React, { useState } from "react";
import { Train, Bus, Plane, Hotel } from "lucide-react";
import TrainSearchForm from "./forms/TrainSearchForm";
import BusSearchForm from "./forms/BusSearchForm";
import FlightSearchForm from "./forms/FlightSearchForm";
import HotelSearchForm from "./forms/HotelSearchForm";

const BookingTabs = () => {
  const [active, setActive] = useState("train");

  const tabs = [
    { id: "train", label: "Trains", icon: Train },
    { id: "bus", label: "Buses", icon: Bus },
    { id: "flight", label: "Flights", icon: Plane },
    { id: "hotel", label: "Hotels", icon: Hotel },
  ];

  return (
    <div className="max-w-6xl mx-auto">
  {/* Top Tabs */}
  <div className="flex justify-center mb-6">
    <div className="flex gap-3 p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
      {tabs.map((t) => {
        const Icon = t.icon;
        const isActive = active === t.id;

        return (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`
              flex items-center gap-2
              px-2 py-1 rounded-xl
              font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-[#0B4F9F] to-[#2F80ED] text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }
            `}
          >
            <Icon className="w-5 h-5" />
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  </div>

  {/* Search Card */}
  <div className="relative">
    {/* Left Blur */}
    {/* <div className="absolute left-0 top-0 h-full w-20 rounded-l-3xl bg-white/20 backdrop-blur-2xl z-0"></div> */}

    {/* Right Blur */}
    {/* <div className="absolute right-0 top-0 h-full w-20 rounded-r-3xl bg-white/20 backdrop-blur-2xl z-0"></div> */}

    {/* Main White Card */}
    <div className="relative">

  {/* Glow Effects */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>

  {/* Glass Card */}
  <div
    className="
      relative z-10
      bg-white/10
      backdrop-blur-2xl
      border border-white/20
      rounded-3xl
      shadow-[0_8px_32px_rgba(31,38,135,0.37)]
      p-6 md:p-8
      overflow-hidden
    "
  >
    {active === "train" && <TrainSearchForm />}
    {active === "bus" && <BusSearchForm />}
    {active === "flight" && <FlightSearchForm />}
    {active === "hotel" && <HotelSearchForm />}
  </div>
</div>
  </div>
</div>
  );
};

export default BookingTabs;
