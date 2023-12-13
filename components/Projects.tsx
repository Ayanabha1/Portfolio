import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/constants";
import Link from "next/link";

interface project_interface {
  name: string;
  techs: string[];
  images: string[];
  git: string;
  link: string;
}

const Projects = () => {
  const all_projects: project_interface[] = projects;

  return (
    <section
      id="projects"
      className="px-2 p-10 sm:p-28 sm:px-8 w-full flex flex-col items-center justify-center scroll-m-[70px]"
    >
      <h1 className="relative text-3xl font-bold text-center after:absolute after:content-[''] after:h-1 after:w-[80%] after:-bottom-2 after:left-[50%] after:translate-x-[-50%] after:bg-black">
        Projects
      </h1>

      {/* Project Cards */}

      <div className="mt-16 w-[95%] sm:w-[90%] flex flex-col justify-center items-center md:items-stretch md:flex-row flex-wrap gap-8 ">
        {all_projects?.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
