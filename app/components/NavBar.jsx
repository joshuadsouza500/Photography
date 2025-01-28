"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  //The motion value event shows when anything changes so when the scroll position changes it is notified.//
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // As we scroll down the number increases//
    if (latest < previous) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  const [data, setData] = useState("/");

  function handleClick(elem) {
    setData(elem);
  }

  return (
    <>
      {/*Big screen nav*/}

      <motion.nav
        className="flex items-center justify-between gap-4 border-b-[0.5px]   border-[#ffffff59] px-2 md:px-20 2xl:px-36 py-2  md:flex-row text-white   bg-[#e2e8f00a]  backdrop-blur-sm mx-auto // sticky top-0 z-20 inset-x-0"
        variants={{
          hidden: {
            y: -100,
          },
          visible: {
            y: 0,
          },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <Link href={"/"} className=" flex flex-col justify-center text-center">
          <h4 className="pl-2 font-semibold text-xl sm:text-2xl">John Doe</h4>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-2 md:gap-6">
            <li
              className={`inline-flex min-h-10 items-center ${
                data === "home" ? "text-redbg" : "hover:text-redbg  "
              }`}
              onClick={() => handleClick("home")}
            >
              <Link href={"/"} className=" md:text-xl font-medium opacity-85  ">
                Home
              </Link>
            </li>
            <li
              className={`inline-flex min-h-10 items-center ${
                data === "about" ? "text-redbg" : "hover:text-redbg  "
              }`}
              onClick={() => handleClick("about")}
            >
              <Link
                href={"/about"}
                className=" md:text-xl font-medium opacity-85 "
              >
                About
              </Link>
            </li>
            <li
              className={`inline-flex min-h-10 items-center ${
                data === "gallery" ? "text-redbg" : "hover:text-redbg  "
              }`}
              onClick={() => handleClick("gallery")}
            >
              <Link
                href={"/gallery"}
                className=" md:text-xl font-medium opacity-85 "
              >
                Gallery
              </Link>
            </li>
            <li
              className={`inline-flex min-h-10 items-center ${
                data === "contact" ? "text-redbg" : "hover:text-redbg  "
              }`}
              onClick={() => handleClick("contact")}
            >
              <Link
                href={"/contact"}
                className=" md:text-xl font-medium opacity-85 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="block md:hidden">
          <div className="dropdown dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content -mr-10 mt-12 z-[1]  shadow bg-slate-50 rounded-box w-52 text-background2 "
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li className="pt-6 pb-2">
                <ul className="grid grid-cols-2 gap-2 text-xs  cursor-pointer -mx-5 ">
                  <Link
                    className="hover:scale-[1.05]"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    Instagram
                  </Link>
                  <Link
                    className="hover:scale-[1.05]"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    Linkedin
                  </Link>
                  <Link
                    className="hover:scale-[1.05]"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    Facebook
                  </Link>
                  <Link
                    className="hover:scale-[1.05]"
                    target="_blank"
                    href="https://www.youtube.com/"
                  >
                    Youtube
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </motion.nav>
    </>
  );
}
