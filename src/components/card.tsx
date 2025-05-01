// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Send } from "lucide-react";

// type CardProps = {
//   card: [string, string, string];
// };

// const Card = ({ card }: CardProps) => {
//   const [image, link, name] = card;

//   return (
//     <div className="p-2 shadow-lg h-full flex flex-col items-center w-55">
//       <Link href={link}>
//         <div className="w-55 h-55 rounded-full overflow-hidden mb-4 relative border-1 border-[#545454] group cursor-pointer">
//           <Image
//             src={image}
//             alt="Card image"
//             fill
//             className="rounded-full object-cover group-hover:blur-sm transition duration-300 ease-in-out"
//           />
//           {/* Icon Send muncul saat hover */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
//             <Send className="text-white w-16 h-16" />
//           </div>
//         </div>
//       </Link>

//       <p className="text-white font-extrabold text-xl text-center">{name}</p>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";

type CardProps = {
  card: [string, string, string];
};

const Card = ({ card }: CardProps) => {
  const [image, link, name] = card;

  return (
    <div className="p-2 shadow-lg h-full flex flex-col items-center w-55">
      <a
        href={`https://${link}`} // memastikan link valid
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-55 h-55 rounded-full overflow-hidden mb-4 relative border-1 border-[#545454] group cursor-pointer">
          <Image
            src={image}
            alt="Card image"
            fill
            className="rounded-full object-cover group-hover:blur-sm transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <Send className="text-white w-16 h-16" />
          </div>
        </div>
      </a>

      <p className="text-white font-extrabold text-xl text-center">{name}</p>
    </div>
  );
};

export default Card;
