import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { FLIGHTS } from "../mock";
import { Plane, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const FlightResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const from = state.from || "Delhi";
  const to = state.to || "Mumbai";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-lg font-display font-bold">
            <span>{from}</span><ArrowRight className="w-5 h-5 text-orange-400" /><span>{to}</span>
          </div>
          <div className="text-sm text-blue-100">{state.depart ? new Date(state.depart).toDateString() : new Date().toDateString()} · {state.pax || 1} Pax · {state.cabin || "Economy"}</div>
          <Button onClick={() => navigate("/")} variant="secondary" size="sm">Modify Search</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-slate-600 mb-4"><span className="font-bold text-slate-900">{FLIGHTS.length}</span> flights available</p>
        <div className="space-y-3">
          {FLIGHTS.map((f) => (
            <Card key={f.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-3 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-display font-extrabold text-sm">
                    {f.logo}
                  </div>
                  <div>
                    <div className="font-display font-bold text-slate-900">{f.airline}</div>
                    <div className="text-xs text-slate-500 font-mono">{f.code}</div>
                  </div>
                </div>
                <div className="md:col-span-6 flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-display text-2xl font-extrabold text-slate-900">{f.depart}</div>
                    <div className="text-xs text-slate-500">{from.slice(0,3).toUpperCase()}</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {f.duration}</div>
                    <div className="w-full h-px bg-slate-300 my-1 relative">
                      <Plane className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 text-blue-700 bg-white" />
                    </div>
                    <div className="text-[10px] text-slate-500">{f.stops}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-extrabold text-slate-900">{f.arrive}</div>
                    <div className="text-xs text-slate-500">{to.slice(0,3).toUpperCase()}</div>
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col items-end gap-2">
                  <div className="font-display text-2xl font-extrabold text-slate-900">₹{f.fare.toLocaleString()}</div>
                  <Button onClick={() => toast.success(`${f.airline} ${f.code} selected. Proceed to passenger info.`)} className="btn-accent-grad text-white border-0 font-semibold">Book Flight</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlightResults;
