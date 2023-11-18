import React from "react";
import LoginButton from "./button/LoginButton";

const Header = () => {
  return (
    <header className="flex z-[999] w-full min-h-[92px] items-center justify-between px-[48px] fixed top-0 left-0 bg-[#FAF5F0]">
      <img src="/logo.svg" alt="logo" />
      <LoginButton />
    </header>
  );
};

export default Header;
