"use client";

import { useEffect } from "react";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import Initial from "./components/HomePage/Initial";
import Lenis from "@studio-freight/lenis";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <link rel="icon" href="/cameraicon.png" />
      <body className="font-Poppins bg-background1 ">
        <Initial />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
