import React from "react";

const AvailableBadge = () => {
  return (
    <div className="fixed bottom-5  right-7 flex items-center gap-1 bg-[rgb(37,36,37)] text-white p-1 px-3 rounded-3xl border-black shadow-[0_2px_4px_rgb(0,0,0,0.5)] border">
      <div className="h-full w-fit flex items-center justify-center rounded-full bg-white ">
        <div className="h-2 w-2 rounded-full bg-[rgb(29,241,183)] shadow-[0_0px_4px_rgb(29,241,183)] border-[rgb(29,241,183)] "></div>
      </div>
      <span>Available for work</span>
    </div>
  );
};

export default AvailableBadge;
