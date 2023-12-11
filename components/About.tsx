import { about_details } from "@/lib/constants";
import React from "react";

interface about_details_interface {
  heading: string;
  desc: string;
}

const About = () => {
  const about_det: about_details_interface = about_details;

  return (
    <section id="about">
      {/* About Me & Skills Section */}

      <div className="w-full bg-primary h-[550px] md:h-[500px] text-center px-10 md:px-0">
        {/* Some info about me */}
        <div className="flex flex-col gap-4 justify-center items-center pt-20 md:pt-36  text-white">
          <h1 className="text-2xl font-semibold">{about_det.heading}</h1>
          <p className=" md:max-w-[50%] text-xl text-center">
            {about_det.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
