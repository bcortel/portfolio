import clsx from "clsx";
import React from "react";

function Header() {
  return (
    <header
      className={
        "w-screen fixed top-0 text-white bg-gradient-to-b from-black font-medium uppercase"
      }
    >
      <div className={"container mx-auto flex justify-between"}>
        <div>
          <a href="#" className={"py-7 inline-block"}>
            Home
          </a>
        </div>
        <nav>
          <ul className={"flex -mr-7"}>
            <li>
              <a className={"p-7 inline-block"} href="">
                About
              </a>
            </li>
            <li>
              <a className={"p-7 inline-block"} href="">
                Skills
              </a>
            </li>
            <li>
              <a className={"p-7 inline-block"} href="">
                Projects
              </a>
            </li>
            <li>
              <a className={"p-7 inline-block "} href="">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
