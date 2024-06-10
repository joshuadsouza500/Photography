import React from "react";
import { Metadata } from "next";
import AboutMe from "../components/PageComp/AboutMe";
import Insta from "../components/PageComp/Insta";
import { getWorks } from "@/lib/contentful";

export const metadata = {
  title: "About me",
  description: "About me",
};

export default async function page() {
  const works = await getWorks();
  return (
    <>
      <AboutMe />
      <Insta works={works} />
    </>
  );
}
