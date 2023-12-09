import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 sm:px-8 flex justify-between w-full text-lg md:text-xl font-medium items-center">
      <div className="relative h-10 w-10 sm:h-12 sm:w-12 ">
        <Image fill src="/logo.png" alt="logo" />
      </div>
      <div className="space-x-4 hidden sm:block">
        <button>Resume</button>
        <button className="text-primary border-2 border-primary p-2 px-4 rounded-3xl">
          Say Hello
        </button>
      </div>
      <button className="block sm:hidden">
        <MenuIcon className="h-8 w-8 font-light" />
      </button>
    </nav>
  );
};

export default Navbar;
