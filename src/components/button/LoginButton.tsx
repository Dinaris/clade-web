"use client";

import React from "react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const session = useSession();
  return (
    <Button onClick={!session.data?.user ? () => signIn("auth0") : () => signOut()} variant="outline">
      {!session.data?.user ? "Login" : "Logout"}
    </Button>
  );
};

export default LoginButton;
