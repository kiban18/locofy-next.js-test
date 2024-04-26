import type { NextPage } from "next";
import Property from "./property";

const FrameComponent1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[1.937rem] max-w-full text-left text-[1rem] text-black font-font mq750:gap-[0.938rem]">
      <div className="relative leading-[120%]">Best Project of the Years</div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.187rem] pl-[0.125rem] box-border max-w-full text-[3.125rem]">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
          <h1 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit inline-block max-w-full mq450:text-[1.875rem] mq450:leading-[2.25rem] mq750:text-[2.5rem] mq750:leading-[3rem]">
            Our recent projects
          </h1>
          <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
            <div className="h-[2.813rem] flex flex-row items-start justify-start gap-[1rem]">
              <img
                className="h-[2.813rem] w-[2.813rem] relative min-h-[2.813rem]"
                loading="lazy"
                alt=""
                src="/group-10.svg"
              />
              <div className="h-[2.813rem] w-[2.813rem] relative min-h-[2.813rem] flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0rem] top-[0.813rem] [transform:scale(1.667)]"
                  loading="lazy"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[86.313rem] overflow-x-auto flex flex-row items-start justify-start gap-[1.25rem] max-w-full">
        <Property
          image3="/image-3@2x.png"
          title="Sobha Hearland I Villas"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum"
          starsValue="4.84"
        />
        <Property
          image3="/image-4@2x.png"
          title="Sobha Hearland II Villas"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
          starsValue="4.83"
          propMinWidth="2.063rem"
        />
        <Property
          image3="/image-5@2x.png"
          title="Sobha Hearland II Villas"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
          starsValue="4.83"
          propMinWidth="2.063rem"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
