import type { NextPage } from "next";
import Header from "../components/header";
import Hero from "../components/hero";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative bg-white1 overflow-hidden flex flex-col items-start justify-start p-[1.5rem] box-border gap-[6.25rem] leading-[normal] tracking-[normal] mq450:gap-[1.563rem] mq750:gap-[3.125rem]">
      <Header />
      <Hero />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
