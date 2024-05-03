import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="w-[1920px] bg-tailwind-v332-zinc-50 max-w-full flex flex-col items-center justify-start pt-0 px-[84px] pb-10 box-border gap-[44px] text-left text-lg text-darkslategray font-kasprnet-noto-sans-kr-demilight-14 sm:pl-5 sm:pr-5 sm:box-border">
      <div className="w-full flex flex-row flex-wrap items-start justify-start max-w-[1300px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border gap-[14px] min-w-[320px] max-w-[500px] !mb-[40px]">
          <img
            className="w-[200px] relative h-[56.5px] object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <div className="self-stretch h-[54px] relative leading-[27px] inline-block">
            <p className="m-0">{`사이버 공간 커뮤니케이션에 대한 `}</p>
            <p className="m-0">학제적 연구에 중점을 두고 있습니다.</p>
          </div>
          <div className="w-[130px] relative h-[30px]">
            <a className="[text-decoration:none] absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden">
              <img
                className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[100px] w-[30px] h-[30px] overflow-hidden">
              <img
                className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[50px] w-[30px] h-[30px] overflow-hidden">
              <img
                className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
            </a>
          </div>
        </div>
        <div className="w-px relative box-border h-[157.9px] border-r-[1px] border-solid border-tailwind-v332-white md:hidden" />
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start text-base text-tailwind-v332-gray-900 sm:flex-col">
          <div className="w-[220px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border gap-[14px] sm:!mb-[40px]">
            <div className="self-stretch relative text-lg leading-[27px] font-medium">{`관련 사이트 `}</div>
            <div className="self-stretch h-[23px] relative inline-block">
              국민권익위원회
            </div>
            <div className="self-stretch relative">한국연구재단</div>
          </div>
          <div className="w-[220px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border gap-[14px] sm:!mb-[40px]">
            <div className="self-stretch relative text-lg leading-[27px] font-medium">
              회원 약관
            </div>
            <div className="self-stretch relative">이용약관</div>
            <div className="self-stretch relative">개인정보처리방침</div>
            <div className="self-stretch relative">이메일무단수집거부</div>
          </div>
          <div className="w-[220px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border gap-[14px]">
            <div className="self-stretch relative text-lg leading-[27px] font-medium">
              학회 주소
            </div>
            <div className="self-stretch relative">
              <p className="m-0">서울특별시 노원구 광운로 20</p>
              <p className="m-0">한울관 721호 (월계동) </p>
            </div>
            <div className="self-stretch relative">cybercom2013@naver.com</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start text-center text-sm font-margin-nextjsvercelapp-roboto-bold-15">
        <div className="relative leading-[21px]">
          Copyright © 2023 by cybercom. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
