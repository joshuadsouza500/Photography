import React from "react";

export default function Button({ text, className }) {
  return (
    <button className="bg-[#0c0c0c]  border hover:border-[#3e3e3e] hover:scale-[1.01] rounded-3xl text-white px-4 md:px-5 py-3   border-slate-100 hover:bg-slate-100 hover:text-black md:h-12 w-36 ">
      {text}
    </button>
  );
}
