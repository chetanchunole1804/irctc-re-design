import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { HOTELS } from "../mock";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const HotelResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const city = state.city || "Delhi";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* <Navbar /> */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-lg font-display font-bold">
            <MapPin className="w-5 h-5 text-orange-400" /><span>Hotels in {city}</span>
          </div>
          <div className="text-sm text-blue-100">
            {state.checkin ? new Date(state.checkin).toDateString() : "Today"} → {state.checkout ? new Date(state.checkout).toDateString() : "Tomorrow"} · {state.rooms || 1} Room · {state.guests || 2} Guests
          </div>
          <Button onClick={() => navigate("/")} variant="secondary" size="sm">Modify Search</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-slate-600 mb-4"><span className="font-bold text-slate-900">{HOTELS.length}</span> hotels found</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {HOTELS.map((h) => (
            <Card key={h.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900">{h.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3 h-3" /> {h.location}
                    </div>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0">
                    <Star className="w-3 h-3 mr-1 fill-current" /> {h.rating}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 mt-3">
                  {h.amenities.slice(0, 4).map((a) => (
                    <span key={a} className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">{a}</span>
                  ))}
                </div>
                <div className="flex items-end justify-between mt-4 pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-xs text-slate-500">{h.reviews.toLocaleString()} reviews</div>
                    <div className="font-display text-2xl font-extrabold text-slate-900">₹{h.price.toLocaleString()}<span className="text-xs text-slate-500 font-normal"> / night</span></div>
                  </div>
                  <Button onClick={() => toast.success(`${h.name} selected. Choose room type.`)} className="btn-accent-grad text-white border-0 font-semibold">
                    Book Now <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
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

export default HotelResults;
