import { LayoutPanelTopIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface skillPrototype {
  name: String;
  icon?: string | StaticImport;
}

interface propType {
  Label: String;
  Desc: String;
  Icon: any;
  skills: skillPrototype[];
}

const SkillTile = ({ Label, Desc, Icon, skills }: propType) => {
  return (
    <div className="w-full md:w-[33.33%] border-b md:border-r md:border-b-0 pt-16 p-10 border-collapse flex flex-col flex-grow">
      <div className="flex flex-col space-y-5 items-center ">
        <div className="relative flex items-center justify-center  bg-[rgb(91,233,185)] h-24 w-24 rounded-full">
          <Icon className="h-[100%] w-10" />
        </div>
        <span className="text-xl lg:text-2xl tracking-wide font-semibold text-center">
          {Label}
        </span>

        <p className="text-center font-medium text-md lg:text-lg">{Desc}</p>
      </div>

      {/* Technologies */}
      <div className="mt-5 md:mt-12">
        <h1 className="text-center text-lg lg:text-xl text-primary">
          Technologies I know:
        </h1>
        <div className="flex flex-wrap gap-2 mt-4 justify-center items-center text-lg">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="p-1 lg:p-2 shadow-md rounded-md border transition-all hover:shadow-[inset_0_0px_4px_rgba(0,0,0,0.3)] cursor-pointer flex items-center"
            >
              {skill?.icon && (
                <div className="relative h-5 w-5 lg:h-6 lg:w-6 p-0 mr-1 rounded-sm ">
                  <Image fill src={skill?.icon} alt="" />
                </div>
              )}
              <span className="text-md">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTile;
