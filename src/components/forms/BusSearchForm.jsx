import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftRight, Search, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { DatePicker } from "./TrainSearchForm";

const CITIES = [
  "Mumbai", "Pune", "Bengaluru", "Chennai", "Hyderabad", "Delhi", "Ahmedabad",
  "Jaipur", "Goa", "Indore", "Nagpur", "Surat", "Kochi", "Coimbatore", "Mysuru", "Vijayawada"
];

const CityPicker = ({ value, onChange, label, placeholder }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full text-left bg-white border border-slate-200 hover:border-blue-400 rounded-xl px-4 py-3">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{label}</div>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 text-blue-700" />
            <div>
              <div className="font-display font-bold text-slate-900">{value || <span className="text-slate-400">{placeholder}</span>}</div>
              <div className="text-xs text-slate-500">{value ? "India" : "Select city"}</div>
            </div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {CITIES.map(c => (
                <CommandItem key={c} value={c} onSelect={() => { onChange(c); setOpen(false); }}>{c}</CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const BusSearchForm = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("Mumbai");
  const [to, setTo] = useState("Pune");
  const [date, setDate] = useState(new Date());
  const swap = () => { const t = from; setFrom(to); setTo(t); };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        <div className="md:col-span-4">
          <CityPicker value={from} onChange={setFrom} label="From City" placeholder="Origin" />
        </div>
        <div className="md:col-span-1 flex justify-center md:pb-3">
          <button onClick={swap} className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 transition-all hover:rotate-180">
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>
        <div className="md:col-span-4">
          <CityPicker value={to} onChange={setTo} label="To City" placeholder="Destination" />
        </div>
        <div className="md:col-span-3">
          <DatePicker value={date} onChange={setDate} label="Travel Date" />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button onClick={() => navigate("/buses", { state: { from, to, date } })} className="btn-accent-grad text-white border-0 font-semibold h-12 px-10 text-base rounded-xl">
          <Search className="w-4 h-4 mr-2" /> Search Buses
        </Button>
      </div>
    </div>
  );
};

export default BusSearchForm;
export { CityPicker };
