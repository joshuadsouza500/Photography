import { getAboutMe } from "@/lib/contentful";
import React from "react";
import Image from "next/image";
import {
  MotionDiv,
  Motionh1,
  Motionh2,
  MotionP,
  MotionSection,
} from "../ui/Motion";
import { CldImage } from "next-cloudinary";

export default async function AboutMe() {
  const AboutVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const abouts = await getAboutMe();
  return (
    <main className="bg-background1 text-white mx-4 lg:mx-12 h-full pb-4">
      {abouts.items.map((about) => (
        <div
          key={about.sys.id}
          className="flex flex-col md:flex-row md:py-10 lg:pl-10 md:gap-6 "
        >
          <div className="md:hidden text-center py-4">
            <h2 className="font-inria text-5xl pt-2 capitalize">
              {about.fields.heading}
            </h2>
            <h6 className="text-text pb-4">{about.fields.subheading}</h6>
          </div>
          {abouts.includes.Asset.map((img) => (
            <MotionDiv
              key={about.fields.aboutImg.sys.id}
              className="mx-auto py-2 "
              initial={{ filter: "blur(1px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {about.fields.aboutImg.sys.id == img.sys.id ? (
                <Image
                  src={"https:" + img.fields.file.url}
                  alt="about-image"
                  width={500}
                  height={400}
                  className=" h-[350px] w-[400px] md:h-[440px] md:w-[450px] mask-linear  mask-from-100 mask-to-50 rounded-sm"
                />
              ) : (
                <div>Image not found</div>
              )}
            </MotionDiv>
          ))}

          <MotionSection
            className="flex flex-col md:w-[70%] lg:w-[55%] lg:pt-6 pb-8"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 2 }}
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
            <div className="hidden md:block">
              <Motionh2
                className="font-inria text-5xl pt-2"
                variants={AboutVariant}
              >
                {about.fields.heading}
              </Motionh2>
              <MotionP
                className="text-text pb-4 font-light"
                variants={AboutVariant}
              >
                {about.fields.subheading}
              </MotionP>
            </div>
            <MotionP
              className="text-slate-200 text-base font-light  text-balance w-[95%] lg:w-[85%] leading-loose mask-linear  mask-from-100 mask-to-70 mx-auto  md:mx-1
                 "
              variants={AboutVariant}
            >
              {about.fields.para}

              {about.fields.para2}
            </MotionP>
          </MotionSection>
        </div>
      ))}
    </main>
  );
}
