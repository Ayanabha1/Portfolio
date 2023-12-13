import { about_details } from "@/lib/constants";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface about_details_interface {
  heading: string;
  desc: string;
  links: {
    name: string;
    icon: LucideIcon | string;
    link: string;
  }[];
}

const About = () => {
  const about_det: about_details_interface = about_details;

  return (
    <section id="about">
      {/* About Me & Skills Section */}
      <div className="w-full bg-primary pb-[25vh] text-center px-10 md:px-0">
        {/* Some info about me */}
        <div className="flex flex-col gap-4 justify-center items-center pt-20 md:pt-36  text-white">
          <h1 className="text-2xl font-semibold">{about_det.heading}</h1>
          <p className="md:max-w-[50%] text-xl text-center">{about_det.desc}</p>

          {/* Some Links */}
          <div className="flex gap-5 mt-10">
            {about_det.links.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="p-3 text-black bg-white w-fit shadow-[0_0_12px_rgba(0,0,0,0.3)] rounded-md flex gap-2 items-center active:shadow-[inset_0_0_6px_rgba(0,0,0,1)]"
              >
                <div className="relative h-5 w-5">
                  {typeof item.icon === "string" ? (
                    <Image fill alt="" src={item.icon} />
                  ) : (
                    <item.icon size={20} />
                  )}
                </div>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
