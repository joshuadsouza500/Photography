import { getReviews } from "@/lib/contentful";
import React from "react";

import SliderComponent from "../ui/SliderComponent";
import HeadingLine from "../ui/HeadingLine";
import { Motionh1, MotionP } from "../ui/Motion";

export default async function ReviewsSlide() {
  const ReviewVariant = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  };

  const reviews = await getReviews();
  return (
    <main className=" py-16  bg-background2 text-white">
      <div className=" mx-4 sm:mx-10 lg:mx-20 w-[90%] mb-12 md:mb-12 ">
        <HeadingLine />
        <Motionh1
          className="font-inria text-4xl md:text-5xl py-2"
          variants={ReviewVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          Testimonials
        </Motionh1>
        <MotionP
          className="text-base text-text md:pl-1"
          variants={ReviewVariant}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 1 }}
        >
          What my clients say about my work
        </MotionP>
      </div>
      <SliderComponent reviews={reviews} />
    </main>
  );
}