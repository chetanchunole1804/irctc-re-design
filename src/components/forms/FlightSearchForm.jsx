import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftRight, Search, Users } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CityPicker } from "./BusSearchForm";
import { DatePicker } from "./TrainSearchForm";

const FlightSearchForm = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");
  const [depart, setDepart] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [pax, setPax] = useState("1");
  const [cabin, setCabin] = useState("Economy");

  const swap = () => { const t = from; setFrom(to); setTo(t); };

  return (
    <div>
      <RadioGroup value={tripType} onValueChange={setTripType} className="flex items-center gap-6 mb-4 text-white">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="oneway" id="oneway" />
          <Label htmlFor="oneway" className="text-sm ">One Way</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="round" id="round" />
          <Label htmlFor="round" className="text-sm ">Round Trip</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="multi" id="multi" />
          <Label htmlFor="multi" className="text-sm ">Multi City</Label>
        </div>
      </RadioGroup>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        <div className="md:col-span-4">
          <CityPicker value={from} onChange={setFrom} label="From" placeholder="Departure" />
        </div>
        <div className="md:col-span-1 flex justify-center md:pb-3">
          <button onClick={swap} className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 transition-all hover:rotate-180">
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>
        <div className="md:col-span-4">
          <CityPicker value={to} onChange={setTo} label="To" placeholder="Arrival" />
        </div>
        <div className="md:col-span-3">
          <DatePicker value={depart} onChange={setDepart} label="Departure" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {tripType === "round" && (
          <DatePicker value={returnDate} onChange={setReturnDate} label="Return" />
        )}
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2">
          <Label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1">
            <Users className="w-3 h-3" /> Passengers
          </Label>
          <Select value={pax} onValueChange={setPax}>
            <SelectTrigger className="border-0 px-0 h-8 focus:ring-0 font-display font-bold text-slate-900"><SelectValue /></SelectTrigger>
            <SelectContent>
              {[1,2,3,4,5,6,7,8,9].map(n => <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Passenger" : "Passengers"}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2">
          <Label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Cabin Class</Label>
          <Select value={cabin} onValueChange={setCabin}>
            <SelectTrigger className="border-0 px-0 h-8 focus:ring-0 font-display font-bold text-slate-900"><SelectValue /></SelectTrigger>
            <SelectContent>
              {["Economy", "Premium Economy", "Business", "First Class"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button onClick={() => navigate("/flights", { state: { from, to, depart, returnDate, pax, cabin, tripType } })} className="btn-accent-grad text-white border-0 font-semibold h-12 px-10 text-base rounded-xl">
          <Search className="w-4 h-4 mr-2" /> Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
