"use client";
import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MenuIcon, XCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useNav } from "@/hooks/navsheethook";
import { cn } from "@/lib/utils";

const NavbarSheet = () => {
  const navbar = useNav();
  useEffect(() => {
    if (navbar.is_open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [navbar.is_open]);

  return (
    <>
      <div
        className={cn(
          "absolute top-0 left-0 z-[500] h-[100vh] w-[100vw] flex items-center justify-center bg-white",
          navbar.is_open ? "flex" : "hidden"
        )}
      >
        <XCircleIcon
          className="h-9 w-9 absolute top-6 right-10 cursor-pointer"
          onClick={() => navbar.close()}
        />
        <ul className="text-3xl md:text-4xl lg:text-5xl text-center space-y-4 font-semibold">
          <li onClick={() => navbar.close()}>
            <Link href="#about">About Me</Link>
          </li>
          <li onClick={() => navbar.close()}>
            <Link href="#projects">Projects</Link>
          </li>
          <li onClick={() => navbar.close()}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarSheet;
