import type { NextPage } from "next";
import MoButton from "./mo-button";
import MoMenuItemClose from "./mo-menu-item-close";
import MoMenuSubItem from "./mo-menu-sub-item";
import MoMenuItemOpen from "./mo-menu-item-open";

const MobileMenu: NextPage = () => {
  return (
    <div className="w-[960px] bg-tailwind-v332-white max-w-full overflow-y-auto flex flex-col items-start justify-start min-w-[360px]">
      <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start">
        <div className="self-stretch bg-tailwind-v332-sky-900 flex flex-col items-start justify-start pt-0 px-0 pb-5">
          <div className="self-stretch h-[62px] flex flex-row items-center justify-between py-0 px-4 box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-start justify-start max-w-[180px]">
              <div className="w-[180px] h-[25.3px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <img
                  className="w-[179.9px] relative h-[25.3px] overflow-hidden shrink-0"
                  alt=""
                  src="/logowhitesvg.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-12 relative h-12">
              <div className="absolute top-[31.8px] right-[9px] bg-tailwind-v332-white w-6 h-0.5 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
              <div className="absolute top-[33.2px] right-[-8px] bg-tailwind-v332-white w-6 h-0.5 [transform:_rotate(-135deg)] [transform-origin:0_0]" />
            </button>
          </div>
          <div className="self-stretch bg-tailwind-v332-sky-900 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch h-[42px] flex flex-row items-start justify-center py-0 px-4 box-border">
              <MoButton title="회원가입" />
              <MoButton title="로그인" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemClose />
                <div className="w-[960px] bg-darkslateblue hidden flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1 box-border">
                  <MoMenuSubItem title="회장인사말" />
                  <MoMenuSubItem title="학회정관" />
                  <MoMenuSubItem title="선거관리규정" />
                  <MoMenuSubItem title="학회연혁" />
                  <MoMenuSubItem title="임원진" />
                  <MoMenuSubItem title="PR윤리헌장" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="학회 소개" />
                <div className="self-stretch bg-tailwind-v332-sky-700 flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem title="회장인사말" />
                  <MoMenuSubItem title="학회정관" />
                  <MoMenuSubItem title="선거관리규정" />
                  <MoMenuSubItem title="학회연혁" />
                  <MoMenuSubItem title="임원진" />
                  <MoMenuSubItem title="PR윤리헌장" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="학회 소식" />
                <div className="self-stretch bg-tailwind-v332-sky-700 flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem title="공지사항" />
                  <MoMenuSubItem title="주요행사" />
                  <MoMenuSubItem title="공모안내" />
                  <MoMenuSubItem title="학회앨범" />
                  <MoMenuSubItem title="언론보도" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="학술지" />
                <div className="self-stretch bg-tailwind-v332-sky-700 flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem title="연구윤리규정" />
                  <MoMenuSubItem title="PR연구" />
                  <MoMenuSubItem title="AJPR" />
                  <MoMenuSubItem title="PR연구 온라인 논문투고 ⬈" />
                  <MoMenuSubItem title="AJPR Online submission ⬈" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="게시판" />
                <div className="self-stretch bg-tailwind-v332-sky-700 flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem title="회원동정" />
                  <MoMenuSubItem title="채용정보" />
                  <MoMenuSubItem title="외부공모 및 행사안내" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="회원 공간" />
                <div className="self-stretch bg-tailwind-v332-sky-700 flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem title="회원가입안내" />
                  <MoMenuSubItem title="회원가입" />
                  <MoMenuSubItem title="연회비 납무현황" />
                  <MoMenuSubItem title="증명서 발급" />
                  <MoMenuSubItem title="개인정보보호정책" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="자료실" />
                <div className="self-stretch bg-tailwind-v332-sky-700 flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem title="학술대회 자료집" />
                  <MoMenuSubItem title="세미나 자료집" />
                  <MoMenuSubItem title="영상 자료실" />
                  <MoMenuSubItem title="사진 자료실" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
