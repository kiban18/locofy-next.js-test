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
          <HeaderNavigation />
          <NavigationPopup />
        </div>
      </header>
      <TitleSectionTypeA />
      <section className="self-stretch flex flex-col items-start justify-start py-[1.25rem] px-[0rem] text-center text-[1.875rem] text-kasprnet-black font-inter">
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
