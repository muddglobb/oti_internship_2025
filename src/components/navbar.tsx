import Link from "next/link";
import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <main className="fixed inset-x-0 top-0 z-10 bg-black">
      <div className="flex-row items-center justify-between p-4">
        <Link href="/">
          {/* <Logo /> */}
          {/* <p className="text-white">Logo</p> */}
          <Image 
          src="/images/logo-omah-kunci.png"
          alt="Logo"
          width={140}
          height={140}
          />
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
