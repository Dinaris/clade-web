import Image from "next/image";
import { Button } from "@/components/ui/button";
import SpaceCard from "@/components/card/SpaceCard";

export default function Home() {
  return (
    <div className={"w-full h-full overflow-y-scroll flex  "}>
      <div className="w-full flex flex-col gap-[16px] pl-[16px]">
        <div className={"flex flex-col gap-[16px] w-full"}>
          <p className={"pl-[28px] text-[32px] font-bold"}>Happening Now</p>
          <div
            className={"flex gap-[16px] flex-wrap overflow-hidden h-[288px]"}
          >
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
            <SpaceCard
              color={"#00BBFF"}
              daoName={"DAO's name"}
              text={"Stake $1M DAI to earn yield from DAI Saving Rate"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
