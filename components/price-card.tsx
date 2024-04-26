import type { NextPage } from "next";

export type PriceCardType = {
  title?: string;
};

const PriceCard: NextPage<PriceCardType> = ({ title }) => {
  return (
    <div className="h-[25rem] flex-1 shadow-[0px_20px_20px_rgba(61,_65,_84,_0.15)] rounded-md bg-margin-nextjsvercelapp-nero overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[3rem] px-[2.5rem] pb-[6.125rem] box-border relative gap-[1rem] min-w-[16.25rem] text-left text-[1.125rem] text-margin-nextjsvercelapp-rhino font-margin-nextjsvercelapp-roboto-regular-24 mq450:pt-[1.938rem] mq450:pb-[4rem] mq450:box-border mq900:flex-[unset] mq900:self-stretch mq1125:flex-[unset] mq1125:self-stretch">
      <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem]">
        <b className="relative tracking-[-0.18px] leading-[1.688rem] inline-block min-w-[4.563rem]">
          {title}
        </b>
      </div>
      <div className="flex flex-row flex-wrap items-end justify-start py-[0rem] pr-[2.562rem] pl-[0rem] gap-[0.125rem] text-[1.75rem]">
        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
          <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[1.006rem] mq450:text-[1.375rem]">
            $
          </h2>
          <b className="relative text-[4rem] tracking-[-3.2px] mq450:text-[2.375rem] mq800:text-[3.188rem]">
            19.99
          </b>
        </div>
        <h3 className="m-0 relative text-[1.5rem] leading-[2.25rem] font-normal font-inherit text-margin-nextjsvercelapp-gull-gray inline-block min-w-[5.313rem] mq450:text-[1.188rem] mq450:leading-[1.813rem]">
          / month
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-margin-nextjsvercelapp-slate-gray">
        <b className="self-stretch relative leading-[1.5rem]">
          Perfect plan for professional designers and entrepreneur users.
        </b>
      </div>
      <button className="cursor-pointer [border:none] pt-[1.012rem] px-[3.937rem] pb-[1.05rem] bg-margin-nextjsvercelapp-carnation shadow-[0px_5px_15px_rgba(250,_98,_98,_0.4)] rounded-md flex flex-row items-center justify-center hover:bg-crimson">
        <b className="relative text-[0.938rem] leading-[1.438rem] inline-block font-margin-nextjsvercelapp-roboto-regular-24 text-margin-nextjsvercelapp-nero text-center min-w-[2.125rem]">
          Start
        </b>
      </button>
      <div className="w-[26.669rem] h-[0.313rem] absolute !m-[0] top-[0rem] left-[0rem] bg-margin-nextjsvercelapp-cornflower-blue hidden z-[4]" />
    </div>
  );
};

export default PriceCard;
