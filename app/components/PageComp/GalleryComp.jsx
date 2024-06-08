"use client";

import { CldImage, CldVideoPlayer } from "next-cloudinary";
import React, { act, useState } from "react";
import "next-cloudinary/dist/cld-video-player.css";
import { MotionDiv } from "../ui/Motion";

export default function GalleryComp({ works, videos }) {
  const [data, setData] = useState("photos");

  function handleClick(elem) {
    setData(elem);
    return data;
  }

  return (
    <div>
      <nav className="py-4">
        <ul className="flex text-center text-3xl gap-4 md:gap-6 font-inria justify-center opacity-80 cursor-pointer ">
          <li
            className={`${
              data == "photos" ? " text-redbg " : "hover:text-redbg "
            }`}
            onClick={() => {
              handleClick("photos");
            }}
          >
            Photos
          </li>
          <li
            className={`${
              data == "videos" ? " text-redbg " : "hover:text-redbg "
            }`}
            onClick={() => {
              handleClick("videos");
            }}
          >
            Videos
          </li>
        </ul>
      </nav>

      {data == "photos" ? (
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-1 md:gap-4  mx-2 md:mx-5 lg:mx-14">
          {works.items.map((work) => (
            <div key={work.sys.id} className=" pb-4 px-1">
              {works.includes.Asset.map(
                (img) => img.sys.id === work.fields.img.sys.id
              ) ? (
                <MotionDiv
                  className="relative h-[220px] md:h-[380px]  p-1 hover:scale-[.990]    "
                  initial={{ filter: "blur(2px)" }}
                  whileInView={{ filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
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
                    sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 80vw,
               33vw"
                    format="avif"
                    crop="fill"
                    gravity="center"
                    className=" object-cover px-1 rounded-sm  "
                  />
                </MotionDiv>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <section className=" md:pt-8 lg:mx-6 grid grid-cols-1 gap-4 place-items-center">
          {videos.items.map((video) => (
            <div key={video.sys.id}>
              {videos.includes.Asset.map(
                (vid) => vid.sys.id === video.fields.video.sys.id
              ) ? (
                <div className=" relative w-[300px] md:[400px] lg:w-[720px] pb-6 ">
                  <CldVideoPlayer
                    id="custom-colors-font"
                    fill={true}
                    width="200"
                    height="200"
                    src={
                      "https://res.cloudinary.com/dudpo3nfs/video/fetch/https:" +
                      videos.includes.Asset.find(
                        (vid) => vid.sys.id === video.fields.video.sys.id
                      ).fields.file.url
                    }
                  />
                </div>
              ) : null}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
