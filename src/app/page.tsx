import Image from "next/image";
import { Button } from "@/components/ui/button";
import SpaceCard from "@/components/card/SpaceCard";

export default function Home() {
  return (
    <main className="w-full max-w-[912px] mr-[256px] h-full pl-[16px] pt-0 flex flex-col">
      <div className={"flex flex-col gap-[16px] w-full"}>
        <p className={"pl-[28px] text-[32px] font-bold"}>Happening Now</p>
        <div className={"flex gap-[16px]"}>
          <SpaceCard
            color={"#00BBFF"}
            daoName={"DAO's name"}
            text={"Stake $1M DAI to earn yield from DAI Saving Rate"}
          />
          <SpaceCard
            color={"#FFB11F"}
            daoName={"DAO's name"}
            text={
              "Do you want to increase the lottery frequency? Multiple times a day?"
            }
          />
        </div>
      </div>
    </main>
  );
}
