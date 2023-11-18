import Image from "next/image";
import { Button } from "@/components/ui/button";
import SessionCard from "@/components/card/SessionCard";
import UpcomingCard from "@/components/card/UpcomingCard";
import JoinedCard from "@/components/card/JoinedCard";

export default function Home() {
  return (
    <div className={"w-full flex justify-center pt-[92px]"}>
      <div className="flex flex-col gap-[64px] max-w-[912px]">
        <div className={"flex flex-col gap-[16px] w-full"}>
          <p className={"pl-[28px] text-[32px] font-bold"}>Happening Now</p>
          <div className={"flex gap-[16px] flex-wrap overflow-hidden "}>
            <SessionCard
              color={"#00BBFF"}
              daoName={"DAO's name"}
              text={"Stake $1M DAI to earn yield from DAI Saving Rate"}
              sessionId="mowp0w"
            />
            <SessionCard
              color={"#FFB11F"}
              daoName={"DAO's name"}
              text={
                "Do you want to increase the lottery frequency? Multiple times a day?"
              }
              sessionId="aaaaaa"
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
        <div className={"flex flex-col gap-[16px] w-full"}>
          <p
            className={
              "pl-[44px] text-[24px] font-semibold text-black opacity-50 mix-blend-darken"
            }
          >
            Joined DAOs
          </p>
          <div className={"flex gap-[8px] flex-wrap "}>
            <JoinedCard daoName={"ENS"} />
            <JoinedCard daoName={"ENS"} />
            <JoinedCard daoName={"ENS"} />
            <JoinedCard daoName={"ENS"} />
            <JoinedCard daoName={"ENS"} />
          </div>
        </div>
      </div>
    </div>
  );
}
