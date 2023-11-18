"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import WorldcoinIcon from "@/components/icons/WorldcoinIcon";
import formatAddress from "@/utils/formatAddress";

const LoginButton = () => {
  const session = useSession()
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const isWCAuthenticated = session.status === "authenticated";

  console.log('session: ', session)
  return (
      <div className="flex gap-4 items-center">
          <div className={`${!address ? "p-2 bg-transparent cursor-pointer rounded-xl" : !isWCAuthenticated ? "p-2 bg-white cursor-pointer rounded-xl" : "p-2 bg-black cursor-pointer rounded-xl"}`} onClick={isWCAuthenticated ? () => signOut() : () => signIn()}>
              <WorldcoinIcon color={!address ? "#00000066" : !isWCAuthenticated ? "#000" : "#fff"}/>
          </div>
        <Button onClick={() => open()} variant="outline">
          {address ? formatAddress(address) : "Connect"}
        </Button>
      </div>

  );
};

export default LoginButton;
