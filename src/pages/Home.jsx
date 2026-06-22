import React from "react";
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import Footer from "../components/Footer";
import { InfoMarquee, OffersSection, PopularRoutes, Features, QuickServices } from "../components/Sections";
import AITripPlanner from "./AITripPlanner";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <HeroVideo />
      <QuickServices />
      <InfoMarquee />
      <AITripPlanner />
      <OffersSection />
      <PopularRoutes />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
