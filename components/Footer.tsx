"use client";
import {
  footer_banner_details,
  footer_details,
  phoneno,
} from "@/lib/constants";
import { ContactIcon, DownloadIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationSchemaType, validationSchema } from "@/lib/messageValidator";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import toast from "react-hot-toast";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

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

interface footer_banner_details_interface {
  heading: string;
  heading2: string;
  button: {
    text: string;
    icon: any;
    link: string;
  };
}

const override = {
  display: "block",
  borderColor: "white",
};

const Footer = () => {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const footer_dets: footer_details_interface = footer_details;
  const footer_banner_dets: footer_banner_details_interface =
    footer_banner_details;

  const form = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const sendMessage = async (values: ValidationSchemaType) => {
    setLoading(true);
    await axios
      .post("/api/sendMessage", values)
      .then((res) => {
        toast.success(res?.body?.message || "Message Sent");
      })
      .catch((err) => {
        toast.error(
          err?.response?.data?.message ||
            "Something went wrong ... Please try again"
        );
      });
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full h-[1200px] sm:h-[1100px] md:h-[800px] lg:h-[700px] bg-primary mt-20 lg:mt-20px"
    >
      <div className="absolute -top-20 left-[0] w-full">
        <div className="mx-auto bg-[rgb(20,28,58)] w-[92%] lg:w-[80%] rounded-xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center justify-between p-10 text-white text-center font-medium lg:font-semibold ">
          <h1 className="text-lg md:text-2xl">
            {footer_banner_details.heading}
          </h1>
          <h1 className="text-lg md:text-2xl">
            {footer_banner_details.heading2}
          </h1>
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
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(sendMessage)}
                    className="flex flex-col gap-4"
                  >
                    <FormField
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email address"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please enter your message here"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={loading}>
                      <span className="relative">
                        Submit
                        <PulseLoader
                          color={color}
                          loading={loading}
                          cssOverride={override}
                          size={5}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                          className="absolute -right-10 top-0"
                        />
                      </span>
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
