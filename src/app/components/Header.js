import React, { useState } from "react";
import Link from "next/link";

const Header = ({ pathname }) => {
  const [user, setUser] = useState("hi");
  return (
    <header>
      <Link href="/">
        <a className={pathname === "/" ? "is-active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={pathname === "/about" ? "is-active" : ""}>About</a>
      </Link>
    </header>
  );
};
export default Header;
