"use client";
import JoinedCard from "@/components/card/JoinedCard";
import UpcomingCard from "@/components/card/UpcomingCard";
import PlusIcon from "@/components/icons/PlusIcon";
import * as Dialog from "@radix-ui/react-dialog";

const Page = () => {
  return (
    <div>
      <div className={"w-full flex justify-center pt-[92px]"}>
        <div className="flex flex-col gap-[64px] max-w-[912px]">
          <div className={"flex flex-col gap-[16px] w-full"}>
            <div className={"flex items-center justify-between"}>
              <p className={"pl-[28px] text-[32px] font-bold"}>Explore DAOs</p>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    className={
                      "mr-[32px] border border-2 border-black/5 rounded-full flex items-center px-[20px] py-[8px] gap-[8px]"
                    }
                  >
                    <PlusIcon />
                    <p>Add a DAO</p>
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-[#DBD3CC]/75 top-0 z-[3] data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="data-[state=open]:animate-contentShow w-[512px] min-h-[600px]  rounded-3xl fixed z-[99] top-[50%] left-[50%] ] translate-x-[-50%] translate-y-[-50%]  focus:outline-none bg-[#F5EDE6] px-[44px] py-[22px] flex flex-col items-center">
                    <Dialog.Close asChild>
                      <button className="fixed top-[20px] left-[20px] rotate-45 p-[14px] rounded-full bg-[#F0E7DF] hover:bg-[#E9E0D8] active:bg-[#E0D7CF]">
                        <PlusIcon className={"opacity-75 w-[20px] h-[20px]"} />
                      </button>
                    </Dialog.Close>
                    <p className={"text-[24px] font-semibold"}>Create a DAO</p>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
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
