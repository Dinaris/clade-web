import Image from "next/image";
import { Button } from "@/components/ui/button";
import SpaceCard from "@/components/card/SpaceCard";
import UpcomingCard from "@/components/card/UpcomingCard";

export default function Home() {
  return (
    <div className={"w-full flex"}>
      <div className="mx-auto pr-[256px] flex flex-col gap-[64px] max-w-[1200px]">
        <div className={"flex flex-col gap-[16px] w-full"}>
          <p className={"pl-[28px] text-[32px] font-bold"}>Happening Now</p>
          <div className={"flex gap-[16px] flex-wrap overflow-hidden "}>
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
        <div className={"flex flex-col gap-[16px] w-full"}>
          <p
            className={
              "pl-[44px] text-[24px] font-semibold text-black opacity-50 mix-blend-darken"
            }
          >
            Upcoming
          </p>
          <div className={"flex gap-[16px] flex-wrap overflow-hidden "}>
            <UpcomingCard
              daoName={"1inch Network"}
              text={
                "Swap $ARB Tokens to USDC and Bridge to the Ethereum Mainnet"
              }
            />
            <UpcomingCard
              daoName={"1inch Network"}
              text={
                "Swap $ARB Tokens to USDC and Bridge to the Ethereum Mainnet"
              }
            />
            <UpcomingCard
              daoName={"1inch Network"}
              text={
                "Swap $ARB Tokens to USDC and Bridge to the Ethereum Mainnet"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
