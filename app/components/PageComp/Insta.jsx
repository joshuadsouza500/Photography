"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import HeadingLine from "../ui/HeadingLine";
import Button from "../ui/Button";
import { MotionDiv, Motionh1 } from "../ui/Motion";
import Link from "next/link";

export default function Insta({ works }) {
  const InstaVariant = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5 } },
  };

  return (
    <main className="py-10 lg:py-16 text-white bg-background2 ">
      <section className="lg:w-[85%] mx-4 lg:mx-auto ">
        <HeadingLine />
        <MotionDiv
          className=" flex justify-between  md:w-[95%] pb-10 md:pb-16  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <Motionh1
            className="font-Playfare text-3xl md:text-5xl py-2"
            variants={InstaVariant}
          >
            Follow me on Instagram
          </Motionh1>
          <MotionDiv variants={InstaVariant}>
            <Link target="_blank" href="https://www.instagram.com/">
              <Button text="Follow me" />
            </Link>
          </MotionDiv>
        </MotionDiv>

        <div className="grid  grid-cols-4 lg:mx-10">
          {works.items.map((work) =>
            work.fields.id == "insta" ? (
              <div key={work.sys.id} className=" pb-4 md:px-1 ">
                {works.includes.Asset.map(
                  (img) => img.sys.id === work.fields.img.sys.id
                ) ? (
                  <MotionDiv
                    className="relative h-[140px] sm:h-[200px] lg:h-[270px]  p-1 hover:scale-[.995] cursor-pointer  "
                    initial={{ filter: "blur(1px)" }}
                    whileInView={{ filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="h-full flex flex-col items-center justify-center gap-1"
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
                        className=" object-cover px-1 rounded-sm  hover:opacity-20"
                      />

                      <Image
                        alt="instagram icon"
                        src="/assets/instagram.svg"
                        width={30}
                        height={30}
                      />
                      <h1 className=" text-xs md:text-lg text-center">
                        View on Instagram
                      </h1>
                    </Link>
                  </MotionDiv>
                ) : null}
              </div>
            ) : null
          )}
        </div>
      </section>
    </main>
  );
}

/* const [scriptLoaded, setScriptLoaded] = useState(true);

   useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
  
      const embedistaScript = document.createElement('script');
      embedistaScript.src = 'https://www.embedista.com/j/instagram.js';
      embedistaScript.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(embedistaScript);
    }, []);

    {scriptLoaded && (
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/ufc/" data-instgrm-version="12" style={{
         backgroundColor: 'black',
         color: 'black',
         border: '0px',
         borderRadius: '3px',
         boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
         margin: '1px',
         maxWidth: '100vw',
         minWidth: '226px',
         padding: '0px',
         
         height: '70vh',
         maxHeight: '100vh',
         width: '800px',
         '@media (max-width: 768px)': {
            width: '400px',
            height: '70vh',
         },
         '@media (max-width: 480px)': {
           
           width: '100px',
           height: '70vh',
           
         }
       }}
       >
  
    </blockquote>
)}*/
