import type { NextPage } from "next";
import MenuItem from "./menu-item";

const HeaderNavigation: NextPage = () => {
  return (
    <div className="bg-kasprnet-catskill-white max-w-full flex flex-col items-center justify-start self-stretch md:hidden">
      <div className="w-[1300px] flex flex-col items-start justify-start py-0 px-[15px] box-border min-w-[960px] max-w-[1300px] lg:w-full md:w-full">
        <div className="self-stretch flex flex-row items-center justify-between">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[325px] h-[70px] flex flex-col items-start justify-center min-w-[245px] max-w-[325px]">
            <div className="flex flex-col items-start justify-center">
              <img
                className="w-[245px] h-[34.5px] overflow-hidden shrink-0 max-w-[245px]"
                alt=""
                src="/logosvg.svg"
              />
            </div>
          </button>
          <div className="flex-1 flex flex-row items-center justify-between md:hidden md:w-0 md:min-w-0 md:max-w-0">
            <div className="flex-1 h-[70px] flex flex-col items-center justify-center">
              <MenuItem
                title="학회 소개"
                menuItemWidth="150px"
                linkHeight="70px"
                linkPadding="0px 2px"
                titleFontSize="18px"
                titleLineHeight="60px"
                menuItemPadding="0px 2px"
                menuItemMinWidth="100px"
              />
            </div>
            <div className="flex-1 h-[70px] flex flex-col items-center justify-center">
              <MenuItem
                title="학회 소식"
                menuItemWidth="150px"
                linkHeight="70px"
                linkPadding="0px 2px"
                titleFontSize="18px"
                titleLineHeight="60px"
                menuItemPadding="0px 2px"
                menuItemMinWidth="100px"
              />
            </div>
            <div className="flex-1 h-[70px] flex flex-col items-center justify-center">
              <MenuItem
                title="학술지"
                menuItemWidth="150px"
                linkHeight="70px"
                linkPadding="0px 2px"
                titleFontSize="18px"
                titleLineHeight="60px"
                menuItemPadding="0px 2px"
                menuItemMinWidth="100px"
              />
            </div>
            <div className="flex-1 h-[70px] flex flex-col items-center justify-center">
              <MenuItem
                title="게시판"
                menuItemWidth="150px"
                linkHeight="70px"
                linkPadding="0px 2px"
                titleFontSize="18px"
                titleLineHeight="60px"
                menuItemPadding="0px 2px"
                menuItemMinWidth="100px"
              />
            </div>
            <div className="flex-1 h-[70px] flex flex-col items-center justify-center">
              <MenuItem
                title="회원 공간"
                menuItemWidth="150px"
                linkHeight="70px"
                linkPadding="0px 2px"
                titleFontSize="18px"
                titleLineHeight="60px"
                menuItemPadding="0px 2px"
                menuItemMinWidth="100px"
              />
            </div>
            <div className="flex-1 h-[70px] flex flex-col items-center justify-center">
              <MenuItem
                title="자료실"
                menuItemWidth="150px"
                linkHeight="70px"
                linkPadding="0px 2px"
                titleFontSize="18px"
                titleLineHeight="60px"
                menuItemPadding="0px 2px"
                menuItemMinWidth="100px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
