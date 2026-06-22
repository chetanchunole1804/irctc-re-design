import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import TrainResults from "./pages/TrainResults";
import BusResults from "./pages/BusResults";
import FlightResults from "./pages/FlightResults";
import HotelResults from "./pages/HotelResults";
import Login from "./pages/Login";
import PNRStatus from "./pages/PNRStatus";
import TrainSchedule from "./pages/TrainSchedule";
import AITripPlanner from "./pages/AITripPlanner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trains" element={<TrainResults />} />
          <Route path="/buses" element={<BusResults />} />
          <Route path="/flights" element={<FlightResults />} />
          <Route path="/hotels" element={<HotelResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pnr" element={<PNRStatus />} />
          <Route path="/schedule" element={<TrainSchedule />} />
          <Route path="/ai-trip-planner" element={<AITripPlanner />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
