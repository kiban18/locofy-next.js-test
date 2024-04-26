import type { NextPage } from "next";
import Header from "../components/header";
import TitleSection from "../components/title-section";
import PricingSection from "../components/pricing-section";

const About: NextPage = () => {
  return (
    <div className="w-full relative bg-margin-nextjsvercelapp-nero overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[47.562rem] box-border gap-[5.812rem] leading-[normal] tracking-[normal] mq450:gap-[1.438rem] mq800:gap-[2.813rem]">
      <Header />
      <TitleSection />
      <PricingSection />
    </div>
  );
};

export default About;
