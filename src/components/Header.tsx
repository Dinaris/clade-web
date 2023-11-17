import React from "react";
import LoginButton from "./button/LoginButton";

const Header = () => {
  return (
    <header className="flex justify-between w-full mx-auto px-6 lg:px-16 py-8">
      <div className="font-bold text-4xl">Clade</div>
      <LoginButton />
    </header>
  );
};

export default Header;
