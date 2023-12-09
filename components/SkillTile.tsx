import { LayoutPanelTopIcon } from "lucide-react";
import React from "react";

interface skillPrototype {
  name: String;
}

interface propType {
  Label: String;
  Desc: String;
  Icon: any;
  skills: skillPrototype[];
}

const SkillTile = ({ Label, Desc, Icon, skills }: propType) => {
  return (
    <div className="w-[33.33%] h-full border-r pt-16 p-10">
      <div className="flex flex-col space-y-5 items-center">
        <div className="relative flex items-center justify-center bg-[rgb(91,233,185)] h-24 w-24 rounded-full">
          <Icon className="h-[100%] w-10" />
        </div>
        <span className="text-2xl font-semibold">{Label}</span>

        <p className="text-center font-medium text-md">{Desc}</p>
      </div>

      {/* Technologies */}
      <div className="mt-12">
        <h1 className="text-center text-xl text-primary">
          Technologies I know:
        </h1>
        <div className="flex flex-col space-y-2 mt-4 items-center text-lg">
          {skills?.map((skill, i) => (
            <div key={i}>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTile;
