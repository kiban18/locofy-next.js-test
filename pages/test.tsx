import type { NextPage } from "next";

const Test: NextPage = () => {
  return (
    <div className="w-full relative bg-tailwind-v332-white overflow-hidden flex flex-col items-center justify-start text-left text-[1.125rem] text-tailwind-v332-slate-600 font-margin-nextjsvercelapp-roboto-bold-15">
      <header className="self-stretch bg-tailwind-v332-white flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch h-[3.875rem] bg-tailwind-v332-white flex flex-row items-center justify-between py-[0rem] px-[1.25rem] box-border md:bg-tailwind-v332-white md:flex md:items-center md:justify-between md:gap-[0rem] md:min-w-[21.25rem]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start md:w-auto md:[align-self:unset]">
              <div className="flex flex-col items-start justify-center">
                <img
                  className="w-[10rem] h-[1.406rem] overflow-hidden shrink-0 max-w-[10rem]"
                  alt=""
                  src="/logomosvg.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[3rem] relative h-[3rem] md:flex">
              <div className="absolute top-[0.875rem] right-[1rem] bg-tailwind-v332-sky-900 w-[1.5rem] h-[0.125rem]" />
              <div className="absolute top-[1.438rem] right-[1rem] bg-tailwind-v332-sky-900 w-[1.5rem] h-[0.125rem]" />
              <div className="absolute top-[2rem] right-[1rem] bg-tailwind-v332-sky-900 w-[1.5rem] h-[0.125rem]" />
            </button>
          </div>
          <div className="self-stretch bg-tailwind-v332-slate-200 flex flex-col items-center justify-start py-[1rem] px-[0rem] md:hidden">
            <div className="w-full flex flex-col items-start justify-start py-[0rem] px-[0.937rem] box-border max-w-[81.25rem]">
              <div className="self-stretch flex flex-row items-center justify-end">
                <div className="flex flex-row items-center justify-start gap-[1rem]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
                    <img
                      className="w-[0.875rem] relative h-[0.875rem]"
                      alt=""
                      src="/img.svg"
                    />
                    <div className="w-[2.788rem] relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-left flex items-center h-[1.4rem] shrink-0">
                      {" "}
                      로그인
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
                    <img
                      className="w-[1.094rem] relative h-[0.875rem]"
                      alt=""
                      src="/img1.svg"
                    />
                    <div className="w-[3.625rem] relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-left flex items-center h-[1.4rem] shrink-0">
                      {" "}
                      회원가입
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-tailwind-v332-slate-200 flex flex-col items-center justify-start md:hidden">
            <div className="w-[81.25rem] flex flex-col items-start justify-start py-[0rem] px-[0.937rem] box-border min-w-[60rem] max-w-[81.25rem] lg:w-full md:w-full">
              <div className="self-stretch flex flex-row items-center justify-between">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[20.313rem] h-[4.375rem] flex flex-col items-start justify-center min-w-[15.313rem] max-w-[20.313rem]">
                  <div className="flex flex-col items-start justify-center">
                    <img
                      className="w-[15.313rem] h-[2.156rem] overflow-hidden shrink-0 max-w-[15.313rem]"
                      alt=""
                      src="/logosvg.svg"
                    />
                  </div>
                </button>
                <div className="flex-1 flex flex-row items-center justify-between md:hidden md:w-[0rem] md:min-w-[0rem] md:max-w-[0rem]">
                  <div className="flex-1 h-[4.375rem] flex flex-col items-center justify-center">
                    <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                      <div className="self-stretch h-[4.375rem] flex flex-col items-center justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="self-stretch relative text-[1.125rem] leading-[3.75rem] font-text-large text-tailwind-v332-black text-center">
                          학회 소개
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1 h-[4.375rem] flex flex-col items-center justify-center">
                    <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                      <div className="self-stretch h-[4.375rem] flex flex-col items-center justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="self-stretch relative text-[1.125rem] leading-[3.75rem] font-text-large text-tailwind-v332-black text-center">
                          학회 소식
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1 h-[4.375rem] flex flex-col items-center justify-center">
                    <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                      <div className="self-stretch h-[4.375rem] flex flex-col items-center justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="self-stretch relative text-[1.125rem] leading-[3.75rem] font-text-large text-tailwind-v332-black text-center">
                          학술지
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1 h-[4.375rem] flex flex-col items-center justify-center">
                    <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                      <div className="self-stretch h-[4.375rem] flex flex-col items-center justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="self-stretch relative text-[1.125rem] leading-[3.75rem] font-text-large text-tailwind-v332-black text-center">
                          게시판
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1 h-[4.375rem] flex flex-col items-center justify-center">
                    <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                      <div className="self-stretch h-[4.375rem] flex flex-col items-center justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="self-stretch relative text-[1.125rem] leading-[3.75rem] font-text-large text-tailwind-v332-black text-center">
                          회원 공간
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1 h-[4.375rem] flex flex-col items-center justify-center">
                    <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                      <div className="self-stretch h-[4.375rem] flex flex-col items-center justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="self-stretch relative text-[1.125rem] leading-[3.75rem] font-text-large text-tailwind-v332-black text-center">
                          자료실
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90rem] bg-tailwind-v332-white hidden flex-col items-start justify-start md:hidden">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="w-[81.25rem] flex flex-col items-start justify-start py-[0rem] px-[0.937rem] box-border min-w-[60rem] max-w-[81.25rem] lg:w-full">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[20.313rem] h-[4.375rem] flex flex-col items-start justify-center min-w-[15.313rem] max-w-[20.313rem]">
                    <div className="flex flex-col items-start justify-center">
                      <img
                        className="w-[15.313rem] h-[2.156rem] overflow-hidden shrink-0 max-w-[15.313rem]"
                        alt=""
                      />
                    </div>
                  </button>
                  <div className="flex-1 flex flex-row items-start justify-between">
                    <div className="flex-1 flex flex-col items-center justify-start lg:w-[6.25rem]">
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          회장인사말
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          학회정관
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          선거관리규정
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          학회연혁
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          임원진
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          PR윤리헌장
                        </div>
                      </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start lg:w-[6.25rem]">
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          공지사항
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          주요행사
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          공모안내
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          학회앨범
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          언론보도
                        </div>
                      </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start lg:w-[6.25rem]">
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          연구윤리규정
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          PR연구
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          AJPR
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          PR연구 온라인 논문투고 ⬈
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          AJPR Online submission ⬈
                        </div>
                      </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start lg:w-[6.25rem]">
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          회원동정
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          채용정보
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          외부공모 및 행사안내
                        </div>
                      </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start lg:w-[6.25rem]">
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          회원가입안내
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          회원가입
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          연회비 납부현황
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          증명서 발급
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          개인정보보호정책
                        </div>
                      </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start lg:w-[6.25rem]">
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          학술대회 자료집
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          세미나 자료집
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          영상 자료실
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0rem] px-[0.125rem] bg-[transparent] w-[9.375rem] h-[3.125rem] flex flex-col items-center justify-center box-border min-w-[6.25rem] max-w-[9.375rem] lg:w-[6.25rem]">
                        <div className="self-stretch relative text-[0.875rem] leading-[1.4rem] font-kasprnet-noto-sans-kr-demilight-13 text-tailwind-v332-gray-800 text-center">
                          사진 자료실
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-[90rem] flex flex-col items-center justify-center bg-[url('/titlesectiontypeb@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[2.25rem] text-tailwind-v332-white font-text-large">
        <div className="self-stretch flex flex-col items-start justify-center py-[3.125rem] px-[0rem] gap-[0.625rem] md:gap-[0.25rem] md:pt-[1.25rem] md:pb-[1.25rem] md:box-border">
          <div className="self-stretch flex flex-col items-center justify-center">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit md:text-[1.5rem]">
              학회 소개
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center text-[1rem] font-kasprnet-noto-sans-kr-demilight-13">
            <div className="self-stretch relative tracking-[1.5px] font-medium md:text-[0.75rem]">
              Korean Academic Society for Public Relations
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[2.5rem]">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[0.062rem]">
            <div className="bg-tailwind-v332-white box-border h-[2.5rem] hidden flex-col items-center justify-center py-[0rem] px-[1.312rem] border-[1px] border-solid border-kasprnet-alto">
              <img
                className="w-[1.406rem] relative h-[1.25rem]"
                alt=""
                src="/img2.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-tailwind-v332-white-75 w-[12.5rem] flex flex-col items-center justify-start md:hidden">
              <div className="self-stretch h-[2.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border">
                <div className="flex-1 relative text-[1rem] tracking-[-0.5px] leading-[1rem] font-text-large text-tailwind-v332-gray-800 text-center">
                  회장인사말
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-tailwind-v332-white-75 w-[12.5rem] flex flex-col items-center justify-start md:hidden">
              <div className="self-stretch h-[2.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border">
                <div className="flex-1 relative text-[1rem] tracking-[-0.5px] leading-[1rem] font-text-large text-tailwind-v332-gray-800 text-center">
                  학회정관
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-tailwind-v332-white-75 w-[12.5rem] flex flex-col items-center justify-start md:hidden">
              <div className="self-stretch h-[2.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border">
                <div className="flex-1 relative text-[1rem] tracking-[-0.5px] leading-[1rem] font-text-large text-tailwind-v332-gray-800 text-center">
                  선거관리규정
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-tailwind-v332-white-75 w-[12.5rem] flex flex-col items-center justify-start md:hidden">
              <div className="self-stretch h-[2.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border">
                <div className="flex-1 relative text-[1rem] tracking-[-0.5px] leading-[1rem] font-text-large text-tailwind-v332-gray-800 text-center">
                  학회연혁
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-tailwind-v332-white-75 w-[12.5rem] flex flex-col items-center justify-start md:hidden">
              <div className="self-stretch h-[2.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border">
                <div className="flex-1 relative text-[1rem] tracking-[-0.5px] leading-[1rem] font-text-large text-tailwind-v332-gray-800 text-center">
                  임원진
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-tailwind-v332-white-75 w-[12.5rem] flex flex-col items-center justify-start md:hidden">
              <div className="self-stretch h-[2.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border">
                <a
                  className="flex-1 relative text-[1rem] tracking-[-0.5px] leading-[1rem] font-text-large text-tailwind-v332-gray-800 text-center [text-decoration:none]"
                  href="https://kaspr.jams.or.kr/"
                  target="_blank"
                >
                  PR윤리헌장
                </a>
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-col items-center justify-start py-[6rem] px-[0rem]">
        <div className="w-full flex flex-row items-start justify-center p-[2.5rem] box-border gap-[2.5rem] max-w-[81.25rem]">
          <div className="flex-1 shadow-[0px_20px_20px_rgba(61,_65,_84,_0.15)] rounded-md bg-tailwind-v332-white h-[25rem] overflow-hidden flex flex-col items-start justify-start py-[3rem] px-[2.5rem] box-border relative gap-[1rem] min-w-[16.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start z-[0]">
              <b className="relative tracking-[-0.18px] leading-[1.688rem]">
                Business
              </b>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[0.125rem] z-[1] text-[1.75rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.006rem] relative flex items-center h-[2.063rem] shrink-0">
                  $
                </div>
                <b className="w-[9.55rem] relative text-[4rem] tracking-[-3.2px] flex items-center h-[4.688rem] shrink-0">
                  19.99
                </b>
              </div>
              <div className="w-[5.325rem] relative text-[1.5rem] leading-[2.25rem] text-tailwind-v332-slate-300 flex items-center h-[2.25rem] shrink-0">
                / month
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start z-[2] text-[1rem]">
              <b className="self-stretch relative leading-[1.5rem]">
                Perfect plan for professional designers and entrepreneur users.
              </b>
            </div>
            <div className="w-[10rem] shadow-[0px_5px_15px_rgba(250,_98,_98,_0.4)] rounded-md bg-tailwind-v332-red-600 h-[3.5rem] flex flex-row items-center justify-center pt-[1.031rem] px-[3.962rem] pb-[1.062rem] box-border z-[3] text-center text-[0.938rem] text-tailwind-v332-white">
              <b className="relative leading-[1.406rem]">Start</b>
            </div>
            <div className="w-[26.669rem] absolute !m-[0] top-[0rem] left-[0rem] bg-margin-nextjsvercelapp-cornflower-blue h-[0.313rem] hidden z-[4]" />
          </div>
          <div className="flex-1 shadow-[0px_20px_20px_rgba(61,_65,_84,_0.15)] rounded-md bg-tailwind-v332-white h-[25rem] overflow-hidden flex flex-col items-start justify-start py-[3rem] px-[2.5rem] box-border relative gap-[1rem] min-w-[16.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start z-[0]">
              <b className="relative tracking-[-0.18px] leading-[1.688rem]">
                Business
              </b>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[0.125rem] z-[1] text-[1.75rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.006rem] relative flex items-center h-[2.063rem] shrink-0">
                  $
                </div>
                <b className="w-[9.55rem] relative text-[4rem] tracking-[-3.2px] flex items-center h-[4.688rem] shrink-0">
                  19.99
                </b>
              </div>
              <div className="w-[5.325rem] relative text-[1.5rem] leading-[2.25rem] text-tailwind-v332-slate-300 flex items-center h-[2.25rem] shrink-0">
                / month
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start z-[2] text-[1rem]">
              <b className="self-stretch relative leading-[1.5rem]">
                Perfect plan for professional designers and entrepreneur users.
              </b>
            </div>
            <div className="w-[10rem] shadow-[0px_5px_15px_rgba(250,_98,_98,_0.4)] rounded-md bg-tailwind-v332-red-600 h-[3.5rem] flex flex-row items-center justify-center pt-[1.031rem] px-[3.962rem] pb-[1.062rem] box-border z-[3] text-center text-[0.938rem] text-tailwind-v332-white">
              <b className="relative leading-[1.406rem]">Start</b>
            </div>
            <div className="w-[26.669rem] absolute !m-[0] top-[0rem] left-[0rem] bg-margin-nextjsvercelapp-cornflower-blue h-[0.313rem] hidden z-[4]" />
          </div>
          <div className="flex-1 shadow-[0px_20px_20px_rgba(61,_65,_84,_0.15)] rounded-md bg-tailwind-v332-white h-[25rem] overflow-hidden flex flex-col items-start justify-start py-[3rem] px-[2.5rem] box-border relative gap-[1rem] min-w-[16.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start z-[0]">
              <b className="relative tracking-[-0.18px] leading-[1.688rem]">
                Business
              </b>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[0.125rem] z-[1] text-[1.75rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.006rem] relative flex items-center h-[2.063rem] shrink-0">
                  $
                </div>
                <b className="w-[9.55rem] relative text-[4rem] tracking-[-3.2px] flex items-center h-[4.688rem] shrink-0">
                  19.99
                </b>
              </div>
              <div className="w-[5.325rem] relative text-[1.5rem] leading-[2.25rem] text-tailwind-v332-slate-300 flex items-center h-[2.25rem] shrink-0">
                / month
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start z-[2] text-[1rem]">
              <b className="self-stretch relative leading-[1.5rem]">
                Perfect plan for professional designers and entrepreneur users.
              </b>
            </div>
            <div className="w-[10rem] shadow-[0px_5px_15px_rgba(250,_98,_98,_0.4)] rounded-md bg-tailwind-v332-red-600 h-[3.5rem] flex flex-row items-center justify-center pt-[1.031rem] px-[3.962rem] pb-[1.062rem] box-border z-[3] text-center text-[0.938rem] text-tailwind-v332-white">
              <b className="relative leading-[1.406rem]">Start</b>
            </div>
            <div className="w-[26.669rem] absolute !m-[0] top-[0rem] left-[0rem] bg-margin-nextjsvercelapp-cornflower-blue h-[0.313rem] hidden z-[4]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
