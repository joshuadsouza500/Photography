import React from "react";
import Loadimg from "../LoadImg";
import Button from "../ui/Button";
import { getWorks } from "@/lib/contentful";
import HeadingLine from "../ui/HeadingLine";
import { MotionDiv, Motionh1, MotionP } from "../ui/Motion";
import Link from "next/link";

export default async function Works() {
  const works = await getWorks();

  const WorksVariant = {
    hidden: { opacity: 0, y: "10%" },
    visible: { opacity: 1, y: 0, transition: { type: "tween" } },
  };

  return (
    <main className=" py-16 text-white bg-background2 md:px-6 lg:px-16 xl:px-24 2xl:px-36 ">
      <div className="mx-2 sm:mx-4 lg:mx-auto  ">
        <header className="flex flex-row items-center  md:mx-2">
          <div className=" mx-auto w-[95%] mb-12 md:mb-12">
            <HeadingLine />
            <Motionh1
              className="font-Playfare text-4xl md:text-5xl py-2"
              variants={WorksVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 3 }}
            >
              Selected Works
            </Motionh1>
            <MotionP
              className="text-base text-[#a6a6a7] md:pl-1"
              variants={WorksVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 2 }}
            >
              Expertly capturing and creating stunning visual content for all
              your needs
            </MotionP>
          </div>
          <MotionDiv
            className="w-64 hidden md:flex justify-end lg:mr-6"
            variants={WorksVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="bg-[#0c0c0c]  border hover:border-[#3e3e3e] hover:scale-[1.01] rounded-3xl text-white px-4 md:px-5 py-3   border-slate-100 hover:bg-slate-100 hover:text-black md:h-12 w-48 ">
              <Link href="/gallery">View entire gallery</Link>
            </button>
          </MotionDiv>
        </header>
        <Loadimg works={works} />
        <div className=" md:hidden flex justify-center py-4">
          <button className="bg-[#0c0c0c]  border hover:border-[#3e3e3e] hover:scale-[1.01] rounded-3xl text-white px-4 md:px-5 py-3   border-slate-100 hover:bg-slate-100 hover:text-black md:h-12 w-48 ">
            View entire gallery
          </button>
        </div>
      </div>
    </main>
  );
}
