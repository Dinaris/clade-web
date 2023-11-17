import React from "react";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";

import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav
      className={
        "h-full w-[256px] flex flex-col gap-[32px] pl-[48px] pt-[16px]"
      }
    >
      <Link href={"test"} className={"flex items-center gap-[16px]"}>
        <HomeIcon className={"w-[28px] h-[28px]"} />
        <p className={"text-xl"}>Home</p>
      </Link>
      <Link href={"test"} className={"flex items-center gap-[16px]"}>
        <HomeIcon className={"w-[28px] h-[28px]"} />
        <p className={"text-xl"}>Explore</p>
      </Link>
      <Link href={"test"} className={"flex items-center gap-[16px]"}>
        <HomeIcon className={"w-[28px] h-[28px]"} />
        <p className={"text-xl"}>Profile</p>
      </Link>
    </nav>
  );
};

export default Navigation;
