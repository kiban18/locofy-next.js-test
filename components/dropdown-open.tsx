import type { NextPage } from "next";

const DropdownUIOpen: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-base text-tailwind-v332-slate-700 font-text-large">
      <div className="w-80 bg-tailwind-v332-white box-border h-[50px] flex flex-row items-center justify-start p-3.5 gap-[14px] border-[0.7px] border-solid border-tailwind-v332-slate-300">
        <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
          드롭다운 메뉴
        </div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/icon2.svg"
        />
      </div>
      <div className="w-80 bg-tailwind-v332-white box-border flex flex-col items-start justify-center p-px text-sm border-r-[0.7px] border-solid border-tailwind-v332-slate-300 border-b-[0.7px] border-l-[0.7px]">
        <div className="self-stretch flex flex-row items-start justify-center py-3 px-3.5">
          <div className="flex-1 relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            드롭다운 메뉴
          </div>
        </div>
        <div className="self-stretch bg-tailwind-v332-slate-50 flex flex-row items-start justify-center py-3 px-3.5">
          <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
            드롭다운 메뉴2
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-3 px-3.5">
          <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
            드롭다운 메뉴3
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownUIOpen;
