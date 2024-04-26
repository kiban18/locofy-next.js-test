import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <section className="self-stretch rounded-mini flex flex-row items-start justify-start py-[0rem] px-[1.562rem] box-border gap-[10.625rem] bg-[url('/footer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-[3.125rem] text-black font-font mq450:gap-[1.313rem] mq750:gap-[2.625rem] mq1250:flex-wrap mq1250:gap-[5.313rem]">
      <div className="flex-1 flex flex-col items-start justify-start pt-[6.25rem] px-[0rem] pb-[0rem] box-border min-w-[26.063rem] max-w-full mq450:pt-[4.063rem] mq450:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.812rem] max-w-full mq750:gap-[1.375rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit [text-shadow:1px_0_0_rgba(255,_255,_255,_0.5),_0_1px_0_rgba(255,_255,_255,_0.5),_-1px_0_0_rgba(255,_255,_255,_0.5),_0_-1px_0_rgba(255,_255,_255,_0.5)] mq450:text-[1.875rem] mq450:leading-[2.25rem] mq750:text-[2.5rem] mq750:leading-[3rem]">
              Subscribe Our Newsletter
            </h1>
            <div className="w-[32.875rem] relative text-[1rem] leading-[1.5rem] text-left inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.5),_0_1px_0_rgba(255,_255,_255,_0.5),_-1px_0_0_rgba(255,_255,_255,_0.5),_0_-1px_0_rgba(255,_255,_255,_0.5)] max-w-full">
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc.
            </div>
          </div>
          <div className="w-[29rem] rounded-21xl bg-localhost-yellow flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.25rem] max-w-full text-left text-[1rem] text-gray-300 mq450:flex-wrap mq450:pr-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
            <div className="flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]">
              <div className="relative leading-[1.5rem]">Enter your email</div>
            </div>
            <button className="cursor-pointer [border:none] py-[1.125rem] px-[1.562rem] bg-localhost-mine-shaft rounded-21xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray">
              <div className="h-[3.75rem] w-[9.188rem] relative rounded-21xl bg-localhost-mine-shaft hidden" />
              <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-font text-localhost-yellow text-left inline-block min-w-[6.063rem] z-[1]">
                Get a Quote
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-[32.625rem] relative max-h-full object-cover max-w-full mq1250:flex-1"
        loading="lazy"
        alt=""
        src="/3drenderingisometricfdgdf-1@2x.png"
      />
    </section>
  );
};

export default Footer;
