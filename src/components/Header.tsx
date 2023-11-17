import React from "react";
import LoginButton from "./button/LoginButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blue-400">
      <div className="h-[96px]">Clade</div>
      <LoginButton />
    </header>
  );
};

export default Header;
