import type { NextPage } from "next";

export type MoButtonType = {
  title?: string;
};

const MoButton: NextPage<MoButtonType> = ({ title }) => {
  return (
    <button className="cursor-pointer py-px px-0 bg-[transparent] w-[300px] box-border h-[42px] flex flex-col items-center justify-start max-w-[306px] border-[1px] border-solid border-gray-500">
      <div className="self-stretch relative text-sm leading-[40px] font-kasprnet-noto-sans-kr-demilight-13 text-kasprnet-nero text-center">
        {title}
      </div>
    </button>
  );
};

export default MoButton;
