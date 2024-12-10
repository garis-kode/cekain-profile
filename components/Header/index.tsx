"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8">
        <div className="flex w-full items-center justify-between">
          <a href="/">
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={110}
              height={80}
              className="w-full"
            />
          </a>
          <div className="flex">
            <ThemeToggler />
            <Link
              href="https://app.cekain.com"
              className="rounded-lg bg-primary md:px-7.5 px-7 md:py-2.5 py-2 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
