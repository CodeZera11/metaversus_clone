import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import Hero from "@/sections/Hero";
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
    </div>
  );
};

export default Page;
