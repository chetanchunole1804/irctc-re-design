import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Users, BedDouble } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CityPicker } from "./BusSearchForm";
import { DatePicker } from "./TrainSearchForm";

const HotelSearchForm = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("Delhi");
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date(Date.now() + 86400000));
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("2");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        <div className="md:col-span-5">
          <CityPicker value={city} onChange={setCity} label="Destination" placeholder="Where are you going?" />
        </div>
        <div className="md:col-span-3">
          <DatePicker value={checkin} onChange={setCheckin} label="Check-In" />
        </div>
        <div className="md:col-span-4">
          <DatePicker value={checkout} onChange={setCheckout} label="Check-Out" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2">
          <Label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1">
            <BedDouble className="w-3 h-3" /> Rooms
          </Label>
          <Select value={rooms} onValueChange={setRooms}>
            <SelectTrigger className="border-0 px-0 h-8 focus:ring-0 font-display font-bold text-slate-900"><SelectValue /></SelectTrigger>
            <SelectContent>
              {[1,2,3,4,5].map(n => <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Room" : "Rooms"}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2">
          <Label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1">
            <Users className="w-3 h-3" /> Guests
          </Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="border-0 px-0 h-8 focus:ring-0 font-display font-bold text-slate-900"><SelectValue /></SelectTrigger>
            <SelectContent>
              {[1,2,3,4,5,6,7,8].map(n => <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Guest" : "Guests"}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button onClick={() => navigate("/hotels", { state: { city, checkin, checkout, rooms, guests } })} className="btn-accent-grad text-white border-0 font-semibold h-12 px-10 text-base rounded-xl">
          <Search className="w-4 h-4 mr-2" /> Search Hotels
        </Button>
      </div>
    </div>
  );
};

export default HotelSearchForm;
