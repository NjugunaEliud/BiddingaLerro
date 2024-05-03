import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section class="pt-20 pb-10 bg-gray-100 overflow-x-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-3 md:mb-20">
          <div class="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <div class="relative mb-6 h-64 w-full bg-cover bg-center bg-no-repeat banner-1">
              <span class="inline-block mt-4 ml-4 px-2 py-1 text-xs font-bold font-heading border-2 border-green-500 rounded-full text-green-500 bg-white">
                NEW
              </span>
              <div class="absolute inset-0 flex items-end">
                <div class="pl-12 pb-12">
                  <h3 class="text-3xl font-bold font-heading text-white">
                    Amazing Offers
                  </h3>
                  <p class="text-xl text-white font-bold font-heading">
                    <span>Shop Now</span>
                    <span class="text-sm font-normal line-through"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="relative h-64 w-full bg-cover bg-center bg-no-repeat banner-2">
              <span class="inline-block mt-4 ml-4 px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                NEW
              </span>
              <div class="absolute inset-0 flex items-end">
                <div class="pl-12 pb-12">
                  <h3 class="text-3xl font-bold font-heading text-white">
                    All Products
                  </h3>
                  <p class="text-xl text-white font-bold font-heading">
                    <span>Available</span>
                    <span class="text-sm font-normal line-through"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-3">
            <div class="relative inline-block mb-6 h-96 lg:h-full w-full bg-no-repeat bg-cover banner-3">
              <span class="inline-block px-2 py-1 ml-4 mt-4 text-xs font-bold font-heading border-2 border-blue-400 rounded-full text-blue-500 bg-white uppercase">
                Trends
              </span>
              <div class="absolute bottom-0 left-0 pb-20 pl-12">
                <span class="text-xl text-orange-300 font-bold font-heading">
                  Quality Products Display
                </span>
                <h3 class="mt-3 mb-2 text-3xl font-bold font-heading text-white">
                  Trending Products
                </h3>
                <p class="mb-10 font-bold font-heading text-white">Available</p>
                <button class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
