import React from "react";
import { Card } from "./ui/card";
import { ArrowRight, Train as TrainIcon, Tag, Shield, Clock, Award, Headphones, MapPin } from "lucide-react";
import { OFFERS, POPULAR_ROUTES } from "../mock";
import { useNavigate } from "react-router-dom";

export const InfoMarquee = () => (
  <div className="bg-blue-50 border-y border-blue-100 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap py-2.5">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-10 px-4">
          <span className="text-sm text-blue-900"><strong className="text-orange-600">NEW:</strong> Vande Bharat Express now available on 12 new routes across India.</span>
          <span className="text-sm text-blue-900"><strong className="text-orange-600">LIVE:</strong> Premium Tatkal booking opens at 10:00 AM (AC) and 11:00 AM (Non-AC) daily.</span>
          <span className="text-sm text-blue-900"><strong className="text-orange-600">OFFER:</strong> Get up to ₹500 off on your first flight booking with code FLY500.</span>
          <span className="text-sm text-blue-900"><strong className="text-orange-600">INFO:</strong> Chart preparation now happens 4 hours before train departure.</span>
        </div>
      ))}
    </div>
  </div>
);

export const OffersSection = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <div className="flex items-end justify-between mb-8">
      <div>
        <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-1">What's New</p>
        <h2 className="font-display text-3xl font-extrabold text-slate-900">Latest updates & offers</h2>
      </div>
      <a href="#" className="hidden sm:flex items-center gap-1 text-blue-700 hover:text-blue-900 text-sm font-medium">
        View all <ArrowRight className="w-4 h-4" />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {OFFERS.map((o, i) => (
        <Card key={i} className="p-6 hover:shadow-xl transition-shadow border-slate-200">
          <div className={`inline-block text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md ${o.color} mb-4`}>{o.tag}</div>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{o.title}</h3>
          <p className="text-sm text-slate-600 mb-4">{o.desc}</p>
          <button className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </Card>
      ))}
    </div>
  </section>
);

export const PopularRoutes = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8">
        <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-1">Trending</p>
        <h2 className="font-display text-3xl font-extrabold text-slate-900">Popular train routes</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {POPULAR_ROUTES.map((r) => (
          <button
            key={r.from + r.to}
            onClick={() => navigate("/trains")}
            className="text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-blue-700" />
              <span>{r.from}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-500 transition-colors" />
              <span>{r.to}</span>
            </div>
            <div className="mt-3 text-xs text-slate-500">{r.trains} trains</div>
            <div className="mt-1 text-lg font-bold text-slate-900">from ₹{r.fareFrom}</div>
          </button>
        ))}
      </div>
    </section>
  );
};

export const Features = () => {
  const items = [
    { icon: Shield, title: "Secure Payments", desc: "256-bit SSL · UPI, Cards, Wallets, Net Banking" },
    { icon: Clock, title: "Instant Confirmation", desc: "Get your e-ticket within seconds of booking" },
    { icon: Award, title: "Best Price Promise", desc: "No hidden charges · Lowest fare guaranteed" },
    { icon: Headphones, title: "24/7 Support", desc: "Reach us anytime via chat, call or email" },
  ];
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/40 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-1">Why RailGo</p>
          <h2 className="font-display text-3xl font-extrabold text-slate-900">A better way to travel India</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-1">{it.title}</h3>
                <p className="text-sm text-slate-600">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const QuickServices = () => {
  const navigate = useNavigate();
  const services = [
    { label: "PNR Status", desc: "Check booking status", action: () => navigate("/pnr") },
    { label: "Train Schedule", desc: "View full timings", action: () => navigate("/schedule") },
    { label: "Live Status", desc: "Track running trains", action: () => navigate("/pnr") },
    { label: "Charts/Vacancy", desc: "Seat availability", action: () => navigate("/trains") },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 grid grid-cols-2 md:grid-cols-4 gap-1">
        {services.map((s, i) => (
          <button key={i} onClick={s.action} className="text-left p-5 rounded-xl hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
                <TrainIcon className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{s.label}</div>
                <div className="text-xs text-slate-500">{s.desc}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
