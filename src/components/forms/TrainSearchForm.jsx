import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar as CalendarIcon, ArrowLeftRight, Search, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { format } from "date-fns";
import { STATIONS, TRAVEL_CLASSES, QUOTAS } from "../../mock";

const StationPicker = ({ value, onChange, label, placeholder }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full text-left bg-white border border-slate-200 hover:border-blue-400 transition-colors rounded-xl px-4 py-3 group">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{label}</div>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <div className="min-w-0">
              <div className="font-display font-bold text-slate-900 truncate">
                {value ? value.city : <span className="text-slate-400">{placeholder}</span>}
              </div>
              <div className="text-xs text-slate-500 truncate">
                {value ? `${value.name} (${value.code})` : "Select station"}
              </div>
            </div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search station or city..." />
          <CommandList>
            <CommandEmpty>No station found.</CommandEmpty>
            <CommandGroup>
              {STATIONS.map((s) => (
                <CommandItem key={s.code} value={`${s.city} ${s.name} ${s.code}`} onSelect={() => { onChange(s); setOpen(false); }}>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="font-medium text-slate-900">{s.city}</div>
                      <div className="text-xs text-slate-500">{s.name}</div>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-700">{s.code}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const DatePicker = ({ value, onChange, label }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button className="w-full text-left bg-white border border-slate-200 hover:border-blue-400 transition-colors rounded-xl px-4 py-3">
        <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{label}</div>
        <div className="flex items-center gap-2 mt-1">
          <CalendarIcon className="w-4 h-4 text-blue-700" />
          <div>
            <div className="font-display font-bold text-slate-900">
              {value ? format(value, "dd MMM") : "Select date"}
            </div>
            <div className="text-xs text-slate-500">{value ? format(value, "EEEE, yyyy") : "Pick a date"}</div>
          </div>
        </div>
      </button>
    </PopoverTrigger>
    <PopoverContent className="p-0" align="start">
      <Calendar mode="single" selected={value} onSelect={onChange} initialFocus />
    </PopoverContent>
  </Popover>
);

const TrainSearchForm = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState(STATIONS[0]);
  const [to, setTo] = useState(STATIONS[1]);
  const [date, setDate] = useState(new Date());
  const [travelClass, setTravelClass] = useState("ALL");
  const [quota, setQuota] = useState("General");
  const [opts, setOpts] = useState({ flexible: false, divyaang: false, railwayPass: false });

  const swap = () => { const t = from; setFrom(to); setTo(t); };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        <div className="md:col-span-4 relative">
          <StationPicker value={from} onChange={setFrom} label="From" placeholder="Origin" />
        </div>
        <div className="md:col-span-1 flex justify-center md:pb-3">
          <button onClick={swap} className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 transition-all hover:rotate-180">
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>
        <div className="md:col-span-4">
          <StationPicker value={to} onChange={setTo} label="To" placeholder="Destination" />
        </div>
        <div className="md:col-span-3">
          <DatePicker value={date} onChange={setDate} label="Journey Date" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 w-full">
          <Label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Travel Class</Label>
          <Select value={travelClass} onValueChange={setTravelClass}>
            <SelectTrigger className="border-0 px-0 h-8 focus:ring-0 font-display font-bold text-slate-900">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRAVEL_CLASSES.map(c => <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2">
          <Label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Quota</Label>
          <Select value={quota} onValueChange={setQuota}>
            <SelectTrigger className="border-0 px-0 h-8 focus:ring-0 font-display font-bold text-slate-900">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {QUOTAS.map(q => <SelectItem key={q} value={q}>{q}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4 text-white">
        <label className="flex items-center gap-2 text-sm text-white cursor-pointer">
          <Checkbox checked={opts.flexible} onCheckedChange={(v) => setOpts({...opts, flexible: !!v})} />
          Flexible With Date
        </label>
        <label className="flex items-center gap-2 text-sm text-white cursor-pointer">
          <Checkbox checked={opts.divyaang} onCheckedChange={(v) => setOpts({...opts, divyaang: !!v})} />
          Person With Disability Concession
        </label>
        <label className="flex items-center gap-2 text-sm text-white cursor-pointer">
          <Checkbox checked={opts.railwayPass} onCheckedChange={(v) => setOpts({...opts, railwayPass: !!v})} />
          Railway Pass Concession
        </label>
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={() => navigate("/trains", { state: { from, to, date, travelClass, quota } })}
          className="btn-accent-grad text-white border-0 font-semibold h-12 px-10 text-base rounded-xl"
        >
          <Search className="w-4 h-4 mr-2" />
          Search Trains
        </Button>
      </div>
    </div>
  );
};

export default TrainSearchForm;
export { StationPicker };
