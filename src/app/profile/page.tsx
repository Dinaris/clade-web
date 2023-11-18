"use client";
import TwitterIcon from "@/components/icons/TwitterIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import UpcomingCard from "@/components/card/UpcomingCard";
import CrosscircleIcon from "@/components/icons/CrosscircleIcon";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import JoinedCard from "@/components/card/JoinedCard";

const Page = () => {
  return (
      <div className={"min-h-screen w-full max-w-[928px]  mx-auto flex flex-col pt-[96px]"}>
        <div className={"flex gap-[20px] h-[144px]"}>
          <img src="/examplepp.png" alt="example" className={"w-[144px] h-[144px] rounded-full"}/>
          <div className={"flex flex-col gap-[20px]"}>
              <Select >
                  <SelectTrigger className="outline-none text-[32px] border-none bg-transparent font-medium">
                      <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className={"z-[999]"}>
                      <SelectItem value="test">
                          <p>idk asdasdasd </p>
                      </SelectItem> <SelectItem value="test2">
                      <p>idk asdasdasd </p>
                  </SelectItem>
                      <SelectItem value="test3">
                          <p>idk asdasdasd </p>
                      </SelectItem>
                  </SelectContent>
              </Select>
              <div className={"bg-white px-[28px] py-[14px] flex w-fit rounded-full items-center gap-[8px]"}>
                  <div className={"bg-green-400 rounded-full w-[12px] aspect-square"}/>
                  <p>4.25 dots</p>
              </div>
          </div>
        </div>
          <div className={"w-full flex flex-col gap-[32px] mt-[64px]"}>
              <p className={"text-[24px] leading-[32px] font-semibold text-black/50 pl-[28px]"}>Joined DAOs</p>
              <div className={"flex gap-[8px] flex-wrap "}>
                  <JoinedCard daoName={"ENS"} />
                  <JoinedCard daoName={"ENS"} />
                  <JoinedCard daoName={"ENS"} />
                  <JoinedCard daoName={"ENS"} />
                  <JoinedCard daoName={"ENS"} />
              </div>
          </div>
      </div>
  )
}

export default Page