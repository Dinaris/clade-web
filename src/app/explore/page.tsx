import JoinedCard from "@/components/card/JoinedCard";
import UpcomingCard from "@/components/card/UpcomingCard";
import PlusIcon from "@/components/icons/PlusIcon";

const Page = () => {
  return (
    <div>
      <div className={"w-full flex justify-center pt-[92px]"}>
        <div className="flex flex-col gap-[64px] max-w-[912px]">
          <div className={"flex flex-col gap-[16px] w-full"}>
            <div className={"flex items-center justify-between"}>
              <p className={"pl-[28px] text-[32px] font-bold"}>Explore DAOs</p>
              <button
                className={
                  "mr-[32px] border border-2 border-black/5 rounded-full flex items-center px-[20px] py-[8px] gap-[8px]"
                }
              >
                <PlusIcon />
                <p>Add a DAO</p>
              </button>
            </div>
            <div className={"flex gap-[8px] flex-wrap "}>
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
              <JoinedCard daoName={"ENS"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
