import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <section className="self-stretch rounded-mini flex flex-row items-start justify-between py-[0rem] px-[1.562rem] box-border bg-[url('/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[1.25rem] text-left text-[1rem] text-black font-font mq1250:flex-wrap">
      <div className="w-[29.938rem] flex flex-col items-start justify-start pt-[6.25rem] px-[0rem] pb-[0rem] box-border min-w-[29.938rem] max-w-full mq450:pt-[4.063rem] mq450:box-border mq750:min-w-full mq1250:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem] max-w-full">
          <div className="relative leading-[120%] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.5),_0_1px_0_rgba(255,_255,_255,_0.5),_-1px_0_0_rgba(255,_255,_255,_0.5),_0_-1px_0_rgba(255,_255,_255,_0.5)]">
            Welcome to Realstate
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
            <h1 className="m-0 self-stretch relative text-[4.188rem] leading-[120%] font-semibold font-inherit [text-shadow:1px_0_0_rgba(255,_255,_255,_0.5),_0_1px_0_rgba(255,_255,_255,_0.5),_-1px_0_0_rgba(255,_255,_255,_0.5),_0_-1px_0_rgba(255,_255,_255,_0.5)] mq450:text-[2.5rem] mq450:leading-[3rem] mq750:text-[3.375rem] mq750:leading-[4rem]">
              Manage Your Property
            </h1>
            <div className="w-[27.188rem] relative leading-[1.5rem] inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.5),_0_1px_0_rgba(255,_255,_255,_0.5),_-1px_0_0_rgba(255,_255,_255,_0.5),_0_-1px_0_rgba(255,_255,_255,_0.5)] max-w-full">
              Your will have everything nearby supermarket, buses , station, the
              carmen neighborhood, etc
            </div>
            <div className="w-[27.375rem] rounded-21xl bg-white flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.25rem] max-w-full text-gray-300 mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
              <div className="self-stretch w-[27.375rem] relative rounded-21xl bg-white hidden max-w-full" />
              <div className="flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]">
                <div className="relative leading-[1.5rem] z-[1]">
                  Enter your email
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[1.125rem] px-[1.562rem] bg-text-heading-color rounded-21xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray">
                <div className="h-[3.75rem] w-[9.188rem] relative rounded-21xl bg-text-heading-color hidden" />
                <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-font text-white text-left inline-block min-w-[6.063rem] z-[1]">
                  Get a Quote
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[40.5rem] relative max-h-full object-cover max-w-full mq1250:flex-1"
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
    </section>
  );
};

export default Hero;
