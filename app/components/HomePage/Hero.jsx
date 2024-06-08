import React from "react";
import { getHeroData } from "@/lib/contentful";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import Button from "../ui/Button";
import { MotionDiv, Motionh1 } from "../ui/Motion";

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
    <main className=" bg-background1  w-full lg:px-10">
      {heros.items.map((hero) => (
        <div
          className="text-white   py-4 md:py-1 flex flex-col-reverse md:flex-row  items-center md:items-start  gap-2 md:px-6 lg:px-16   "
          key={hero.sys.id}
        >
          <MotionDiv
            className="md:pl-2 w-[90%] md:w-auto pt-16 -mt-20 md:mt-0 z-10"
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
              className="font-inria text-2xl text-text opacity-95 bg-[#0c0c0c] w-24  text-center rounded-md border border-[#3e3e3e5b]"
              variants={HeroVariant}
              viewport={{ once: true }}
            >
              Hello!
            </Motionh1>
            <Motionh1
              className="text-5xl leading-[1.15] md:leading-[1.1]  lg:text-7xl font-inria text-balance mx-auto pt-6 md:pt-10 overflow-hidden inline-block"
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
              <button className="bg-slate-100  border border-text hover:scale-[1.01] rounded-3xl  px-4 md:px-5 py-3  hover:bg-[#0c0c0c] hover:text-white text-black  hover:border-white h-12">
                View Gallery
              </button>
              <Button text="Get in touch" />
            </MotionDiv>
          </MotionDiv>

          {/*Here the images are in the include.assests part of the json response so we have to ap over it. 
        then we need to check if the id of the above data and the image match and then we display the url and prefix the hhtps /// check postman// and also add code in nextjs.config
        */}

          {heros.includes.Asset.map((img) => (
            <MotionDiv
              key={hero.fields.heroimg.sys.id}
              className="w-[90%] md:w-[95%] "
              initial={{ filter: "blur(2px)" }}
              whileInView={{ filter: "blur(0px)" }}
              transition={{ duration: 0.4, delay: 3.2 }}
            >
              {hero.fields.heroimg.sys.id == img.sys.id ? (
                <Image
                  src={"https:" + img.fields.file.url}
                  alt="hero-image"
                  width={400}
                  height={200}
                  className=" h-[450px] md:h-[540px] w-full mask-linear  mask-from-100 mask-to-30 "
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
