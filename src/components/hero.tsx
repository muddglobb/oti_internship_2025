import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen
    px-10 
    md:px-20">
      {/* <Image
        src="/images/hero-background.jpg"
        alt="background"
        fill
        className="absolute top-0 left-0 w-full object-cover -z-10 mask-b-from-0%"
      ></Image> */}
      <Image
        src="/images/basecamp-omahti.webp"
        alt="background"
        fill
        className="absolute top-0 left-0 w-full object-cover -z-10 mask-b-from-20%"
      ></Image>

      <p className="font-extrabold pb-3 
      text-3xl
      lg:text-6xl">
        We Are Omah<span className="text-[#F0861A]">Kunci</span>
      </p>
      <p className="font-bold 
      text-center
      text-[14px]
      lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante
        tortor, fringilla ut auctor nec, vulputate varius dolor.
      </p>
      <p className="font-medium italic 
      text-[12px]
      lg:text-xl">
        “Curabitur pulvinar nisl sit amet libero”
      </p>
    </div>
  );
};

export default Hero;
