import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { BUSES } from "../mock";
import { Bus, Clock, ArrowRight, Star, Wifi, Zap } from "lucide-react";
import { toast } from "sonner";

const BusResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const from = state.from || "Mumbai";
  const to = state.to || "Pune";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-lg font-display font-bold">
            <span>{from}</span><ArrowRight className="w-5 h-5 text-orange-400" /><span>{to}</span>
          </div>
          <div className="text-sm text-blue-100">{state.date ? new Date(state.date).toDateString() : new Date().toDateString()}</div>
          <Button onClick={() => navigate("/")} variant="secondary" size="sm">Modify Search</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-slate-600 mb-4"><span className="font-bold text-slate-900">{BUSES.length}</span> buses available</p>
        <div className="space-y-4">
          {BUSES.map((b) => (
            <Card key={b.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                      <Bus className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-slate-900">{b.operator}</div>
                      <div className="text-xs text-slate-500">{b.type}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-[10px]"><Star className="w-2.5 h-2.5 mr-1 fill-current" /> {b.rating}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-display text-xl font-extrabold text-slate-900">{b.depart}</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {b.duration}</div>
                    <div className="w-full h-px bg-slate-300 my-1"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl font-extrabold text-slate-900">{b.arrive}</div>
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="font-display text-2xl font-extrabold text-slate-900">₹{b.fare}</div>
                    <div className="text-xs text-emerald-600 font-medium">{b.seats} seats left</div>
                  </div>
                  <Button onClick={() => toast.success(`Selected ${b.operator}. Choose your seats.`)} className="btn-accent-grad text-white border-0 font-semibold">Select Seats</Button>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                {b.amenities.map((a) => (
                  <span key={a} className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium">{a}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusResults;
