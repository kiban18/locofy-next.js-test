import type { NextPage } from "next";
import PriceCard from "./price-card";

const PricingSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[6rem] px-[2.5rem] box-border max-w-full text-left text-[1.125rem] text-margin-nextjsvercelapp-rhino font-margin-nextjsvercelapp-roboto-regular-24 mq800:py-[3.875rem] mq800:px-[2.188rem] mq800:box-border">
      <div className="w-full overflow-x-auto flex flex-row items-start justify-center p-[2.5rem] box-border gap-[2.5rem] max-w-[81.25rem] mq900:flex-col mq900:max-w-[1300] mq800:gap-[1.25rem] mq800:pt-[1.625rem] mq800:pb-[1.625rem] mq800:box-border mq1125:flex-col mq1300:max-w-[1300]">
        <PriceCard title="Business A" />
        <PriceCard title="Business B" />
        <PriceCard title="Business C" />
      </div>
    </section>
  );
};

export default PricingSection;
