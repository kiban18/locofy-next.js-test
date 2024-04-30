import type { NextPage } from "next";

const DropdownUIClose: NextPage = () => {
  return (
    <div className="w-80 bg-tailwind-v332-white box-border h-[50px] flex flex-row items-center justify-start p-3.5 gap-[14px] text-left text-base text-tailwind-v332-slate-700 font-text-large border-[0.7px] border-solid border-tailwind-v332-slate-300">
      <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
        드롭다운 메뉴
      </div>
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src="/icon1.svg"
      />
    </div>
  );
};

export default DropdownUIClose;
