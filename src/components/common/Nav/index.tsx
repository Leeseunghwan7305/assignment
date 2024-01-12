import React from "react";
import logo from "../../../../public/navLogo.png";
import "./index.scss";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="nav">
      <Image src={logo} width={92} height={32} alt="logo" />
    </nav>
  );
};

export default Nav;
