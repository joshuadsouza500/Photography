/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        inria: ["Inria_Serif"],
        Playfare: ["Playfair Display"],
      },
      colors: {
        background1: "#070707",
        redbg: "#DE0000",
        background2: "#0D0D0D",
        text: "#a6a6a7",
      },
      screens: {
        xs: "325px",
      },
    },
  },

  plugins: [require("@pyncz/tailwind-mask-image"), require("daisyui")],
};
