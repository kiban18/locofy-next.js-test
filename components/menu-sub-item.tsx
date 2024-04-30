import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MenuSubItemType = {
  title?: string;

  /** Style props */
  menuSubItemPadding?: CSSProperties["padding"];
  menuSubItemWidth?: CSSProperties["width"];
  menuSubItemHeight?: CSSProperties["height"];
  menuSubItemAlignSelf?: CSSProperties["alignSelf"];
  titleFontSize?: CSSProperties["fontSize"];
  titleLineHeight?: CSSProperties["lineHeight"];
  menuSubItemMinWidth?: CSSProperties["minWidth"];
};

const MenuSubItem: NextPage<MenuSubItemType> = ({
  title,
  menuSubItemPadding,
  menuSubItemWidth,
  menuSubItemHeight,
  menuSubItemAlignSelf,
  titleFontSize,
  titleLineHeight,
  menuSubItemMinWidth,
}) => {
  const menuSubItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: menuSubItemPadding,
      width: menuSubItemWidth,
      height: menuSubItemHeight,
      alignSelf: menuSubItemAlignSelf,
      minWidth: menuSubItemMinWidth,
    };
  }, [
    menuSubItemPadding,
    menuSubItemWidth,
    menuSubItemHeight,
    menuSubItemAlignSelf,
    menuSubItemMinWidth,
  ]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
    };
  }, [titleFontSize, titleLineHeight]);

  return (
    <button
      className="cursor-pointer [border:none] py-0 px-0.5 bg-[transparent] w-[150px] h-[50px] flex flex-col items-center justify-center box-border min-w-[100px] max-w-[150px] lg:w-[100px]"
      style={menuSubItemStyle}
    >
      <div
        className="self-stretch relative text-sm leading-[22.4px] font-kasprnet-noto-sans-kr-demilight-13 text-kasprnet-mine-shaft text-center"
        style={title1Style}
      >
        {title}
      </div>
    </button>
  );
};

export default MenuSubItem;
