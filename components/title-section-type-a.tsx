import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const TitleSectionTypeA: NextPage = () => {
  return (
    <section className="max-w-full flex flex-col items-center justify-center bg-[url('/titlesectiontypea1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-17xl text-tailwind-v332-white font-text-large self-stretch">
      <div className="self-stretch flex flex-col items-start justify-center py-[50px] px-0 gap-[10px] md:gap-[4px] md:pt-5 md:pb-5 md:box-border">
        <div className="self-stretch flex flex-col items-center justify-center">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit md:text-5xl">
            학회 소개
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-base font-kasprnet-noto-sans-kr-demilight-14">
          <div className="self-stretch relative tracking-[1.5px] font-medium md:text-xs">
            Korean Academic Society for Public Relations
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-2.5">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="self-stretch bg-tailwind-v332-white hidden flex-col items-center justify-center py-0 px-[21px] border-[1px] border-solid border-kasprnet-alto">
            <img className="w-[22.5px] relative h-5" alt="" src="/img2.svg" />
          </div>
          <div className="w-80 flex flex-col items-center justify-center">
            <Form.Select className="self-stretch font-text-large text-base text-tailwind-v332-gray-800 md:hidden">
              <option value="학회 소개">학회 소개</option>
              <option value="학회 소식">학회 소식</option>
              <option value="학술지">학술지</option>
              <option value="게시판">게시판</option>
              <option value="회원 공간">회원 공간</option>
              <option value="자료실">자료실</option>
            </Form.Select>
          </div>
          <div className="w-80 flex flex-col items-center justify-center">
            <Form.Select className="self-stretch font-text-large text-base text-tailwind-v332-gray-800 md:hidden">
              <option value="회장인사말">회장인사말</option>
              <option value="학회정관">학회정관</option>
              <option value="선거관리 규정">선거관리 규정</option>
              <option value="학회연혁">학회연혁</option>
              <option value="임원진">임원진</option>
              <option value="PR윤리헌장">PR윤리헌장</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSectionTypeA;
