import React from "react";
import SoundIcon from "../icons/SoundIcon";
import { SpaceCard } from "@/types";

const SpaceCard = ({ daoName, color, text }: SpaceCard) => {
  return (
    <div
      className={
        "h-[288px] w-[448px] gap-[16px] flex flex-col rounded-3xl p-[28px] pb-[22px] "
      }
      style={{ backgroundColor: color }}
    >
      <div
        className={
          "flex items-center gap-[12px] opacity-75 mix-blend-plus-lighter"
        }
      >
        <SoundIcon className={"mix-blend-plus-lighter opacity-75"} />
        <p
          className={
            "text-[17px] text-white opacity-75 mix-blend-plus-lighter opacity-75 font-medium"
          }
        >
          {daoName}
        </p>
      </div>
      <p
        className={"text-[28px] font-semibold text-white line-clamp-3"}
        style={{ lineHeight: "36px" }}
      >
        {text}
      </p>
      <div className={"flex items-center justify-between mt-auto"}>
        <div className={"flex items-center gap-[12px]"}>
          <div className="flex -space-x-[8px]">
            <img
              className="w-[28px] aspect-square border-2 rounded-full"
              style={{ borderColor: color }}
              src="/examplepp.png"
              alt=""
            />
            <img
              className="w-[28px] aspect-square border-2 rounded-full"
              style={{ borderColor: color }}
              src="/examplepp.png"
              alt=""
            />
            <img
              className="w-[28px] aspect-square border-2 rounded-full"
              style={{ borderColor: color }}
              src="/examplepp.png"
              alt=""
            />
          </div>
          <span className={"mix-blend-plus-lighter opacity-75"}>
            <p
              className={
                "text-[15px] font-medium text-white opacity-75 mix-blend-plus-lighter"
              }
            >
              832 listening
            </p>
          </span>
        </div>
        <button
          className={
            "text-[17px] font-semibold leading-[24px] bg-white/25  text-white py-[8px] px-[20px] rounded-full"
          }
        >
          Start Listening
        </button>
      </div>
    </div>
  );
};

export default SpaceCard;
