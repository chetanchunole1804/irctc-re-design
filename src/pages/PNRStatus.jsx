import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { PNR_SAMPLE } from "../mock";
import { Search, Train, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const PNRStatus = () => {
  const [pnr, setPnr] = useState("");
  const [data, setData] = useState(null);

  const handleCheck = () => {
    if (pnr.length >= 6) setData(PNR_SAMPLE);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-1">Check your booking</p>
          <h1 className="font-display text-4xl font-extrabold text-slate-900">PNR Status</h1>
          <p className="text-slate-600 mt-2">Enter your 10-digit PNR number to check current booking status.</p>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              value={pnr}
              onChange={(e) => setPnr(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="Enter 10-digit PNR Number"
              className="h-12 text-lg font-mono"
            />
            <Button onClick={handleCheck} className="btn-accent-grad text-white border-0 font-semibold h-12 px-8">
              <Search className="w-4 h-4 mr-2" /> Check Status
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2">Try sample PNR: 2347189651</p>
        </Card>

        {data && (
          <Card className="p-6 fade-up">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Train className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900">{data.train}</div>
                  <div className="text-xs text-slate-500 font-mono">PNR: {data.pnr}</div>
                </div>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0">
                <CheckCircle2 className="w-3 h-3 mr-1" /> Confirmed
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 border-b border-slate-200">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">From</div>
                <div className="font-display font-bold text-slate-900 mt-1">{data.from}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">To</div>
                <div className="font-display font-bold text-slate-900 mt-1">{data.to}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Date of Journey</div>
                <div className="font-display font-bold text-slate-900 mt-1">{data.doj}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Class</div>
                <div className="font-display font-bold text-slate-900 mt-1">{data.class}</div>
              </div>
            </div>

            <div className="py-5">
              <h3 className="font-display font-bold text-slate-900 mb-3">Passenger Status</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-slate-200">
                      <th className="py-2.5 pr-4">Passenger</th>
                      <th className="py-2.5 pr-4">Age / Gender</th>
                      <th className="py-2.5 pr-4">Booking Status</th>
                      <th className="py-2.5">Current Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.passengers.map((p, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0">
                        <td className="py-3 pr-4 font-medium text-slate-900">{p.name}</td>
                        <td className="py-3 pr-4 text-slate-700">{p.age} / {p.gender}</td>
                        <td className="py-3 pr-4 font-mono text-slate-700">{p.bookingStatus}</td>
                        <td className="py-3 font-mono"><Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0">{p.currentStatus}</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-slate-500">Boarding: <strong className="text-slate-700">{data.boardingPoint}</strong> · Chart: <strong className="text-slate-700">{data.chartStatus}</strong></div>
            </div>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PNRStatus;
