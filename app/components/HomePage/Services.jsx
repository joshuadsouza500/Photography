import { getServices } from "@/lib/contentful";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import HeadingLine from "../ui/HeadingLine";
import { MotionDiv, Motionh1, MotionP } from "../ui/Motion";

export default async function Services() {
  const services = await getServices();

  const ServiceVariant = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  };

  const SVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { type: "tween" } },
  };

  return (
    <section className="mx-2 lg:mx-12 py-16   text-white">
      {" "}
      <div className=" mx-auto w-[95%] mb-12 md:mb-12">
        <HeadingLine />
        <Motionh1
          className="font-inria text-4xl md:text-5xl py-2"
          variants={ServiceVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Services
        </Motionh1>
        <MotionP
          className="text-base text-text md:pl-1"
          variants={ServiceVariant}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 1 }}
        >
          Expertly capturing and creating stunning visual content for all your
          needs
        </MotionP>
      </div>
      <MotionDiv
        className="grid grid-col sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 md:py-10 mb-2  md:ml-8 mr-1 md:px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.6,
              duration: 1,
            },
          },
        }}
      >
        {services.items.map((service) => (
          <MotionDiv
            variants={SVariant}
            key={service.sys.id}
            className="p-2 flex flex-col gap-2 justify-around pb-2 md:pb-8 "
          >
            {services.includes.Asset.map(
              (img) => img.sys.id === service.fields.img.sys.id
            ) ? (
              <Image
                src={
                  "https:" +
                  services.includes.Asset.find(
                    (img) => img.sys.id === service.fields.img.sys.id
                  ).fields.file.url
                }
                alt="service-image"
                width={45}
                height={45}
                className=" pb-2 md:pb-4"
              />
            ) : (
              <>image not found</>
            )}
            <h3 className="text-2xl font-light md:font-normal  pb-1">
              {service.fields.heading}
            </h3>
            <p className=" font-light  text-text text-justify  md:pl-1 md:pr-6 md:pb-2">
              {service.fields.para}
            </p>
            <Link href="/gallery" className=" w-11/12  flex justify-end">
              <ArrowUpRight className="hover:rotate-45 btn btn-sm  btn-circle btn-ghost stroke-text hover:stroke-white  " />
            </Link>
            <hr className="opacity-20  ml-1 md:w-[95%] mt-2" />
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}
