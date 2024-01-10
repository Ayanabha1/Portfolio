import { footer_banner_details } from "@/lib/constants";
import Link from "next/link";
import React from "react";

interface footer_banner_details_interface {
  heading: string;
  heading2: string;
  button: {
    text: string;
    icon: any;
    link: string;
  };
}

const FooterBanner = () => {
  const footer_banner_dets: footer_banner_details_interface =
    footer_banner_details;
  return (
    <div className="relative mt-20 mb-[-200px] lg:mb-[-100px] z-[50] lg:mt-20px scroll-m-[250px] mx-auto bg-[rgb(20,28,58)] w-[92%] lg:w-[80%] rounded-xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center justify-between p-10 text-white text-center font-medium lg:font-semibold ">
      <h1 className="text-lg md:text-2xl">{footer_banner_details.heading}</h1>
      <h1 className="text-lg md:text-2xl">{footer_banner_details.heading2}</h1>
      <Link
        href={footer_banner_dets.button.link}
        target="_blank"
        className="flex gap-2 items-center text-2xl font-medium p-3 px-8 border-2 border-[rgb(91,233,185)] rounded-full hover:bg-[rgb(91,233,185)] hover:text-black cursor-pointer transition-all duration-300"
      >
        <footer_banner_details.button.icon />
        <span className="text-lg md:text-xl font-medium">
          {footer_banner_details.button.text}
        </span>
      </Link>
    </div>
  );
};

export default FooterBanner;
