import type { NextPage } from "next";

export type StepItemsType = {
  image?: string;
  title?: string;
  description?: string;
};

const StepItems: NextPage<StepItemsType> = ({ image, title, description }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem] min-w-[21.563rem] max-w-full text-left text-[1.75rem] text-black font-font mq450:min-w-full">
      <img
        className="w-[4.688rem] h-[4.688rem] relative"
        loading="lazy"
        alt=""
        src={image}
      />
      <h2 className="m-0 relative text-inherit leading-[2.125rem] font-semibold font-inherit mq450:text-[1.375rem] mq450:leading-[1.688rem]">
        {title}
      </h2>
      <div className="w-[20.563rem] relative text-[1rem] leading-[1.5rem] inline-block max-w-full">
        {description}
      </div>
    </div>
  );
};

export default StepItems;
