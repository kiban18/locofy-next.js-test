import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="bg-kasprnet-nero box-border max-w-full flex flex-col items-center justify-start pt-[33px] px-0 pb-12 text-center text-11xl text-kasprnet-black font-inter self-stretch border-t-[1px] border-solid border-kasprnet-alto">
      <div className="self-stretch flex flex-col items-center justify-start">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[48px] font-semibold font-inherit">
          FOOTER
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
