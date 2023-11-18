"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import Image from "next/image";
import Link from "next/link";

const LoginButton = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const session = useSession()
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  console.log('session: ', session)
  return (
    <>
    <dialog ref={dialogRef} className="relative p-8 rounded-2xl border-slate-300">
      <div className="flex flex-col gap-6 mt-4">
        <Button onClick={() => {open(); dialogRef.current?.close()}} className="p-6 flex justify-start gap-4" variant="outline">
          <Image src="/images/walletconnect.png" alt="walletconnect" width={32} height={32} className="rounded-full" /> Connect with WalletConnect
        </Button>
        <Link href="/api/auth/signin" onClick={() => { dialogRef.current?.close(); }} className="p-6 flex justify-start gap-4">
          <Image src="/images/worldcoin.png" alt="worldcoin" width={32} height={32} className="rounded-full" />Sign in with World ID
        </Link>
      </div>
      <div onClick={() => dialogRef.current?.close()} className="absolute right-4 top-4 cursor-pointer">X</div>
      <Button onClick={() => dialogRef.current?.close()} className="mt-4">Close</Button>
    </dialog>
    <Button onClick={!session .data?.user ? () => dialogRef.current?.showModal() : () => signOut()} variant="outline">
      {!session.data?.user ? "Login" : "Logout"}
    </Button>

    </>
  );
};

export default LoginButton;
