"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BidCard({ product }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(product.end_date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(product.end_date));
    }, 1000);

    return () => clearInterval(timer);
  }, [product.end_date]);

  function getTimeRemaining(endTime) {
    const totalMilliseconds = new Date(endTime) - new Date();
    const totalSeconds = Math.floor(totalMilliseconds / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <div class="w-full md:w-1/2 lg:w-1/4 px-3 my-4 ">
        <div class="p-6 bg-white ">
          <div className="my-1">
            <div className="flex justify-center gap-3 sm:gap-8">
              <div className="flex flex-col gap-1 relative">
                <div className="h-8 w-8  flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2 w-2  !-left-[4px] rounded-full bg-[#ffffff]"></div>
                  <span className=" text-lg font-semibold text-[#a5b4fc]">
                    {timeLeft.days}
                  </span>
                  <div className="relative h-2 w-2  -right-[4px] rounded-full bg-[#ffffff]"></div>
                </div>
                <span className="text-[#8486A9] text-sm  text-center font-medium">
                  Days
                </span>
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="h-8 w-8  flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2.5 w-2.5  !-left-[3px] rounded-full bg-[#ffffff]"></div>
                  <span className=" text-lg font-semibold text-[#a5b4fc]">
                    {timeLeft.hours}
                  </span>
                  <div className="relative h-2.5 w-2.5  -right-[3px] rounded-full bg-[#ffffff]"></div>
                </div>
                <span className="text-[#8486A9] text-sm  text-center font-medium">
                  Hrs
                </span>
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="h-8 w-8  flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2.5 w-2.5  !-left-[3px] rounded-full bg-[#ffffff]"></div>
                  <span className=" text-lg font-semibold text-[#a5b4fc]">
                    {timeLeft.minutes}
                  </span>
                  <div className="relative h-2.5 w-2.5  -right-[3px] rounded-full bg-[#ffffff]"></div>
                </div>
                <span className="text-[#8486A9] text-sm   text-center font-medium">
                  Min
                </span>
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="h-8 w-8  flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2.5 w-2.5  !-left-[3px] rounded-full bg-[#ffffff]"></div>
                  <span className=" text-lg font-semibold text-[#a5b4fc]">
                    {timeLeft.seconds}
                  </span>
                  <div className="relative h-2.5 w-2.5  -right-[3px] rounded-full bg-[#ffffff]"></div>
                </div>
                <span className="text-[#8486A9]  text-sm  text-center font-medium">
                  Sec
                </span>
              </div>
            </div>
          </div>

          <Link
            class="block px-6 mt-2 mb-2 group"
            // href={`/shop/${product.product_id}`}
            href={"#"}
          >
            <div className="h-64 relative">
              <Image
                class=" transition ease-in-out  duration-150 mx-auto h-64  w-full  group-hover:scale-110"
                src={product.image_uri}
                fill
                objectFit="contain"
                alt="product"
              />
            </div>

            <h3 class="mb-2 text-xl font-bold font-heading capitalize group-hover:text-gray-500">
              {product.name}
            </h3>
            <p class="transition ease-in-out  duration-150 text-lg font-bold font-heading text-blue-500 group-hover:text-blue-400">
              <span>
                {product.cost} <span className="text-gray-700">UGX</span>
              </span>
            </p>
          </Link>
          <div className="flex items-center justify-center">
            <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-400 rounded-full text-blue-400 bg-white">
              ACTIVE
            </span>
            <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-400 rounded-lg text-blue-400 bg-white ml-2 flex items-center justify-center">
              Dial *272*15# and follow the prompts
            </span>
            {/* <Link
              class="transition ease-in-out  duration-150 ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500 hover:scale-110"
              href={`/shop/${product.product_id}`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" width="2" height="12" fill="#161616"></rect>
                <rect
                  x="12"
                  y="5"
                  width="2"
                  height="12"
                  transform="rotate(90 12 5)"
                  fill="#161616"
                ></rect>
              </svg>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
