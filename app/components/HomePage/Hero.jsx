import React from "react";
import { getHeroData } from "@/lib/contentful";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import Button from "../ui/Button";
import { MotionDiv, Motionh1 } from "../ui/Motion";
import Link from "next/link";

export default async function Hero() {
  const heros = await getHeroData();

  const HeroVariant = {
    hidden: { opacity: 0, y: "10%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1, delay: 3.5 },
    },
  };

  return (
    <main className=" bg-background1   md:px-6  lg:px-16 xl:px-24 2xl:px-36  lg:h-dvh lg:pt-10 lg:-mb-12 ">
      {heros.items.map((hero) => (
        <div
          className="text-white max-md:pb-2 md:py-1 flex flex-col-reverse md:flex-row  items-center  lg:items-center  gap-2   "
          key={hero.sys.id}
        >
          <MotionDiv
            className="md:pl-2 w-[90%] md:w-auto pt-16  -mt-24 sm:-mt-20 md:mt-0 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.8,
                  duration: 1,
                },
              },
            }}
          >
            <Motionh1
              className="font-Playfare text-2xl text-text opacity-95 bg-[#0c0c0c] w-24  text-center rounded-md border border-[#3e3e3e5b]"
              variants={HeroVariant}
              viewport={{ once: true }}
            >
              Hello!
            </Motionh1>
            <Motionh1
              className="text-4xl xs:text-5xl leading-[1.15]   lg:text-7xl font-Playfare text-balance mx-auto pt-6 md:pt-10 overflow-hidden inline-block "
              variants={HeroVariant}
              viewport={{ once: true }}
            >
              {hero.fields.title}
            </Motionh1>

            <MotionDiv
              className="flex gap-4 py-4 md:pt-6 cursor-pointer"
              variants={HeroVariant}
              viewport={{ once: true }}
            >
              <button className="bg-slate-50  border border-text hover:scale-[1.01] rounded-3xl  px-4 md:px-5 py-3  hover:bg-[#0c0c0c] hover:text-white text-black  hover:border-white h-12 text-sm xs:text-base">
                <Link href="/gallery">View Gallery</Link>
              </button>
              <Link href="/contact">
                <Button text="Get in touch" />
              </Link>
            </MotionDiv>
          </MotionDiv>

          {/*Here the images are in the include.assests part of the json response so we have to ap over it. 
        then we need to check if the id of the above data and the image match and then we display the url and prefix the hhtps /// check postman// and also add code in nextjs.config
        */}

          {heros.includes.Asset.map((img) => (
            <MotionDiv
              key={hero.fields.heroimg.sys.id}
              className="w-[90%] md:w-[95%] 2xl:w-[70%]"
              initial={{ filter: "blur(2px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 3.2 }}
            >
              {hero.fields.heroimg.sys.id == img.sys.id ? (
                <Image
                  src={"https:" + img.fields.file.url}
                  alt="hero-image"
                  width={400}
                  height={200}
                  className=" h-[430px] md:h-[540px] xl:h-[620px] w-full mask-linear  mask-from-100 mask-to-30 "
                />
              ) : (
                <div>Image not found</div>
              )}
            </MotionDiv>
          ))}
        </div>
      ))}
    </main>
  );
}
