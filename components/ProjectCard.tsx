"use client";
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "./ui/button";

interface project_interface {
  name: string;
  techs: string[];
  images?: string[];
  description: string;
  git: string;
  link: string;
}

const ProjectCard = ({ project }: { project: project_interface }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full md:w-[75%] lg:w-[46%] xl:w-[40%]  shadow-lg border rounded-xl overflow-hidden cursor-pointer">
      {/* Project images container */}
      <div className="relative h-[30vh] xsm:h-[45vh] flex-grow w-full">
        {/* Image carousel */}
        <Carousel
          swipeable={project.images!.length > 1 ? true : false}
          draggable={project.images!.length > 1 ? true : false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={project.images!.length > 1 ? true : false}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all 500ms"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {project.images!.map((img, i) => (
            <div key={i} className="relative h-full w-full">
              <Image src={img} fill alt="" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Project details */}

      <div className="pb-5">
        {/* Project name and links */}

        <div className="flex items-center justify-between p-3 border-b">
          <h2 className="text-md xsm:text-lg font-semibold">{project?.name}</h2>
          <div className="flex items-center gap-3">
            <Link href={project?.link} target="_blank">
              <Button
                variant="secondary"
                className="relative shadow-md border text-sm xsm:text-md"
              >
                <LinkIcon className="h-4 w-4 mr-[3px] text-black" /> Visit
              </Button>
            </Link>

            <Link href={project?.git} target="_blank">
              <Button
                variant="secondary"
                className="relative shadow-md border text-sm xsm:text-md"
              >
                <Image
                  width={20}
                  height={20}
                  src="/icons/git.png"
                  className="mr-[3px]"
                  alt=""
                />
                Github
              </Button>
            </Link>
          </div>
        </div>
        {/* Description */}
        <div className="p-3">
          <h2 className="text-md xsm:text-lg font-semibold">Description</h2>
          <p className="text-sm xsm:text-base">{project?.description}</p>
        </div>
        {/* Technologies Used */}

        <div className="flex flex-wrap gap-2 px-3">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="p-2 shadow border rounded-md text-sm xsm:text-base"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
