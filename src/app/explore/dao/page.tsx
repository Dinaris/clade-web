"use client";
import TwitterIcon from "@/components/icons/TwitterIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import UpcomingCard from "@/components/card/UpcomingCard";
import CrosscircleIcon from "@/components/icons/CrosscircleIcon";

const Page = () => {
    return (
        <div className={"min-h-screen w-full max-w-[928px] px-[16px] mx-auto flex flex-col pt-[96px]"}>
            <div className={"flex gap-[20px] h-[144px]"}>
                <img src="/examplepp.png" alt="example" className={"w-[144px] h-[144px] rounded-full"}/>
                <div className={"h-full flex flex-col"}>
                    <div className={"pl-[28px]"}>
                        <p className={"text-[32px] font-bold"}>Family</p>
                        <p className={"text-[#756D66] mt-[8px] font-medium text-[17px]"}>Your favorite crypto wallet.</p>
                    </div>
                    <div className={"flex mt-auto items-center gap-[8px]"}>
                        <a href={"/"} className={"flex rounded-full  items-center gap-[12px] px-[28px] py-[14px] bg-white"}>
                            <TwitterIcon/> @family
                        </a>
                        <a href={"/"} className={"flex rounded-full  items-center gap-[12px] px-[28px] py-[14px] bg-white"}>
                            <LinkIcon/> family.co
                        </a>
                    </div>
                </div>
                <button className={"rounded-full bg-[#00BBFF] h-fit w-[144px] text-white font-semibold px-[28px] py-[14px] mt-auto ml-auto"}>Join</button>
            </div>
            <Tabs.Root className={"mt-[72px]"}>
                <Tabs.List className={"flex items-center gap-[8px] ml-[8px] font-medium"}>
                    <Tabs.Trigger
                        value="tab1"
                        className={
                            "px-[20px] py-[8px] text-black/50 data-[state=active]:bg-white data-[state=active]:text-black rounded-lg"
                        }
                    >
                        Proposal
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="tab2"
                        className={
                            "px-[20px] py-[8px] text-black/50 data-[state=active]:bg-white data-[state=active]:text-black rounded-lg"
                        }
                    >
                        Members
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1" className={"mt-[16px]"}>
                    <div className={"flex flex-col gap-[16px] w-full"}>
                        <div className={"flex gap-[16px] flex-wrap overflow-hidden "}>
                            <div className={"w-[440px] h-[288px] bg-[#F5EDE6] p-[28px] pb-[22px] rounded-3xl flex flex-col gap-[16px]"}>
                                <div className={"flex items-center gap-[12px]"}>
                                    <img className={"w-[32px] aspect-square"} src="/examplepp.png" alt=""/>
                                    <p className={"text-black/50 font-medium"}>benjitaylor.eth</p>
                                </div>
                                <p
                                    className={"h-[108px] text-black  text-[28px] font-semibold line-clamp-3 overflow-hidden whitespace-pre-wrap"}
                                    style={{ lineHeight: "36px" }}
                                >
                                    test etsasdas dkamsd kasmd kşas mdşasm dkşamsdk şmask şdmaşks dmakşsm
                                </p>
                                <div className={"flex items-center justify-between mt-auto w-full"}>
                                    <div>conditional</div>
                                    <button className={"bg-white text-black py-[8px] rounded-full  px-[20px]"}>Set Reminder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="tab2" className={"mt-[16px]"}>
                    <div className={"flex flex-col gap-[16px] w-full"}>
                        <div className={"flex gap-[16px] flex-wrap overflow-hidden "}>
                            <div className={"w-[440px] h-[84px] bg-[#F5EDE6] p-[28px] pb-[22px] rounded-3xl flex items-center gap-[16px]"}>
                                <img src="/examplepp.png" alt=""/>
                                <p>benjitaylor.eth</p>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export default Page