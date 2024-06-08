"use client";
import React, { useState } from "react";
import Button from "../ui/Button";

export default function ContactForm() {
  const [result, setResult] = useState(" ");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1607a644-3425-4ec1-9391-1bc9337c4107");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className=" bg-background2 py-14 px-6 mx-4">
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <label className=" flex  gap-2 p-1  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="white"
              className="w-4 h-4 opacity-70 mt-1"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.284 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="name"
              className="bg-background2  border-b border-opacity-60  border-text pb-6 w-[85%] md:w-[90%] pl-1 "
              placeholder="Name"
              required
            />
          </label>
          <label className="flex  gap-2 p-1  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="white"
              className="w-4 h-4 opacity-70  mt-1 "
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.28 2.28 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              name="email"
              className="  bg-background2 border-b border-opacity-60  border-text pb-6 w-[85%] md:w-[90%] pl-1"
              placeholder="Email"
              required
            />
          </label>
          <label className="flex  gap-2 p-1   ">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="white"
              ></g>
              <g id="SVGRepo_iconCarrier" className="opacity-70  mt-1 ">
                {" "}
                <path
                  d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0328 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                  fill="white"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2807 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
            <input
              type="text"
              name="Phone no:"
              className=" bg-background2 border-b border-opacity-60  border-text pb-6 w-[85%] md:w-[90%] pl-1"
              placeholder="Phone no:"
              required
            />
          </label>
          <label className="flex  gap-2 p-1   ">
            <svg
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg "
              className="opacity-70  mt-1 "
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <textarea
              className="rounded-sm w-[85%] md:w-[90%] pl-1   border border-text border-opacity-40 bg-background2 pb-16 p-1"
              placeholder="Enter Message Here"
              name="message"
            />
          </label>
          <div className=" flex justify-center ">
            <Button text="Submit" />
          </div>
          <span className="mx-auto pt-1 text-green-600">{result}</span>
        </form>
      </div>
    </>
  );
}
