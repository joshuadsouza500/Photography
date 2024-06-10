import React from "react";

import Button from "../ui/Button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <>
      <section className="text-white py-24 md:py-32  ">
        <div className="w-[92%] md:w-10/12 lg:w-2/3 mx-auto rounded-xl  relative h-48  md:h-52 bg-cover bg-no-repeat bg-center bg-[url('/assets/camera.jpg')] shadow-sm shadow-black">
          <div className="inset-0 bg-background2 bg-opacity-70 h-full rounded-xl p-4  flex justify-center items-center">
            <div className="md:p-4 flex flex-col  items-center  gap-4">
              <h2 className="text-center text-3xl  md:text-5xl   pb-1 font-Playfare">
                Have a project in mind? Let&apos;s work together
              </h2>
              <div className="hover:scale-105">
                <Link href="/contact">
                  <Button text="Contact me" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
