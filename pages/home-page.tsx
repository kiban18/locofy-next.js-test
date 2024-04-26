import type { NextPage } from "next";
import Header from "../components/header";

const About: NextPage = () => {
  return (
    <div className="w-full relative bg-localhost-nero overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[47.562rem] box-border gap-[5.812rem] leading-[normal] tracking-[normal] mq450:gap-[1.438rem] mq700:gap-[2.813rem] mq950:gap-[2.875rem]">
      <Header />
      <section className="self-stretch flex flex-col items-center justify-start py-[11.968rem] px-[1.25rem] box-border gap-[1.5rem] bg-[url('/titlesection@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-[2.5rem] text-localhost-nero font-roboto mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq900:pt-[7.75rem] mq900:pb-[7.75rem] mq900:box-border mq700:pt-[2.5rem] mq700:pb-[2.5rem] mq700:box-border mq950:pt-[7.75rem] mq950:pb-[7.75rem] mq950:box-border tablet:pt-[7.75rem] tablet:box-border">
        <div className="w-[24.125rem] flex flex-row items-start justify-center max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem] mq950:text-[2rem]">
            회장인사말
          </h1>
        </div>
        <h3 className="m-0 relative text-[1.375rem] font-medium font-inherit inline-block max-w-full mq450:text-[0.75rem]">
          사이버커뮤니케이션학회 23대 회장 정일권
        </h3>
      </section>
    </div>
  );
};

export default About;
