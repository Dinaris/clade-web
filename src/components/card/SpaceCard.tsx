import React from "react";
import SoundIcon from "../icons/SoundIcon";
import { Button } from "../ui/button";
import { SpaceCard } from "@/types";

const SpaceCard = ({ title, daoName }: SpaceCard) => {
  return (
    <div className="flex flex-col gap-4 bg-slate-100 rounded-2xl p-8 w-full md:max-w-[512px]">
      <div className="flex items-center gap-2 text-slate-400">
        <SoundIcon /> {daoName}
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex flex-wrap items-center justify-between mt-8">
        <div className="flex">
          <div className="w-8 h-8 rounded-full bg-orange-500 -ml-2 border-2 border-slate-100" />
          <div className="w-8 h-8 rounded-full bg-red-500 -ml-2 border-2 border-slate-100" />
          <div className="w-8 h-8 rounded-full bg-blue-500 -ml-2 border-2 border-slate-100" />
        </div>
        <Button>Start Listening</Button>
      </div>
    </div>
  );
};

export default SpaceCard;
