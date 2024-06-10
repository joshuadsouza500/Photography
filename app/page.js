import CallToAction from "./components/HomePage/CallToAction";
import { Metadata } from "next";
import Hero from "./components/HomePage/Hero";
import ReviewsSlide from "./components/HomePage/ReviewsSlide";
import Services from "./components/HomePage/Services";
import Works from "./components/HomePage/Works";

export const metadata = {
  title: {
    template: "%s | John Doe Photography",
    default: "John Doe Photography",
  },
  description: "Photography portfolio website",
  keywords:
    "photography, portfolio, bahrain, photography website, videographer, images, freelance",
  robots: {
    index: true,
    follow: true,
  },
  og: {
    title: "John Doe Photography",
    description: "Photography portfolio website",
    image: "/assets/camera.jpg",
  },
};

//  SEO, favicon, opengraph,
//
export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Services />
      <ReviewsSlide />
      <CallToAction />{" "}
    </>
  );
}
