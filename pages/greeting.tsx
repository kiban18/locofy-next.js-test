import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import HeaderMobile from "../components/header-mobile";
import HeaderAccount from "../components/header-account";
import HeaderNavigation from "../components/header-navigation";
import NavigationPopup from "../components/navigation-popup";
import TitleSectionTypeA from "../components/title-section-type-a";
import Footer from "../components/footer";

const Greeting: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] h-[57.275rem] overflow-y-auto flex flex-col items-start justify-start">
      <header className="self-stretch bg-kasprnet-nero flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <HeaderMobile />
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
      <section className="self-stretch flex flex-col items-start justify-start py-[1.25rem] px-[0rem] text-center text-[1.875rem] text-kasprnet-black font-text-large">
        <div className="self-stretch flex flex-col items-center justify-start">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[3rem] font-semibold font-inherit">
            회장인사말
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Greeting;
