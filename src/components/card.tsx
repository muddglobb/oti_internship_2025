import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  card: [string, string, string];
};

const Card = ({ card }: CardProps) => {
  const [image, link, name] = card;

  return (
    <div className="p-2 shadow-lg h-full flex flex-col items-center w-55">
      {/* Container untuk gambar lingkaran */}
      <Link href={link}>
        <div className="w-55 h-55 rounded-full overflow-hidden mb-4 relative border-1 border-[#545454]">
          <Image
            src={image}
            alt="Card image"
            fill // Mengisi container parent
            style={{ objectFit: "cover" }} // Memastikan gambar menutupi area tanpa distorsi
            className="rounded-full" // Fallback untuk lingkaran
          />
        </div>
      </Link>
      <p className="text-white font-extrabold text-xl text-center">{name}</p>

      {/* <p className="text-gray-600">{link}</p> */}
    </div>
  );
};

export default Card;
