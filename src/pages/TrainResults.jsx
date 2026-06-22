import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { TRAINS, STATIONS, TRAVEL_CLASSES } from "../mock";
import { Train, Clock, ArrowRight, Filter, Star, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const TrainResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const from = state.from || STATIONS[0];
  const to = state.to || STATIONS[1];
  const [filterClass, setFilterClass] = useState({});

  const handleBook = (train, cls) => {
    toast.success(`${train.name} (${cls}) added to booking. Proceed to passenger details.`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Search summary bar */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-lg font-display font-bold">
            <span>{from.city || from}</span>
            <ArrowRight className="w-5 h-5 text-orange-400" />
            <span>{to.city || to}</span>
          </div>
          <div className="text-sm text-blue-100">
            {state.date ? new Date(state.date).toDateString() : new Date().toDateString()} · {state.travelClass || "All Classes"} · {state.quota || "General"}
          </div>
          <Button onClick={() => navigate("/")} variant="secondary" size="sm">Modify Search</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters */}
        <aside className="lg:col-span-1">
          <Card className="p-5 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-slate-900 flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</h3>
              <button className="text-xs text-blue-700 font-semibold">Clear</button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Class</h4>
                {TRAVEL_CLASSES.slice(1).map(c => (
                  <label key={c.code} className="flex items-center gap-2 py-1.5 cursor-pointer">
                    <Checkbox checked={!!filterClass[c.code]} onCheckedChange={(v) => setFilterClass({...filterClass, [c.code]: !!v})} />
                    <span className="text-sm text-slate-700">{c.name}</span>
                  </label>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Departure Time</h4>
                {["Before 06:00", "06:00 - 12:00", "12:00 - 18:00", "After 18:00"].map(t => (
                  <label key={t} className="flex items-center gap-2 py-1.5 cursor-pointer">
                    <Checkbox />
                    <span className="text-sm text-slate-700">{t}</span>
                  </label>
                ))}
              </div>
            </div>
          </Card>
        </aside>

        {/* Train list */}
        <main className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">{TRAINS.length}</span> trains found</p>
            <button className="flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg">
              Sort: Departure <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {TRAINS.map((t) => (
            <Card key={t.number} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Train className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500 font-mono">#{t.number}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0"><Star className="w-3 h-3 mr-1 fill-current" /> 4.5</Badge>
                  <Badge variant="outline" className="text-slate-600 border-slate-300">Runs: All Days</Badge>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-slate-900">{t.depart}</div>
                  <div className="text-xs text-slate-500 font-mono">{t.from}</div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {t.duration}</div>
                  <div className="w-full h-px bg-slate-300 my-1 relative">
                    <div className="absolute inset-y-0 left-0 w-2 h-2 -mt-0.5 rounded-full bg-blue-700"></div>
                    <div className="absolute inset-y-0 right-0 w-2 h-2 -mt-0.5 rounded-full bg-orange-500"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-slate-900">{t.arrive}</div>
                  <div className="text-xs text-slate-500 font-mono">{t.to}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.entries(t.classes).map(([cls, info]) => (
                  <button
                    key={cls}
                    onClick={() => handleBook(t, cls)}
                    className="text-left p-3 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-700">{cls}</span>
                      <span className="text-[10px] font-semibold text-emerald-600">{info.status}</span>
                    </div>
                    <div className="font-display font-bold text-slate-900">₹{info.fare}</div>
                    <div className="text-xs text-slate-500">{info.available}</div>
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TrainResults;
