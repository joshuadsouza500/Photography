"use client";

import { React, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function SliderComponent({ reviews }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla mx-auto w-[95%] md:w-[80%] lg:w-[70%]  text-white ">
      <div className=" embla__viewport " ref={emblaRef}>
        <div className="embla__container ">
          {reviews.items.map((review) => (
            <div
              key={review.sys.id}
              className=" grid grid-cols-5 gap-2 md:gap-4 bg-background1 mx-6 embla__slide h-56 md:h-72 "
            >
              {reviews.includes.Asset.map(
                (img) => img.sys.id === review.fields.img.sys.id
              ) ? (
                <div className="relative col-span-2 ">
                  <Image
                    src={
                      "https:" +
                      reviews.includes.Asset.find(
                        (img) => img.sys.id === review.fields.img.sys.id
                      ).fields.file.url
                    }
                    alt="review-image"
                    fill={true}
                    sizes={{
                      "1000px": "600px",
                      "800px": "400px",
                      "600px": "200px",
                    }}
                    className=" object-cover z"
                  />
                </div>
              ) : null}

              <div className=" pt-6 pl-4  col-span-3 ">
                <span style={{ fontSize: "20px", gap: "1px", color: "gold" }}>
                  {" "}
                  &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
                </span>

                <h4 className="text-xl pt-1 md:pt-3 pb-1 font-medium">
                  {review.fields.name}
                </h4>
                <p className=" hidden lg:block  lg:text-base text-text text-balance overflow-hidden  ">
                  {review.fields.para}
                </p>
                <p className="lg:hidden text-xs sm:text-sm w-[95%] font-light text-text text-balance sm:leading-normal ">
                  {review.fields.smpara}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-2 text-text w-20 mx-auto gap-2 justify-center  ">
        <button
          className="embla__prev   btn btn-circle  btn-outline btn-sm md:btn-md hover:bg-background1"
          onClick={scrollPrev}
          style={{ color: "#a6a6a7" }}
        >
          ❮
        </button>
        <button
          className="embla__next  btn btn-circle  btn-outline btn-sm md:btn-md hover:bg-background1"
          onClick={scrollNext}
          style={{
            color: "#a6a6a7",
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
