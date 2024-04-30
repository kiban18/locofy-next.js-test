import type { NextPage } from "next";

export type MoMenuItemOpenType = {
  title?: string;
};

const MoMenuItemOpen: NextPage<MoMenuItemOpenType> = ({ title }) => {
  return (
    <button className="cursor-pointer [border:none] pt-0 px-0 pb-px bg-[transparent] box-border max-w-full flex flex-col items-start justify-start self-stretch border-b-[1px] border-solid border-gray-400">
      <div className="self-stretch flex flex-row items-center justify-start py-3 px-4">
        <div className="flex-1 relative text-mini leading-[24px] font-kasprnet-noto-sans-kr-demilight-13 text-kasprnet-nero text-left">
          {title}
        </div>
        <div className="w-4 h-4 flex flex-col items-start justify-start [transform:_rotate(180deg)]">
          <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.8px] px-px box-border">
            <img
              className="w-3.5 relative h-[8.5px] overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
              alt=""
              src="/icodownsvg.svg"
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default MoMenuItemOpen;
