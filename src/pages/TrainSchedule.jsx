import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { TRAIN_SCHEDULE_SAMPLE } from "../mock";
import { Search, Train, Clock, Circle } from "lucide-react";

const TrainSchedule = () => {
  const [num, setNum] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = () => {
    if (num.length >= 4) setData(TRAIN_SCHEDULE_SAMPLE);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-1">Plan your journey</p>
          <h1 className="font-display text-4xl font-extrabold text-slate-900">Train Schedule</h1>
          <p className="text-slate-600 mt-2">Enter a train number to see complete route, timings and halts.</p>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              value={num}
              onChange={(e) => setNum(e.target.value.replace(/\D/g, "").slice(0, 5))}
              placeholder="Enter Train Number (e.g. 22435)"
              className="h-12 text-lg font-mono"
            />
            <Button onClick={handleSearch} className="btn-accent-grad text-white border-0 font-semibold h-12 px-8">
              <Search className="w-4 h-4 mr-2" /> Get Schedule
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2">Try: 22435 (Vande Bharat Express)</p>
        </Card>

        {data && (
          <Card className="p-6 fade-up">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Train className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-slate-900">{data.name}</div>
                <div className="text-sm text-slate-500">Train #{data.number} · {data.stops.length} stops</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-slate-200">
                      <th className="py-2.5 pr-3">#</th>
                      <th className="py-2.5 pr-3">Station</th>
                      <th className="py-2.5 pr-3">Arrival</th>
                      <th className="py-2.5 pr-3">Departure</th>
                      <th className="py-2.5 pr-3">Day</th>
                      <th className="py-2.5 pr-3">Distance</th>
                      <th className="py-2.5">PF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.stops.map((s, i) => {
                      const isFirst = i === 0;
                      const isLast = i === data.stops.length - 1;
                      return (
                        <tr key={s.code} className="border-b border-slate-100 last:border-0">
                          <td className="py-3 pr-3 text-slate-400">
                            <div className="flex items-center">
                              <Circle className={`w-2.5 h-2.5 ${isFirst || isLast ? "fill-orange-500 text-orange-500" : "fill-blue-700 text-blue-700"}`} />
                            </div>
                          </td>
                          <td className="py-3 pr-3">
                            <div className="font-semibold text-slate-900">{s.name}</div>
                            <div className="text-xs text-slate-500 font-mono">{s.code}</div>
                          </td>
                          <td className="py-3 pr-3 font-mono text-slate-700">{s.arrive}</td>
                          <td className="py-3 pr-3 font-mono text-slate-700">{s.depart}</td>
                          <td className="py-3 pr-3 text-slate-700">Day {s.day}</td>
                          <td className="py-3 pr-3 text-slate-700">{s.distance} km</td>
                          <td className="py-3 text-slate-700">{s.platform}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TrainSchedule;
