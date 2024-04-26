import type { NextPage } from "next";

const TitleSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[11.968rem] px-[1.25rem] box-border gap-[1.5rem] bg-[url('/titlesection@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-center text-[2.5rem] text-margin-nextjsvercelapp-nero font-margin-nextjsvercelapp-roboto-regular-24 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq900:pt-[7.75rem] mq900:pb-[7.75rem] mq900:box-border mq800:pt-[2.5rem] mq800:pb-[2.5rem] mq800:box-border mq1125:pt-[7.75rem] mq1125:pb-[7.75rem] mq1125:box-border mq1300:pt-[7.75rem] mq1300:box-border">
      <div className="w-[24.125rem] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem] mq800:text-[2rem]">
          회장인사말
        </h1>
      </div>
      <h3 className="m-0 relative text-[1.375rem] font-medium font-inherit inline-block max-w-full mq450:text-[0.75rem]">
        사이버커뮤니케이션학회 23대 회장 정일권
      </h3>
    </section>
  );
};

export default TitleSection;
