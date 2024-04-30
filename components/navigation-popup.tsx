import type { NextPage } from "next";
import MenuSubItem from "./menu-sub-item";

const NavigationPopup: NextPage = () => {
  return (
    <div className="bg-tailwind-v332-white max-w-full flex flex-col items-start justify-start self-stretch md:hidden">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="w-[1300px] flex flex-col items-start justify-start py-0 px-[15px] box-border min-w-[960px] max-w-[1300px] lg:w-full">
          <div className="self-stretch flex flex-row items-center justify-between">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[325px] h-[70px] flex flex-col items-start justify-center min-w-[245px] max-w-[325px]">
              <div className="flex flex-col items-start justify-center">
                <img
                  className="w-[245px] h-[34.5px] overflow-hidden shrink-0 max-w-[245px]"
                  alt=""
                />
              </div>
            </button>
            <div className="flex-1 flex flex-row items-start justify-between">
              <div className="flex-1 flex flex-col items-center justify-start lg:w-[100px]">
                <MenuSubItem
                  title="회장인사말"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="학회정관"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="선거관리규정"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="학회연혁"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="임원진"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="PR윤리헌장"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-start lg:w-[100px]">
                <MenuSubItem
                  title="공지사항"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="주요행사"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="공모안내"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="학회앨범"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="언론보도"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-start lg:w-[100px]">
                <MenuSubItem
                  title="연구윤리규정"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="PR연구"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="AJPR"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="PR연구 온라인 논문투고 ⬈"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="AJPR Online submission ⬈"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-start lg:w-[100px]">
                <MenuSubItem
                  title="회원동정"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="채용정보"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="외부공모 및 행사안내"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-start lg:w-[100px]">
                <MenuSubItem
                  title="회원가입안내"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="회원가입"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="연회비 납부현황"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="증명서 발급"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="개인정보보호정책"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-start lg:w-[100px]">
                <MenuSubItem
                  title="학술대회 자료집"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="세미나 자료집"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="영상 자료실"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
                <MenuSubItem
                  title="사진 자료실"
                  menuSubItemPadding="0px 2px"
                  menuSubItemWidth="150px"
                  menuSubItemHeight="50px"
                  menuSubItemAlignSelf="unset"
                  titleFontSize="14px"
                  titleLineHeight="22.4px"
                  menuSubItemMinWidth="100px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPopup;
