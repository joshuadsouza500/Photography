import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[url('/assets/camera.jpg')] bg-cover bg-no-repeat bg-center m-1 rounded-xl">
      <div className="inset-0 bg-background1 bg-opacity-80 h-full">
        <div className=" font-josefin pt-4 pb-1 flex justify-between px-6 md:px-16 lg:px-36 items-center ">
          <div>
            <ul
              tabIndex={0}
              className="flex flex-col gap-1 text-white text-opacity-80 font-light md:font-medium py-2"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-flow-col gap-4 cursor-pointer">
            <Link href="https://www.instagram.com/ufc/" target="_blank">
              <Image
                alt="instagram icon"
                src="/assets/instagram.svg"
                width={28}
                height={28}
              />
            </Link>
            <Link href="https://www.facebook.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 256 256"
              >
                <path
                  fill="#f5f2f2"
                  strokeMiterlimit={10}
                  d="M209.92 20.48H46.08c-14.131 0-25.6 11.469-25.6 25.6v163.84c0 14.131 11.469 25.6 25.6 25.6h163.84c14.131 0 25.6-11.469 25.6-25.6V46.08c0-14.131-11.469-25.6-25.6-25.6zM87.04 102.4v97.28H56.32V102.4zM56.32 74.086c0-7.168 6.144-12.646 15.36-12.646s15.002 5.478 15.36 12.646c0 7.168-5.734 12.954-15.36 12.954-9.216 0-15.36-5.786-15.36-12.954zM199.68 199.68h-30.72v-51.2c0-10.24-5.12-20.48-17.92-20.685h-.41c-12.39 0-17.51 10.547-17.51 20.685v51.2H102.4V102.4h30.72v13.107s9.882-13.107 29.747-13.107c20.327 0 36.813 13.978 36.813 42.291z"
                  fontFamily="none"
                  fontSize="none"
                  fontWeight="none"
                  textAnchor="none"
                />
              </svg>
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <hr className="white opacity-50" />
        <div className="py-4 md:px-8 text-white text-opacity-80 flex items-center justify-between">
          <h6 className="text-xs"> © 2024 John Doe Photography</h6>
        </div>
      </div>
    </footer>
  );
};
