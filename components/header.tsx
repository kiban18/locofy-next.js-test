import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="self-stretch rounded-51xl bg-gray-2 overflow-hidden flex flex-row items-end justify-between py-[0.812rem] pr-[1.75rem] pl-[1.5rem] box-border top-[0] z-[99] sticky gap-[1.25rem] max-w-full text-left text-[1rem] text-text-heading-color font-font">
      <div className="w-[5.869rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.012rem] box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem]">
          <div className="h-[1.719rem] w-[1rem] relative">
            <div className="absolute top-[0.719rem] left-[0rem] rounded-sm bg-gray-200 w-[1rem] h-[1rem]" />
            <div className="absolute top-[0.969rem] left-[0.313rem] bg-white1 w-[0.375rem] h-[0.563rem] z-[1]" />
            <img
              className="absolute top-[0rem] left-[0rem] rounded-3xl w-[1rem] h-[0.719rem] z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
            <img
              className="self-stretch h-[1.069rem] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/build.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[36.694rem] rounded-21xl bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[1.125rem] px-[2.218rem] box-border gap-[2.187rem] max-w-full mq750:gap-[1.063rem] mq1100:hidden">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[120%] inline-block min-w-[4.438rem] whitespace-nowrap">
            About us
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[120%] inline-block min-w-[4rem]">
            Projects
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[120%] inline-block min-w-[3.5rem]">
            Agents
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[120%] inline-block min-w-[4.188rem]">
            Services
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[120%] inline-block min-w-[3.688rem]">
            Listings
          </div>
        </div>
        <img
          className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/vuesaxlinearsearchnormal.svg"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.875rem] max-w-full">
        <div className="flex flex-col items-start justify-start pt-[1.281rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0.562rem]">
            <div className="relative leading-[120%] inline-block min-w-[7.125rem] whitespace-nowrap">
              Other services
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.125rem] h-[1.125rem] relative object-contain"
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowright@2x.png"
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-[1.187rem] px-[2.125rem] bg-white rounded-21xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-color hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
          <div className="relative text-[1rem] leading-[120%] font-font text-text-heading-color text-left inline-block min-w-[5.5rem]">
            Contact us
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
