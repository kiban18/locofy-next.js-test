import type { NextPage } from "next";

const MoMenuItemClose: NextPage = () => {
  return (
    <button className="cursor-pointer [border:none] pt-0 px-0 pb-px bg-[transparent] box-border max-w-full flex flex-col items-start justify-start self-stretch border-b-[1px] border-solid border-tailwind-v332-slate-200">
      <div className="self-stretch flex flex-col items-start justify-start py-3 px-4 relative">
        <div className="self-stretch relative text-mini leading-[24px] font-kasprnet-noto-sans-kr-demilight-14 text-tailwind-v332-white text-left z-[0]">
          학회 소식
        </div>
        <div className="w-4 !m-[0] absolute top-[20px] right-[16px] h-4 flex flex-col items-start justify-start z-[1]">
          <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.8px] px-px box-border">
            <img
              className="w-3.5 relative h-[8.5px] overflow-hidden shrink-0"
              alt=""
              src="/icodownsvg.svg"
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default MoMenuItemClose;
