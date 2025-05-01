import React from "react";
import Hero from "@/components/hero";
import ContactUs from "@/components/contact-us";
import Location from "@/components/location";

const Page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ContactUs />
      <Location />
    </div>
  );
};

export default Page;
