import React from "react";
import Hero from "@/components/hero";
import ContactUs from "@/components/contact-us";
import Location from "@/components/location";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const Page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FadeInWhenVisible>
        <ContactUs />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Location />
      </FadeInWhenVisible>
    </div>
  );
};

export default Page;
