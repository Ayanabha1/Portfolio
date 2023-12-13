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
import { HomeIcon, Menu, MenuIcon, XCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useNav } from "@/hooks/navsheethook";
import { cn } from "@/lib/utils";
import { contact_links, nav_links, social_links } from "@/lib/constants";
import { Just_Another_Hand } from "next/font/google";
import Image from "next/image";

interface nav_list_interface {
  name: string;
  link: string;
  icon: any;
  desc: string;
}

interface socials_interface {
  name: string;
  icon: any;
  link?: string;
  text: string;
}
interface contact_interface {
  name: string;
  icon: any;
  link?: string;
  text: string;
}

const handwriting_font = Just_Another_Hand({
  weight: ["400"],
  subsets: ["latin"],
});

const NavbarSheet = () => {
  const navbar = useNav();
  const nav_list: nav_list_interface[] = nav_links;
  const socials: socials_interface[] = social_links;
  const contacts: contact_interface[] = contact_links;

  useEffect(() => {
    if (navbar.is_open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [navbar.is_open]);

  return (
    <section
      className={cn(
        "absolute top-0 left-0 z-[500] h-0 w-[100vw] flex bg-gradient-to-r from-neutral-300 via-gray-50 to-neutral-300 px-0  transition-all duration-700 overflow-hidden",
        navbar.is_open
          ? "flex h-[100vh] py-2 xs:py-8 transition-all duration-700 "
          : "h-0 py-0 transition-all duration-700 "
      )}
    >
      {/* Nav close btn */}
      <div className="absolute top-8 right-4 flex flex-col gap-10 xs:gap-20 items-center">
        <XCircleIcon
          className="h-7 xs:h-9 w-7 xs:w-9 cursor-pointer"
          onClick={() => navbar.close()}
        />
        <h1 className="hidden xs:block text-lg xs:text-2xl font-semibold -rotate-90">
          Navigation
        </h1>
      </div>

      <div className="flex flex-col w-full justify-between  items-center xs:items-start ">
        {/* Logo */}
        <div className="p-5 xs:px-14 lg:px-22">
          <h1
            className={cn(
              handwriting_font.className,
              "text-4xl tracking-wide,relative"
            )}
          >
            Ayanabha Misra
          </h1>
          <div className="relative w-36 h-4 -mt-2 -ml-3">
            <Image fill src="/squeeky_undeline.png" alt="" />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col w-[80%] items-center xs:items-start sm:w-[87%] md:w-[90%] xl:w-[95%] xs:px-14 lg:px-22">
          <ul className="flex flex-col gap-4 w-full">
            {nav_list.map((nav_item, i) => (
              <li key={i}>
                <div className="flex w-full justify-center  border-t py-1 md:py-5 border-black hover:scale-105 transition-all duration-300">
                  <span className="w-0 hidden xs:flex xs:w-[5%] items-start">
                    {i + 1}
                  </span>
                  <Link
                    href={nav_item.link}
                    className="flex gap-10 w-[80%] items-center justify-center xs:justify-normal"
                    onClick={() => navbar.close()}
                  >
                    {/* <nav_item.icon size={42} /> */}
                    <h1
                      className={cn(
                        "text-xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide lg:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
                        !(i === 0 || i == nav_list.length - 1) &&
                          "lg:text-transparent lg:font-outline"
                      )}
                    >
                      {nav_item.name}
                    </h1>
                  </Link>
                  <div className="hidden xs:block w-0 xs:w-[60%] md:w-[30%] text-sm lg:text-xl">
                    <span>{nav_item.desc}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials & Contacts links */}
        <div className="flex flex-col xs:flex-row gap-3 items-center xs:pl-14 pr-0 font-bold ">
          <h1 className="mr-5  xl:text-2xl ">Social links:</h1>
          <div className="grid grid-cols-2 xs:flex xs:flex-row items-start justify-center xs:justify-normal flex-wrap gap-5">
            {socials.map((item, i) => (
              <div key={i} className="flex items-center justify-start">
                <div className="p-2 shadow-[0_0_3px_rgba(0,0,0,0.5)] rounded-full  ">
                  <div className="relative h-4 w-4 xl:h-6 xl:w-6 ">
                    {typeof item.icon === "string" ? (
                      <Image fill alt="" src={item.icon} />
                    ) : (
                      <div>
                        <div className="xl:hidden">
                          <item.icon size={17} />
                        </div>
                        <div className="hidden xl:block">
                          <item.icon />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="ml-2">
                  <Link
                    target="_blank"
                    href={item.link!}
                    className="text-sm xl:text-lg"
                  >
                    {item.text}
                  </Link>
                </div>
              </div>
            ))}

            {/* Contacts */}

            {contacts.map((item, i) => (
              <div key={i} className="flex items-center justify-start">
                <div className="p-2 shadow-[0_0_3px_rgba(0,0,0,0.5)] rounded-full  ">
                  <div className="relative h-4 w-4 xl:h-6 xl:w-6 ">
                    {typeof item.icon === "string" ? (
                      <Image fill alt="" src={item.icon} />
                    ) : (
                      <div>
                        <div className="xl:hidden">
                          <item.icon size={17} />
                        </div>
                        <div className="hidden xl:block">
                          <item.icon />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="ml-2">
                  <Link
                    target="_blank"
                    href={item.link!}
                    className="text-sm xl:text-lg"
                  >
                    <span className="block xs:hidden">{item.text}</span>
                    <span className="hidden xs:block">{item.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarSheet;
