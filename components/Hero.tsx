import { Code2Icon, LayoutPanelTopIcon, WorkflowIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import SkillTile from "./SkillTile";
import { skills } from "@/lib/constants";

const Hero = () => {
  const user_skills = skills;

  return (
    <section className="flex flex-col items-center justify-center pt-32">
      {/* Hero Section */}

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">
          Full-Stack Web Developer & Problem Solver
        </h1>
        <p className="text-xl font-normal tracking-wider ">
          I create beautiful things when I have a cup of coffee with me 🍵.
        </p>
      </div>
      <div className="relative h-52 w-52 mt-14">
        <Image fill src="/hero.png" alt="Hero Image" />
      </div>
      <div
        className="relative min-w-[250px]  max-w-[860px] h-[40vw] max-h-[300px] min-h-[200px] mt-14"
        style={{ width: "-webkit-fill-available" }}
      >
        <Image fill src="/hero-illustration.png" alt="Hero Illustration" />
      </div>

      {/* About Me & Skills Section */}
      <div className="relative w-full bg-primary h-[500px]">
        {/* Some info about me */}
        <div className="flex flex-col gap-4 justify-center items-center pt-36  text-white">
          <h1 className="text-2xl font-semibold">
            Hi, I am Ayanabha Misra. Nice to meet you
          </h1>
          <p className="max-w-[55%] text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            aliquid neque accusamus laudantium optio ipsam unde aspernatur
            assumenda, ut, excepturi fuga enim corporis nobis est? Doloribus hic
            deserunt explicabo, soluta ut, reprehenderit velit delectus
            reiciendis veniam sunt dolorem consequatur obcaecati laudantium
            exercitationem odio? Excepturi veniam nam laudantium consequuntur
            delectus aliquid.
          </p>
        </div>

        {/* Skills tiles */}
        <div className="w-[70%] min-h-[600px] border border-[rgba(0,0,0,0.2)] bg-white absolute top-[80%] left-[50%] translate-x-[-50%] rounded-2xl shadow-2xl flex">
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

export default Hero;
