import React from "react";

const SessionPage = ({ params }: any) => {
  const sessionId = params.sessionId;
  console.log("session Id", sessionId);
  return (
    <div
      className={
        "w-full h-screen flex gap-[16px] flex-col pt-[96px] pb-[32px] pl-[256px] pr-[40px]"
      }
    >
      <div className={"w-full flex flex-col gap-[4px] pl-[28px]"}>
        <div className={"flex items-center gap-[12px]"}>
          <div className={"relative w-[32px] h-[32px]"}>
            <img
              src="/examplepp.png"
              className={
                "absolute z-[10] rounded-full left-0 bottom-0 w-[24px] h-[24px] border border-1 border-[#FAF5F0]"
              }
            />
            <img
              src="/examplepp.png"
              className={
                "absolute rounded-full top-0 right-0 w-[20px] h-[20px] "
              }
            />
          </div>
          <div className={"flex items-center gap-1 text-[17px] font-medium"}>
            <p className={"text-[#9B9B9B]"}>Aave by</p>
            <p className={""}>gauntletgov.eth</p>
          </div>
        </div>
        <p className={"text-[32px] leading-[40px] font-semibold"}>
          Gauntlet Cap Recommendations for Polygon v3
        </p>
      </div>
      <div className="flex w-full h-full gap-[16px]">
        <iframe
          src={`https://192.168.226.76/${sessionId}`}
          allow="microphone"
          id="myIframe"
          className="rounded-2xl flex w-full h-full"
        ></iframe>
        <div className="w-[500px] p-0 h-full bg-[#F5EDE6] rounded-3xl flex flex-col text-center items-center justify-center overflow-hidden">
          <svg
            width="396"
            height="192"
            viewBox="0 0 396 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M170.751 13.5686C182.338 16.6734 193.703 23.6894 202.144 31.4752L202.347 31.6625C210.674 39.3979 216.103 47.8659 215.999 53.9998C219.753 47.241 226.044 39.8105 235.892 36.704L235.939 36.6893C241.839 34.8385 249.014 34.539 257.681 36.8614C286.32 44.5353 297.596 59.889 294.728 84.0581C291.523 116.284 267.143 163.407 190.145 188.869L189.707 189.015C188.161 189.539 185.597 190.407 182.863 190.327C181.705 190.292 180.546 190.12 179.422 189.818C178.297 189.517 177.207 189.087 176.187 188.538C173.78 187.241 171.993 185.206 170.915 183.98L170.61 183.635C116.658 123.085 91.5814 68.1179 104.919 38.6067C114.52 16.2414 142.113 5.89495 170.751 13.5686ZM48 96C48 102.627 33.9411 108 24 108C14.0589 108 12 102.627 12 96C12 89.3726 20.0589 84 30 84C39.9411 84 48 89.3726 48 96ZM354 102C363.941 102 378 107.373 378 114C378 120.627 369.941 126 360 126C350.059 126 342 120.627 342 114C342 107.373 344.059 102 354 102ZM60 111C60 102.716 68.0589 96 78 96C87.9411 96 96 102.716 96 111C96 119.284 90 126 84 126C78 126 60 119.284 60 111ZM402 114C392.059 114 384 107.284 384 99C384 90.7157 402 84 408 84C414 84 420 90.7157 420 99C420 107.284 411.941 114 402 114ZM-24 105C-24 109.971 -18.6274 114 -12 114C-5.37258 114 0 109.971 0 105C0 100.029 -4 96 -8 96C-12 96 -24 100.029 -24 105ZM312 96C305.373 96 300 100.029 300 105C300 109.971 312 114 316 114C320 114 324 109.971 324 105C324 100.029 318.627 96 312 96Z"
                fill="black"
                fill-opacity="0.1"
              />
            </g>
          </svg>
          <div className={"flex flex-col items-center mt-[48px]"}>
            <p
              className={
                "text-black mix-blend-mode-darken opacity-50 font-semibold"
              }
            >
              Dots will appear here
            </p>
            <p
              className={
                "max-w-[300px] mt-[8px] text-black mix-blend-mode-darken opacity-25 font-medium"
              }
            >
              You can rate the other speakers as they take their turn
            </p>
            <button
              className={
                "mt-auto border border-black/[5%] text-[17px] px-[20px] py-[8px] leading-[24px] rounded-full font-semibold mt-[16px]"
              }
            >
              See how it works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionPage;
