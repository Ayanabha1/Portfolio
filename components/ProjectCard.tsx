"use client";
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface project_interface {
  name: string;
  techs: string[];
  images?: string[];
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
    <div className="w-full sm:w-[400px] shadow-lg border rounded-xl overflow-hidden cursor-pointer">
      {/* Project images container */}
      <div className="relative h-[280px] w-full">
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
        {/* Project name */}
        <div className="z-20 flex items-center justify-between absolute bottom-0 w-full bg-gradient-to-t from-[rgba(0,0,0)] to-[transparent] backdrop-blur-[2px] border-none outline-none text-white text-xl font-semibold p-2 px-3">
          {project.name}
          <div className="flex items-center text-md shadow-xl">
            <div className="flex items-center p-1 pl-3 bg-[rgba(255,255,255,0.82)] backdrop-blur-[2px] hover:shadow-[inset_0_0_3px_rgba(0,0,0,1)] transition-all rounded-tl-sm rounded-bl-sm">
              <Link href={project.link} target="_blank">
                <LinkIcon className="h-5 w-5 mr-[3px] text-black" />
              </Link>
            </div>
            <div className="flex items-center p-1 pr-3  bg-[rgba(255,255,255,0.82)] backdrop-blur-[2px] hover:shadow-[inset_0_0_3px_rgba(0,0,0,1)] transition-all rounded-tr-sm rounded-br-sm">
              <Link href={project.git} target="_blank">
                <div className="relative h-5 w-5 ml-[4px]">
                  <Image fill src="/icons/git.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="flex p-3 justify-between">
        <h2 className="text-lg font-semibold">Technologies Used:</h2>
      </div>
      <div className="flex flex-wrap gap-2 pb-5 px-3">
        {project.techs.map((tech, i) => (
          <span key={i} className="p-2 shadow border rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
