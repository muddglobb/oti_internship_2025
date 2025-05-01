import React from "react";
import MapEmbed from "./map-embed";

const Location = () => {
  return (
    <div className="flex items-center justify-center text-white h-screen 
    px-7
    md:px-10
    lg:px-20">
      <div className="flex gap-10
        flex-col
        md:flex-row
      ">
        <MapEmbed />
        <div>
          <p className="font-extrabold 
          text-3xl
          md:text-5xl">
            SEE OUR <span className="text-[#F0861A]">LOCATION</span>
          </p>
          <p className="font-extrabold 
          text-[16px]
          md:text-lg">
            Wisma FMIPA UGM, Sagan, Caturtunggal, Kec. Depok, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55281
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
