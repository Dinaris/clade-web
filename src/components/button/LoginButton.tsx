"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useAccount } from "wagmi";
import WorldcoinIcon from "@/components/icons/WorldcoinIcon";
import ConnectButton from "./ConnectButton";

const LoginButton = () => {
  const session = useSession();
  const { address } = useAccount();

  const isWCAuthenticated = session.status === "authenticated";

  return (
    <div className="flex gap-4 items-center">
      <div
        className={`${
          !address
            ? "p-2 bg-transparent cursor-pointer rounded-xl"
            : !isWCAuthenticated
              ? "p-2 bg-white cursor-pointer rounded-xl"
              : "p-2 bg-black cursor-pointer rounded-xl"
        }`}
        onClick={isWCAuthenticated ? () => signOut() : () => signIn()}
      >
        <WorldcoinIcon color={!address ? "#00000066" : !isWCAuthenticated ? "#000" : "#fff"} />
      </div>
      <ConnectButton />
    </div>
  );
};

export default LoginButton;
