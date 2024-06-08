import CallToAction from "./components/HomePage/CallToAction";
import Hero from "./components/HomePage/Hero";
import ReviewsSlide from "./components/HomePage/ReviewsSlide";
import Services from "./components/HomePage/Services";
import Works from "./components/HomePage/Works";

export const metadata = {
  title: "John Doe Photography",
  description: "Photography portfolio website",
};

//  Font not working, callto action needs more contrast, try to make hero section fit the screen rn,
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
