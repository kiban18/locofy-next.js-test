import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="w-full rounded-51xl bg-localhost-alabaster overflow-hidden flex flex-row items-end justify-between py-[0.812rem] pr-[1.75rem] pl-[1.5rem] box-border max-w-[159.063rem] top-[0] z-[99] sticky gap-[1.25rem] text-left text-[1rem] text-localhost-mine-shaft font-poppins">
      <div className="w-[5.869rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.012rem] box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[1rem] h-[0.719rem] relative rounded-3xl overflow-hidden shrink-0">
              <img
                className="absolute top-[0rem] left-[0.1rem] w-[0.8rem] h-[0.719rem] overflow-hidden"
                loading="lazy"
                alt=""
                src="/rectangle12svg.svg"
              />
            </div>
            <div className="w-[1rem] h-[1rem] relative rounded-sm bg-localhost-cod-gray">
              <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-localhost-cod-gray w-full h-full hidden" />
              <div className="absolute top-[0.25rem] left-[0.313rem] bg-margin-nextjsvercelapp-nero w-[0.375rem] h-[0.563rem] z-[1]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
            <div className="w-full overflow-hidden flex flex-col items-start justify-start max-w-[4.243rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[0rem] px-[0.125rem]">
                <img
                  className="self-stretch h-[1.069rem] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/buildsvg.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[36.694rem] rounded-21xl bg-localhost-yellow overflow-hidden shrink-0 flex flex-row items-end justify-start py-[1.125rem] pr-[2.175rem] pl-[2.218rem] box-border gap-[2.2rem] max-w-[156.063rem] mq800:gap-[1.125rem] mq1125:hidden">
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.093rem]">
          <div className="relative leading-[1.25rem] inline-block min-w-[4.438rem] whitespace-nowrap">
            About us
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.093rem]">
          <div className="relative leading-[1.25rem] inline-block min-w-[4rem]">
            Projects
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.093rem]">
          <div className="relative leading-[1.25rem] inline-block min-w-[3.5rem]">
            Agents
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.093rem]">
          <div className="relative leading-[1.25rem] inline-block min-w-[4.188rem]">
            Services
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.093rem]">
          <div className="relative leading-[1.25rem] inline-block min-w-[3.688rem]">
            Listings
          </div>
        </div>
        <div className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]">
          <img
            className="absolute top-[0.031rem] left-[0rem] w-[1.5rem] h-[1.438rem] overflow-hidden"
            loading="lazy"
            alt=""
            src="/vuesaxlinearsearchnormalsvg.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.875rem] max-w-[156.063rem]">
        <div className="flex flex-col items-start justify-start pt-[1.281rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0.562rem]">
            <div className="relative leading-[1.25rem] inline-block min-w-[7.125rem] whitespace-nowrap">
              Other services
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.125rem] h-[1.125rem] relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowright2xpng@2x.png"
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-[1.125rem] px-[2.125rem] bg-localhost-yellow rounded-21xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-localhost-silver hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-gray">
          <div className="relative text-[1rem] leading-[1.25rem] font-poppins text-localhost-mine-shaft text-left inline-block min-w-[5.5rem]">
            Contact us
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
