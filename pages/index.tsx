import type { NextPage } from "next";
import Header from "../components/header";
import TitleSection from "../components/title-section";

const About: NextPage = () => {
  return (
    <div className="w-full relative bg-localhost-nero overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[47.562rem] box-border gap-[5.812rem] leading-[normal] tracking-[normal] mq450:gap-[1.438rem] mq700:gap-[2.813rem] mq950:gap-[2.875rem]">
      <Header />
      <TitleSection />
    </div>
  );
};

export default About;
