import React from "react";
import SkillTile from "./SkillTile";
import { skills } from "@/lib/constants";

const About = () => {
  const user_skills = skills;
  return (
    <section id="about">
      {/* About Me & Skills Section */}
      <div className="relative w-full bg-primary h-[550px] md:h-[500px] text-center px-10 md:px-0">
        {/* Some info about me */}
        <div className="flex flex-col gap-4 justify-center items-center pt-20 md:pt-36  text-white">
          <h1 className="text-2xl font-semibold">
            Hi, I am Ayanabha Misra. Nice to meet you
          </h1>
          <p className=" md:max-w-[50%] text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            nobis distinctio! Iure iusto necessitatibus a! Repellendus pariatur
            eum hic non, asperiores repellat in amet delectus. Sunt in, iusto
            accusamus perferendis enim dicta earum labore. Vitae modi velit
            tenetur esse sunt!
          </p>
        </div>

        {/* Skills tiles */}
        <div className="w-[90%] md:w-[85%] xl:w-[70%] min-h-[600px] border border-[rgba(0,0,0,0.2)] bg-white absolute top-[80%] left-[50%] translate-x-[-50%] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {user_skills.map((skill, i) => (
            <SkillTile
              key={i}
              Label={skill.label}
              Desc={skill.desc}
              Icon={skill.icon}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
