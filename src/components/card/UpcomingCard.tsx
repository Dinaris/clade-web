import React from "react";
import CalendarIcon from "@/components/icons/CalendarIcon";
import { UpcomingCard } from "@/types";

const UpcomingCard = ({ daoName, text }: UpcomingCard) => {
  return (
    <div
      className={
        "h-[288px] w-[448px] gap-[16px] flex flex-col  rounded-3xl p-[28px] pb-[22px] bg-[#F5EDE6]"
      }
    >
      <div className={"flex items-center gap-[12px] "}>
        <img
          src="https://s3.coinmarketcap.com/static/img/portraits/6310a2776eac787c457a1f09.png"
          alt=""
          className={"w-[32px] h-[32px] rounded-full object-cover"}
        />
        <p
          className={
            "text-[17px] text-black font-medium opacity-50 mix-blend-darken"
          }
        >
          {daoName}
        </p>
      </div>
      <p
        className={"text-[28px] font-semibold text-black line-clamp-3"}
        style={{ lineHeight: "36px" }}
      >
        {text}
      </p>
      <div className={"flex items-center justify-between mt-auto"}>
        <div
          className={"flex items-center gap-[8px] opacity-50 mix-blend-darken"}
        >
          <CalendarIcon />
          <p className={"text-[16px] font-medium text-black "}>Aug 20, 2021</p>
        </div>
        <button
          className={
            "text-[17px] font-semibold leading-[24px] bg-white/50 text-black py-[8px] px-[20px] rounded-full"
          }
        >
          Set reminder
        </button>
      </div>
    </div>
  );
};

export default UpcomingCard;
