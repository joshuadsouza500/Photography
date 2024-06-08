import React from "react";
import AboutMe from "../components/PageComp/AboutMe";
import Insta from "../components/PageComp/Insta";
import { getWorks } from "@/lib/contentful";

export default async function page() {
  const works = await getWorks();
  return (
    <>
      <AboutMe />
      <Insta works={works} />
    </>
  );
}
