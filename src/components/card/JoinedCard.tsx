import React from "react";
import VerifiedIcon from "@/components/icons/VerifiedIcon";

const JoinedCard = ({ daoName }: any) => {
  return (
    <div
      className={
        "w-[296px] rounded-3xl h-[282px] flex flex-col items-center p-[28px] pb-[22px] bg-[#F5EDE6]"
      }
    >
      <img
        src="https://s3.coinmarketcap.com/static/img/portraits/6310a2776eac787c457a1f09.png"
        alt=""
        className={"w-[96px] aspect-square rounded-full"}
      />
      <div className={"mt-[20px] flex flex-col items-center gap-[4px]"}>
        <div className={"flex items-center gap-[6px]"}>
          <p className={"text-[20px] font-medium text-black leading-[20px]"}>
            {daoName}
          </p>
          <VerifiedIcon className={"opacity-50 mix-blend-mode-darken"} />
        </div>
        <div className={"flex items-center gap-[12px]"}>
          <div className="flex -space-x-[8px]">
            <img
              className="w-[28px] aspect-square border-2 rounded-full border-[#F5EDE6]"
              src="/examplepp.png"
              alt=""
            />
            <img
              className="w-[28px] aspect-square border-2 rounded-full border-[#F5EDE6]"
              src="/examplepp.png"
              alt=""
            />
            <img
              className="w-[28px] aspect-square border-2 rounded-full border-[#F5EDE6]"
              src="/examplepp.png"
              alt=""
            />
          </div>
          <p
            className={
              "text-[15px] text-black opacity-50 mix-blend-mode-darken"
            }
          >
            20k members
          </p>
        </div>
      </div>
      <button
        className={
          "mt-auto border border-black/[5%] text-[17px] px-[20px] py-[8px] leading-[24px] rounded-full font-semibold"
        }
      >
        Joined
      </button>
    </div>
  );
};

export default JoinedCard;
