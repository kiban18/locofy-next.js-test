import type { NextPage } from "next";
import MoButton from "../components/mo-button";
import MoMenuItemClose from "../components/mo-menu-item-close";
import MoMenuSubItem from "../components/mo-menu-sub-item";
import MoMenuItemOpen from "../components/mo-menu-item-open";

const MobileMenu: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start min-w-[22.5rem]">
      <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start">
        <div className="self-stretch bg-kasprnet-congress-blue flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem]">
          <div className="self-stretch h-[3.875rem] flex flex-row items-center justify-between py-[0rem] px-[1rem] box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-start justify-start max-w-[11.25rem]">
              <div className="w-[11.25rem] h-[1.581rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <img
                  className="w-[11.244rem] relative h-[1.581rem] overflow-hidden shrink-0"
                  alt=""
                  src="/logowhitesvg.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[3rem] relative h-[3rem]">
              <div className="absolute top-[1.988rem] right-[0.563rem] bg-kasprnet-nero w-[1.5rem] h-[0.125rem] [transform:_rotate(-45deg)] [transform-origin:0_0]" />
              <div className="absolute top-[2.075rem] right-[-0.5rem] bg-kasprnet-nero w-[1.5rem] h-[0.125rem] [transform:_rotate(-135deg)] [transform-origin:0_0]" />
            </button>
          </div>
          <div className="self-stretch bg-kasprnet-congress-blue flex flex-col items-start justify-start gap-[2rem]">
            <div className="self-stretch h-[2.625rem] flex flex-row items-start justify-center py-[0rem] px-[1rem] box-border">
              <MoButton title="회원가입" />
              <MoButton title="로그인" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.187rem]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemClose />
                <div className="w-[60rem] bg-darkslateblue hidden flex-row flex-wrap items-center justify-start py-[0.5rem] pr-[0rem] pl-[0.25rem] box-border">
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
                <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start py-[0.5rem] pr-[0rem] pl-[0.25rem]">
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
                <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start py-[0.5rem] pr-[0rem] pl-[0.25rem]">
                  <MoMenuSubItem title="공지사항" />
                  <MoMenuSubItem title="주요행사" />
                  <MoMenuSubItem title="공모안내" />
                  <MoMenuSubItem title="학회앨범" />
                  <MoMenuSubItem title="언론보도" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="학술지" />
                <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start py-[0.5rem] pr-[0rem] pl-[0.25rem]">
                  <MoMenuSubItem title="연구윤리규정" />
                  <MoMenuSubItem title="PR연구" />
                  <MoMenuSubItem title="AJPR" />
                  <MoMenuSubItem title="PR연구 온라인 논문투고 ⬈" />
                  <MoMenuSubItem title="AJPR Online submission ⬈" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="게시판" />
                <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start py-[0.5rem] pr-[0rem] pl-[0.25rem]">
                  <MoMenuSubItem title="회원동정" />
                  <MoMenuSubItem title="채용정보" />
                  <MoMenuSubItem title="외부공모 및 행사안내" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="회원 공간" />
                <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start py-[0.5rem] pr-[0rem] pl-[0.25rem]">
                  <MoMenuSubItem title="회원가입안내" />
                  <MoMenuSubItem title="회원가입" />
                  <MoMenuSubItem title="연회비 납무현황" />
                  <MoMenuSubItem title="증명서 발급" />
                  <MoMenuSubItem title="개인정보보호정책" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen title="자료실" />
                <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start py-[0.5rem] pr-[0rem] pl-[0.25rem]">
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
