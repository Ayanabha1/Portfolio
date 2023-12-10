import { hero_info } from "@/lib/constants";
import Image from "next/image";
import React from "react";

interface hero_information_proto {
  hero_text: string;
  hero_desc: string;
}

const Hero = () => {
  const hero_information: hero_information_proto = hero_info;
  return (
    <section className="flex flex-col items-center justify-center pt-32">
      {/* Hero Section */}

      <div className="flex flex-col items-center gap-4 px-10 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {hero_information?.hero_text}
        </h1>
        <p className="text-center text-lg md:text-xl font-normal tracking-wider ">
          {hero_information?.hero_desc}
        </p>
      </div>
      <div className="relative h-44 w-44 md:h-52 md:w-52 mt-14">
        <Image fill src="/hero.png" alt="Hero Image" />
      </div>
      <div
        className="relative min-w-[250px]  max-w-[860px] h-[40vw] max-h-[300px] min-h-[150px] mt-14  mx-10 md:mx-0"
        style={{ width: "-webkit-fill-available" }}
      >
        <Image fill src="/hero-illustration.png" alt="Hero Illustration" />
      </div>
    </section>
  );
};

export default Hero;
