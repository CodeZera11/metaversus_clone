import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import Feedback from "@/sections/Feedback";
import Footer from "@/sections/Footer";
import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import Insights from "@/sections/Insights";
import WhatsNew from "@/sections/WhatsNew";
import World from "@/sections/World";
import React from "react";

const Page = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-03 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-03 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
