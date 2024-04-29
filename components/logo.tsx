import type { NextPage } from "next";

const Logo: NextPage = () => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[325px] h-[70px] flex flex-col items-start justify-center min-w-[245px] max-w-[325px]">
      <div className="flex flex-col items-start justify-center">
        <img
          className="w-[245px] h-[34.5px] overflow-hidden shrink-0 max-w-[245px]"
          alt=""
          src="/logosvg.svg"
        />
      </div>
    </button>
  );
};

export default Logo;
