import React, { useState, useRef, useEffect } from "react";
import BookingTabs from "./BookingTabs";
import { ChevronDown } from "lucide-react";

// Multiple stock video CDN URLs to try in order (fallback)
const VIDEO_SOURCES = ["../../public/videos/Vande bharat.mp4"];

const HeroVideo = () => {
  const [srcIdx, setSrcIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [srcIdx]);

  const handleError = () => {
    if (srcIdx < VIDEO_SOURCES.length - 1) setSrcIdx(srcIdx + 1);
  };

  return (
    <section className="relative w-full min-h-[800px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setLoaded(true)}
          onError={handleError}
          className="absolute inset-0 w-full h-full object-cover px-5 py-2 rounded-[50px]"
          style={{
            filter: "brightness(0.85) contrast(1.2) saturate(1.35)",
          }}
          poster="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=80"
        >
          <source src={VIDEO_SOURCES[srcIdx]} type="video/mp4" />
        </video>
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,23,42,0.2), rgba(5,23,42,0.55), rgba(5,23,42,0.9))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(255,138,0,0.18), transparent 40%)",
          }}
        /> */}
        {/* Fallback gradient overlay */}
        {!loaded && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0B4F9F 0%, #1e3a8a 50%, #0f172a 100%)",
            }}
          />
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 pt-20 pb-16">
        <div className="text-center mb-7 fade-up">
          <h1 className="font-sans text-white text-xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-2xl">
            Your Journey,
            <span className="block">Just a Tap Away</span>
          </h1>
          {/* <p className="mt-4 text-blue-50/90 text-base sm:text-lg max-w-2xl mx-auto">
            Book trains, buses, flights and hotelsm all in one place. Fast,
            secure, and beautifully simple.
          </p> */}
        </div>

        {/* Booking Widget */}
        <div
          className="max-w-5xl mx-auto fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <BookingTabs />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-white/80 flex flex-col items-center gap-1">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroVideo;
