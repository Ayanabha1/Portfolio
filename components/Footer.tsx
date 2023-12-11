import { footer_details, phoneno, resume } from "@/lib/constants";
import { ContactIcon, DownloadIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Just_Another_Hand } from "next/font/google";
import { cn } from "@/lib/utils";

const handwriting_font = Just_Another_Hand({
  weight: ["400"],
  subsets: ["latin"],
});

interface footer_details_interface {
  heading: string;
  socials: {
    name: string;
    icon: any;
    link: string;
  }[];
}

const Footer = () => {
  const footer_dets: footer_details_interface = footer_details;
  return (
    <section
      id="contact"
      className="relative w-full h-[1200px] sm:h-[1100px] md:h-[800px] lg:h-[700px] bg-primary mt-20 lg:mt-20px"
    >
      <div className="absolute -top-20 left-[0] w-full">
        <div className="mx-auto bg-[rgb(20,28,58)] w-[92%] lg:w-[80%] rounded-xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center justify-between p-10 text-white text-center font-medium lg:font-semibold ">
          <h1 className="text-lg md:text-2xl">Let's Work Together</h1>
          <h1 className="text-lg md:text-2xl">
            Please have a look at my resume
          </h1>
          <Link
            href={resume}
            target="_blank"
            className="flex gap-2 items-center text-2xl font-medium p-3 px-8 border-2 border-[rgb(91,233,185)] rounded-full hover:bg-[rgb(91,233,185)] hover:text-black cursor-pointer transition-all duration-300"
          >
            <DownloadIcon />
            <span className="text-lg md:text-xl font-medium">Resume</span>
          </Link>
        </div>

        <div className="flex items-center justify-center py-10">
          <div className="w-[90%] lg:w-[80%] flex flex-col-reverse md:flex-row justify-between">
            <div className="flex flex-col gap-8 items-left justify-center text-white mt-10 items-center md:items-start">
              {/* <div className="relative h-16 w-16 invert">
                <Image fill src="/logo.png" alt="Ayanabha" />
              </div> */}
              <div className={cn(handwriting_font.className)}>
                <span className="text-5xl">Ayanabha Misra</span>
              </div>
              <p className="w-[40%] text-xl md:text-2xl text-center md:text-left">
                {footer_dets.heading}
              </p>
              <div className="flex gap-2">
                <PhoneCallIcon />
                <span className="text-lg">{phoneno}</span>
              </div>
              <div className="flex gap-4">
                {footer_dets.socials!.map((social, i) => (
                  <Link key={i} href={social.link} target="_blank">
                    <div className="p-2 border-white border-2 rounded-full hover:text-primary hover:bg-white transition-all duration-300">
                      <social.icon />
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-lg ">Handcrafted by me © Ayanabha Misra</p>
            </div>
            {/* Contact */}
            <Card className="w-[100%] md:w-[60%] max-w-[750px] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get in touch with me</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="email" placeholder="Type your message here" />
                </div>
                <div>
                  <Button>Submit</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
