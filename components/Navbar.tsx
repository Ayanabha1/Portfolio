"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarSheet from "./NavbarSheet";
import { useNav } from "@/hooks/navsheethook";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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
      <div className="relative h-10 w-10 sm:h-12 sm:w-12 ">
        <Image fill src="/logo.png" alt="logo" />
      </div>
      <Button
        variant="ghost"
        className="relative"
        onClick={() => navbar.open()}
      >
        <MenuIcon />
      </Button>
      <NavbarSheet />
    </nav>
  );
};

export default Navbar;
