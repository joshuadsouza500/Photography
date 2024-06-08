"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { MotionDiv } from "./ui/Motion";

export default function Loadimg({ works }) {
  const [data, setData] = useState("portrait");

  function handleClick(elem) {
    setData(elem);

    return data;
  }

  return (
    <>
      <main className="">
        <nav className=" mx-auto  md:w-[40%] py-2 ">
          <ul className="flex justify-center gap-3 md:gap-5 text-[#a6a6a7]  text-sm md:text-lg pb-2">
            <li
              className={`cursor-pointer ${
                data === "portrait" ? "text-redbg" : "hover:text-redbg  "
              }`}
              onClick={() => handleClick("portrait")}
            >
              Portrait
            </li>
            <li
              className={`cursor-pointer ${
                data === "landscape" ? "text-redbg" : "hover:text-redbg"
              }`}
              onClick={() => {
                handleClick("landscape");
              }}
            >
              Landscape
            </li>
            <li
              className={`cursor-pointer ${
                data === "cityscape" ? "text-redbg" : "hover:text-redbg"
              }`}
              onClick={() => handleClick("cityscape")}
            >
              Cityscape
            </li>
            <li
              className={`cursor-pointer ${
                data === "interior" ? "text-redbg" : "hover:text-redbg"
              }`}
              onClick={() => handleClick("interior")}
            >
              Interior
            </li>
            <li
              className={`cursor-pointer ${
                data === "food" ? "text-redbg" : "hover:text-redbg"
              }`}
              onClick={() => handleClick("food")}
            >
              Food
            </li>
          </ul>
        </nav>

        {/** DISPLAYING THE IMAGES   filter grayscale hover:grayscale-0*/}

        <div className="grid grid-cols-2  gap-2  mx-2 md:mx-5 lg:mx-16">
          {works.items.map((work) =>
            work.fields.id == data ? (
              <div key={work.sys.id} className=" pb-2">
                {works.includes.Asset.map(
                  (img) => img.sys.id === work.fields.img.sys.id
                ) ? (
                  <MotionDiv
                    className="relative h-[250px] lg:h-[350px]  p-1 hover:scale-[.99]   "
                    initial={{ filter: "blur(2px)" }}
                    whileInView={{ filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <CldImage
                      src={
                        "https://res.cloudinary.com/dudpo3nfs/image/fetch/https:" +
                        works.includes.Asset.find(
                          (img) => img.sys.id === work.fields.img.sys.id
                        ).fields.file.url
                      }
                      deliveryType="fetch"
                      alt="work-image"
                      fill={true}
                      format="avif"
                      sizes={{
                        "1000px": "400px",
                        "800px": "200px",
                        "600px": "200px",
                      }}
                      className=" pb-2 md:pb-4 object-cover px-1  "
                    />
                  </MotionDiv>
                ) : null}
              </div>
            ) : null
          )}
        </div>
      </main>
    </>
  );
}

{
  /** { 
      works.includes.Asset.map((img) => img.sys.id === work.fields.img.sys.id) ? (
        <div className='relative h-[300px]  p-1 hover:scale-[.99] '>
        <Image src={"https:" + works.includes.Asset.find((img) => img.sys.id === work.fields.img.sys.id).fields.file.url} alt='work-image' fill={true} sizes={{
          '1000px': '200px',
          '800px': '200px',
          '600px': '200px',
        }}  className=' pb-2 md:pb-4 object-cover px-1  ' /> 
        </div>
       ) : null
      
  } */
}
