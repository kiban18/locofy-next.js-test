import type { NextPage } from "next";

const HeaderMobile: NextPage = () => {
  return (
    <div className="w-[1440px] h-[62px] bg-tailwind-v332-white max-w-full flex flex-row items-center justify-between py-0 px-5 box-border md:bg-tailwind-v332-white md:flex md:items-center md:justify-between md:gap-[0px] md:min-w-[340px]">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start md:w-auto md:[align-self:unset]">
        <div className="flex flex-col items-start justify-center">
          <img
            className="w-40 h-[22.5px] overflow-hidden shrink-0 max-w-[160px]"
            alt=""
            src="/logomosvg.svg"
          />
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-12 relative h-12 md:flex">
        <div className="absolute top-[14px] right-[16px] bg-tailwind-v332-sky-900 w-6 h-0.5" />
        <div className="absolute top-[23px] right-[16px] bg-tailwind-v332-sky-900 w-6 h-0.5" />
        <div className="absolute top-[32px] right-[16px] bg-tailwind-v332-sky-900 w-6 h-0.5" />
      </button>
    </div>
  );
};

export default HeaderMobile;
