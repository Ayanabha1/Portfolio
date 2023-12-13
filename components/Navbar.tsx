"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useNav } from "@/hooks/navsheethook";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Just_Another_Hand } from "next/font/google";

const handwriting_font = Just_Another_Hand({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [glueNavbar, setGlueNavbar] = useState(false);
  const navbar = useNav();
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setGlueNavbar(true);
    } else {
      setGlueNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "p-4 sm:px-8 flex justify-between w-full text-lg md:text-xl font-medium items-center transition-all duration-100",
        glueNavbar ? "fixed top-0 left-0 bg-white z-[5000] shadow-xl" : "flex"
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 ">
          <Image fill src="/hero.png" alt="logo" />
        </div>
        <div className="h-12 w-[1.5px] bg-neutral-400"></div>
        <h1 className={cn(handwriting_font.className, "text-4xl ml-2")}>
          Ayanabha Misra
        </h1>
      </Link>
      <Button
        variant="ghost"
        className="relative"
        onClick={() => navbar.open()}
      >
        <MenuIcon />
      </Button>
    </nav>
  );
};

export default Navbar;
