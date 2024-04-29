import type { NextPage } from "next";

const HeaderAccount: NextPage = () => {
  return (
    <div className="bg-kasprnet-catskill-white max-w-full flex flex-col items-center justify-start py-4 px-0 box-border self-stretch md:hidden">
      <div className="w-full flex flex-col items-start justify-start py-0 px-[15px] box-border max-w-[1300px]">
        <div className="self-stretch flex flex-row items-center justify-end">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
              <img className="w-3.5 relative h-3.5" alt="" src="/img.svg" />
              <div className="w-[44.6px] relative text-sm leading-[22.4px] font-kasprnet-noto-sans-kr-demilight-14 text-kasprnet-mine-shaft text-left flex items-center h-[22.4px] shrink-0">
                {" "}
                로그인
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
              <img
                className="w-[17.5px] relative h-3.5"
                alt=""
                src="/img1.svg"
              />
              <div className="w-[58px] relative text-sm leading-[22.4px] font-kasprnet-noto-sans-kr-demilight-14 text-kasprnet-mine-shaft text-left flex items-center h-[22.4px] shrink-0">
                {" "}
                회원가입
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAccount;
