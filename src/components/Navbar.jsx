import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Train, Menu, X, ChevronDown, User, Search, Globe, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../../public/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = ({ transparent = false }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Trains", links: ["Book Ticket", "PNR Status", "Train Schedule", "Live Train Status", "Charts/Vacancy", "Cancel Ticket"] },
    { label: "Buses", links: ["Book Bus", "Cancel Bus Ticket", "My Bus Bookings"] },
    { label: "Flights", links: ["Book Flight", "Web Check-in", "My Flight Bookings"] },
    { label: "Hotels", links: ["Book Hotel", "My Hotel Bookings"] },
    { label: "Holidays", links: ["Domestic Packages", "International Packages", "Customised Holidays"] },
  ];

  const baseTextColor = transparent ? "text-white" : "text-slate-700";
  const wrapperClass = transparent
    ? "absolute top-0 left-0 right-0 z-30 glass"
    : "sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm";

  return (
    <header className="absolute top-1 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-primary-500 flex items-center justify-center">
              {/* <Train className="w-5 h-5 text-white" strokeWidth={2.5} /> */}
                <img src={logo} alt="RailGo Logo" className="w-10 h-10" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-extrabold text-lg ${transparent ? "text-white" : "text-slate-900"}`}>
                RailGo
              </span>
              <span className={`text-[10px] tracking-widest uppercase ${transparent ? "text-blue-100" : "text-slate-500"}`}>
                Indian Railways
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/15 ${baseTextColor} transition-colors`}>
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {item.links.map((l) => (
                    <DropdownMenuItem key={l} onClick={() => navigate("/")}>{l}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm ${baseTextColor} hover:bg-white/15`}>
              <Globe className="w-4 h-4" /> EN
            </button>
            <button className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm ${baseTextColor} hover:bg-white/15`}>
              <HelpCircle className="w-4 h-4" /> Help
            </button>
            <Button
              onClick={() => navigate("/login")}
              className="btn-accent-grad text-white border-0 font-semibold hover:opacity-95"
            >
              <User className="w-4 h-4 mr-1.5" /> Login
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-lg ${baseTextColor} hover:bg-white/15`}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.label} className="py-2">
              <div className="font-semibold text-slate-900 text-sm">{item.label}</div>
              <div className="pl-3 mt-1 space-y-1">
                {item.links.slice(0, 3).map((l) => (
                  <div key={l} className="text-sm text-slate-600 py-1">{l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
