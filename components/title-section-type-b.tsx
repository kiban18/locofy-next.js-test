import type { NextPage } from "next";

const TitleSectionTypeB: NextPage = () => {
  return (
    <section className="w-[1440px] max-w-full flex flex-col items-center justify-center bg-[url('/titlesectiontypeb@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-17xl text-kasprnet-nero font-text-large">
      <div className="self-stretch flex flex-col items-start justify-center py-[50px] px-0 gap-[10px] md:gap-[4px] md:pt-5 md:pb-5 md:box-border">
        <div className="self-stretch flex flex-col items-center justify-center">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit md:text-5xl">
            학회 소개
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-base font-kasprnet-noto-sans-kr-demilight-13">
          <div className="self-stretch relative tracking-[1.5px] font-medium md:text-xs">
            Korean Academic Society for Public Relations
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-10">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[1px]">
          <div className="bg-kasprnet-nero box-border h-10 hidden flex-col items-center justify-center py-0 px-[21px] border-[1px] border-solid border-kasprnet-alto">
            <img className="w-[22.5px] relative h-5" alt="" src="/img2.svg" />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-gray-300 w-[200px] flex flex-col items-center justify-start md:hidden">
            <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border">
              <div className="flex-1 relative text-base tracking-[-0.5px] leading-[16px] font-text-large text-gray-100 text-center">
                회장인사말
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-gray-300 w-[200px] flex flex-col items-center justify-start md:hidden">
            <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border">
              <div className="flex-1 relative text-base tracking-[-0.5px] leading-[16px] font-text-large text-gray-100 text-center">
                학회정관
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-gray-300 w-[200px] flex flex-col items-center justify-start md:hidden">
            <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border">
              <div className="flex-1 relative text-base tracking-[-0.5px] leading-[16px] font-text-large text-gray-100 text-center">
                선거관리규정
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-gray-300 w-[200px] flex flex-col items-center justify-start md:hidden">
            <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border">
              <div className="flex-1 relative text-base tracking-[-0.5px] leading-[16px] font-text-large text-gray-100 text-center">
                학회연혁
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-gray-300 w-[200px] flex flex-col items-center justify-start md:hidden">
            <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border">
              <div className="flex-1 relative text-base tracking-[-0.5px] leading-[16px] font-text-large text-gray-100 text-center">
                임원진
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-gray-300 w-[200px] flex flex-col items-center justify-start md:hidden">
            <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border">
              <a
                className="flex-1 relative text-base tracking-[-0.5px] leading-[16px] font-text-large text-gray-100 text-center [text-decoration:none]"
                href="https://kaspr.jams.or.kr/"
                target="_blank"
              >
                PR윤리헌장
              </a>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TitleSectionTypeB;
