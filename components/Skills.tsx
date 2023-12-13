import React from "react";
import SkillTile from "./SkillTile";
import { skills } from "@/lib/constants";

const Skills = () => {
  const user_skills = skills;
  return (
    <section className="flex justify-center mt-[-100px]">
      {/* Skills tiles */}
      <div className="w-[90%] md:w-[85%]  xl:w-[70%] min-h-[600px] border border-[rgba(0,0,0,0.2)] bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
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
    </section>
  );
};

export default Skills;
