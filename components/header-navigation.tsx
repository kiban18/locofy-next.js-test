import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import MenuItem from "./menu-item";

export type HeaderNavigationType = {
  /** Style props */
  containerWidth?: CSSProperties["width"];
  containerPadding?: CSSProperties["padding"];
  containerMinWidth?: CSSProperties["minWidth"];
  logoWidth?: CSSProperties["width"];
  logoHeight?: CSSProperties["height"];
  logoMinWidth?: CSSProperties["minWidth"];
  logosvgIconWidth?: CSSProperties["width"];
  logosvgIconHeight?: CSSProperties["height"];
  menu1Height?: CSSProperties["height"];
  menu2Height?: CSSProperties["height"];
  menu3Height?: CSSProperties["height"];
  menu4Height?: CSSProperties["height"];
  menu5Height?: CSSProperties["height"];
  menu6Height?: CSSProperties["height"];
};

const HeaderNavigation: NextPage<HeaderNavigationType> = ({
  containerWidth,
  containerPadding,
  containerMinWidth,
  logoWidth,
  logoHeight,
  logoMinWidth,
  logosvgIconWidth,
  logosvgIconHeight,
  menu1Height,
  menu2Height,
  menu3Height,
  menu4Height,
  menu5Height,
  menu6Height,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding,
      minWidth: containerMinWidth,
    };
  }, [containerWidth, containerPadding, containerMinWidth]);

  const logoStyle: CSSProperties = useMemo(() => {
    return {
      width: logoWidth,
      height: logoHeight,
      minWidth: logoMinWidth,
    };
  }, [logoWidth, logoHeight, logoMinWidth]);

  const logosvgIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logosvgIconWidth,
      height: logosvgIconHeight,
    };
  }, [logosvgIconWidth, logosvgIconHeight]);

  const menu1Style: CSSProperties = useMemo(() => {
    return {
      height: menu1Height,
    };
  }, [menu1Height]);

  const menu2Style: CSSProperties = useMemo(() => {
    return {
      height: menu2Height,
    };
  }, [menu2Height]);

  const menu3Style: CSSProperties = useMemo(() => {
    return {
      height: menu3Height,
    };
  }, [menu3Height]);

  const menu4Style: CSSProperties = useMemo(() => {
    return {
      height: menu4Height,
    };
  }, [menu4Height]);

  const menu5Style: CSSProperties = useMemo(() => {
    return {
      height: menu5Height,
    };
  }, [menu5Height]);

  const menu6Style: CSSProperties = useMemo(() => {
    return {
      height: menu6Height,
    };
  }, [menu6Height]);

  return (
    <div className="bg-tailwind-v332-slate-200 max-w-full flex flex-col items-center justify-start self-stretch md:hidden">
      <div
        className="w-[1300px] flex flex-col items-start justify-start py-0 px-[15px] box-border min-w-[960px] max-w-[1300px] lg:w-full md:w-full"
        style={containerStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[325px] h-[70px] flex flex-col items-start justify-center min-w-[245px] max-w-[325px]"
            style={logoStyle}
          >
            <div className="flex flex-col items-start justify-center">
              <img
                className="w-[245px] h-[34.5px] overflow-hidden shrink-0 max-w-[245px]"
                alt=""
                src="/logosvg.svg"
                style={logosvgIconStyle}
              />
            </div>
          </button>
          <div className="flex-1 flex flex-row items-center justify-between md:hidden md:w-0 md:min-w-0 md:max-w-0">
            <div
              className="flex-1 h-[70px] flex flex-col items-center justify-center"
              style={menu1Style}
            >
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
            <div
              className="flex-1 h-[70px] flex flex-col items-center justify-center"
              style={menu2Style}
            >
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
            <div
              className="flex-1 h-[70px] flex flex-col items-center justify-center"
              style={menu3Style}
            >
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
            <div
              className="flex-1 h-[70px] flex flex-col items-center justify-center"
              style={menu4Style}
            >
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
            <div
              className="flex-1 h-[70px] flex flex-col items-center justify-center"
              style={menu5Style}
            >
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
            <div
              className="flex-1 h-[70px] flex flex-col items-center justify-center"
              style={menu6Style}
            >
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
