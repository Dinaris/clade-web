import React from "react";
import LoginButton from "./button/LoginButton";

const Header = () => {
  return (
    <header className="h-32 flex items-center justify-between px-[48px]">
      <img src="/logo.svg" alt="logo" />
      <LoginButton />
    </header>
  );
};

export default Header;
