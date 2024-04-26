import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PropertyType = {
  image3?: string;
  title?: string;
  description?: string;
  starsValue?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Property: NextPage<PropertyType> = ({
  image3,
  title,
  description,
  starsValue,
  propMinWidth,
}) => {
  const starsValueStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="w-[27.938rem] shrink-0 flex flex-col items-start justify-start gap-[1.187rem] max-w-full text-left text-[1rem] text-black font-font">
      <img
        className="self-stretch h-[16.438rem] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={image3}
      />
      <div className="relative text-[1.313rem] leading-[120%] font-semibold mq450:text-[1.063rem] mq450:leading-[1.25rem]">
        {title}
      </div>
      <div className="w-[20.563rem] relative leading-[1.5rem] inline-block max-w-full">
        {description}
      </div>
      <div className="flex flex-row items-start justify-start gap-[0.937rem]">
        <div className="h-[1.113rem] flex flex-row items-start justify-start gap-[0.343rem]">
          <img
            className="h-[1.081rem] w-[1.038rem] relative"
            loading="lazy"
            alt=""
            src="/starinactivebig.svg"
          />
          <img
            className="h-[1.081rem] w-[1.038rem] relative"
            alt=""
            src="/starinactivebig-1.svg"
          />
          <img
            className="h-[1.081rem] w-[1.038rem] relative"
            alt=""
            src="/starinactivebig-2.svg"
          />
          <img
            className="h-[1.081rem] w-[1.038rem] relative"
            alt=""
            src="/starinactivebig-3.svg"
          />
          <img
            className="h-[1.081rem] w-[1.038rem] relative"
            alt=""
            src="/starinactivebig-4.svg"
          />
        </div>
        <div
          className="relative leading-[120%] inline-block min-w-[2.125rem]"
          style={starsValueStyle}
        >
          {starsValue}
        </div>
      </div>
    </div>
  );
};

export default Property;
