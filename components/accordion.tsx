import type { NextPage } from "next";

const Accordion: NextPage = () => {
  return (
    <div className="w-[566px] bg-dark-gray box-border max-w-full flex flex-row items-center justify-start py-[18px] px-3.5 gap-[14px] text-left text-base text-kasprnet-nero font-text-large border-b-[0.7px] border-solid border-dark-border">
      <img
        className="w-5 relative h-5 overflow-hidden shrink-0"
        alt=""
        src="/solidicon.svg"
      />
      <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
        Accordion Menu
      </div>
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src="/icon.svg"
      />
    </div>
  );
};

export default Accordion;
