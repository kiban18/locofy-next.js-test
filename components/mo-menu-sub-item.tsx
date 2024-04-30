import type { NextPage } from "next";

export type MoMenuSubItemType = {
  title?: string;
};

const MoMenuSubItem: NextPage<MoMenuSubItemType> = ({ title }) => {
  return (
    <button className="cursor-pointer [border:none] py-0 pr-0 pl-1 bg-[transparent] w-[170px] box-border flex flex-col items-start justify-start border-l-[1px] border-solid border-gray-500">
      <div className="self-stretch relative text-smi leading-[20.8px] font-kasprnet-noto-sans-kr-demilight-13 text-kasprnet-nero text-left flex items-center h-10 shrink-0">
        {title}
      </div>
    </button>
  );
};

export default MoMenuSubItem;
