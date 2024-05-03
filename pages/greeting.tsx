import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import HeaderAccount from "../components/header-account";
import HeaderNavigation from "../components/header-navigation";
import NavigationPopup from "../components/navigation-popup";
import TitleSectionTypeA from "../components/title-section-type-a";

const Greeting: NextPage = () => {
  return (
    <div className="w-full relative bg-tailwind-v332-white h-[57.275rem] overflow-y-auto flex flex-col items-start justify-start">
      <header className="self-stretch bg-tailwind-v332-white flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch h-[3.875rem] bg-tailwind-v332-white flex flex-row items-center justify-between py-[0rem] px-[1.25rem] box-border md:bg-tailwind-v332-white md:flex md:items-center md:justify-between md:gap-[0rem] md:min-w-[21.25rem]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start md:w-auto md:[align-self:unset]">
              <div className="flex flex-col items-start justify-center">
                <img
                  className="w-[10rem] h-[1.406rem] overflow-hidden shrink-0 max-w-[10rem]"
                  alt=""
                  src="/logomosvg.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[3rem] relative h-[3rem] md:flex">
              <div className="absolute top-[0.875rem] right-[1rem] bg-tailwind-v332-sky-900 w-[1.5rem] h-[0.125rem]" />
              <div className="absolute top-[1.438rem] right-[1rem] bg-tailwind-v332-sky-900 w-[1.5rem] h-[0.125rem]" />
              <div className="absolute top-[2rem] right-[1rem] bg-tailwind-v332-sky-900 w-[1.5rem] h-[0.125rem]" />
            </button>
          </div>
          <HeaderAccount />
          <HeaderNavigation
            containerWidth="81.25rem"
            containerPadding="0rem 0.937rem"
            containerMinWidth="60rem"
            logoWidth="20.313rem"
            logoHeight="4.375rem"
            logoMinWidth="15.313rem"
            logosvgIconWidth="15.313rem"
            logosvgIconHeight="2.156rem"
            menu1Height="4.375rem"
            menu2Height="4.375rem"
            menu3Height="4.375rem"
            menu4Height="4.375rem"
            menu5Height="4.375rem"
            menu6Height="4.375rem"
          />
          <NavigationPopup />
        </div>
      </header>
      <TitleSectionTypeA />
      <section className="self-stretch flex flex-col items-start justify-start py-[1.25rem] px-[0rem] text-center text-[1.875rem] text-tailwind-v332-black font-text-large">
        <div className="self-stretch flex flex-col items-center justify-start">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[3rem] font-semibold font-inherit">
            회장인사말
          </h1>
        </div>
      </section>
      <footer className="self-stretch bg-tailwind-v332-white flex flex-col items-center justify-start pt-[2.062rem] px-[0rem] pb-[3rem] text-center text-[1.875rem] text-tailwind-v332-black font-text-large border-t-[1px] border-solid border-tailwind-v332-neutral-300">
        <div className="self-stretch flex flex-col items-center justify-start">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[3rem] font-semibold font-inherit">
            FOOTER
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Greeting;
