import React from "react";
import LoginButton from "./button/LoginButton";

const Header = () => {
  return (
    <header className="flex min-h-[92px] items-center justify-between px-[48px]">
      <img src="/logo.svg" alt="logo" />
      <LoginButton />
    </header>
  );
};

export default Header;
