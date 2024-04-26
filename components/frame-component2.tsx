import type { NextPage } from "next";
import StepItems from "./step-items";

const FrameComponent2: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[2.812rem] max-w-full text-left text-[1rem] text-black font-font mq750:gap-[1.375rem]">
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] box-border max-w-full">
        <div className="w-[49.25rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="relative leading-[120%]">
              Three steps. Three minutes.
            </div>
          </div>
          <h1 className="m-0 relative text-[3.125rem] leading-[120%] font-semibold font-inherit mq450:text-[1.875rem] mq450:leading-[2.25rem] mq750:text-[2.5rem] mq750:leading-[3rem]">
            Everything should be this easy.
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full text-[1.75rem]">
        <StepItems
          image="/image.svg"
          title="Answer questions"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum"
        />
        <StepItems
          image="/image-1.svg"
          title="Select a quote"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. "
        />
        <StepItems
          image="/image-21.svg"
          title="Get registered"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. "
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
