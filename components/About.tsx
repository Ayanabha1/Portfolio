import React from "react";

const About = () => {
  return (
    <section id="about">
      {/* About Me & Skills Section */}
      <div className="w-full bg-primary h-[550px] md:h-[500px] text-center px-10 md:px-0">
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
      </div>
    </section>
  );
};

export default About;
