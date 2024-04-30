import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MenuItemType = {
  title?: string;

  /** Style props */
  menuItemWidth?: CSSProperties["width"];
  linkHeight?: CSSProperties["height"];
  linkPadding?: CSSProperties["padding"];
  titleFontSize?: CSSProperties["fontSize"];
  titleLineHeight?: CSSProperties["lineHeight"];
  menuItemPadding?: CSSProperties["padding"];
  menuItemMinWidth?: CSSProperties["minWidth"];
};

const MenuItem: NextPage<MenuItemType> = ({
  title,
  menuItemWidth,
  linkHeight,
  linkPadding,
  titleFontSize,
  titleLineHeight,
  menuItemPadding,
  menuItemMinWidth,
}) => {
  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      width: menuItemWidth,
      padding: menuItemPadding,
      minWidth: menuItemMinWidth,
    };
  }, [menuItemWidth, menuItemPadding, menuItemMinWidth]);

  const linkStyle: CSSProperties = useMemo(() => {
    return {
      height: linkHeight,
      padding: linkPadding,
    };
  }, [linkHeight, linkPadding]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
    };
  }, [titleFontSize, titleLineHeight]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[150px] flex flex-col items-start justify-start min-w-[100px] max-w-[150px] lg:w-[100px]"
      style={menuItemStyle}
    >
      <div
        className="self-stretch h-[70px] flex flex-col items-center justify-start py-0 px-0.5 box-border"
        style={linkStyle}
      >
        <div
          className="self-stretch relative text-lg leading-[60px] font-text-large text-kasprnet-black text-center"
          style={titleStyle}
        >
          {title}
        </div>
      </div>
    </button>
  );
};

export default MenuItem;
