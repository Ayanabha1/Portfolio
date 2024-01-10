"use client";
import { footer_details, name, phoneno } from "@/lib/constants";
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
import FooterBanner from "./FooterBanner";

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

const override = {
  display: "block",
  borderColor: "white",
};

const Footer = () => {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const footer_dets: footer_details_interface = footer_details;

  const form = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const sendMessage = async (values: ValidationSchemaType) => {
    setLoading(true);
    await axios
      .post("/api/sendMessage", values)
      .then((res) => {
        toast.success("Message sent successfully");
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
    <section id="contact" className="relative w-full z-[40]  bg-primary">
      <div className="w-full ">
        <div className="flex items-center justify-center pt-[250px] lg:pt-[150px] py-10">
          <div className="w-[90%] lg:w-[80%] flex flex-col-reverse md:flex-row md:items-start justify-between">
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
              <p className="text-lg ">Handcrafted by © {name}</p>
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
