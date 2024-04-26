import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4.312rem] pl-[4.375rem] box-border max-w-full text-center text-[3.125rem] text-black font-font mq1250:pl-[2.188rem] mq1250:pr-[2.125rem] mq1250:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.812rem] max-w-full mq750:gap-[1.375rem]">
        <div className="w-[69.063rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <h1 className="m-0 w-[49.063rem] relative text-inherit leading-[120%] font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-[1.875rem] mq450:leading-[2.25rem] mq750:text-[2.5rem] mq750:leading-[3rem]">
            We are a global, boutique real estate brokerage
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[11rem] max-w-full text-left text-[2.375rem] mq450:gap-[1.375rem] mq750:gap-[2.75rem] mq1250:flex-wrap mq1250:gap-[5.5rem]">
          <div className="w-[32.438rem] flex flex-col items-start justify-start pt-[3.031rem] px-[0rem] pb-[0rem] box-border min-w-[32.438rem] max-w-full mq750:pt-[2rem] mq750:box-border mq750:min-w-full mq1250:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3.937rem] max-w-full mq450:gap-[1rem] mq750:gap-[1.938rem]">
              <div className="flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
                <h1 className="m-0 relative text-inherit leading-[2.875rem] font-semibold font-inherit mq450:text-[1.438rem] mq450:leading-[1.688rem] mq750:text-[1.875rem] mq750:leading-[2.25rem]">
                  The transfer of real estate
                </h1>
                <div className="w-[29.75rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full text-[1rem]">
                  <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                    sit pellentesque sollicitudin. Egestas faucibus lacus diam
                    in senectus consectetur. Mattis elit adipiscing quisque
                    tellus scelerisque vehicula ante nunc. Tellus consequat nisl
                    quis nisl justo.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq450:flex-wrap">
                <button className="cursor-pointer [border:none] py-[1.281rem] px-[2.187rem] bg-localhost-mine-shaft rounded-21xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray">
                  <div className="relative text-[1rem] leading-[120%] font-font text-localhost-yellow text-left inline-block min-w-[5.188rem]">
                    Book Now!
                  </div>
                </button>
                <button className="cursor-pointer py-[1.187rem] px-[2.125rem] bg-localhost-yellow rounded-21xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-localhost-silver hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                  <div className="relative text-[1rem] leading-[120%] font-font text-localhost-mine-shaft text-left inline-block min-w-[5.375rem]">
                    Read More
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[4.188rem] mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[0.312rem]">
                  <div className="relative leading-[120%] font-semibold inline-block min-w-[6.75rem] mq450:text-[2.5rem] mq450:leading-[3rem] mq750:text-[3.375rem] mq750:leading-[4rem]">
                    12+
                  </div>
                  <div className="relative text-[1rem] leading-[120%] inline-block min-w-[5.5rem]">
                    Customers
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.312rem]">
                  <div className="relative leading-[120%] font-semibold inline-block min-w-[7.125rem] mq450:text-[2.5rem] mq450:leading-[3rem] mq750:text-[3.375rem] mq750:leading-[4rem]">
                    14+
                  </div>
                  <div className="relative text-[1rem] leading-[120%] inline-block min-w-[3.5rem]">
                    Offices
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.312rem]">
                  <div className="relative leading-[120%] font-semibold inline-block min-w-[7.063rem] mq450:text-[2.5rem] mq450:leading-[3rem] mq750:text-[3.375rem] mq750:leading-[4rem]">
                    10+
                  </div>
                  <div className="relative text-[1rem] leading-[120%] inline-block min-w-[4.438rem]">
                    Students
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[36.063rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[22.313rem] mq750:min-w-full"
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
